export const testimonials = (testimonials) => {
  const text = document.querySelectorAll(".block-testimonial__card-text");
  const author = document.querySelectorAll(".block-testimonial__card-author");
  const workplace = document.querySelectorAll(
    ".block-testimonial__card-workplace"
  );

  for (let i = 0; i < text.length; i++) {
    text[i].textContent = testimonials[i].text;
    author[i].textContent = testimonials[i].name;
    workplace[i].textContent = testimonials[i].job;
  }
};
