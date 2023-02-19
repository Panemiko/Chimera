"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentSchema = void 0;
const zod_1 = require("zod");
exports.environmentSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(['development', 'production']),
    PORT: zod_1.z
        .string()
        .optional()
        .transform((port) => {
        if (port)
            return parseInt(port);
    }),
});
