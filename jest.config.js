module.exports = {
    projects: [
        {
            displayName: "JS",
            testMatch: ["**/?(*.)+(spec|test).js?(x)"],
        },
        {
            displayName: "TS",
            preset: "ts-jest",
            testEnvironment: "node",
            testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
        },
        {
            displayName: "TSlint",
            testEnvironment: "node",
            runner: "jest-runner-eslint",
            testMatch: ["**/*.ts"],
        },
    ],
};
