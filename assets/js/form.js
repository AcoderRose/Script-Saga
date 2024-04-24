//Selecting DOM Elements
const usernameEl = document.querySelector("#username");
const titleEl = document.querySelector("#title");
const ventTextEl = document.querySelector("#vent-text");
const submitBtn = document.querySelector("#submit");
const problemEl = document.querySelector("#problem");
let blogPostList = JSON.parse(localStorage.getItem("blog")) || [];

//Event Listener
submitBtn.addEventListener("click", function (event) {
  //Preventing Default Behavior
  event.preventDefault();

  if (
    usernameEl.value === "" ||
    titleEl.value === "" ||
    ventTextEl.value === ""
  ) {
    problemEl.textContent =
      "Please make sure to enter your username, title of the post, and of course your vent post, please write to your heart's content.";
  } else {
    //Creating Vent Post Object
    const ventPost = {
      username: usernameEl.value,
      title: titleEl.value,
      ventText: ventTextEl.value,
    };

    blogPostList.push(ventPost);
    //Storing Data in Local Storage
    localStorage.setItem("blog", JSON.stringify(blogPostList));

    window.location.replace("blog.html");
  }
});
