  class User{

    constructor(name, lastName){
        //properties

        this.name=name;
        this.lastName=lastName;
    }

    fullName(){
        return `${this.name} ${this.lastName}`;
    }

}

  class Client {

    constructor(cpf){
        this.cpf =  cpf;
    }


}

function printUser (user){
    let outputText = `The User name  is ${user.name}
                    and User last name is ${user.lastName}`;

    document.getElementById("output").innerHTML += outputText;
}

function printClient (client){
    let outputText = `The CPF Client is ${client.cpf}`;
    document.getElementById("output").innerHTML += outputText;
}

export {User, Client, printUser, printClient}


