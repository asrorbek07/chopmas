let pizzaOptions = {
  breadTypes: [
    {
      name: "Yupqa",
      price: 10000
    },
    {
      name: "Qalin",
      price: 10000
    },
    {
      name: "Buxanka",
      price: 7000
    }
  ],
  sizes: [
    {
      name: "Katta",
      size: 35,
      price: 45000
    },
    {
      name: "Kichik",
      size: 25,
      price: 25000
    },
    {
      name: "Oilaviy",
      size: 40,
      price: 50000
    },
    {
      name: "O'rtacha",
      size: 30,
      price: 30000
    }
  ],
  products: [
    {
      name: "Pomidor",
      price: 4000
    },
    {
      name: "Birnima",
      price: 1000
    },
    {
      name: "Tuzlangan bodring",
      price: 5000
    },
    {
      name: "Qazi",
      price: 15000
    },
    {
      name: "Kurka go'shti",
      price: 12000
    },
    {
      name: "Zaytun",
      price: 5000
    },
    {
      name: "Qo'ziqorin",
      price: 7000
    }
  ],
  asortiments: [
    {
      name: "Achchiq",
      price: 5000
    },
    {
      name: "Sosiskali",
      price: 7000
    }
  ]
};
let order = {
  type: [],
  size: [],
  product: [],
  asortiment: []
};

let elPitsaSelectTemplate = document.querySelector('.pitsa__select-template').content;
let elPitsaSizeTemplate = document.querySelector('.pitsa__size-template').content;
let elPitsaProductTemplate = document.querySelector('.pitsa_product-template').content;
let elPitsaAsortimentTemplate = document.querySelector('.pitsa__asortiment-template').content;
let elPitsaForm = document.querySelector('.pitsa__form');
let elPitsaSelect = document.querySelector('.pitsa__select');
let elPitsaSizeWrap = document.querySelector('.pitsa__size-wrap');
let elPitsaProductWrap = document.querySelector('.pitsa__product__wrap');
let elPitsaAsortimentWrap = document.querySelector('.pitsa__asortiment__wrap');
let elPitsaSelectOutput = document.querySelector('.pitsa__select-output');
let elPitsaSizeOutput = document.querySelector('.pitsa__size-output');
let elPitsaProductOutputList = document.querySelector('.pitsa__product-output-list');
let elPitsaAsortimentOutputList = document.querySelector('.pitsa__asortiment-output-list');


// add pitsa option

function createOption(option) {
  let elPitsaOption = elPitsaSelectTemplate.cloneNode(true);
  elPitsaOption.querySelector('.pitsa__select-option').value = option.name;
  elPitsaOption.querySelector('.pitsa__select-option').textContent = option.name;
  return elPitsaOption;
}
function showPitsaOption() {
  let pitsaoptionFragment = document.createDocumentFragment();
  pizzaOptions.breadTypes.slice().sort(function (a, b) {
    return a.price - b.price
  }).forEach(name => {
    pitsaoptionFragment.appendChild(createOption(name));
  });
  elPitsaSelect.appendChild(pitsaoptionFragment);
}
showPitsaOption()

// add pitsa size

function createPitsaSize(size) {
  let pitsaSize = elPitsaSizeTemplate.cloneNode(true);
  pitsaSize.querySelector('.pitsa__size').value = size.size;
  pitsaSize.querySelector('.pitsa__size-control').textContent = size.name + ' ' + size.size + ' sm';
  return pitsaSize;
}
function showPitsaSize() {
  let pitsaSizeFragment = document.createDocumentFragment();
  pizzaOptions.sizes.slice().sort(function (a, b) {
    return a.name - b.name;
  }).forEach(size => {
    pitsaSizeFragment.appendChild(createPitsaSize(size))
  });
  elPitsaSizeWrap.appendChild(pitsaSizeFragment);
}
showPitsaSize()

//  add pitsa product

function createPitsaProduct(product) {
  let pitsaProduct = elPitsaProductTemplate.cloneNode(true);
  pitsaProduct.querySelector('.pitsa__product').name = product.name;
  pitsaProduct.querySelector('.pitsa__product-control').textContent = product.name;
  return pitsaProduct;
}
function showPitsaProduct() {
  let pitsaProductFragment = document.createDocumentFragment();
  pizzaOptions.products.slice().sort(function (a, b) {
    return a.name - b.name;
  }).forEach(products => {
    pitsaProductFragment.appendChild(createPitsaProduct(products))
  });
  elPitsaProductWrap.appendChild(pitsaProductFragment);
}
showPitsaProduct();
// add pitsa asortiment
function createPitsaAsortiment(asortiment) {
  let pitsaAsortiment = elPitsaAsortimentTemplate.cloneNode(true);
  pitsaAsortiment.querySelector('.pitsa__asortiment').name = asortiment.name;
  pitsaAsortiment.querySelector('.pitsa__asortiment-control').textContent = asortiment.name;
  return pitsaAsortiment;
}

