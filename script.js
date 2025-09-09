document.getElementById('trigger-word').addEventListener('mouseenter', function () {
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
  });
