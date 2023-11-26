import './app.css'

// get elements 
const toggleGuide = document.querySelector(".btn-icon-light-2")
const range = document.querySelector('#range')
const checkList = document.querySelector('.check-list')



// control element & styles
toggleGuide.addEventListener("click", () => {
  if(toggleGuide.dataset.toggle === 'closed'){
    toggleGuide.dataset.toggle = 'open'
    checkList.style.height = `${checkList.scrollHeight}px`
  } else {
    toggleGuide.dataset.toggle = 'closed' 
    checkList.style.height = '0px'
  }
})

range.addEventListener('input', (event)=> {
  let t = event.target
  
  const min = t.min; 
  const max = t.max;  
  const val = t.value;  
  
  t.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'; 
})

// initialize values
range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%';