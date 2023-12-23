let hambugerOpen = document.querySelectorAll('#hambuger-open')
let hambugerClose = document.querySelectorAll('#hambuger-close')
let head = document.querySelectorAll('#head')
let hambugerSect = document.querySelectorAll('#HambugerSect')
let thickArr = document.querySelectorAll('#thick-arr')
let search = document.querySelectorAll('#search')
let form = document.querySelector('#form')
let droping = document.querySelectorAll('#droping')
hambugerOpen.forEach(hambugerOpens=>{
    hambugerOpens.addEventListener('click',()=>{
        hambugerSect.forEach(hambugerSects=>{
            hambugerSects.style.left = '0'
        })
})
})
hambugerClose.forEach(hambugerCloses=>{
    hambugerCloses.addEventListener('click',()=>{
        hambugerSect.forEach(hambugerSects=>{
            hambugerSects.style.left = '-80%'
        })
})
})
head.forEach(heads=>{
    heads.textContent = 'Find A Location'
})
search.forEach(searchs=>[
    searchs.addEventListener('click',()=>{
    form.classList.toggle('show')
})
])
function about(){
    let aboutDropdown = document.querySelector('#about-dropdown')
    let arr = document.querySelector('#arr')
    aboutDropdown.classList.toggle('shows')
    arr.classList.toggle('rot')
}
thickArr.forEach(thickArrs=>{
    let textUnder = thickArrs.querySelector('p')
    let arr = thickArrs.querySelector('span')
    thickArrs.addEventListener('click',()=>{
        textUnder.classList.toggle('shot')
        arr.classList.toggle('rotate')
    })
})
droping.forEach(drops=>{
    let e  = drops.querySelector('#drop')
    let uld = drops.querySelector('ul')
    let imgs = drops.querySelector('img')
    e.addEventListener('click',()=>{
        if (uld.style.height === '0px') {
            uld.style.height = 'fit-content'
            imgs.style.transform = 'rotate(90deg)'
        } else {
            uld.style.height = '0'
            imgs.style.transform = 'rotate(0deg)'
        }
    })
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 680 || document.documentElement.scrollTop > 680) {
    document.getElementById("navbar").style.top = "6%";
    document.getElementById("navbar").style.position = 'fixed'
  } else {
    document.getElementById("navbar").style.top = "20%";
    document.getElementById("navbar").style.position = 'sticky'
  }
}