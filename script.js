let swings = document.querySelector('.swings')
let garden = document.querySelector('.garden')
let pergolas = document.querySelector('.pergolas')
let sw = document.querySelector('.sw')
let gd = document.querySelector('.gd')
let pg = document.querySelector('.pg')
let ct = document.querySelector('.lnr-cart')
let cw = document.querySelector('.cw')
let cc = document.querySelector('.cc')
let cm = document.querySelector('.cm')
let menu = document.querySelector('.menu')
let prim = document.querySelector('.primary-nav-trigger')
let cross = document.querySelector('.vv')
let nav = document.querySelector('#vv')
let sliderTrigger = document.querySelector('#img1')
let sliderTrigger0 = document.querySelector('#img0')
let cart = []
var mebel = new Map();
mebel.set(a1, "Swing made of larch")
mebel.set(a2, "Loft Swing")
mebel.set(a3, "Swing 'Milana'")
mebel.set(a4, "Suspended bed 'Sochi'")




console.log(mebel)
document.querySelectorAll('.tc').forEach(
  item => item.addEventListener('click', function() {
    cart.push(item.id)
    console.log(cart)
   
    

  })


);

ct.addEventListener('click', () => {
 
  cw.classList.add('cart-wrapper')
  cw.classList.remove('disable')
  cc.classList.remove('disable')
  cc.classList.add('cart-closer')
  cm.classList.remove('disable')
  cm.classList.add('cart-menu')
})
cc.addEventListener('click', () => {
    cw.classList.add('disable')
    cw.classList.remove('cart-wrapper')
    cc.classList.remove('cart-closer')
    cc.classList.add('toggled')
    cm.classList.remove('cart-menu')
    cm.classList.add('disable')
})

sw.addEventListener('click', () => {
  swings.classList.remove('disable')
  garden.classList.add('disable')
  pergolas.classList.add('disable')
  sw.classList.add('actived')
  gd.classList.remove('actived')
  pg.classList.remove('actived')
  console.log('+++')
})

gd.addEventListener('click', () => {
  garden.classList.remove('disable')
  swings.classList.add('disable')
  pergolas.classList.add('disable')
  gd.classList.add('actived')
  sw.classList.remove('actived')
  pg.classList.remove('actived')
  console.log('+')
})

pg.addEventListener('click', () => {
   pergolas.classList.remove('disable')
  garden.classList.add('disable')
  swings.classList.add('disable')
  pg.classList.add('actived')
  gd.classList.remove('actived')
  sw.classList.remove('actived')
})
menu.addEventListener('click', () => {
  prim.classList.toggle('rotate')
  nav.classList.add('navigate')
  nav.classList.remove('offnav')
})

cross.addEventListener('click', () => {
  prim.classList.toggle('rotate')
  nav.classList.add('offnav')
})
let paths = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',]
let i = 2
sliderTrigger.addEventListener('click', () => {
  if (i < 4) {
    i++
  } else {
    i = 0
  }
  sliderTrigger.src = 'sofas/provence/' + paths[i] 

 
})
sliderTrigger0.addEventListener('click', () => {
  if (i < 4) {
    i++
  } else {
    i = 0
  }
  sliderTrigger0.src = 'sofas/monaco/' + paths[i] 

 
})



