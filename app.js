import './app.css'

// get elements 
const toggleGuide = document.querySelector(".btn-icon-light-2")
const selectBtn = document.querySelector('#select-plan')
const range = document.querySelector('#range')
const checkList = document.querySelector('.check-list')
const setupList = document.querySelectorAll('.setup-detail')
const track = document.querySelector('.track')

// variables
let tracking = []

// control element & styles
selectBtn.addEventListener("click", ()=> {
  window.open('https://shopify.com/pricing', '_blank')
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
    if(tracking.includes(value)){
      const arrIdx = tracking.indexOf(value)
      arrIdx > -1 && tracking.splice(arrIdx, 1)
      updateRange()
    } else {
      tracking.push(value)
      updateRange()
    }
  })

  item.addEventListener('toggle', ()=> {
    if(item.open){
      item.style.height = `${item.scrollHeight + 20}px`
      closeOthers(idx)
    } else {
      item.style.height = '2.75rem'
    }
  })
})

function closeOthers(idx1) {
  setupList.forEach((item2, idx2) => {
    if(idx1 !== idx2){
      item2.open = false
    }
  })
}

function updateRange(){
  range.value = (tracking.length / 5) * 100
  range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
  track.innerHTML = tracking.length
}

// initialize values
range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
track.innerHTML = tracking.length