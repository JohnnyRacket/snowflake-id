# Snowflake-id

#### A fast open-source Typescript 64bit uint snowflake id generator service.

GET `/generate`: generates a new 64 bit uint snowflake id using epoch time, a random or assigned machine id, and a sequential increment.

## Benchmarked 
Autocannon results running locally on an AMD 3700x

```
Running 10s test @ http://localhost:3000/generate
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.07 ms │ 8 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
┌───────────┬─────────┬─────────┬────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%    │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 32863   │ 32863   │ 36895  │ 37087   │ 36461.1 │ 1173.1 │ 32856   │
├───────────┼─────────┼─────────┼────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 5.26 MB │ 5.26 MB │ 5.9 MB │ 5.93 MB │ 5.83 MB │ 187 kB │ 5.26 MB │
└───────────┴─────────┴─────────┴────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

401k requests in 11.01s, 64.2 MB read
```