const moveBox = () => {
  const box = document.getElementsByClassName('box')[0];
  const leftValue = parseInt(box.style.left || 0, 10);

  if (leftValue > window.screen.width - 80) {
    box.style.left = '0px';
  } else {
    box.style.left = `${leftValue + 5}px`;
  }

  requestAnimationFrame(moveBox);
};

moveBox();
