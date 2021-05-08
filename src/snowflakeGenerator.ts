function* generateSnowflake() {
  let seq = 0;
  let machine = process.env.MACHINE_ID || Math.round(Math.random() * 1023)
  console.log(`MACHINE_ID = ${machine}`);
  let id = Buffer.alloc(8);
  while (true) {
    try {
      // increment seq
      seq++;
      // wrap at 12 bits
      if (seq >= 4096) seq = 0;
      // get current datetime in millliseconds
      let time = Date.now();
      // fill buffer with 0's
      id.fill(0);
      // write 64 bits of the buffer: 42bits time, 10 bits machine, 12 bits seq. clamped as unsigned int
      id.writeBigUInt64BE(BigInt.asUintN(64, BigInt(time) << BigInt(22) | (BigInt(machine) << BigInt(12)) | BigInt(seq)));
      // convert from byte buffer to 64bit unsigned int
      const bigint = id.readBigUInt64BE();
      yield bigint.toString();
    } catch (e) {
      console.log(e);
      yield new Error('Failed to generate snowflake id.');
    }
  }
}

const snowflakeGenerator = generateSnowflake();

export default snowflakeGenerator;