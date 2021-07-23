let select = document.querySelector('select');
let elSelect = document.querySelector('.select');
let radios = document.querySelectorAll('.pitsa__size');
let elRadio = document.querySelector('.radio');
let products = document.querySelectorAll('.pitsa__product');
let productList = document.querySelector('.pitsa__ustida');
select.onchange = function(){
    elSelect.textContent=select.value;
}
radios.forEach(radio => {
    radio.addEventListener('change', function () {
        elRadio.textContent=radio.value+" sm";
    });
});
console.log(products)
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



