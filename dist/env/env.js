"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const schema_1 = require("./schema");
exports.env = schema_1.environmentSchema.parse({
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
});
