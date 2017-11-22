//jasmine + docs 举例

/**
 * @module discount/Demo
 * @requires 举例
 * @requires 举例
 * @requires 举例
 * @requires 举例
 */


/**
 * @class discount
 * @extends Class
 */

"use strict";
var Service = [
    {
        id:0,
        name:'APT',
        price:10
    },
    {
        id:1,
        name:'WAF',
        price:10
    },
    {
        id:2,
        name:'DBScan',
        price:10
    },
    {
        id:3,
        name:'WebScan',
        price:10
    },
    {
        id:4,
        name:'USMB',
        price:10
    }
];
var totalArr = [];
// 去重重新组合新的数组类型
var Unique = function (arr){
    var result=[],tem = [];

    for(var i=0; i<arr.length; i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i])
        }else{
            tem.push(arr[i])
        }
    }
    totalArr.push(result);
    if(tem.length>=2){
        this.Unique(tem)
    }else{
        tem.length!=0 && totalArr.push(tem);
    }
    return totalArr;
};

//获取去重后单组商品价格
function itemPrice(arr){
    var tempTtemPrice = 0;

    if(arr && arr.length){
        for(var i=0; i<=arr.length; i++){
            if(Service && Service.length){
                for(var j=0; j<=Service.length; j++){
                    if(Service[j] && (Service[j].id == arr[i])){
                        tempTtemPrice += Service[j].price;
                    }
                }
            }
        }
    }

    return tempTtemPrice;
}


//获取单组商品折扣后价格总和
function itemDiscountPrice(arr){
    var discount = 1;
    if(arr && arr.length){
        switch (arr.length){
            case 2 :
                discount = 0.95;
                break;
            case 3 :
                discount = 0.9;
                break;
            case 4 :
                discount = 0.8;
                break;
            case 5 :
                discount = 0.75;
                break;
            default:
                break;
        }
    }
    return itemPrice(arr) * discount;
};


//计算折扣
function Discount (arr){
    var totalPrice = 0;
    if(arr && arr.length >=2){
        var tempArr = window.Unique(arr);
        totalArr =[];
        if(tempArr && tempArr.length){
            for(var i=0; i<=tempArr.length; i++){
                totalPrice += itemDiscountPrice(tempArr[i]);
            }
        }
    }else{
        totalPrice = itemPrice(arr);
    }
    return totalPrice;
};


var finalPrice;
finalPrice = Discount([1,1,2,2,3,3,4,4]);
console.log(finalPrice);
