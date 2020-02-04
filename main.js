let menuChecks = document.getElementsByClassName("menuCheck");
for(let checkbox of menuChecks) {
  checkbox.addEventListener('click', () => {
  for(let box of menuChecks) {
    if(box !== event.target) {
      box.checked = false;
    }
  }
});
}