import {snowflakeGenerator} from '../src/index';

const generator = snowflakeGenerator(512);

describe('Correctly Generates IDs', () => {

    test('Ids are correctly sortable chronologically', async () => {
        let list = [];
        for(let i = 0; i < 1000; i++){
            let value = String(generator.next().value);
            list.push(BigInt(value));
        }
        let sortedList = [...list];
        sortedList.sort();
        expect(list).toEqual(sortedList);
    });

    test('Ids can generate more than 4096 without failing and are still k-sortable', async () => {
        let list = [];
        for(let i = 0; i < 5000; i++){
            let value = String(generator.next().value);
            list.push(BigInt.asUintN(64,BigInt(value) >> BigInt(22)));
        }
        let sortedList = [...list];
        sortedList.sort();
        const util = require('util');
        util.inspect.defaultOptions.maxArrayLength = null; 
        expect(list).toEqual(sortedList);
    });

    test('Ids are always unique', async () => {
        let list = [];
        for(let i = 0; i < 50000; i++){
            let val = generator.next().value;
            list.push(val);
        }
        let sameSize = new Set(list).size == list.length;
        expect(sameSize).toBeTruthy();
    });

});
