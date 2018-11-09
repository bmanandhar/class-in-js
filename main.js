let myObj = {
  content: "Js file works",
  purpose: "for practice with Class",
  write: function(){
    console.log(`${this.content} ${this.purpose}.`)
  }
};
myObj.write();
//

class Animal{
  constructor(name, type="unknown"){
    this.name = name;
    this.type = type;
  }

  getName(){
    return `${this.name}`;
  }

  speak(){
    console.log(`${this.name} makes some noise`);
  }
};

class Cat extends Animal