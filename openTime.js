import openModal from "./openCalander.js";

export default function fatherSetTiming() {
  console.log("herreeee>>", "hereloo i am time");
  let calander = openModal();
  console.log("thi sis a variable", calander); // Outputs 'value'
  calander.classList.remove("is-open");
}
