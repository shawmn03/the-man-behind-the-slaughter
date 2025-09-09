function triggerJumpscare() {
  const jumpscare = document.getElementById('jumpscare');
  const scream = document.getElementById('scream-sound');

  jumpscare.classList.add('visible');
  scream.currentTime = 0;
  scream.play();

  setTimeout(() => {
    jumpscare.classList.remove('visible');

    setTimeout(() => {
      scream.pause();
    }, 500);
  }, 150);
}

document.querySelectorAll('#trigger-word').forEach(el => {
  el.addEventListener('mouseenter', triggerJumpscare);
});

document.addEventListener('selectionchange', () => {
  const selection = window.getSelection().toString();
  if (selection.includes('1983') || selection.includes('Fredbear')) {
    triggerJumpscare();
  }
});
