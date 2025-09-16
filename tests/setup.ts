import './global.d.ts';

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation((...args) => {
    process.stdout.write(
      args.map((a) => (typeof a === 'object' ? JSON.stringify(a) : a)).join(' ') + '\n',
    );
  });
});

afterAll(() => {
  (console.log as jest.Mock).mockRestore();
});

afterEach(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
});
