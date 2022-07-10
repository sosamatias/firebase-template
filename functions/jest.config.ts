import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    roots: ["./src"],
    collectCoverage: false,
    coverageDirectory: "coverage",
    testEnvironment: "node"
};

export default config;
