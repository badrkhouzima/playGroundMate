import { str } from "./alldata.js";
import CallCsvFile from "./csvFiltered.js";
import openModal from "./openCalander.js";
const getParkData = CallCsvFile(str);

export default function districtSelected() {
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
  
    const parksAdrs = document.getElementById("parks_adresses");
    parksAdrs.innerHTML = sinDuplicates
      .map(
        (ele) => /*html*/ `<div class="adresses__container"><li >${ele}</li>
                   <input type="button" value="Choose a time" id="btnCalander"  class="time__button"/>
                    <input type="button" value="Existing Schedule" class="schedule__button"/>
                    </div>`
      )
      .join("");
    const btns = document.querySelectorAll("#btnCalander");
    btns.forEach((btn) => {
      btn.addEventListener("click", openModal);
    });
  }
  