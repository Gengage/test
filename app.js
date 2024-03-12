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
console.log(modal)

btnOpenModal.addEventListener("click", ()=>{
    modal.style.display="flex"
})
const fixScrollbar = document.querySelector('.wrap')
function fixScroll(){
    document.body.style.overflow = "hidden"
  }
  fixScrollbar.addEventListener('click', fixScroll)