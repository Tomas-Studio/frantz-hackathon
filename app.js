import './app.css'

const toggleGuide = document.querySelector(".btn-icon-light-2");

toggleGuide.addEventListener("click", () => {
  toggleGuide.dataset.toggle === 'closed' 
  ? toggleGuide.dataset.toggle = 'open'
  : toggleGuide.dataset.toggle = 'closed' 
})
