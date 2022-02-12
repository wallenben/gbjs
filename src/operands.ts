import { RegisterType } from "./cpu";
import { registers, clock } from "./registers";
export function NOP() {
    //nothing happens, 4 clock cycles
    clock.m += 4;
}