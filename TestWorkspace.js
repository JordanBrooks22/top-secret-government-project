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
      searchResults = searchByGender(people);
      // TODO: search by traits
      break;
      default:
    app(people); // restart app
      break;
  } 
  
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults, people);
}
function searchByTrait (people){
//ask what trait to search for
//run a method to search for that trait

}
app();
// Menu function to call once you find who you are looking for
function mainMenu(person, people){

  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    // TODO: get person's info
    break;
    case "family":
    // TODO: get person's family
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}
mainMenu();
  // TODO: Find the person using the first and last name
function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);
  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return foundPerson(person);
    }
    else{
      return () => {
        do {
          var response = prompt(question).trim();
        } while (!response || !valid(response));
        return response;






      }
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
  })
 
}
// TODO: find the prson using the last name they entered
function lastName(people){
  let lastName = promptFor("What is the persons's last name?", chars);
  foundPerson = people.filter(function(person){
    if(person.lastName === lastName){
      return true
    }
    else{
      return false;
    }
  })
  
} 
  // TODO: find the person using their id #
 function iD(people){
   let iD = promptFor("What is the person's id?", chars);
   foundPerson = people.filter(function(person){
     if(person.iD === iD){
       return true
     }
     else{
       return false;
     }
   })
 }
 // TODO: find the person using gender
function personGender(people){
  let personGender = promptFor("What is the person's gender?", chars);
  foundPerson = people.filter(function(person){
    if(person.personGender === personGender){
      return true
    }
    else{
      return false;
    }
  })
}
  // TODO: find the person using date of birth
function dateOfBirth(people){
  let dateOfBirth = promptFor("What is the person's dob?", chars);
  foundPerson = people.filter(function(person){
    if(person.dateOfBirth === dateOfBirth){
      return true
    }
    else{
      return false;
    }
  })
}
  // TODO: find the person using their height
function personHeight(people){
  let personHeight = promptFor("What is the person's height?", chars);
  foundPerson = people.filter(function(person){
    if(person.personHeight === personHeight){
      return true
    }
    else{
      return false
    }
  })
}
 // TODO: find the person using their weight 
function personWeight(people){
  let personWeight = promptFor("What is the person's weight?", chars);
  foundPerson = people.filter(function(person){
    if(person.personWeight === personWeight){
      return true
    }
    else{
      return false
    }
  })
}
// TODO: find the person asking for eye color
 function eyeColor(people){
   let eyeColor = promptFor("What is the person's eye color?", chars);
   foundPerson = people.filter(function(person){
     if(person.eyeColor === eyeColor){
       return true
     }
     else{
       return false
     }
   })
 }
  // TODO: find the person asking occupation
function personOccupation(person){
  let personOccupation = promptFor("What is the person's occupation?", chars);
  foundPerson = people.filter(function(person){
    if(person.personOccupation === personOccupation){
      return true
     }
     else{
       return false
     }
  })
}
 // TODO: find the person asking about parents
function personParents(person){
  let personParents = promptFor("Do they have parents?", chars);
  foundPerson = people.filter(function(person){
    if(person.personParents === personParents){
      return true
    }
    else{
      return false
    }
  })
}
// TODO: find the person asking about the spouse
function currentSpouse(person){
  let currentSpouse = promptFor("Do they have a spouse?", chars);
  foundPerson = people.filter(function(person){
    if(person.personSpouse === personSpouse){
      return true
    }
    else{
    return false
    }
  })
}
// TODO: find the descendents of whatever person
function criDescendents(person){
  let criDescendents = promptFor("Would you like to see thier descendents?", chars);
  foundPerson = people.filter(function(person){
    if(person.criDescendents === criDescendents){
      return true
    }
    else{
      return false
    }
  })
}
// TODO: find all information of a person
function allInfo(person){
  let allInfo = promptFor("Would you like to see all their information?", chars);
  foundPerson = people.filter(function(person){
    if(person.allInfo = allInfo){
      return true
    }
    else{
      return false
    }
  })
}
// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}
displayPeople();

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo);
}
displayPerson();
// function that prompts and validates user input
function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}
promptFor();
// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
//function chars(input){
//  return true; // default validation only
