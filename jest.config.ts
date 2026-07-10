import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest'

const tsJestTransformCfg = createDefaultPreset().transform

const config: JestConfigWithTsJest = {
  maxWorkers: 1,
  bail: 1,
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.ts'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    ...tsJestTransformCfg,
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: './tests/tsconfig.test.json',
      },
    ],
  },
  verbose: true,
  reporters: ['default', 'jest-html-reporter'],
  setupFilesAfterEnv: ['./tests/setup.ts', './tests/env-setup.ts'],
  globalSetup: './tests/global-setup.ts',
}
export default config
