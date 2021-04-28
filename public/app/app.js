import { noteService as service } from './services/noteService.js'
import { log } from './utils/promiseHelpers.js'
import './utils/arrayUtils.js'

const sumItems = code => notes => notes
  .$flatMap(arr => arr.itens)
  .filter(item => item.codigo === code)
  .reduce((total, item) => total + item.valor, 0)

document.querySelector('#myButton')
  .onclick = () =>
    service
    .listAll()
    .then(sumItems('2143'))
    .then(log)
    .catch(log)
  