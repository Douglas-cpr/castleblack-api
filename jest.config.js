module.exports = {
  roots: ['<rootDir>/tests'],
  testEnvironment: 'node',
  preset: 'ts-jest',
  testMatch: [
    '<rootDir>/tests/**/*.spec.ts'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/tests/(.*)': '<rootDir>/tests/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}