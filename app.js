import './app.css'

// get elements 
const toggleGuide = document.querySelector(".btn-icon-light-2")
const range = document.querySelector('#range')


// control element & styles
toggleGuide.addEventListener("click", () => {
  toggleGuide.dataset.toggle === 'closed' 
  ? toggleGuide.dataset.toggle = 'open'
  : toggleGuide.dataset.toggle = 'closed' 
})

range.addEventListener('input', (event)=> {
  let t = event.target
  
  const min = t.min; 
  const max = t.max;  
  const val = t.value;  
  
  t.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'; 
})

range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%';
