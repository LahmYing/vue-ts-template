module.exports = {
  // 覆盖率报告
  collectCoverage: true,
  // 包括 ts\vue 文件，不包括 node_modules 文件夹
  collectCoverageFrom: ["**/*.{ts,vue}", "!**/node_modules/**"],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'vue'
  ],
  transform: {
    // 用什么包 处理相关格式文件
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    // 支持源代码中相同的 `@` -> `src` 别名
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  ]
}