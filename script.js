// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});



// Review submit message

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for your review! ❤️");

form.reset();

});

}



// Trust badges animation

const badges = document.querySelectorAll(".trust div");

let delay = 0;

badges.forEach(badge=>{

badge.style.animationDelay = delay+"s";

delay += 0.5;

});
