//생성자 함수
// function Item(title, price) {
//   this.title = title;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`가격은 ${price}원 입니다`);
//   };
// }

// const item1 = new Item("인형", 3000);
// const item2 = new Item("가방", 4000);
// const item3 = new Item("지갑", 9000);

// console.log(item1, item2, item3);
// item3.showPrice();

//객체 메소드
// let n = "name";
// let a = "age";

// const user = {
//   [n]: "Mike",
//   [a]: 30,
// };

// console.log(user);

// function makeObj(key, val) {
//   return {
//     [key]: val,
//   };
// }

// const obj = makeObj("나이", 33);
// console.log(obj);

//배열 메소드
// let arr = ["mike", "tom", "jane"];

// arr.forEach((name, index) => {
//   console.log(`${index}.${name}`);
// });

// let arr = [1, 2, 3, 4, 5];

// const result = arr.find((item) => {
//   return item % 2 === 0;
// });

// console.log(result);

// let arr = [27, 8, 5, 13];

// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((prev, cur) => {
//   return prev + cur;
// }, 100);

// console.log(result);

// call

// const mike = {
//   name: "Mike",
// };

// const tom = {
//   name: "Tom",
// };

// function showThisName() {
//   console.log(this.name);
// }

// showThisName();
// showThisName.call(mike);

// apply;

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.call(mike, 1999, "singer");
// console.log(mike);

// update.call(tom, 2002, "teacher");
// console.log(tom);

// bind;

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike);

//class

// const User = function (name,age){
//   this.name = name;
//   this.age = age;
// }

// User.prototype.showName = function(){
//   console.log(this.name);
// }

// const mike = new User("Mike",30);

// class User2{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }
//   showName(){
//     console.log(this.name);
//   }
// }

// const tom = new User2("Tom",19);

//class 오버라이딩

// class car {
//   constructor(color) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("drive..");
//   }
//   stop() {
//     console.log("stop!");
//   }
// }

// class Bmw extends Car {
//   constructor(color) {
//     super(color);
//   }
//   park() {
//     console.log("PARK");
//   }
// }

// const z4 = new Bmw("blue");

//프로미스(promise)

const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("2번 주문 완료");
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

f1()
.then((res) => f2(res));
.then((res) => f3(res));
.then((res) => console.log(res));
.catch(console.log)
