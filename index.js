function showMessage() {
  const para = document.getElementById("secretMessage");
  para.style.display = "block";
}
function hideMessage() {
    const para = document.getElementById("secretMessage");
    para.style.display = "none";
    }

function showMessage() {
  const para = document.getElementById("secretMessage");
  para.style.display = "block";
  startHeartShower(); // call heart/glitter animation
}

function startHeartShower() {
  const emojis = ['💖', '💫', '💕', '✨', '💘'];
  
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('love-particle');
    particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Random position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = Math.random() * window.innerHeight + 'px';

    // Add to body
    document.body.appendChild(particle);

    // Remove after animation ends
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
}
