function* generateSnowflake() {
  let seq = 0;
  // get machine id from env or generate random 10 bit int
  let machine = process.env.MACHINE_ID || Math.floor(Math.random() * 1024)
  console.log(`MACHINE_ID = ${machine}`);
  // allocate a 64 bit (8 byte) buffer
  let id = Buffer.alloc(8);
  let lastTime = Date.now();
  while (true) {
    try {
      // increment seq
      seq++;
      // get current datetime in millliseconds
      let time = Date.now();
      // if we are in the same millsecond, but we have maxed out our sequence we cannot vend a unique id (wrap at 12 bits)
      if (time !== lastTime && seq >= 4096) throw Error('Exceeded 4096 ids in 1 millisecond.') 
      // if we are on a new millisecond reset the seq
      if (time !== lastTime) seq = 0;
      // fill buffer with 0's
      id.fill(0);
      // write 64 bits of the buffer: 42bits time, 10 bits machine, 12 bits seq. clamped as unsigned int
      id.writeBigUInt64BE(BigInt.asUintN(64, BigInt(time) << BigInt(22) | (BigInt(machine) << BigInt(12)) | BigInt(seq)));
      // convert from byte buffer to 64bit unsigned int
      const bigint = id.readBigUInt64BE();
      lastTime = time;
      yield bigint.toString();
    } catch (e) {
      console.log(e);
      yield new Error('Failed to generate snowflake id.');
    }
  }
}

const snowflakeGenerator = generateSnowflake();

export default snowflakeGenerator;