const keys = document.querySelectorAll('.key');

function playSound(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  
  if(!audio) return
   audio.currentTime = 0;
   audio.play();
  
   key.classList.add('soittaa');
  
}
  
function removeTransition(e){
  if(e.propertyName !== 'transform ') return;
  this.classList.remove('soittaa');
}
  
keys.forEach(key => key.addEventListener('transitionend', revertStyle))
function revertStyle(event) {
  if (event.propertyName === 'transform') {
      this.classList.remove('soittaa');
  }
}

window.addEventListener('keydown', playSound);