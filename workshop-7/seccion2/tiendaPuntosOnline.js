let arrayUser = []
let arrayAdmin = []
let points = 0
let x = true

function GeneralUser(name,email,clave){
  this.name = name
  this.email = email
  this.clave = clave
}

function NormalUser(name,email,clave,puntosAcumulados){
  GeneralUser.call(this,name,email,clave)
  this.puntosAcumulados = puntosAcumulados
}

NormalUser.prototype = Object.create(GeneralUser.prototype)
NormalUser.prototype.constructor = NormalUser

function AdminUser(name, email,clave){
  GeneralUser.call(this,name,email,clave)
}

AdminUser.prototype = Object.create(GeneralUser.prototype)
AdminUser.prototype.constructor = AdminUser



class Utility{
  static roll = function(user,admin){
    let userPromptRoll = parseInt(prompt("Ingresa 1 para ingresar como cliente o 2 para ingresar como administrador"))
    switch(userPromptRoll){
      case 1:
        arrayUser.push(user)
        break
      case 2:
        arrayAdmin.push(admin)
        break
    }
  }

  static buildEmail = function(){
  let email = prompt("Ingresa tu correo electrónico")
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let validEmail = regex.test(email)
  while(!validEmail){
    alert("Ingresa un correo válido")
    email = prompt("Ingresa tu correo electrónico")
    validEmail = regex.test(email)
  }
  return email
  }

  static buildUserName = function(){
    let name = prompt("Ingresa tu nombre de usuario")
    return name
  }

  static buildPass = function(){
    let pass = prompt("Ingresa tu contraseña")
    return pass
  }

  static accumPoints = function(){
    let apuesta = confirm("desea apostar para ganar puntos?")
    let randomizarNum = Math.random(0,50)
    if(apuesta){
      alert(`Has apostado y has ganado un total de ${randomizarNum} puntos`)
      points += randomizarNum
    }else{
      alert("Hasta luego")
    }
  }
}

let correo = Utility.buildEmail()
let userName = Utility.buildUserName()
let password = Utility.buildPass()
let puntos = Utility.accumPoints()

let userCostumer = new NormalUser(userName,correo,password, puntos)
let userAdmin = new AdminUser(userName,correo,password)

Utility.roll(userCostumer,userAdmin)

console.log(arrayAdmin);
console.log(arrayUser);

function Product(nombre,precio,cantidad){
  this.nombre = nombre
  this.precio = precio
  this.cantidad = cantidad
}

function VirtualProduct(nombre,precio,cantidad){
  Product.call(this,nombre,precio,cantidad)
}

VirtualProduct.prototype = Object.create(Product.prototype)
VirtualProduct.prototype.constructor = VirtualProduct

function PhysicalProduct(nombre,precio,cantidad,envio){
  Product.call(this,nombre,precio,cantidad)
  this.envio = envio
}

PhysicalProduct.prototype = Object.create(Product.prototype)
PhysicalProduct.prototype.constructor = PhysicalProduct

/* Only for admin */

let arrayProduct = []

Product.prototype.agregarProducto = function(name,price,quantity){
  let agregar = parseInt(prompt("Presiona 1 para ingresar un producto o 2 para eliminarlo"))
  if(agregar === 1){
    let nombre = prompt("Ingresa el nombre del producto")
    let precio = Number(prompt("Ingresa el precio del producto"))
    let cantidad = parseInt(prompt("Ingresa la cantidad del producto"))
    let product = new Product (nombre,precio,cantidad)
    return product
  }else if(agregar === 2){
  }
}



