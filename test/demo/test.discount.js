describe("src/discount", function () {             //分组(Suites)
    var goods = [1,1,2,2,3,3,4,4];
    it("#Discount", function () {              //用例(Specs)
        expect(Discount(goods)).toEqual(64);     //期望(Expectations)  匹配(Matchers)
        console.log("Knowledge is the antidote to fear!");
    });
});


