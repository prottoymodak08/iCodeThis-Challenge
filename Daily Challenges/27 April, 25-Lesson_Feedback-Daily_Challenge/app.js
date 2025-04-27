const greatReview = document.getElementById("great-btn");
const normalReview = document.getElementById("normal-btn");
const badReview = document.getElementById("bad-btn");

function launch() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
  });
}

function disableBtn() {
  greatReview.disabled = true;
  normalReview.disabled = true;
  badReview.disabled = true;

  greatReview.classList.add("disabled");
  normalReview.classList.add("disabled");
  badReview.classList.add("disabled");
}

greatReview.addEventListener("click", () => {
  launch();
  disableBtn();
});

normalReview.addEventListener("click", () => {
    launch();
    disableBtn();
  });

badReview.addEventListener("click", () => {
    disableBtn();
  });