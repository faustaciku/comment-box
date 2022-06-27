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

function countCharacters() {
  let maxLength = 140;
  let characters = document.querySelector("#characters");
  let commentInput = document.querySelector("#comment");
  let characterLength = commentInput.value.length;
  if (characterLength > maxLength) {
    commentInput.style.border = "1px solid red";
    characters.innerHTML = `<span style="color:red">${characterLength}</span>/140`;
  } else {
    characters.innerHTML = `${characterLength}/140`;
    commentInput.style.border = "1px solid grey";
  }
}
