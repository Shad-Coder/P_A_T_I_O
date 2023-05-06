let swings = document.querySelector(".swings");
let garden = document.querySelector(".garden");
let pergolas = document.querySelector(".pergolas");
let sw = document.querySelector(".sw");
let gd = document.querySelector(".gd");
let pg = document.querySelector(".pg");
let ct = document.querySelector(".lnr-cart");
let cw = document.querySelector(".cw");
let cc = document.querySelector(".cc");
let cm = document.querySelector(".cm");
let menu = document.querySelector(".menu");
let prim = document.querySelector(".primary-nav-trigger");
let cross = document.querySelector(".vv");
let nav = document.querySelector("#vv");
let thx = document.querySelector('#thx')
let form = document.querySelector('.gg')
let col = document.querySelector('.back')
let formButton = document.querySelector('#fb')
let sliderTrigger0 = document.querySelector("#img0");
let sliderTrigger1 = document.querySelector("#img1");
let sliderTrigger2 = document.querySelector("#img2");
let sliderTrigger3 = document.querySelector("#img3");
let sliderTrigger4 = document.querySelector("#img4");
let sliderTrigger5 = document.querySelector("#img5");
let sliderTrigger6 = document.querySelector("#img6");
let sliderTrigger7 = document.querySelector("#img7");
let sliderTrigger8 = document.querySelector("#img8");
let sliderTrigger9 = document.querySelector("#img9");
let sliderTrigger10 = document.querySelector("#img10");
let sliderTrigger11 = document.querySelector("#img11");
let sliderTrigger12 = document.querySelector("#img12");

let cer = document.querySelector(".cer");
let ii = 0;

formButton.addEventListener('click', () => {
  form.classList.add('disable')
  formButton.classList.add('disable')
  thx.classList.remove('disable')
  col.classList.add('backed')
})



ct.addEventListener("click", () => {
  cw.classList.add("cart-wrapper");
  cw.classList.remove("disable");
  cc.classList.remove("disable");
  cc.classList.add("cart-closer");
  cm.classList.remove("disable");
  cm.classList.add("cart-menu");
});
cc.addEventListener("click", () => {
  cw.classList.add("disable");
  cw.classList.remove("cart-wrapper");
  cc.classList.remove("cart-closer");
  cc.classList.add("toggled");
  cm.classList.remove("cart-menu");
  cm.classList.add("disable");
});
cer.addEventListener("click", () => {
  cw.classList.add("disable");
  cw.classList.remove("cart-wrapper");
  cc.classList.remove("cart-closer");
  cc.classList.add("toggled");
  cm.classList.remove("cart-menu");
  cm.classList.add("disable");
});
sw.addEventListener("click", () => {
  swings.classList.remove("disable");
  garden.classList.add("disable");
  pergolas.classList.add("disable");
  sw.classList.add("actived");
  gd.classList.remove("actived");
  pg.classList.remove("actived");
  console.log("+++");
});

gd.addEventListener("click", () => {
  garden.classList.remove("disable");
  swings.classList.add("disable");
  pergolas.classList.add("disable");
  gd.classList.add("actived");
  sw.classList.remove("actived");
  pg.classList.remove("actived");
  console.log("+");
});

pg.addEventListener("click", () => {
  pergolas.classList.remove("disable");
  garden.classList.add("disable");
  swings.classList.add("disable");
  pg.classList.add("actived");
  gd.classList.remove("actived");
  sw.classList.remove("actived");
});
menu.addEventListener("click", () => {
  prim.classList.toggle("rotate");
  nav.classList.add("navigate");
  nav.classList.remove("offnav");
});

cross.addEventListener("click", () => {
  prim.classList.toggle("rotate");
  nav.classList.add("offnav");
});
let paths = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
let i = 2;

sliderTrigger0.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger0.src = "sofas/monaco/" + paths[i];
});

sliderTrigger1.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger1.src = "sofas/provence/" + paths[i];
});

sliderTrigger2.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger2.src = "sofas/versal/" + paths[i];
});

sliderTrigger3.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger3.src = "sofas/domino/" + paths[i];
});

sliderTrigger4.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger4.src = "benches/aurora/" + paths[i];
});

sliderTrigger5.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger5.src = "benches/forest/" + paths[i];
});

sliderTrigger6.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger6.src = "benches/monaco/" + paths[i];
});

sliderTrigger7.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger7.src = "benches/peterhof/" + paths[i];
});

sliderTrigger8.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger8.src = "benches/versal/" + paths[i];
});

sliderTrigger9.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger9.src = "garden/aurora/" + paths[i];
});

sliderTrigger10.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger10.src = "garden/montenegro/" + paths[i];
});

sliderTrigger11.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger11.src = "garden/versalz/" + paths[i];
});

sliderTrigger12.addEventListener("click", () => {
  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
  sliderTrigger12.src = "garden/versalz/" + paths[i];
});
