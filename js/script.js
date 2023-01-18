const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselElement = document.querySelector('.carousel');





for (let i = 0; i < images.length; i++) {
   

    carouselElement.innerHTML +=`<div class="slide">
                                    <img src= "${images[i].image}">
                                    <span > 
                                        <h2>${images[i].title}</h2>
                                        <p>${images[i].text}</p>
                                    </span>
                                 </div>` ;
}



const allSlides = document.querySelectorAll('.slide');

let currentSlide = 0;

allSlides[0].classList.add('current');




const nextArrow = document.querySelector('.next');
nextArrow.addEventListener ('click',

    function ()  {

        allSlides[currentSlide].classList.remove('current');
        // currentSlide = currentSlide + 1;

        if (currentSlide == allSlides.length - 1) {

            currentSlide = 0;
           

        }
        else {
            currentSlide = currentSlide + 1 ;
        }


        allSlides[currentSlide].classList.add('current');


       

        
    }

);


const previousArrow = document.querySelector('.previous');
previousArrow.addEventListener('click',

function ()  {

    allSlides[currentSlide].classList.remove('current');


    


    if (currentSlide == 0) {
        currentSlide = allSlides.length - 1;

    }

    else {
        currentSlide = currentSlide - 1;
    }

    allSlides[currentSlide].classList.add('current');


    


   
}

);
