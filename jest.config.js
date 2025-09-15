const { createDefaultPreset } = require('ts-jest');

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} */
module.exports = {
  bail: 1,
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    ...tsJestTransformCfg,
  },
  verbose: true,
  reporters: ['default', 'jest-html-reporter'],
  setupFilesAfterEnv: ['./tests/setup.ts', './tests/env-setup.ts'],
  globalSetup: './tests/global-setup.ts',
};
