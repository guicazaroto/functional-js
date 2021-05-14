import { handleStatus } from '../utils/promiseHelpers.js'
import { partialize, compose, pipe } from '../utils/operators.js'

const api = '/notas'

const getAllItems = notes => notes.$flatMap(arr => arr.itens)
const filterByCode = (code, items) => items.filter(item => item.codigo === code)
const sumItemsValue = notes => notes
  .reduce((total, item) => total + item.valor, 0)

export const noteService = {
  listAll () {
    return fetch(api)
      .then(handleStatus)
      .catch(err => {
        console.log(err)
        Promise.reject('Ocorreu um erro');
      })
  },
  sumItems (code) {
    const filterItems = partialize(filterByCode, code)
    const sumItems = pipe(getAllItems, filterItems, sumItemsValue)

    return this.listAll().then(sumItems)
  }
}