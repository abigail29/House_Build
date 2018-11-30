
let information = JSON.parse(localStorage.getItem('information'))

let plus = document.getElementsByTagName("button")[0];
plus.setAttribute("onclick", "validate()");

function remove(item) {
  let delete_item = item.id;
  information.splice(delete_item,1);
  localStorage.setItem("information", JSON.stringify(information))
  location.reload();
}

function isNumber(arg) {
  if (parseInt(arg)){
    return true
  } else {
    return false
  }
}

if (information == undefined) {
  information = new List();
}

function validate() {
  let age = document.getElementsByName("age")[0].value;
  let relationship = document.getElementsByName("rel")[0].value;
  let smokes = document.getElementsByName("smoker")[0].checked;

  if (smokes) {
    smoker = "Smoker";
  } else {
    smoker = "Non-Smoker";
  }

  if (isNumber (age) && relationship != "" && age != "" ) {
    let myItem = {"age": age, "relationship": relationship, "smoker":smoker};
      information.push(myItem);
      localStorage.setItem("information", JSON.stringify(information))
  } else if
    (age.length == 0 || relationship == ""){
      alert ("Please make sure Age and Relationship are not blank!")
    } else {
      alert ("Please make sure Age is an number!")
    }
}

let problem = document.getElementsByTagName("ol")[0];
for (let submission = 0; submission < information.length; submission++) {
  problem.innerHTML += "<p div = '" + submission + "' onclick = 'remove(this)'>Age: " + information[submission].age + ", Relationship: " + information[submission].relationship + ", " +information[submission].smoker + "</p>"
}
