const baseConfig = {
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@config(.*)$": "<rootDir>/src/config$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@contexts(.*)$": "<rootDir>/src/contexts$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
  },
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/utils/file-transformer.utils.js",
    "^.+\\.(js|jsx)$": ["babel-jest"],
  },
};

module.exports = {
  ...baseConfig,
  projects: [
    {
      displayName: "app",
      testMatch: ["<rootDir>/src/tests/__tests__/**/*.test.js"],
      setupFilesAfterEnv: ["<rootDir>/jest.env.js"],
      ...baseConfig,
    },
  ],
};
