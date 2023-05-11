module.exports = {
  preset: 'react-native',
  setupFiles: [
    "./mock.js"
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{jsx,tsx,js,ts}',
    '!src/App.tsx',
    '!src/AppWrapper.*',
    '!src/index.tsx',
    '!src/**/*.d.ts'
  ]
};
