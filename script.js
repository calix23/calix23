const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

noBtn.addEventListener("click", () => {
  question.innerHTML = "I'm sorry! I love you, babe";
  gif.src =
    "https://media.giphy.com/media/LpoT1DojgcyW9QrCil/giphy.gif";
});

yesBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});
