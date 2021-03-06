let form = document.querySelector("#comment-form");
form.addEventListener("submit", displayComment);

const comments = [];

function displayComment(event) {
  event.preventDefault();
  let nameInput = document.querySelector("#name");
  let emailInput = document.querySelector("#email");
  let commentInput = document.querySelector("#comment");
  comments.push({
    name: nameInput.value,
    email: emailInput.value,
    comment: commentInput.value,
  });

  renderComments();
  form.reset();
}

function renderComments() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDay();
  let commentBox = document.querySelector("#paragraph");
  let temp = "";
  comments.forEach((comment) => {
    temp += `<span style="font-size:20px; background:#C8C8DF; text-align: left; padding:15px; border-radius: 10px; width: 40%; margin:5px; border: 1px solid grey;"> ${year}/${month}/${day} <br />Name: ${comment.name} <br />Email: ${comment.email} <br /> Comment: ${comment.comment} </span>`;
  });
  commentBox.innerHTML = temp;
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
