import { noteService as service } from './services/noteService.js'
import { log, delay } from './utils/promiseHelpers.js'
import { takeUntil, debounce, partialize, pipe } from './utils/operators.js'
import { EventEmitter } from './utils/EventEmitter.js'
import './utils/arrayUtils.js'

const operations = pipe(
  partialize(takeUntil, 3),
  partialize(debounce, 500)
)

const action = operations(() =>  
  service
    .sumItems('2143')
    .then(data => EventEmitter.emit('totalItems', data))
    .catch(log)
)


document.querySelector('#myButton')
  .onclick = action
    
  