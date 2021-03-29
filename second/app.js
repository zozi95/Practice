createFlowers();

setInterval(createFlowers, 140);

function createFlowers() {
  const flowers = document.createElement("i");
  flowers.classList.add("fas");
  flowers.classList.add("fa-egg");
  flowers.style.left = Math.random() * window.innerWidth + "px";
  flowers.style.animationDuration = Math.random() * 10 + 5 + "s";
  flowers.style.opacity = Math.random();
  flowers.style.fontSize = Math.random() * 10 + 10 + "px";

  document.body.appendChild(flowers);

  setTimeout(() => {
    flowers.remove();
  }, 10000);
}
