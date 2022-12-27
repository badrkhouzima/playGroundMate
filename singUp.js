export default function singUp() {
    console.log("hisignup")
const showSinUp = document.getElementById("signUp");
showSinUp.classList.add("sign__up-open")
  //create signup form, and print it in appfrontPage
  const signUp = document.getElementById("signUp");
  signUp.innerHTML =
    /*html*/
    `<div class="form__container">
    <form action="/signup" method="post">
       <label for="name">Full Name:</label>
       <input type="text" id="fullname" name="fullname"><br>
       <label for="email">Email:</label>
       <input type="email" id="email" name="email"><br><br>
       <label for="email">The Kid Date Of Birth:</label>
       <input type="text" id="birthday" name="birthday"><br><br>
       <select id="spanishidnumber" name="spanishidnumber">
         <option value="dni">DNI</option>
         <option value="nie">NIE</option>
         <option value="tie">TIE</option>
       </select>
       <input type="text" size="30"/><br>
       <label for="email">The Kid Date Of Birth:</label><br>
       <input type="text" id="birthday" name="birthday"><br><br>

       <input type="submit" value="Sign Up">
     </form> 
     </div>`;
}
