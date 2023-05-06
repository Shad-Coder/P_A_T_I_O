

let mebel = {
  a1: { name: 'The "Monaco" model', image: "sofas/4.jpg", count: 0 },
  a2: { name: 'The "Provence" model', image: "sofas/1.jpg", count: 0 },
  a3: { name: 'The "Versailles" model', image: "sofas/versal/3.jpg", count: 0 },
  a4: { name: 'The "Domino" model', image: "sofas/2.jpg", count: 0 },
  a5: { name: 'The "Aurora" model', image: "garden/aurora/img1.jpg", count: 0 },
  a6: {
    name: 'The "Forest" model',
    image: "benches/forest/img1.jpg",
    count: 0,
  },
  a7: {
    name: 'The "Monaco" model',
    image: "benches/monaco/img1.jpg",
    count: 0,
  },
  a8: {
    name: 'The "Peterhof" model',
    image: "benches/peterhof/img1.jpg",
    count: 0,
  },
  a9: {
    name: 'The "Versailles" model',
    image: "benches/versal/img1.jpg",
    count: 0,
  },
  a10: { name: "Aurora Kit", image: "garden/aurora/img1.jpg", count: 0 },
  a11: {
    name: "Montenegro Kit",
    image: "garden/montenegro/img1.jpg",
    count: 0,
  },
  a12: { name: 'Set "Versal"', image: "garden/versal/img1.jpg", count: 0 },
  a13: { name: 'Swing "Arizona"', image: "garden/arizona/img1.jpg", count: 0 },
  a14: {
    name: 'Swing "Italian fantasy"',
    image: "garden/italian/img1.jpg",
    count: 0,
  },
  a15: { name: "Flamingo Swing", image: "garden/flameingo/img1.jpg", count: 0 },
  a16: {
    name: 'Wooden swing "Wind"',
    image: "garden/wooden/img1.jpg",
    count: 0,
  },
};

document.onclick = (event) => {
  if (event.target.classList.contains("addToCart")) {
    plusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains("minus")) {
    minusFunction(event.target.dataset.id);
  }
  if (event.target.classList.contains("plus")) {
    plusFunction(event.target.dataset.id);
  }
};
const plusFunction = (id) => {
  mebel[id]["count"]++;
  // console.log(mebel[id]);
  renderCart(id);
};
const minusFunction = (id) => {
  mebel[id]["count"]--;
  //  console.log(mebel[id]);
  renderCart(id);
};

const renderCart = (id) => {
  if (mebel[id]["count"] == 1) {
    try {
      document.querySelector(
        `.${id}`
      ).innerHTML = `${mebel[id]["name"]}<img src='${mebel[id]["image"]}'></img> <button type='button'  class="minus" data-id="${id}"'>-</button>${mebel[id]["count"]}<button type='button'  class="plus" data-id="${id}"'>+</button>`;
    } catch {
      document.querySelector(
        ".text-wrap"
      ).innerHTML += `<div class = "${id}">${mebel[id]["name"]}<img src='${mebel[id]["image"]}'></img> <button type='button'  class="minus" data-id="${id}"'>-</button>${mebel[id]["count"]}<button type='button'  class="plus" data-id="${id}"'>+</button></div>`;
    }
  } else if (mebel[id]["count"] > 1) {
    document.querySelector(
      `.${id}`
    ).innerHTML = `${mebel[id]["name"]}<img src='${mebel[id]["image"]}'></img> <button type='button'  class="minus" data-id="${id}"'>-</button>${mebel[id]["count"]}<button type='button'  class="plus" data-id="${id}"'>+</button>`;
  } else {
    try {
      document.querySelector(`.${id}`).remove();
    } catch {
      document.querySelector(".text-wrap").innerHTML += ``;
    }
  }
};
