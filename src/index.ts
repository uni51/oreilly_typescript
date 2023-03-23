// import { type } from "os";
// let a = 1 + 2;
// let b = a + 3;
// let c = {
//   apple: a,
//   banana: b,
// };
// let d = c.apple * 4;

// import { type } from "os";

// console.log(d);

//------------------------------

// 3.1 型についての議論
// function squareOf(n: number) {
//   return n * n;
// }

// squareOf(2);
// squareOf("z"); // エラー

//------------------------------

// 3.2.1 any

// let a: any = 666;
// let b: any = ["danger"];
// let c = a + b;

//------------------------------

// 3.2.2 unknown

// let a: unknown = 30;
// let b = a === 123; // boolean
// // let c = a + 10; // エラー
// if (typeof a === "number") {
//   let d = a + 10;
// }

//------------------------------

// 3.2.3 boolean

// let a = true; // boolean
// let b = false; // boolean
// const c = true; // true
// let d: boolean = true; // boolean
// let e: true = true; // true
// // let f: true = false; // エラー

//------------------------------

// 3.2.4 number

// let a = 1234; // number
// var b = Infinity * 0.1; // number。Infinity（無限大）
// const c = 5678; // 5678
// let d = a < b; // boolean
// let e: number = 100; // number
// let f: 26.218 = 26.218; // 26.218
// // let g: 26.218 = 10 // エラー

//------------------------------

// 3.2.5 bigint

// let a = 1234n; // bigint
// const b = 5678n; // 5678n
// var c = a + b; // bigint
// var d = a < 1235; // boolean
// let e = 88.5n // エラー。bigintリテラルは整数でなければなりません。
// let f: bigint = 100n; // bigint
// let g: 100n = 100n; // 100n
// let h: bigint = 100; // エラー

//------------------------------

// 3.2.8 オブジェクト
// let a: { b: number };

// a = {}; // Property 'b' is missing in type '{}' but required in type '{ b: number; }'.

// a = { b: 1, c: 2 }; // Type '{ b: number; c: number; }' is not assignable to type '{ b: number; }'.
// Object literal may only specify known properties, and 'c' does not exist in type '{ b: number; }'.

//------------------------------

// 3.2.9.1 型エイリアス
// type Age = number;

// type Person = {
//   name: string;
//   age: Age;
// };

// let age: Age = 55;

// let driver: Person = {
//   name: "James May",
//   age: age,
// };

// type Color = "red";

// let x = Math.random() < 0.5;

// if (x) {
//   type Color = "blue";
//   let b: Color = "blue";
// } else {
//   let c: Color = "red";
// }

//------------------------------

// // 3.2.9.2 合併型と交差型
// type Cat = { name: string; purrs: boolean };
// type Dog = { name: string; barks: boolean; wags: boolean };
// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// // Cat
// let a: CatOrDogOrBoth = {
//   name: "Bonkers",
//   purrs: true, // のどを鳴らす
// };

// // Dog
// a = {
//   name: "Domino",
//   barks: true, // ほえる
//   wags: true, // 尻尾をふる
// };

// // 両方
// a = {
//   name: "Donkers",
//   barks: true,
//   purrs: true,
//   wags: true,
// };

// let b: CatAndDog = {
//   name: "Domino",
//   barks: true,
//   purrs: true,
//   wags: true,
// };

// function trueOrNull(isTrue: boolean) {
//   if (isTrue) {
//     return "true";
//   }
//   return null;
// }

// type Returns = string | null;

// function(a: string, b: number) {
//   return a || b
// }

//------------------------------

// 3.2.10 配列

// let a = [1, 2, 3]; // number[]
// var b = ["a", "b"]; // string[]
// let c: string[] = ["a"]; // string[]
// let d = [1, "a"]; // (string | number)[]
// const e = [2, "b"]; // (string | number)[]

// let f: string[] = ["red"];
// f.push("blue");
// // f.push(true);

// let g = []; // any[]
// g.push(1); // number[]
// g.push("red"); // (string | number)[]

// let h: number[] = [];
// h.push(1);
// h.push("red");

// function buildArray() {
//   let a = []; // any[]
//   a.push(1); // number[]
//   a.push("x"); // (string | number)[]
//   return a;
// }

// let myArray = buildArray();
// myArray.push(true); // エラー

//------------------------------

// 3.2.11 タプル
// let a: [number] = [1];

// // [名前, 名字, 生まれ年]のタプル
// let b: [string, string, number] = ["malcon", "gladwell", 1963];

// // b = ["queen", "elizabeth", "ii", 1926]; // エラー

// // 鉄道運賃の配列。方向によって異なる場合があります。
// let trainFares: [number, number?][] = [[3.75], [8.25, 7.7], [10.5]];

// // 少なくとも1つの要素（とそれに続く可変長の要素）を持つ、文字列のリスト
// let friends: [string, ...string[]] = ["Sara", "Tali", "Chloe", "Claire"];

// // 不均一なリスト
// let list: [number, boolean, ...string[]] = [1, false, "a", "b", "c"];

//------------------------------

// 3.2.11.1 読み取り専用の配列とタプル
// let as: readonly number[] = [1, 2, 3];
// let bs: readonly number[] = as.concat(4);
// let three = bs[2];
// // as[4] = 5; エラー
// // as.push(6);

// type A = readonly string[]; // readonly string[]
// type B = ReadonlyArray<string>; // readonly string[]
// type C = Readonly<string[]>; // readonly string[]

// type D = readonly [number, string]; // readonly [number, string]
// type E = Readonly<[number, string]>; // readonly [number, string]

//------------------------------

// 3.2.12 null、undefined、void、never

// // (a) numberまたはnullを返す関数
// function a(x: number) {
//   if (x < 10) {
//     return x;
//   }
//   return null;
// }

// // (b) undefinedを返す関数
// function b() {
//   return undefined;
// }

// // (c) voidを返す関数
// function c() {
//   let a = 2 + 2;
//   let b = a * a;
// }

// // (d) neverを返す関数
// function d() {
//   throw TypeError("I always error");
// }

// // (e) neverを返すもう一つの関数
// function e() {
//   while (true) {
//     doSomething();
//   }
// }
