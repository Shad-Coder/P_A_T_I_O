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
let cer = document.querySelector('.cer')
let cart = []
let ii = 0;
const mebel = new Map([
  ['a1', ['The "Monaco" model', 'sofas/4.jpg', 0]],
  ['a2', ['The "Provence" model', 'sofas/1.jpg', 0]],
  ['a3', ['The "Versailles" model', 'sofas/versal/3.jpg', 0]],
  ['a4', ['The "Domino" model', 'sofas/2.jpg', 0]],
  ['a5', ['The "Aurora" model', 'garden/aurora/img1.jpg', 0]],
  ['a6', ['The "Forest" model', 'benches/forest/img1.jpg', 0]],
  ['a7', ['The "Monaco" model', 'benches/monaco/img1.jpg', 0]],
  ['a8', ['The "Peterhof" model', 'benches/peterhof/img1.jpg', 0]],
  ['a9', ['The "Versailles" model', 'benches/versal/img1.jpg', 0]],
  ['a10', ['Aurora Kit', 'garden/aurora/img1.jpg', 0]],
  ['a11', ['Montenegro Kit', 'garden/montenegro/img1.jpg', 0]],
  ['a12', ['Set "Versal"', 'garden/versal/img1.jpg', 0]],
  ['a13', ['Swing "Arizona"', 'garden/arizona/img1.jpg', 0]],
  ['a14', ['Swing "Italian fantasy"', 'garden/italian/img1.jpg', 0]],
  ['a15', ['Flamingo Swing', 'garden/flameingo/img1.jpg', 0]],
  ['a16', ['Wooden swing "Wind"', 'garden/wooden/img1.jpg', 0]],
]);






console.log(mebel)
document.querySelectorAll('.tc').forEach(
  item => item.addEventListener('click', function() {
    cart.push(item.id)
    console.log(cart)
    var a = new Set(cart);
    var trueCart = Array.from(a);
    mebel.forEach(function(value,key) {
      for (let i = 0; i < trueCart.length; i++) {
        if(trueCart[i] == key && value[2] == 0) {
          value[2]++;
          console.log(key)
          var div = document.createElement('div');
          div.classList.add(key)
      
          div.innerHTML = `<img src='${value[1]}'></img> <p>${value[0]}</p><h4>(x${value[2]})</h4>`;
     
          document.querySelector(".text-wrap").appendChild(div);
          cart.shift()
      } else if (trueCart[i] == key && value[2] > 0 ) {
        value[2]++;
        console.log(key)
        let ss = document.querySelector(`.${key}`)
        ss.innerHTML = `<img src='${value[1]}'></img><p>${value[0]}</p><h4> (x${value[2]})</h4>`
        cart.shift()
      }
      }
    });

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
cer.addEventListener('click', () => {
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
let paths = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']
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
  sliderTrigger0.src = 'sofas/monaco/' + paths[i] })



