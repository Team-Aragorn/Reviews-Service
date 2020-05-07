module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dummyData/'],
};
