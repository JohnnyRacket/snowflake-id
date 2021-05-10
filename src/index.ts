import generator from './snowflakeGenerator';

/**
 * Creates a snowflake Id Generator that vends unit64 unique ids.
 * @param machineId 10bit unique number to allow distributed creation (0-1023).
 * @returns A generator function. Invoke with generator.next().
 */
export const snowflakeGenerator = (machineId: number) => {
    return generator(machineId);
}
