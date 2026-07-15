
// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        if(section){

            section.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});




// Review Button

function addReview(){

let name = prompt("Enter your name");

let review = prompt("Write your review");


if(name && review){

alert(
"Thank you " + name + 
"! Your review has been received ❤️"
);

}

else{

alert("Please complete your review.");

}


}




// Navbar shadow effect

window.addEventListener("scroll",()=>{


let header=document.querySelector("header");


if(window.scrollY>50){

header.style.boxShadow=
"0 5px 25px rgba(201,162,39,0.25)";

}

else{

header.style.boxShadow="none";

}


});




// Reveal animation on scroll


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";


}


});


});



document.querySelectorAll(
".product-card,.review-card,.trust div,.tester-box"
)
.forEach(el=>{


el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="0.8s";


observer.observe(el);


});
