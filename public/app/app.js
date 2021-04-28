import { noteService as service } from './services/noteService.js'
import { log } from './utils/promiseHelpers.js'
import './utils/arrayUtils.js'



document.querySelector('#myButton')
  .onclick = () =>
    service
    .sumItems('2143')
    .then(log)
    .catch(log)
  