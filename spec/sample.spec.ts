import {Sample} from "../src/sample"
describe("function name", ()=> {
    it("should return true", ()=> {
        expect(true).toBe(false);
    });
    it("should return true", ()=> {
        let sample: Sample = new Sample();
        expect(sample.true()).toBe(true);
    });
});