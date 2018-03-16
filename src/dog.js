// @flow

class Dog {
  name: string
  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Roof! Roof! I am ${this.name}`
  }
}
export default Dog
