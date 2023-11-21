function startGame() {
  const availableClasses = [
    'josemi--t',
    'josemi--b',
    'josemi--corner-bl',
    'josemi--corner-br',
    'josemi--corner-tl',
    'josemi--corner-tr'
  ];
  const availableTimers = [10000];
  // 1000, 1200, 1500, 2000, 2500, 3000

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function pickJosemi() {
    if (!availableClasses.length) {
      return;
    }

    const randomIndex = getRandomInt(0, availableClasses.length - 1);
    const randomTimerIndex = getRandomInt(0, availableTimers.length - 1);
    const timerToUse = availableTimers[randomTimerIndex];
    const classToUse = availableClasses.splice(randomIndex, 1)[0];
    const josemiNode = document.querySelector('.josemi:not(.josemi--selected)');

    if (!josemiNode) {
      return;
    }

    josemiNode.classList.add('josemi--selected');
    josemiNode.classList.add(classToUse);

    const clickListener = josemiNode.addEventListener('click', () => {
      josemiNode.classList.remove('josemi--show');
    });

    setTimeout(() => {
      josemiNode.classList.add('josemi--show');
    }, 400);

    setTimeout(() => {
      josemiNode.classList.remove('josemi--show');

      setTimeout(() => {
        josemiNode.classList.remove('josemi--selected');
        josemiNode.classList.remove(classToUse);
        availableClasses.push(classToUse);
        josemiNode.removeEventListener('click', clickListener);
      }, 400);
    }, timerToUse);
  }

  pickJosemi();
  return setInterval(pickJosemi, 1000);
}

document.querySelector('.cta--start').addEventListener('click', function() {
  startGame();
  setTimeout(() => {
    clearInterval(gameIntervalid);
    ctaButton.style.display = 'inline-block';
    pointsToAdd.innerText = 0;
  },15000);

  document.querySelector('.cta--start').style.display='none';
});

document.querySelectorAll('.josemi').forEach((josemiNode) => {
  josemiNode.addEventListener('click', function() {
    let pointsToAdd = josemiNode.classList.contains('josemi--sm') ? 2 : 1;
    document.querySelector('#totalPoints').innerText = Number(document.querySelector('#totalPoints').innerText) + pointsToAdd;
  })
});


const hammerNode = document.querySelector('.hammer')

document.addEventListener('mousemove', (event) => {

  const clientX = event.clientX;
  const clientY = event.clientY;

  hammerNode.style.top = clientY;
  hammerNode.style.left = clientX;
});

document.addEventListener('mousedown', () => {
  hammerNode.classList.add('hammer--pressed');
})

document.addEventListener('mouseup', () => {
    hammerNode.classList.remove('hammer--pressed');
})