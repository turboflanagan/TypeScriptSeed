"use strict";
var sample_1 = require("../src/sample");
describe("function name", function () {
    it("should return true", function () {
        expect(true).toBe(true);
    });
    it("should return true", function () {
        var sample = new sample_1.Sample();
        expect(sample.true()).toBe(true);
    });
});
//# sourceMappingURL=sample.spec.js.map