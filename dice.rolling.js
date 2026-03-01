let clickCount = 0;
let intervalId = null;
const body = document.body;

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
}

function changeBackground() {
  body.style.backgroundColor = getRandomColor();
}

function createButton() {
  const btn = document.createElement('button');
  btn.textContent = 'click me';
  btn.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:20px 40px;font-size:24px;cursor:pointer';
  document.body.appendChild(btn);
  
  const counter = document.createElement('div');
  counter.style.cssText = 'position:fixed;top:30%;left:50%;transform:translate(-50%,-50%);font-size:48px';
  counter.id = 'clickCounter';
  counter.textContent = '0';
  document.body.appendChild(counter);
  
  btn.onclick = () => {
    clickCount++;
    document.getElementById('clickCounter').textContent = clickCount;
    
    if (clickCount % 2 === 0) {
      if (!intervalId) intervalId = setInterval(changeBackground, 500);
    } else {
      if (intervalId) { clearInterval(intervalId); intervalId = null; }
    }
  };
}

intervalId = setInterval(changeBackground, 500);
createButton();