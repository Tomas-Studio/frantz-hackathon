import './app.css'

// get elements 
const toggleGuide = document.querySelector("#toggle-setup")
const selectBtn = document.querySelectorAll('.select-plan')
const range = document.querySelector('#range')
const checkList = document.querySelector('.check-list')
const setupList = document.querySelectorAll('.setup-detail')
const track = document.querySelector('.track')
const closeAlert = document.querySelector('#close-wrapper')
const alertDiv = document.querySelector('.wrapper')
const notification = document.querySelector('.notification')
const notificationBtn = document.querySelector('.notification-toggle')
const notificationMenu = document.querySelector('.notification-menu')
const profile = document.querySelector('.profile')
const profileBtn = document.querySelector('.profile-toggle')
const profileMenu = document.querySelector('.profile-menu')

// variables
let completed = []
let active = -1

/**
 *  control element & styles
 */ 

// control notification menu actions
notificationBtn.addEventListener('click', ()=> {
  notificationMenu.classList.toggle('show-notificaion')
})

// control profile menu actions
profileBtn.addEventListener('click', ()=> {
  profileMenu.classList.toggle('show-profile')
})

document.addEventListener('keydown', (event) => {
  if(event.code === 40){

  }
})

// handle outside click
document.addEventListener('click', (event) => {
  if(!profile.contains(event.target)){
    profileMenu.classList.remove('show-profile')
  }
})
document.addEventListener('click', (event) => {
  if(!notification.contains(event.target)){
    notificationMenu.classList.remove('show-notification')
  }
})


// open shopify pricing
selectBtn.forEach((btn, idx) => {
  btn.addEventListener("click", ()=> {
    window.open('https://shopify.com/pricing', '_blank')
  })
})

// close  alert
closeAlert.addEventListener("click", () => {
  alertDiv.style.display = 'none';
  selectBtn[1].style.display = 'none';
  let parent = alertDiv.parentNode
  parent.style.backgroundColor = 'transparent'
})

// expand setup guide
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

// open setup details and handle checkbox input
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

// close other setup details
function closeDetails(idx1) {
  setupList.forEach((item2, idx2) => {
    if(idx1 !== idx2){
      item2.open = false
    }
  })
}

function openNext() {

}

// update range style to reflect completion
function updateRange(){
  range.value = (completed.length / 5) * 100
  range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
  track.innerHTML = completed.length
}

// initialize values
range.style.backgroundSize = (range.value - range.min) * 100 / (range.max - range.min) + '% 100%'
track.innerHTML = completed.length