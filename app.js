import './app.css'

// get elements 
const toggleGuide = document.querySelector(".btn-icon-light-2")
const selectBtn = document.querySelectorAll('#select-plan')
const range = document.querySelector('#range')
const checkList = document.querySelector('.check-list')
const setupList = document.querySelectorAll('.setup-detail')
const track = document.querySelector('.track')
const closeWrapper = document.querySelector('#close-wrapper')
const alertDiv = document.querySelector('.wrapper')

// variables
let completed = []

// control element & styles
selectBtn.forEach((btn, idx) => {
  btn.addEventListener("click", ()=> {
    window.open('https://shopify.com/pricing', '_blank')
  })
})

closeWrapper.addEventListener("click", () => {
  alertDiv.style.display = 'none';
  selectBtn[1].style.display = 'none';
  let parent = alertDiv.parentNode
  parent.style.backgroundColor = 'transparent'
})

toggleGuide.addEventListener("click", () => {
  if(toggleGuide.dataset.toggle === 'closed'){
    toggleGuide.dataset.toggle = 'open'
    // checkList.style.minHeight = `${checkList.scrollHeight}px`
    checkList.style.height = 'auto'
  } else {
    toggleGuide.dataset.toggle = 'closed' 
    checkList.style.height = '0px'
  }
})

setupList.forEach((item, idx) => {

  let check = item.querySelector('input[type="checkbox"]')

  check.addEventListener('input', (event)=>{
    let value = event.target.value
    if(completed.includes(value)){
      const arrIdx = completed.indexOf(value)
      arrIdx > -1 && completed.splice(arrIdx, 1)
      updateRange()
    } else {
      completed.push(value)
      updateRange()
    }
  })

  item.addEventListener('toggle', (event)=> {
    if(item.open){
      event.preventDefault()
      item.style.height = 'auto'
      closeDetails(idx)
    }
  })
})

function closeDetails(idx1) {
  setupList.forEach((item2, idx2) => {
    if(idx1 !== idx2){
      item2.open = false
    }
  })
}

function openNext() {

}

function updateRange(){
  range.value = (completed.length / 5) * 100
  range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
  track.innerHTML = completed.length
}

// initialize values
range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
track.innerHTML = completed.length