import {ValidationError} from "jsonschema";
import {validate} from "./json_schema";

const schemaPerson = {
  type: "object",
  properties: {
    name: {type: "string"},
  },
};

test("validate success", () => {
  const instance = {
    name: "Juan",
  };
  const result = validate(instance, schemaPerson);
  expect(result).toBeNull();
});

test("validate error", () => {
  const instance = {
    name: 1000,
  };
  const result = validate(instance, schemaPerson) as ValidationError[];
  expect(result[0].stack)
      .toBe("instance.name is not of a type(s) string");
});
