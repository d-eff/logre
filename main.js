const addMenuToggle = () => {
  let menuChecks = document.getElementsByClassName("menuCheck");
  let body = document.getElementsByClassName("boxBody")[0];
  for(let checkbox of menuChecks) {
    checkbox.addEventListener('click', () => {
      for(let box of menuChecks) {
        if(box !== event.target) {
          box.checked = false;
        }
      }
    });
  }

  body.addEventListener('click', () => {
    for(let box of menuChecks) {
      box.checked = false;
    }
  })
}

const enableScreensaver = () => {
  let body = document.body;
  let screensaver = document.getElementById('screensaver');

  //using this syntax specifically because of the debounce
  //because js context makes my nose bleed
  body.addEventListener('mousemove', debounce(function() {
    setScreensaverVis(true);
  }, 30000));

  screensaver.addEventListener('mousemove', function() {
    setScreensaverVis(false);
  });
}

const setScreensaverVis = (show) => {
  let screensaver = document.getElementById('screensaver');
  let list = screensaver.classList;
  show ? list.add("visible") : list.remove("visible");
}

const debounce = (func, delay) => { 
  let debounceTimer 
  return function() { 
      const context = this
      const args = arguments 
      clearTimeout(debounceTimer) 
      debounceTimer = setTimeout(() => func.apply(context, args), delay) 
  } 
}

addMenuToggle();
enableScreensaver();
