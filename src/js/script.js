import config from '../../data/config.json' assert {type: "json"}

import { renderLink } from './modules/app-store-link.js'
import { getCountDown } from './modules/get-countdown.js'
import { testimonials } from './modules/testimonials.js'
import { renderPlans } from './modules/plans.js'
import { darkLightModeFunc } from './modules/dark-light-mode.js'

renderLink(config.appStoreLink)
getCountDown(config.timerEndDate)
testimonials(config.testimonials)
renderPlans(config.plans)
darkLightModeFunc()