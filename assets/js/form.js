//Selecting DOM Elements
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const ventTextEl = document.querySelector("#vent-text");
const submitBtn = document.querySelector("#submit");
//Event Listener
submitBtn.addEventListener("click", function (event) {
  //Preventing Default Behavior
  event.preventDefault();
  //Creating Vent Post Object
  const ventPost = {
    username: usernameEl.value,
    title: titleEl.value,
    ventText: ventTextEl.value,
  };
  //Storing Data in Local Storage
  localStorage.setItem("blog", JSON.stringify(ventPost));
});
