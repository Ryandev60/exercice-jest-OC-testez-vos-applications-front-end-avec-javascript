import { sayHello } from "./unit1";

describe("Say Hello Unit Test Suites", () => {
    it("should return Hello, World", () => {
        expect(sayHello()).toBe("Hello, World")
    })

    it("should return Hello, Thomas", () => {
        expect(sayHello("Thomas")).toBe("Hello, Thomas")
    })
})