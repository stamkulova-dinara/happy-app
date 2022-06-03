export const sendFormValidation = () => {
  const modal = document.querySelector(".modal");
  const form = document.getElementById("form");
  const username = document.getElementById("name");
  const email = document.getElementById("email");
  const checkbox = document.querySelectorAll("input[class='checkbox']");
  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const checkboxError = document.querySelector(".checkbox-error");
  const loading = document.querySelector(".modal-content__form__loading");

  let info = {
    username: "",
    email: "",
    choosenPlan: "",
    app: {},
  };

  function checkEmail(input) {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input.value.trim())) {
      emailError.textContent = "";
      email.removeAttribute("class");
      info.email = input.value;
    } else {
      emailError.textContent = "this field is reqiured*";
      email.setAttribute("class", "error-input");
    }
  }

  function checkboxCheck() {
    const checkboxes = document.querySelectorAll("input[class='checkbox']:checked");
    if (checkboxes.length == 0) {
      checkboxError.textContent = "Please, choose one option";
    } else {
      checkboxError.textContent = "";
    }
  }

  const checkName = () => {
    if (!username.value) {
      nameError.textContent = "this field is reqiured*";
      username.setAttribute("class", "error-input");
    } else if (username.value.length < 3) {
      nameError.textContent = "length shoulbe be at least 3 characters";
      username.setAttribute("class", "error-input");
    } else {
      info.username = username.value;
      nameError.textContent = "";
      username.removeAttribute("class");
    }
  };

  function loadingValidate() {
    const checkboxes = document.querySelectorAll("input[class='checkbox']:checked");
    if (username.value && email.value && !nameError.textContent && checkboxes.length !== 0) {
      loading.setAttribute("id", "loading");
      setTimeout(function () {
        modal.classList.remove("modal-visiblity");
        email.value = "";
        username.value = "";
        loading.removeAttribute("id");
        checkboxes.forEach(e => e.checked = false);
      }, 2000);
    }
  }

  function initOnchange(inputArr) {
    inputArr.forEach((item) => {
      item.addEventListener("input", () => {
        if (item.id == "name") {
          checkName();
        } else if (item.id == "email") {
          checkEmail(email);
        }
      });
    });
  }

  function onChangeCheckbox() {
    checkbox.forEach((el) => {
      el.addEventListener("input", () => {
        const checkboxes = document.querySelectorAll("input[class='checkbox']:checked");
        checkboxCheck();
        checkboxes.forEach((el) => {
          info.app = el.value;
        });
      });
    });
    info.choosenPlan = document.querySelector("input[type='radio']:checked").value;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    initOnchange([username, email]);
    checkEmail(email);
    checkName();
    onChangeCheckbox();
    checkboxCheck();
    loadingValidate();
    console.log(info);
  });
};
