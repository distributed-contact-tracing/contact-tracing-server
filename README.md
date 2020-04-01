# contact-tracing-server

A server to manage traffic for Distributed Contact Tracing

## API

### Get Contagious Events

#### Request

`GET /api/getContagiousEvents/{region}/{timestampFrom}`

| Parameter       | Type     |
| --------------- | -------- |
| `region`        | `string` |
| `timestampFrom` | `number` |

#### Response body

```json
{
  "hashedEvents": Array<string>
}
```

Returns status `204` if result is empty.

## Types

```typescript
interface ContagiousEventDocument {
  id: string;
  timestamp: number;
  region: Region;
  hashedEvent: Array<HashedEvent>;
}
```
