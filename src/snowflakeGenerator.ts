function* snowflakeGenerator(machineId: number) {
  let seq = BigInt(0);
  // shift time 22 bits left to occupy first 42 bits of 64
  const shiftLeftTime = BigInt(22);
  // get machine id: 10 bit int to enable distributed keys being unique, shift 12 bits left to occupy bits 42-52
  const machine = (BigInt(machineId) << BigInt(12)) ;
  let lastTime = BigInt(Date.now());
  while (true) {
    try {
      // increment seq
      seq++;
      // get current datetime in millliseconds
      const time = BigInt(Date.now());
      // if we are in the same millsecond, but we have maxed out our sequence we cannot vend a unique id (wrap at 12 bits)
      if (time === lastTime && seq >= 4096) throw Error('Exceeded 4096 ids in 1 millisecond.')
      // if we are on a new millisecond reset the seq
      if (time !== lastTime) seq = BigInt(0);
      // write 64 bits into an unsigned BigInt: 42bits time, 10 bits machine, 12 bits seq. 
      const id = BigInt.asUintN(64, time << shiftLeftTime | machine | seq);
      lastTime = time;
      yield id.toString();
    } catch (e) {
      console.log(e);
      yield new Error('Failed to generate snowflake id.');
    }
  }
}

const generator = (machineId: number) => snowflakeGenerator(machineId);

export default generator;