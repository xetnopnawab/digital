const buttons = document.querySelectorAll('.color');
console.log(buttons);

const body = document.querySelector('body');
buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e);

    if (e.target.id === 'tomato') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'orange') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'teal') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'crimson') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
