const box = document.getElementById('box');
const printReactionTime = document.getElementById('printReactionTime');
const btn = document.getElementById('btn');

const random = (num) => Math.random() * num;

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(random(15))];
  }

  return color;
};

let creationTme, reactionTime, clickTime;

const makeBox = () => {
  let time = random(3000);
  let top = random(300);
  let left = random(500);

  setTimeout(() => {
    if (random(1) > 0.5) {
      box.style.borderRadius = '50%';
    } else {
      box.style.borderRadius = '10px';
    }

    box.style.display = 'block';
    box.style.top = top + 'px';
    box.style.left = left + 'px';
    box.style.border = '1px solid gray';
    box.style.backgroundColor = getRandomColor();
    creationTme = Date.now();
  }, time);
};

box.addEventListener('click', () => {
  clickTime = Date.now();

  reactionTime = (clickTime - creationTme) / 1000;

  printReactionTime.innerHTML = `Your Reaction Time is: ${reactionTime} Seconds`;

  box.style.display = 'none';
  makeBox();
});

makeBox();
