// close modal
const modal = document.querySelector(".modal");
const closeModal = document.querySelector('.modal__wrapper__close')

closeModal.addEventListener('click', () => {
  modal.classList.remove("modal-visiblity")
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

// modal form validation
const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const nameError = document.querySelector('#username-error')
const emailError = document.querySelector('#email-error')
const checkboxError = document.querySelector('.error')
const loading = document.querySelector('.modal-content__form__loading')

function checkEmail(input) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(input.value.trim())) {
        emailError.textContent = ''
        email.removeAttribute('class')
    }else {
      emailError.textContent = 'this field is reqiured*'
      email.setAttribute('class', 'error-input')
    }
}

function checkboxCheck() {
  let checkboxes = document.querySelectorAll("input[class='checkbox']:checked")
  if(checkboxes.length == 0) {
    checkboxError.textContent = 'Please, choose one option'
  } else {
    checkboxError.textContent = ''
  }
}

function checkUserName(input) {
  if(input.value.length == 0) {
    nameError.textContent = 'this field is reqiured*'
    username.setAttribute('class', 'error-input')
  } else {
    nameError.textContent = ''
    username.removeAttribute('class')
  }
}

function loadingValidate() {
  if(!nameError.textContent && !emailError.textContent && !checkboxError.textContent) {
    loading.id = "loading"
    setInterval(function () { modal.classList.remove("modal-visiblity")}, 2000);
  }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkEmail(email);
    checkUserName(username)
    checkboxCheck();
    loadingValidate();
});