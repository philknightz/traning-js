const object = {
  a: 1,
  b: 2,
  c: 3,
  getA: function(){
      return this.a
  }
};

// 1. remove object property
console.log("Delete props: ", delete object.c, object);

// 2. classify
    // - Function -> method
    // - Others -> property

// 3. Object constructer
function User(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
const user = new User("kien", "dang")
console.log("Constructer: ", user)

    // - add prototype to constructer
    User.prototype.className = "A3"
    console.log("Prototype :", user)

