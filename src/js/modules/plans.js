export const renderPlans = (plans) => {
    const [ standart, premium, lifetime ] = plans;

    function renderPlansFromConfig({ name, price }) {
        document.querySelector(`.${name}`).innerText = name;
        document.querySelector(`.${name}-price`).innerText = `$${price}`;
    }

    renderPlansFromConfig(standart);
    renderPlansFromConfig(premium);
    renderPlansFromConfig(lifetime);
}
