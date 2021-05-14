export const handleStatus = res =>
  res.ok ? res.json() : Promise.reject(res.statusText)

export const log = param => {
  console.log(param)
  return param
}

export const delay = milliseconds => data =>
  new Promise((resolve, reject) => setTimeout(() =>
    resolve(data), milliseconds))