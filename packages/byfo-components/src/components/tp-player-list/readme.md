# tp-player-list



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type                                        | Default     |
| ----------- | ------------ | ----------- | ------------------------------------------- | ----------- |
| `addTime`   | --           |             | `() => void`                                | `undefined` |
| `isHosting` | `is-hosting` |             | `boolean`                                   | `false`     |
| `message`   | `message`    |             | `string`                                    | `undefined` |
| `players`   | --           |             | `Player[]`                                  | `[]`        |
| `roundData` | --           |             | `{ roundnumber: number; endTime: number; }` | `undefined` |


## Dependencies

### Depends on

- [tp-timer](../tp-timer)

### Graph
```mermaid
graph TD;
  tp-player-list --> tp-timer
  style tp-player-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
