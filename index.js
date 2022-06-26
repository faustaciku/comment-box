let form = document.querySelector("#comment-form");
form.addEventListener("submit", displayComment);

function displayComment(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let commentInput = document.querySelector("#comment");
  console.log(commentInput.value);
  console.log(nameInput.value);
  console.log(emailInput.value);
  let commentBox = document.querySelector("p");
  commentBox.innerHTML =
    nameInput.value + emailInput.value + commentInput.value;
}
