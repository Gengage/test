document.querySelector(".navRunway").addEventListener("click", (e) => 
{
document.querySelector(".Runway").scrollIntoView({ behavior: "smooth" })
})

document.querySelector(".navLookbook").addEventListener("click", (e) => 
{
    document.querySelector(".lookbook").scrollIntoView({ behavior: "smooth" })
})

document.querySelector(".navShop").addEventListener("click", (e) => 
{
    document.querySelector(".shop").scrollIntoView({ behavior: "smooth" })
})

document.querySelector(".navLastseason").addEventListener("click", (e) => 
{
    document.querySelector(".lastSeason").scrollIntoView({ behavior: "smooth" })
})

const modal = document.querySelector('.modal')
const btnOpenModal=document.querySelector('.wrap')
const btnCloseModal = document.querySelector('.close-btn')



btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex"
})
btnCloseModal.addEventListener("click", ()=>{
    modal.style.display="none"
})


// slide
const silder = document.querySelector('#slider');
const wrapper = document.querySelector('.wrapper');
const items = document.querySelector('.items');
const item = document.querySelectorAll('.item');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const itemCount = item.length - 2;
let startX = 0;         //mousedown시 위치
let moveX = 0;         //움직인 정도
let currentIdx = 0;    //현재 위치(index)
let positions = [];

function initializeData() {
  const isActive = items.classList.contains('active');
  if (isActive) items.classList.remove('active');
  const width = wrapper.clientWidth;
  const interval = item[1].clientWidth;
  const margin = (width - interval) / 2
  const initX = Math.floor((interval - margin) * -1);
  let pos = [];
  for (let i=0; i<itemCount; i++) {
    pos.push(initX - interval * i);
  }
  positions = pos;
  items.style.width = (itemCount + 1)*100 + '%';
  items.style.left = positions[currentIdx] + 'px';
  silder.style.visibility = 'visible';
}

window.addEventListener('resize', initializeData);
window.addEventListener('load', initializeData);

// btn click event
next.addEventListener('click', (e) => {
  if (currentIdx === itemCount - 1) return;  
  const isActive = items.classList.contains('active');
  if (!isActive) items.classList.add('active');
  currentIdx = currentIdx + 1;
  items.style.left = positions[currentIdx] + 'px';
});
prev.addEventListener('click', (e) => {
  if (currentIdx === 0) return;
  const isActive = items.classList.contains('active');
  if (!isActive) items.classList.add('active');
  currentIdx = currentIdx - 1;
  items.style.left = positions[currentIdx] + 'px';
});


wrapper.onmousedown =(e)=> {
  const rect = wrapper.getBoundingClientRect();
  startX = e.clientX - rect.left;
  const isActive = items.classList.contains('active');
  if (!isActive) items.classList.add('active');
  items.addEventListener('mousemove', onMouseMove);
  document.onmouseup =(e)=> {
    if (wrapper.classList.contains('active')) wrapper.classList.remove('active');
    items.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
    if (moveX > -70 && moveX <= 70) {
      //   만약 -70~70이면 초기위치로 이동
      return items.style.left = positions[currentIdx] + 'px';
    }
    if (moveX > 0 && currentIdx > 0) {
      currentIdx = currentIdx - 1;
      items.style.left = positions[currentIdx] + 'px';
    }
    if (moveX < 0 && currentIdx < itemCount - 1){
      currentIdx = currentIdx + 1;
      items.style.left = positions[currentIdx] + 'px';
    }
    
  }
}

function onMouseMove(e) {
  if (!wrapper.classList.contains('active')) wrapper.classList.add('active');
  const rect = wrapper.getBoundingClientRect();
  moveX = e.clientX - rect.left - startX;
  const left = positions[currentIdx] + moveX;
  if (currentIdx === 0 && moveX > 0) return;
  else if(currentIdx === itemCount - 1 && moveX < 0) return;
  items.style.left = left + 'px';
}