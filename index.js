
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

let preview = document.querySelector('#preview');
let next = document.querySelector('#next');



var currentDisplay = 0;

window.addEventListener('DOMContentLoaded',function(){
    showperson();
});

function showperson() {
    var item = reviews[currentDisplay];
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



