const greeting = require('./greeting.js');
describe("greeting testing", function () {
    test("test normal greeting", function () {
        let result = greeting("Luke");
        expect(result).toEqual("Hello Luke");
    });
    test("test All Caps greeting", function () {
        let result = greeting("LUKE");
        expect(result).toEqual("HELLO LUKE");
    });
    test("test Multi People greeting", function () {
        let result = greeting("Luke Bob");
        expect(result).toEqual("Hello Luke and Bob");
    });
    test("test 3 people greeting", function () {
        let result = greeting("Luke Bob Alice");
        expect(result).toEqual("Hello Luke, Bob and Alice");
    });

});