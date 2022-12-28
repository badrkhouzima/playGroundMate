export default function singUp() {
  // window.onbeforeunload = function(event) {
  //   // Prompt the user to confirm that they want to leave the page
  //    event.returnValue = "Are you sure you want to leave this page?";
  // };
  
  let previousContent;
  previousContent = document.getElementById("content").innerHTML;

  history.pushState({ page: "signup" }, " ", "/signup");

  window.onpopstate = function (event) {
    document.getElementById("content").innerHTML = previousContent;
  };
  

  console.log("check event here");
  // const showSinUp = document.getElementById("signUp");
  // showSinUp.classList.add("sign__up-open")
  //   //create signup form, and print it in appfrontPage
  //   const signUp = document.getElementById("signUp");
  //  signUp
  const showsignup = document.getElementById("content");
  showsignup.innerHTML =
    /*html*/
    `<div class="sign__up-page">
      <nav><h3>Important information to maintain secured place</h3></nav>
      <div class="form__container">
       <form action="/signup" method="post">
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
       <label for="sex">Sex:</label>
       <div class="input__style">
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
        <input type="submit" value="Sign Up">
        </form> 
       </div>
     </div>`;
     
}
