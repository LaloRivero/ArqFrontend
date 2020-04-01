const planet = document.getElementById("planet");
const mono = document.getElementById("mono");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reverse = document.getElementById("reverse");

const rotarPlaneta = planet.animate(
  [
    {
      transform: "rotate(0)"
    },
    {
      transform: "rotate(360deg)"
    }
  ],
  {
    duration: 10000,
    easing: "linear",
    iterations: Infinity
  }
);
const brincar = mono.animate(
  [
    {
      transform: "translateY(50px)"
    },
    {
      transform: "translateY(0)"
    }
  ],
  {
    duration: 1000,
    direction: "alternate",
    easing: "ease",
    iterations: Infinity,
    fill: "forwards"
  }
);

play.addEventListener("click", () => {
  rotarPlaneta.play();
  brincar.play();
});
pause.addEventListener("click", () => {
  rotarPlaneta.pause();
  brincar.pause();
});
reverse.addEventListener("click", () => {
  rotarPlaneta.reverse();
});

rotarPlaneta.pause();
brincar.pause();
