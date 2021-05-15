export class Maybe {
  constructor(value) {
    this._value = value  
  }

  static of (val) {
    return new Maybe(val)
  }

  isNothing () {
    return this._value === null || this._value === undefined
  }

  map (fn) {
    if(this.isNothing()) return Maybe.of(null)
    return Maybe.of( fn(this._value) )
  }

  getOrElse (value) {
    if(this.isNothing()) return value
    return this._value
  }
}