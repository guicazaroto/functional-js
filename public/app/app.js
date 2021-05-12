import { noteService as service } from './services/noteService.js'
import { log } from './utils/promiseHelpers.js'
import { takeUntil, debounce } from './utils/operators.js'
import './utils/arrayUtils.js'


const action = debounce(500, takeUntil(3, () =>  
  service
    .sumItems('2143')
    .then(log)
    .catch(log)
  )
)

document.querySelector('#myButton')
  .onclick = action
    
  