import {Static, Type} from "@sinclair/typebox";

export const MessageSchema = Type.Strict(
    Type.Object(
        {
          text: Type.String({minLength: 1}),
        },
        {additionalProperties: false},
    ),
);

export type Message = Static<typeof MessageSchema>;