function showPitsaAsortiment() {
  let pitsaAsortimentFragment = document.createDocumentFragment();
  pizzaOptions.asortiments.slice().sort(function (a, b) {
    return a.name - b.name;
  }).forEach(asortiment => {
    pitsaAsortimentFragment.appendChild(createPitsaAsortiment(asortiment))
  });
  elPitsaAsortimentWrap.appendChild(pitsaAsortimentFragment);
}
showPitsaAsortiment()

// showPitsaSelectOutput

function showPitsaSelectOutput() {
  elPitsaSelect.addEventListener('change', function () {
    pizzaOptions.breadTypes.forEach(types => {
      if (types.name === elPitsaSelect.value) {
        order.type[0] = types;
        elPitsaSelectOutput.textContent = order.type[0].name;
      }
    });
    calculatePrice()
  })
}
showPitsaSelectOutput()


// showPitsaSizeOutput

let pitsaSizes = document.querySelectorAll('.pitsa__size');
function showPitsaSizeOutput() {
  pitsaSizes.forEach(pitsaSize => {
    pitsaSize.addEventListener('change', function () {
      pizzaOptions.sizes.forEach(size => {
        if (size.size === Number(pitsaSize.value)) {
          order.size[0] = size;
          elPitsaSizeOutput.textContent = order.size[0].size
          console.log(order.size)
        }
      })
      calculatePrice()
    });
  });
}
showPitsaSizeOutput()

let pitsaProduct = document.querySelectorAll('.pitsa__product');
function showPitsaProductOutput() {
  pitsaProduct.forEach(pitsaProduct => {
    pitsaProduct.addEventListener('click', function () {
      if (pitsaProduct.checked) {
        pizzaOptions.products.forEach(products => {
          if (pitsaProduct.name === products.name) {
            order.product.push(products)
            let elPitsaProductOutputItem = document.createElement('li');
            elPitsaProductOutputItem.textContent = products.name;
            elPitsaProductOutputList.appendChild(elPitsaProductOutputItem)       
          }
        });
      } else {
        elPitsaProductOutputList.querySelectorAll('li').forEach(element => {
          if (element.textContent === pitsaProduct.name) {
            element.remove()
          }
          for (let i = 0; i < order.product.length; i++) {
            if (order.product[i].name === pitsaProduct.name) {
              order.product.splice(i, i + 1)
            }
          }
        });     
      }
      calculatePrice()
    })
  });
}
showPitsaProductOutput()

let pitsaAsortiment = document.querySelectorAll('.pitsa__asortiment');
function showPitsaAsortimentOutput() {
  pitsaAsortiment.forEach(pitsaAsortiment => {
    pitsaAsortiment.addEventListener('click', function () {
      if (pitsaAsortiment.checked) {
        pizzaOptions.asortiments.forEach(asortiments => {
          if (pitsaAsortiment.name === asortiments.name) {
            order.asortiment.push(asortiments);
            // console.log(order.asortiment)
            let elPitsaAsortimentOutputItem = document.createElement('li');
            elPitsaAsortimentOutputItem.textContent = asortiments.name;
            elPitsaAsortimentOutputList.appendChild(elPitsaAsortimentOutputItem);          
          }
        });
      } else {
        elPitsaAsortimentOutputList.querySelectorAll('li').forEach(element => {
          if (element.textContent === pitsaAsortiment.name) {
            element.remove()
          }
          for (let i = 0; i < order.asortiment.length; i++) {
            if (order.asortiment[i].name === pitsaAsortiment.name) {
              order.asortiment.splice(i, i + 1)
            }
          }
        });  
      }
      calculatePrice()
    })
  });
}
showPitsaAsortimentOutput()
let sum = 0;
let elPitsaSumOutput = document.querySelector('.pitsa__sum-output');
elPitsaSumOutput.textContent = sum;
let calculatePrice = function () {
  sum=0;
  if (order.type.length > 0) {
    sum += order.type[0].price;
  }
  if (order.size.length > 0) {
    sum += order.size[0].price;
  }
  if (order.product.length > 0) {
    order.product.forEach(orderProducts => {
      sum += orderProducts.price
    });
  }
  if(order.asortiment.length>0){
    order.asortiment.forEach(orderAsortiment => {
      sum+=orderAsortiment.price;
    });
  }
  elPitsaSumOutput.textContent = sum
}



















