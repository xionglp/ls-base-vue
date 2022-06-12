class Person {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  set name(newName: string) {
    this._name = newName
  }

  get name() {
    return this._name
  }
}

const p = new Person("xionglp")
p.name = "kobe"
console.log(p.name)

export{}
