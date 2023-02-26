import { JSONSchema } from "core/schemas/types";

export const DeleteBlockPathParameters: JSONSchema = {
  "type": "object",
  "properties": {
    "block_id": IdRequest
  },
  "required": [
    "block_id"
  ],
  "additionalProperties": false
};

export const DeleteBlockParameters: JSONSchema = DeleteBlockPathParameters;

export const DeleteBlockResponse: JSONSchema = {
  "anyOf": [
    PartialBlockObjectResponse,
    BlockObjectResponse
  ]
};