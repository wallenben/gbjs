
import { flags } from "./flags";
import { registers, specialRegisters } from "./registers";

export type RegisterType = "A" | "B" | "C" | "D" | "E" | "F" | "H" | "L" | "AF" | "SP" | "PC" | "BC" | "DE" | "HL";
export function test(){
    let a = 13;
}

export function NOP(){
}

export function registerConversion(register1: registers, register2: registers){
/**
 * for getting BC, you set the upper 8 bits to B and C is the lower bits and return that 16 bit val
 * 
 * for setting, you can split the bits upper and lower, then set them to the respective registers
 */

if (register1 === registers.b){
 /**
         * register b = 0000 0001
         * b << 8
         * registe bc 0000 0001 0000 0000
         * 
         */
specialRegisters.BC += registers.b << 8;
specialRegisters.BC += registers.c;
}


}