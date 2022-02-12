
import { flags } from "./flags";
import { registers } from "./registers";
export function test(){
    let a = 13;
}

export function NOP(){
}

function registerConversion(register1: registers, register2: registers){
/**
 * for getting BC, you set the upper 8 bits to B and C is the lower bits and return that 16 bit val
 * 
 * for setting, you can split the bits upper and lower, then set them to the respective registers
 * 
 * 
 */
}