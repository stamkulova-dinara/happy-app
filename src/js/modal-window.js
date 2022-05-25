const form = document.getElementById("form");
const username = document.getElementById("name");
const email = document.getElementById("email");

function checkEmail(e) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regex.test(e.value.trim())) {
        console.log(true)
    }else {
        console.log(false);
    }
}

form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkEmail(email)
});

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

const modal = document.querySelector(".modal");

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
