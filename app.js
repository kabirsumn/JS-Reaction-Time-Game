const box = document.getElementById('box');
const printReactionTime = document.getElementById('printRreactionTime');
const btn = document.getElementById('btn');

function getRandomColor() {
  let letters = '0123456789ABCDEF'.split('');
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];
  }

  return color;
}

let creationTme, reactionTime, clickTime;

const makeBox = () => {
  let time = Math.random() * 3000;

  setTimeout(() => {
    box.style.border = '1px solid gray';
    box.style.backgroundColor = getRandomColor();
    box.style.display = 'block';
  }, time);
};

btn.addEventListener('click', makeBox);
