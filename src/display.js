"use strict";
exports.__esModule = true;
var cpu_1 = require("./cpu");
function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx_1 = canvas.getContext('2d');
        ctx_1.fillStyle = "grey";
        ctx_1.fillRect(0, 0, canvas.width, canvas.height);
        (0, cpu_1.test)();
    }
    else { }
}
