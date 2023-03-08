const Ajv = require("ajv");
const ajv = new Ajv();

const CoursesSchema = {
  type: "object",
  properties: {
    name: { type: "string", pattern: "^[a-zA-Z]+$" },
  },
  required: ["name"],
  additionalProperties: false,
  // minProperties:2,
  // maxProperties:2
};

module.exports = ajv.compile(CoursesSchema);
