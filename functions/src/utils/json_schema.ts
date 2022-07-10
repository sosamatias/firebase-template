import {ValidationError, Validator, Schema} from "jsonschema";

export function validate(
    instance: unknown,
    schema: Schema
): ValidationError[] | null {
  const v = new Validator();
  const r = v.validate(instance, schema);
  return r.errors.length === 0 ? null: r.errors;
}
