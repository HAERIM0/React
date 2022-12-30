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

let arr = [1, 2, 3, 4, 5];

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 100);

console.log(result);
