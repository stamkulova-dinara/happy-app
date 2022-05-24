const planInputs = document.querySelectorAll('.plan label input')
const plan = document.querySelector('.plan')

let plans = ''

const [...inputs] = planInputs

plan.addEventListener('click' , () => {
    inputs.forEach(item => {
        const activePlan = item.parentElement.getAttribute('id')
        if(item.checked){
            item.parentElement.classList.add(`plan-${activePlan}-active`)
            plans = activePlan
        }else{
            item.parentElement.classList.remove(`plan-${activePlan}-active`)
        }
    })
})

const modal = document.querySelector('.modal')

const tarifPlan = plan => {
    modal.classList.add('modal-visible')

    inputs.forEach(item => {
        const activePlan = item.parentElement.getAttribute('id')
        if(activePlan === plan){
            item.checked = true
            item.parentElement.classList.add(`plan-${activePlan}-active`)
            plans = activePlan
        }else{
            item.parentElement.classList.remove(`plan-${activePlan}-active`)
        }
    })
}
