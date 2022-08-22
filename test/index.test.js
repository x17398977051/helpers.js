const { object } = require("../dist/tomato-helpers.cjs");

describe("测试object下面的函数", function () {
    test("picker", function () {
        const demo = {
            name: "xiezhanpeng",
            age: 22,
            skills: ["Javascript", "Vue"],
        };

        const picked = object.picker(demo, "name", "skills");

        expect(picked).toEqual({
            name: "xiezhanpeng",
            skills: ["Javascript", "Vue"],
        });
    });

    test("cloneDeep", function () {
        const demo = {
            name: "foo",
            bars: ["bar1", "bar2", "bar3"],
            family: {
                father: "AAA",
                Mother: "BBB",
            },
            toString() {
                return `My name is ${this.name},and My father is ${this.family.father}.`;
            },
        };

        const copyed = object.cloneDeep(demo);
        copyed.name = "baz";
        expect(copyed.name).toBe("baz");
        expect(copyed.name).not.toEqual(demo.name);
        expect(copyed).not.toEqual(demo);
        expect(`${copyed}`).toBe(`My name is baz,and My father is AAA.`);
    });
});
