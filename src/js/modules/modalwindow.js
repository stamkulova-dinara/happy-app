export const modalWindow = () => {
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector('.modal__wrapper__close')
  const herobtn = document.getElementById('hero-btn')
  const lifetime = document.getElementById('lifetime')
  const premium = document.getElementById('premium')
  const standart = document.getElementById('standart')

  closeModal.addEventListener('click', () => {
    modal.classList.remove("modal-visiblity")
    emailError.textContent = ''
    email.removeAttribute('class')
    nameError.textContent = ''
    username.removeAttribute('class')
    checkboxError.textContent = ''
  })

  const planInputs = document.querySelectorAll(".plan label input");
  const plan = document.querySelector(".plan");

  let plans = "";

  const [...inputs] = planInputs;

  plan.addEventListener("click", () => {
    inputs.forEach((item) => {
      const activePlan = item.parentElement.getAttribute("id");
      if (item.checked) {
        item.parentElement.classList.add(`plan-${activePlan}-active`);
        plans = activePlan;
      } else {
        item.parentElement.classList.remove(`plan-${activePlan}-active`);
      }
    });
  });

  const tarifPlan = (plan) => {
    modal.classList.add("modal-visiblity");

    inputs.forEach((item) => {
      const activePlan = item.parentElement.getAttribute("id");
      if (activePlan === plan) {
        item.checked = true;
        item.parentElement.classList.add(`plan-${activePlan}-active`);
        plans = activePlan;
      } else {
        item.parentElement.classList.remove(`plan-${activePlan}-active`);
      }
    });
  };

  lifetime.addEventListener('click', () => tarifPlan('lifetimes'))
  premium.addEventListener('click', () => tarifPlan('premiums'))
  standart.addEventListener('click', () => tarifPlan('standards'))
  herobtn.addEventListener('click', () => tarifPlan('lifetimes'))
}