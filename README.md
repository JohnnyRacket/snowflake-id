# Snowflake-id

#### A fast open-source Typescript 64bit uint snowflake id generator service.

GET `/generate`: generates a new 64 bit uint snowflake id using epoch time, a random or assigned machine id, and a sequential increment.

## Benchmarked 
Autocannon results running locally on a an 2015 mbp

```
Running 10s test @ http://localhost:3000/generate
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬───────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max   │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼───────┤
│ Latency │ 0 ms │ 0 ms │ 1 ms  │ 2 ms │ 0.26 ms │ 0.54 ms │ 18 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴───────┘
┌───────────┬─────────┬─────────┬─────────┬────────┬──────────┬─────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg      │ Stdev   │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼──────────┼─────────┼─────────┤
│ Req/Sec   │ 8023    │ 8023    │ 11263   │ 12015  │ 11088.55 │ 1038.11 │ 8023    │
├───────────┼─────────┼─────────┼─────────┼────────┼──────────┼─────────┼─────────┤
│ Bytes/Sec │ 1.47 MB │ 1.47 MB │ 2.06 MB │ 2.2 MB │ 2.03 MB  │ 190 kB  │ 1.47 MB │
└───────────┴─────────┴─────────┴─────────┴────────┴──────────┴─────────┴─────────┘

Req/Bytes counts sampled once per second.

122k requests in 11.01s, 22.3 MB read
```

What do these mean? When testing serving back only the string 'hello world!' the avg Req/Sec was `11464` meaning this it is only around 3% slower to generate snowflake ids and serve them than to serve static text. Essentially http framework will be the main bottleneck in serving ids. This is why fastify was chosen, as it seems to have the best throughput for a js http library.