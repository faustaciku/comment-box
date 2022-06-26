let form = document.querySelector("#comment-form");
form.addEventListener("submit", displayComment);

function displayComment(event) {
  event.preventDefault();
  let commentInput = document.querySelector("#comment");
  console.log(commentInput.value);
}
