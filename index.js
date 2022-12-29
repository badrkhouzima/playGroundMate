import districts from "./utils.js";
//import openSchedule from "./openSchedule.js";
import signUp from "./singUp.js";
import districtSelected from "./districtSelected.js";


const signUpBtn = document.getElementsByClassName("Sign__in-up")[0];
signUpBtn.innerHTML = /*html*/ `
         <input type="button" onclick="" value="Sign in">
        <input type="button" id="sign__up" value="Sign Up">
        `;

const sign__upbtn = document.getElementById("sign__up");
sign__upbtn.addEventListener("click", signUp )

//loop through districts array to print dropdown menu containing districts
let selectDistricts = document.getElementsByClassName("districts")[0];
selectDistricts.innerHTML =
  /*html*/
  `<select name='district' id='district'><option disabled selected>--- Escoje una districto ---</option>
  ${districts
    .map((ele) => {
      return `<option value="${ele}"> ${ele} </option>`;
    })
    .join("")}
  </select> `;
  const districtOptions = document.querySelectorAll("#district");
districtOptions.forEach((option) => {
  option.addEventListener("change", districtSelected);
});
