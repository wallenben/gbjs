
   
   
   
   
   //8-bit registers
 class registers { 
     a = 0; 
     b: 0; 
     c: 0; 
     d: 0; 
     e: 0;
     h: 0; 
     l: 0;
     pc: 0; //program counter
     sp: 0; //stack pointer 
    clock: { m: 0, t: 0 };
     static clock: any;
    constructor(){
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.e = 0;
        this.h = 0;
        this.l = 0;
        this.pc = 0
        this.sp = 0
        this.clock.m = 0;
        this.clock.t = 0;
    }
 }
    //16-bit registers
    
    //wtf is the m-clock?
    //t: clock cycles
    

export default registers;