import validateForm from "./validateForm.js";

export default function singUp() {
  let previousContent;
  previousContent = document.getElementById("content").innerHTML;

  history.pushState({ page: "signup" }, " ", "/signup");

  window.onpopstate = function (event) {
    document.getElementById("content").innerHTML = previousContent;
  };

  const showsignup = document.getElementById("content");
  showsignup.innerHTML =
    /*html*/
    `<div class="sign__up-page">
      <nav><h3>Important information to maintain secured place</h3></nav>
      <hr />
      <div action="#" class="form__container">
       <div>Parent Data:</div>
       <form  id="myForm">
       <div class="input__field">
       <label for="name">Parent Full Name:</label>
       <input type="text" id="fullname" name="fullname">
       </div>
       <div class="input__field">
       <label for="email">Email:</label>
       <input type="email" id="email" name="email">
       </div>
       <div class="input__field">
       <label for="email">The Kid Date Of Birth:</label>
       <input type="text" id="birthday" name="birthday">
       </div>
       
       <div class="input__field">
       <label for="sex" class="sex__label">Sex:</label>
       <div class="input__style radio__male-female">
       <label for="male">Male</label>
       <input type="radio" id="male" name="gender" value="male">
       <label for="female">Female</label>
       <input type="radio" id="female" name="gender" value="female">
       </div>
       </div>

       <div class="input__field">
       <select id="spanishidnumber" name="spanishidnumber" class="spanishidnumber">
         <option value="dni">DNI</option>
         <option value="nie">NIE</option>
         <option value="tie">TIE</option>
       </select>
       <input type="text" size=""/>
       </div>
       <div class="input__field">
       <label for="email">The Child Date Of Birth:</label>
       <input type="text" id="birthday" name="birthday">
       </div>
        <input type="submit" value="submit">
        </form> 
       </div>
     </div>`;
  const linkElement = document.createElement("link");
  linkElement.rel = "stylesheet";
  linkElement.href = "./signUp.css";
  document.head.appendChild(linkElement);


  const form = document.getElementById("myForm");
  form.addEventListener("submit", validateForm);
 
}





// const showSinUp = document.getElementById("signUp");
// showSinUp.classList.add("sign__up-open")
//   //create signup form, and print it in appfrontPage
//   const signUp = document.getElementById("signUp");
//  signUp
