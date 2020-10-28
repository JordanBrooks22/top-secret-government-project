"use strict"

function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByMultipleCriteria(people);
      break;
      default:
    app(people);
      break;
  }
  

  if (searchResults.length === 1) {
    mainMenu(searchResults[0], people);

  } else {
    for (let index = 0; index < searchResults.length; index++) {
      displayPerson(searchResults[index]);
    }
  }
}
function searchByMultipleCriteria(people){

  let searchType = promptFor("What criteria would you like to search by? 'Id', 'name', 'gender', 'dob', 'height', 'weight', 'eye color', 'occupation', 'parents' or 'current spouse'? If done, type 'finished' to end",chars);
  let searchResults;
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
    case "finished":
      return searchResults;
      break;
    default:
      return searchByMultipleCriteria(people);
      break;
  }
  return searchByMultipleCriteria(searchResults);
}

function mainMenu(person, people){

   if(!person){

    alert("Could not find that individual. Returning to main menu.");

    return mainMenu(people); 
  }

  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + " . Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

  switch(displayOption){
    case "info":
    displayPerson(person);
    break;
    case "family":
    findFamily(person, people);
    break;
    case "descendants":
    findDescendents(person, people);
    break;
    case "restart":
    app(people);
    break;
    case "quit":
    break;
    default:
    return mainMenu(person, people);
  }
  
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(firstName === person.firstName && lastName === person.lastName){
      return true; 
    }
    else{
      return false;
    }
  });
  
  return foundPerson;
}

function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){

  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  personInfo += "Gender: " + person.gender + "\n";
  personInfo += "Date of Birth: " + person.dob + "\n";
  personInfo += "Height: " + person.height + "\n";
  personInfo += "Weight: " + person.weight + "\n";
  personInfo += "Eye color: " + person.eyeColor + "\n";
  personInfo += "Occupation: " + person.occupation + "\n";
  
  alert(personInfo);
}

function promptFor(question, valid){
  do{
    var response = prompt(question).trim();
  } while(!response || !valid(response));
  return response;
}

function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

function chars(input){
  return true; 
}

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
  displayPeople(foundPerson);
  return;
}

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

function personParents(person, people){
  
  let foundPerson = people.filter(function(person){
    if(person.parents[0] === person.id || person.parents[1] === person.id){ 
      return true;
    }
    else{
      return false;
    }
  });
  return foundPerson;
}
function findSiblings(myPerson, people){

  let foundPerson = people.filter(function(person){
    if(person.parents[0] === myPerson.parents[0] || person.parents[0] === myPerson.parents[1] || person.parents[1] === myPerson.parents[0] || person.parents[1] === myPerson.parents[1]){

      return true;
    }
    else{
      return false;
    }
  });
  return foundPerson;
}

function currentSpouse(people){
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
  return foundPerson;
}

function findSpouse(myPerson, people){
    
  let foundPerson = people.filter(function(person){
    if(person.id === myPerson.currentSpouse){
      return true;
    }
    else{
    return false;
    }
  });
  return foundPerson;
}

function findFamily(person, people){

  let parents = personParents(person, people);
  let siblings = findSiblings(person, people);
  let spouse = findSpouse(person, people);
  displayPeople(parents);
  displayPeople(siblings);
  displayPeople(spouse);
  
}

function findDescendents(myPerson, people){
  let foundPerson = people.filter(function(person){
    if(person.parents[0] === myPerson.id || person.parents[1] === myPerson.id){
      return true;
    }
    else {
      return false;
    }
  });
  displayPeople(foundPerson);
  for(let i = 0; i < foundPerson.length; i++){
    findDescendents(foundPerson[i], people);
  }
}




  


