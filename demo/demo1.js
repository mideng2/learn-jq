/**
 * node环境中需要引入jsdom才能使用jquery，jquery需要一个window对象
 * */
let { JSDOM } = require('jsdom');
let { window } = new JSDOM('<!DOCTYPE html>');
let $ = require('../dep/jquery')(window);

let arr = [1,2,3];

/**
 * each方法中，如果回调函数return false，则return false后跳出循环
 * */
$.each(arr,function (index,item) {
    console.log(index+'---'+item);
    if(index === 1){
        return false;
    }
});