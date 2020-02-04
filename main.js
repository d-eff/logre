const addMenuToggle = (classname) => {
  let checks = document.getElementsByClassName(classname);
  for(let checkbox of checks) {
    checkbox.addEventListener('click', () => {
      console.log('box in');
      for(let box of checks) {
        if(box !== event.target) {
          box.checked = false;
        }
      }
      console.log('box out');
    });
  }
}

const addBodyDeselector = () => {
  let menuChecks = document.getElementsByClassName("menuCheck");
  let iconChecks = document.getElementsByClassName("iconCheck");
  let body = document.getElementsByClassName("boxBody")[0];
  body.addEventListener('click', (e) => {
    console.log('body in');
    for(let menu of menuChecks) {
      menu.checked = false;
    }
    for(let icon of iconChecks) {
      if(e.target !== icon) {
        icon.checked = false;
      }
    }
    console.log('body out');
  });
}

const enableScreensaver = () => {
  let body = document.body;
  let screensaver = document.getElementById('screensaver');

  //using this syntax specifically because of the debounce
  //because js context makes my nose bleed
  body.addEventListener('mousemove', debounce(function() {
    setScreensaverVis(true);
  }, 60000));

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

addMenuToggle("menuCheck");
addMenuToggle("iconCheck");
addBodyDeselector();
enableScreensaver();
