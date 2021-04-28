import { handleStatus } from '../utils/promiseHelpers.js'

const api = '/notas'

const sumItems = code => notes => notes
  .$flatMap(arr => arr.itens)
  .filter(item => item.codigo === code)
  .reduce((total, item) => total + item.valor, 0)

export const noteService = {
  listAll () {
    return fetch(api).then(handleStatus)
  },
  sumItems (code) {
    return this.listAll().then(sumItems(code))
  }
}