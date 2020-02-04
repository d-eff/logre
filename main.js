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

addMenuToggle();
