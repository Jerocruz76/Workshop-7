function GeneralUser(name,email,clave){
  this.name = name
  this.email = email
  this.clave = clave
}

function NormalUser(name,email,clave){
  GeneralUser.call(this,name,email,clave)
}

NormalUser.prototype = Object.create()
NormalUser.prototype.constructor = NormalUser