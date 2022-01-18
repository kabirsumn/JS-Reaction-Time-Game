const box = document.getElementById('box');
const printReactionTime = document.getElementById('printRreactionTime');
const btn = document.getElementById('btn');

const random = () => Math.random();

const getRandomColor = () => {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(random() * 15)];
  }

  return color;
};

let creationTme, reactionTime, clickTime;

const makeBox = () => {
  let time = random() * 3000;
  let top = random() * 300;
  let left = random() * 500;

  setTimeout(() => {
    if (random() > 0.5) {
      box.style.borderRadius = '50%';
    } else {
      box.style.borderRadius = '10px';
    }

    box.style.display = 'block';
    box.style.top = top + 'px';
    box.style.left = left + 'px';
    box.style.border = '1px solid gray';
    box.style.backgroundColor = getRandomColor();
  }, time);
};

btn.addEventListener('click', makeBox);
