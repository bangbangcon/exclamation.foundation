const allExclamations = [];

const createRGB = () => {
  // "or zero" casts to an int
  const h = (Math.random() * 255) | 0;
  const s = '25%';
  const l = '90%';
  return `hsl(${h}, ${s}, ${l})`
}

const createExclamation = () => {
  // Create element
  const newExclamation = document.createElement('div');
  newExclamation.classList.add('exclamation');
  newExclamation.innerHTML = '<svg width="30" clip-rule="evenodd" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" version="1.1" viewBox="0 0 30 80" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g clip-rule="evenodd" fill="' + createRGB() + '" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" stroke-width=".02"><path d="m7.4705 73.771c-1.842-0.74994-3.0148-2.6348-3.185-4.576-0.27276-2.8166 0.76228-5.7668 2.7842-7.7554 1.3884-1.2504 3.1866-1.9467 4.9642-2.441 2.2272-0.55688 4.7776-0.72984 6.8172 0.50644 1.6064 0.97278 2.3788 2.8998 2.3414 4.7238 0.05307 3.3378-2.0948 6.3672-4.8676 8.0608-2.0906 1.3201-4.6056 1.9312-7.0688 1.7122-0.5997-0.03325-1.1971-0.10965-1.7854-0.2308z"/><path d="m6.8337 48.953c0.58342-12.384 0.42644-24.864 2.5832-37.116 1.8569-4.6586 7.41-4.8748 11.515-6.1904 3.8376-1.0275 7.1754 0.65156 6.0722 4.2004-3.4076 12.025-4.7634 24.494-6.8416 36.788-0.45674 6.051-5.2322 6.4902-9.288 7.021-3.6164 1.309-4.5466-1.4778-4.0404-4.7034z"/></g></svg>';
  
  // Random position
  newExclamation.style.left = (Math.random() * 100) + "%";
  const top = Math.floor(Math.random() * 100);
  newExclamation.style.top = top + "%";
  
  newExclamation.firstChild.style.width = 30 + Math.random() * 20;
  
  // Negative animation delay lets us randomize the start frame
  newExclamation.style.animationDelay = Math.random() * -2 + "s";
  
  // Random color
  newExclamation.style.color = createRGB();
  
  // Add to array
  allExclamations.push({
    div: newExclamation,
    top: top,
    speed: 0.03 + (Math.random() * 0.1)
  });
  
  // Add to container
  document.getElementById('exclamations').appendChild(newExclamation);
}

// Animation update loop
const updateAll = () => {
  allExclamations.forEach((exclamation) => {
    // Reset if we've hit the bottom
    if (exclamation.top > 100) {
      exclamation.top = -10;
      exclamation.speed = 0.03 + (Math.random() * 0.1)
      exclamation.div.style.color = createRGB();
      exclamation.div.firstChild.style.width = 30 + Math.random() * 20;
    }
    // Update position
    exclamation.top += exclamation.speed;
    exclamation.div.style.top = exclamation.top + "%";
  });
  window.requestAnimationFrame(updateAll);  
}

// Create 50 for now (runs fine on my macbook pro, may want to disable on mobile)
for (let i = 0; i < 50; i ++) {
  createExclamation(false);
}

// Kick off the animation
window.requestAnimationFrame(updateAll);

