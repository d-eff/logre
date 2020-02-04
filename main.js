const addMenuToggle = (classname) => {
  let checks = document.getElementsByClassName(classname);
  for(let checkbox of checks) {
    checkbox.addEventListener('click', () => {
      for(let box of checks) {
        if(box !== event.target) {
          box.checked = false;
        }
      }
    });
  }
}

const addBodyDeselector = () => {
  let menuChecks = document.getElementsByClassName("menuCheck");
  let iconChecks = document.getElementsByClassName("iconCheck");
  let body = document.getElementsByClassName("boxBody")[0];
  body.addEventListener('click', (e) => {
    for(let menu of menuChecks) {
      menu.checked = false;
    }
    for(let icon of iconChecks) {
      if(e.target !== icon) {
        icon.checked = false;
      }
    }
  });
}

const enableScreensaver = () => {
  let body = document.body;
  let screensaver = document.getElementById('screensaver');
  const SCREENSAVER_TIMEOUT = 60000;

  const debouncedScreensaver = debounce(function() {
    setScreensaverVis(true);
  }, SCREENSAVER_TIMEOUT)
  //using this syntax specifically because of the debounce
  //because js context makes my nose bleed
  body.addEventListener('mousemove', debouncedScreensaver);
  body.addEventListener('keypress', debouncedScreensaver);

  screensaver.addEventListener('mousemove', function() {
    setScreensaverVis(false);
  });

  screensaver.addEventListener('keypress', function() {
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
