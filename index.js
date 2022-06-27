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
  let commentBox = document.querySelector("#paragraph");
  commentBox.innerHTML = `<div style="font-size:20px">${nameInput.value} <br /> ${emailInput.value} <br /> ${commentInput.value} </div>`;
  form.reset();
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
function enableSubmit() {
  let inputs = document.getElementsByClassName("required");
  let btn = document.querySelector('input[type="submit"]');
  let isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    let changedInput = inputs[i];
    if (changedInput.value.trim() === "" || changedInput.value === null) {
      isValid = false;

      break;
    }
  }
  let warning = document.querySelector("#warning");
  warning.innerHTML = "Please enter all the fields";
  btn.disabled = !isValid;
}
