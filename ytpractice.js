document.addEventListener('DOMContentLoaded', (event) => {
  let btn2 = document.querySelector("#btn2");
  btn2.addEventListener("dblclick", () => {
    console.log("it is clicked twice");
  });
});