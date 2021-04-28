import { handleStatus } from '../utils/promiseHelpers.js'

const api = '/notas'

export const noteService = {
  listAll () {
    return fetch(api).then(handleStatus)
  }
}