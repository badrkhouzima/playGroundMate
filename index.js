import districts from "./utils.js";
import { str } from "./alldata.js";
import CallCsvFile from "./csvFiltered.js";
import openModal from "./openCalander.js";
import openSchedule from "./openSchedule.js";
import signUp from "./singUp.js";

const getParkData = CallCsvFile(str);

window.signUp =signUp
const signUpBtn = document.getElementsByClassName("Sign__in-up")[0];
signUpBtn.innerHTML = /*html*/ `
         <input type="button" onclick="signIn()" value="Sign in">
        <input type="button" onclick="signUp()"  value="Sign Up">
        `;
//loop through districts array to print dropdown menu containing districts
let selectDistricts = document.getElementsByClassName("districts")[0];
selectDistricts.innerHTML =
  "<select name='district' id='district' onchange='districtSelected()'><option disabled selected>--- Escoje una districto ---</option>" +
  districts
    .map((ele) => {
      return `<option value="${ele}"> ` + ele + "</option>";
    })
    .join("") +
  "</select> ";

//use window or global object to get "districtSelected" function that s called when i choose fromn the dropdown menu

window.districtSelected = districtSelected;
//globalThis.districtSelected = districtSelected

// this function is called when i choose a district from the dropdown menu, then adresses are printed
function districtSelected() {
  const dictrictSelected = document.getElementById("district").value;
  const filteredDistrict = getParkData.filter(
    (ele) => ele['"Codi_Districte"'] === dictrictSelected
  );

  const regex = /"/g;

  const onlyAdresses = filteredDistrict.map((ele) =>
    ele['"Adreca"'].replace(regex, "")
  );
  const sinDuplicates = onlyAdresses.filter(
    (ele, index) => onlyAdresses.indexOf(ele) === index
  );

  globalThis.openModal = openModal;
  globalThis.openSchedule = openSchedule;

  const parksAdrs = document.getElementById("parks_adresses");
  parksAdrs.innerHTML = sinDuplicates
    .map(
      (ele) =>
        `<div class="adresses__container"><li onclick="openModal()">${ele}</li> <input type="button" value="Choose a time" onclick=openModal() class="time__button"/> <input type="button" value="Existing Schedule" onclick=openSchedule() class="schedule__button"/></div>`
    )
    .join("");
  //return openSchedule;
 
}
