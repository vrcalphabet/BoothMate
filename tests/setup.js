"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./global.d.ts");
beforeAll(() => {
    jest.spyOn(console, 'log').mockImplementation((...args) => {
        process.stdout.write(args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ') + '\n');
    });
});
afterAll(() => {
    console.log.mockRestore();
});
afterEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1250));
});
//# sourceMappingURL=setup.js.map