import { RegisterType } from "./cpu";
import registers from "./registers";
export function NOP(){
    //nothing happens, 4 clock cycles
    registers.clock.m += 4;
}