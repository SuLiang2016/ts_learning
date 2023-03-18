(() => {
  type TDog = {
    name: string;
    age: number;
  };

  class Dog {
    name: String = "tom";
    age: Number = 18;

    // 构造函数
    // this 表示为当前实例
    // 可以用this 添加属性
    // constructor(obj: TDog) {
    //     this.name = obj.name;
    //     this.age = obj.age;
    //     console.log('cons', obj, this);
    // }
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      console.log("cons", this);
    }
    sayHello() {
      console.log("this.name", this.name);
      return "say hello" + this.name;
    }
  }

  let parm: TDog = {
    name: "小红",
    age: 10,
  };

  const dog1 = new Dog(parm.name, parm.age);

  console.log("dog1", dog1);
})();
