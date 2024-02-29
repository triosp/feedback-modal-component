// write your JavaScript here
const showFeed = document.querySelector(".show-feed");
const feedback = document.querySelector(".feedback");
const thanks = document.querySelector(".thanks");
const backdoor = document.querySelector(".backdoor");
const submit = document.querySelector("#submit");
const ratings = document.querySelector("#ratings");
let score = document.querySelectorAll(".score button");
let result = "";

score.forEach((items, index) => {
  items.addEventListener("click", (item) => {
    ratings.textContent = `Your give rate is ${items.value}`;
    result = items.value;
  });
});

submit.addEventListener("click", () => {
  if (result === "") {
    alert("You forgot to give feedback ");
  } else {
    showLayout(thanks, feedback);
  }
});

backdoor.addEventListener("click", () => {
  showLayout(showFeed, feedback);
});

function showLayout(show, hide, backdor) {
  show.classList.add("active");
  hide.classList.remove("active");
  backdor
    ? backdoor.classList.add("active")
    : backdoor.classList.remove("active");
}
