"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      // TODO: search by traits
      // need to check for single or multiple criteria here
      searchResults = searchByMultipleCriteria(people);
      break;
      default:
    app(people); // restart app
      break;
  }
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}
function searchByMultipleCriteria(people){
  //ask the user what criteria they want to search by
  let searchType = promptFor("What criteria would you like to search by? Do you want to search by ther person's 'id', 'weight', 'height', 'date of birth', 'gender', 'eye color', 'occupation', 'parent(s)', 'spouse', or 'descendents'?", chars);
  // get what want searched
  let searchResults 
  switch (searchType.toLowerCase()) {
    case "id":
      searchResults = searchById(people);
      break;
    case "weight":
      searchResults = personWeight(people);
      break;
    case "height":
      searchResults = personHeight(people);
      break;
    case "date of birth":
      searchResults = dateOfBirth(people);
      break;
    case "gender":
      searchResults = personGender(people);
      break;
    case "eye color":
      searchResults = eyeColor(people);
      break;
    case "occupation":
      searchResults = personOccupation(people);
      break;
    case "parents":
      searchResults = personParents(people);
      break;
    case "spouse":
      searchResults = personSpouse(people);
      break;
    case "descendents":
      searchResults = criDescendents(people);
      break;
    case "quit":
      break;
    default:
      break;
  }
  searchByMultipleCriteria(people);
  //return results
}
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

 /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return mainMenu(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    // I think we use displayPerson() here to show all of the info of a person
    break;
    case "family":
    // TODO: get person's family
    // Possibly add in a some type of function that will ONLY look at the parents/spouse info
    break;
    case "descendants":
    // TODO: get person's descendants
    // the tricky one where we need to use recursion
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
  mainMenu(person, people);
}

function searchByName(person){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = person.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  });
  displayPerson(foundPerson);
  // TODO: find the person using the name they entered
  return foundPerson;
}
//searchByName();
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
//displayPeople();
function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}

//displayPerson();
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default prompt For validation
function chars(input){
  return true; // default validation only
}


 // TODO: find the person using the first name they entered
 function firstName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName){
      return true;
    }
    else{
      return false;
    }
  });
 
}
// TODO: find the prson using the last name they entered
function lastName(people){
  let lastName = promptFor("What is the persons's last name?", chars);
   let foundPerson = people.filter(function(person){
    if(person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  });
  
} 
  // TODO: find the person using their id #
 function searchById(people){
   
  let iD = promptFor("What is the person's id?", chars);
  iD = parseInt(iD);
  let foundPerson = people.filter(function(person){
    if(person.id === iD){
      return true;
     }
    else{
      return false;
     }
   }); 
   displayPeople(foundPerson);
  }

 
 // TODO: find the person using gender
function personGender(people){
  let personGender = promptFor("What is the person's gender?", chars);
  let foundPerson = people.filter(function(person){
    if(person.gender === personGender){
      return true;
    }
    else{
      return false;
    }
  });
  displayPeople(foundPerson);
  
}
  // TODO: find the person using date of birth
function dateOfBirth(people){
  let dateOfBirth = promptFor("What is the person's dob?", chars);
  let foundPerson = people.filter(function(person){
    if(person.dob === dateOfBirth){
      return true;
    }
    else{
      return false;
    }
  });
  displayPeople(foundPerson);
} 
  // TODO: find the person using their height
function personHeight(people){
  let personHeight = promptFor("What is the person's height?", chars);
  personHeight = parseInt(personHeight);
  let foundPerson = people.filter(function(person){
    if(person.height === personHeight){
      return true;
    }
    else{
      return false;
    }
  });
}
 // TODO: find the person using their weight 
function personWeight(people){
  let personWeight = promptFor("What is the person's weight?", chars);
  personWeight = parseInt(personWeight);
  let foundPerson = people.filter(function(person){
    if(person.weight === personWeight){
      return true;
    }
    else{
      return false;
    }
  });
  displayPeople(founderPerson);
  return;
}
// TODO: find the person asking for eye color
 function eyeColor(people){
   let eyeColor = promptFor("What is the person's eye color?", chars);
   let foundPerson = people.filter(function(person){
     if(person.eyeColor === eyeColor){
       return true;
     }
     else{
       return false;
     }
   });
   displayPeople(foundPerson);
   return;
 }
  // TODO: find the person asking occupation
function personOccupation(people){
  let personOccupation = promptFor("What is the person's occupation?", chars);
  let foundPerson = people.filter(function(person){
    if(person.occupation === personOccupation){
      return true;
     }
     else{
       return false;
     }
  });
  displayPeople(foundPerson);
}
 // TODO: find the person asking about parents
function personParents(person){
  let personParents = promptFor("Do they have parents?", chars);
  let foundPerson = people.filter(function(person){
    if(person.parents === personParents){
      return true;
    }
    else{
      return false;
    }
  });
}
// TODO: find the person asking about the spouse
function currentSpouse(person){
  let personSpouse = promptFor("Do they have a spouse?", chars);
  personSpouse = parseInt(currentSpouse);
  let foundPerson = people.filter(function(person){
    if(person.currentSpouse === personSpouse){
      return true;
    }
    else{
    return false;
    }
  });
}
// TODO: find the descendents of whatever person
function criDescendents(person){
  let criDescendents = promptFor("Would you like to see thier descendents?", chars);
  let foundPerson = people.filter(function(person){
    if(person.criDescendents === criDescendents){
      return true;
    }
    else{
      return false;
    }
  });
}
// TODO: find all information of a person
function allInfo(person){
  let allInfo = promptFor("Would you like to see all their information?", chars);
  let foundPerson = people.filter(function(person){
    if(person.allInfo = allInfo){
      return true;
    }
    else{
      return false;
    }
  });
}

  
  


