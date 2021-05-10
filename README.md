# Snowflake-id

#### A fast open-source Typescript 64bit uint snowflake id generator service.


## As a Service

`docker pull firassasin/snowflake-id`

### Config

| ENV | default |
| --- | ----------- |
| PORT | 3000 |
| MACHINE_ID | 0-1023 randomly assigned |

### Endpoints

| url | description |
| --- | ----------- |
| /api/uint64 | generates a new 64 bit uint snowflake id using epoch time, a random or assigned machine id, and a sequential increment. |

## As a Library

Install `npm i snowflake-id-js`

Usage

```
import {snowflakeGenerator} from 'snowflake-id-js';

const generator = snowflakeGenerator(512);

let id = generator.next().value;
```


## Benchmarked 
Autocannon results running locally on an AMD 3700x

```
Running 10s test @ http://localhost:3000/api/uint64
10 connections

┌─────────┬──────┬──────┬───────┬──────┬─────────┬─────────┬──────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%  │ Avg     │ Stdev   │ Max  │
├─────────┼──────┼──────┼───────┼──────┼─────────┼─────────┼──────┤
│ Latency │ 0 ms │ 0 ms │ 0 ms  │ 0 ms │ 0.01 ms │ 0.04 ms │ 7 ms │
└─────────┴──────┴──────┴───────┴──────┴─────────┴─────────┴──────┘
┌───────────┬────────┬────────┬────────┬─────────┬──────────┬─────────┬────────┐
│ Stat      │ 1%     │ 2.5%   │ 50%    │ 97.5%   │ Avg      │ Stdev   │ Min    │
├───────────┼────────┼────────┼────────┼─────────┼──────────┼─────────┼────────┤
│ Req/Sec   │ 41887  │ 41887  │ 46847  │ 47615   │ 46427.64 │ 1494.62 │ 41876  │
├───────────┼────────┼────────┼────────┼─────────┼──────────┼─────────┼────────┤
│ Bytes/Sec │ 6.7 MB │ 6.7 MB │ 7.5 MB │ 7.62 MB │ 7.43 MB  │ 239 kB  │ 6.7 MB │
└───────────┴────────┴────────┴────────┴─────────┴──────────┴─────────┴────────┘

Req/Bytes counts sampled once per second.

511k requests in 11.01s, 81.7 MB read
```