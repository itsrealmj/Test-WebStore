
// menu-bar
    let menu = document.querySelector('#menu')
    let menuModalBg = document.querySelector('.menu-modal-bg')
    let closedMenu = document.querySelector('#closed-menu')
    
    menu.addEventListener('click', function(){              
        menuModalBg.classList.add('menu-modal-bg-active'); 
    })
    closedMenu.addEventListener('click', function(){
        menuModalBg.classList.remove('menu-modal-bg-active')
    })
// menu-bar end
    let first =  document.querySelector('#first');
    let productContainer = document.querySelectorAll('.product-container')
    let productPopupBg = document.querySelector('.product-popup-bg');
    let plus = document.getElementById('plus');
    let minus = document.getElementById('minus');
    let count = document.getElementById('count');
    let availableStock = document.getElementById('available-stock');
    let placeOrderBtn = document.getElementById('place-order-btn');
    let closedBtnPopup = document.querySelector('.closed-btn-popup');
    let payment = document.getElementById('payment');

         
    productContainer[0].addEventListener('click', function(){ 
                   productPopupBg.classList.add('active-BG');
            });
            closedBtnPopup.addEventListener('click', function(){
                productPopupBg.classList.remove('active-BG');
            });
    

        count.innerHTML = 1;

        plus.addEventListener('click', function(){
            count.innerHTML++;
            availableStock.innerHTML--;
            payment.innerHTML = 100 * count.innerHTML;
            
        });

        minus.addEventListener('click', function(){
            count.innerHTML--;
            if ( count.innerHTML = 0) {
                availableStock = availableStock.value; 
            }
            availableStock.innerHTML++;
            payment.innerHTML = 100 * count.innerHTML;
            if (count.innerHTML < 0 ) {
                count.innerHTML = 0;

            }
        });

        placeOrderBtn.addEventListener('click', function(){
            productPopupBg.remove();
            alert("Successfully Ordered " + count.innerHTML + " PCS")

        });    
// 
var reviews = [
    {
    uniqueNumber : 0,
    personImage : "./images/customer1.jpg",
    personName  : "Juan miguel",
    jobPosition : "Front",
    jobDescription : "A very good son"
    },
    {
    uniqueNumber : 1,
    personImage : "./images/customer2.jpg",
    personName : "MJ",
    jobPosition : "DevOps",
    jobDescription : "A very good husband"
    },
    {
    uniqueNumber : 2,
    personImage :"./images/customer3.jpg" ,
    personName : "Joy",
    jobPosition : "Designer",
    jobDescription : "A comment from our valued customer at our Facebook page"
    }
];

let personImage = document.getElementById('personImage');
// let personName = document.getElementById('personName');
// let jobPosition = document.getElementById('jobPosition');
// let jobDescription = document.getElementById('jobDescription');

const preview = document.querySelector('#preview');
const next = document.querySelector('#next');



let currentDisplay = 2;

window.addEventListener('DOMContentLoaded',function(){
    showperson();
});

function showperson() {
    let item = reviews[currentDisplay];
    personImage.src = item.personImage; 
    // personName.textContent = item.personName;
    // jobPosition.textContent = item.jobPosition;
    // jobDescription.textContent = item.jobDescription;
}
// next button
next.addEventListener('click', function(){
   
    currentDisplay++
    if(currentDisplay > reviews.length -1){
        currentDisplay = 0;
    }
    showperson()
})

// preview button
preview.addEventListener('click', function(){
    currentDisplay--
    if(currentDisplay < 0){
        currentDisplay = reviews.length -1
    }
    
    showperson()
})



