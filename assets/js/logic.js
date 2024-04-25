document.addEventListener("DOMContentLoaded", function () {
  const checkBox = document.querySelector('.switch input[type="checkbox"]');
  checkBox.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
});
