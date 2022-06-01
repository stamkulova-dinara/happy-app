import config from '../../../data/config.json' assert {type: "json"}

document.addEventListener('DOMContentLoaded', function() {
    const text = document.querySelectorAll(".block-testimonial__card-text");
    const author = document.querySelectorAll(".block-testimonial__card-author");
    const workplace = document.querySelectorAll(".block-testimonial__card-workplace");
   
    for(let i=0; i<text.length; i++){
        text[i].textContent = config.testimonials[i].text;
        author[i].textContent = config.testimonials[i].name;
        workplace[i].textContent = config.testimonials[i].job;
    }
});