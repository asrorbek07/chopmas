let select = document.querySelector('select');
let elSelect = document.querySelector('.select');
let radios = document.querySelectorAll('.pitsa__size');
let elRadio = document.querySelector('.radio');
let products = document.querySelectorAll('.pitsa__product');
let productList = document.querySelector('.pitsa__ustida');
let asortiments = document.querySelectorAll('.pitsa__asortiment');
let asortimentList = document.querySelector('.pitsa__qoshimcha')
select.onchange = function(){
    elSelect.textContent=select.value;
}
radios.forEach(radio => {
    radio.addEventListener('change', function () {
        elRadio.textContent=radio.value+" sm";
    });
});

products.forEach(product => {
    product.onclick= function(){
        if(product.checked){
            let newElement = document.createElement('li');
            newElement.textContent=product.value;
            productList.append(newElement);
        }
        else{
        productItems = productList.querySelectorAll('li');
    productItems.forEach(productItem => {
            if(productItem.textContent===product.value){
                productItem.remove();
            }
        });

        }
      
    }
});
asortiments.forEach(asortiment => {
    asortiment.onclick= function(){
        if(asortiment.checked){
            let newElement = document.createElement('li');
            newElement.textContent=asortiment.value;
            asortimentList.append(newElement);
        }
        else{
        asortimentItems = asortimentList.querySelectorAll('li');
    asortimentItems.forEach(asortimentItem => {
            if(asortimentItem.textContent===asortiment.value){
                asortimentItem.remove();
            }
        });

        }
      
    }
});



