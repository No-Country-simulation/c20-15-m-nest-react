"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envsSchema = joi
    .object({
    PORT: joi.number().required(),
})
    .unknown(true);
const { error, value } = envsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error ${error.message}`);
}
const envVars = value;
exports.envs = {
    port: envVars.PORT,
};
//# sourceMappingURL=envs.js.map