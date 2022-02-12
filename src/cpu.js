"use strict";
exports.__esModule = true;
exports.NOP = exports.test = void 0;
function test() {
    var a = 13;
}
exports.test = test;
function NOP() {
}
exports.NOP = NOP;
function registerConversion(register1, register2) {
    /**
     * for getting BC, you set the upper 8 bits to B and C is the lower bits and return that 16 bit val
     *
     * for setting, you can split the bits upper and lower, then set them to the respective registers
     *
     *
     */
}
