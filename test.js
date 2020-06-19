const person = {
  name:'mike',
  age:25,
  greet() {
    console.log(`Hi, ${this.name}`)
  }
}
const printName = ({name, age}) => {
  console.log(name, age)
}

printName(person)