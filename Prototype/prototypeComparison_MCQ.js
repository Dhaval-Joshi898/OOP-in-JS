function Game(name,plat){
    this.name=name;
    this.plat=plat
    
}
const fifa=new Game('fif','PS')
console.log(fifa.__proto__===Game.prototype)
console.log(fifa.__proto__.__proto__===Object.prototype)

//True True