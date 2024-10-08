// @ts-check
module.exports = {
    // Use ts-jest preset for testing TypeScript files with Jest
    preset: "ts-jest",
    // Set the test environment to Node.js
    testEnvironment: "node",

    // Use ts-jest to transform TypeScript files
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },

    // Regular expression to find test files
    testRegex: "((\\.|/)(test|spec))\\.tsx?$",

    // File extensions to recognize in module resolution
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

    // Map your TypeScript path aliases to Jest
    moduleNameMapper: {
        "^@models/(.*)$": "<rootDir>/src/models/$1",
        "^@controllers/(.*)$": "<rootDir>/src/controllers/$1",
        "^@utils/(.*)$": "<rootDir>/src/utils/$1",
        "^@services/(.*)$": "<rootDir>/src/services/$1",
        "^@routes/(.*)$": "<rootDir>/src/routes/$1",
        "^@types/(.*)$": "<rootDir>/src/types/$1",
        "^@tests/(.*)$": "<rootDir>/src/tests/$1",
        "^@config/(.*)$": "<rootDir>/src/config/$1",
        "^@middlewares/(.*)$": "<rootDir>/src/middlewares/$1",
    },
};
