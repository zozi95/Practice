const checkbox = document.getElementById("checkbox");
let mouseCursor = document.querySelector(".cursor");
let burger = document.querySelector(".burger");

window.addEventListener("mousemove", cursor);
window.addEventListener("mouseover", activeCursor);

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("white");
});

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

function activeCursor(e) {
  const item = e.target;
  if (
    item.id === "logo" ||
    item.classList.contains("burger") ||
    item.classList.contains("click-here")
  ) {
    mouseCursor.classList.add("burger-active");
  } else {
    mouseCursor.classList.remove("burger-active");
  }
}

createSnowFlake();

setInterval(createSnowFlake, 50);

function createSnowFlake() {
  const snow_flake = document.createElement("i");
  snow_flake.classList.add("fas");
  snow_flake.classList.add("fa-snowflake");
  snow_flake.style.left = Math.random() * window.innerWidth + "px";
  snow_flake.style.animationDuration = Math.random() * 7 + 2 + "s";

  snow_flake.style.opacity = Math.random();
  snow_flake.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 3000);
}
