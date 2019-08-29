import {User, Client, printClient, printUser} from './user.js'


let u =  new User("Jão","da Silva");
// console.log(u.fullName());
printUser(u);


let c = new Client(990909)
// console.log(c.cpf)

printClient(c)