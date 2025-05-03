module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(svg|png|jpg|jpeg|gif)$": "<rootDir>/__mocks__/fileMock.js"
  },
  reporters: [
    "default",
    ["jest-junit", {
      outputDirectory: "test-results",
      outputName: "results.xml"
    }]
  ],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"]
};
