import config from '../../../data/config.json' assert {type: "json"}
 
const [ standart, premium, lifetime ] = config.plans;

function renderPlansFromConfig({ name, price }) {
    document.querySelector(`.${name}`).innerText = name;
    document.querySelector(`.${name}-price`).innerText = `$${price}`;
 }

 renderPlansFromConfig(standart);
 renderPlansFromConfig(premium);
 renderPlansFromConfig(lifetime);