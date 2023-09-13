const moveELements = (e) => {
  const shapes = document.querySelectorAll(".shape");
  const tracker = document.querySelector(".tracker");

  tracker.style.top = `${e.clientY}px`
  tracker.style.left = `${e.clientX}px`
  tracker.style.opacity = 1;

  shapes.forEach((shape) => {
    const shapeOffSet = shape.getAttribute("data-offset");

    let offSetX = (window.innerWidth - e.clientX) * shapeOffSet;
    let offSetY = (window.innerHeight - e.clientY) * shapeOffSet;

    shape.style.translate = `${offSetX}px ${offSetY}px`;
  });


};

document.addEventListener("mousemove", moveELements);
