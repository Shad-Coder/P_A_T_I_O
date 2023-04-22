let swings = document.querySelector('.swings')
let garden = document.querySelector('.garden')
let pergolas = document.querySelector('.pergolas')
let sw = document.querySelector('.sw')
let gd = document.querySelector('.gd')
let pg = document.querySelector('.pg')

sw.addEventListener('click', function() {
  swings.classList.remove('disable')
  garden.classList.add('disable')
  pergolas.classList.add('disable')
  sw.classList.add('actived')
  gd.classList.remove('actived')
  pg.classList.remove('actived')
})

gd.addEventListener('click', function() {
  garden.classList.remove('disable')
  swings.classList.add('disable')
  pergolas.classList.add('disable')
  gd.classList.add('actived')
  sw.classList.remove('actived')
  pg.classList.remove('actived')
})

pg.addEventListener('click', function() {
   pergolas.classList.remove('disable')
  garden.classList.add('disable')
  swings.classList.add('disable')
  pg.classList.add('actived')
  gd.classList.remove('actived')
  sw.classList.remove('actived')
})

