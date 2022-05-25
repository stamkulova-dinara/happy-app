import config from '../../data/config.json' assert {type: "json"}
 
function getPlans() {
    const [ standart, premium, lifetime ] = config.plans;

    function tarifPlans({ name, price }) {
       document.querySelector(`.${name}`).innerText = name;
       document.querySelector(`.${name}-price`).innerText = `$${price}`;
    }

    tarifPlans(standart);
    tarifPlans(premium);
    tarifPlans(lifetime);

}

getPlans()