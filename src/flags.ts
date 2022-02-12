export enum flags {
    z= 0x80, // zero flag, set if the result of an operand is zero
    n= 0x40, //subtraction flag BCD (DAA INSTRUCTION ONLY)
    h= 0x20, //half carry flag BCD (DAA INSTRUCTION ONLY)
    c= 0x10 //carry flag, see documentation
}