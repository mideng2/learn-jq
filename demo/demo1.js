/**
 * node环境中需要引入jsdom才能使用jquery，jquery需要一个window对象
 * */
let { JSDOM } = require('jsdom');
let { window } = new JSDOM('<!DOCTYPE html>');
let $ = require('../dep/jquery')(window);



/**
 * each方法中，如果回调函数return false，则return false后跳出循环
 * */
// let arr = [1,2,3];
// $.each(arr,function (index,item) {
//     console.log(index+'---'+item);
//     if(index === 1){
//         return false;
//     }
// });



/**
 * makeArray 将类数组转化为数组
 * */

// console.log($.makeArray({a:1,b:2},[3.4,5]));  // [ 3.4, 5, { a: 1, b: 2 } ] 直接把第一项push到最后了
// console.log($.makeArray({a:1,b:2})); // [ { a: 1, b: 2 } ] 把对象push到数组了
// console.log($.makeArray(1,{a:1,b:2})); // { '0': 1, a: 1, b: 2, length: 1 }
// console.log($.makeArray({a:1,b:2},{a:1,b:3})); // { '0': { a: 1, b: 2 }, a: 1, b: 3, length: 1 }
//
// function f() {
//     console.log($.makeArray(arguments)); // [1,2,3]
//     console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
// }
// f(1,2,3);


/**
 * inArray
 * */

// console.log(Array.prototype.indexOf.call([1,2,3],2)); //不是很明白这个方法存在的意义…… 数组的indexOf是es5的内容

/**
 * grep函数，过滤，第三个参数默认为false 或不提供（undefined）
 * */
// console.log(!undefined);


/**
 * map函数 如果不为null才返回，好奇怪
 * */

let arr = $.map([1,2,3],function (item,index) {
   if(item === 2){
       return null; // 如果返回null，则这个item没有对应的值在数组中
   } else{
       return [item + 10,item+20]; //会拉平数组 [ 11, 21, 13, 23 ]
   }
});

console.log(arr);