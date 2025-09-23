const getStatus = require("../index");

test("App status should be OK", () => {
    expect(getStatus()).toBe("OK");
});

