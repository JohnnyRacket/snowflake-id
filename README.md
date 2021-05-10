# Snowflake-id

#### A fast open-source Typescript 64bit uint snowflake id generator service.

GET `/api/uint64`: generates a new 64 bit uint snowflake id using epoch time, a random or assigned machine id, and a sequential increment.

## Benchmarked 
Autocannon results running locally on an AMD 3700x

```
Running 10s test @ http://localhost:3000/api/uint64
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.08 ms │ 10 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 30703   │ 30703   │ 38655   │ 39135   │ 37859.64 │ 2317.31 │ 30700   │
├───────────┼─────────┼─────────┼─────────┼─────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 4.92 MB │ 4.92 MB │ 6.18 MB │ 6.26 MB │ 6.06 MB  │ 370 kB  │ 4.91 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

416k requests in 11.01s, 66.6 MB read
```