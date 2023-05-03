interface User{
  username: string
  dateOfBirth: number
}

class Admin implements User {
  dateOfBirth: number
  username: string

  constructor( dateOfBirth: number,  username: string){
    this.dateOfBirth = dateOfBirth
    this.username = username
  }
}

class Auditor extends Admin {
}

type Alias = User
var person: Alias = {username: 'juninho', dateOfBirth: 1975}
var admin: Alias = new Auditor(2006, 'Beckham')
console.log(person)
console.log(typeof person === undefined)
console.log(admin instanceof Admin)
