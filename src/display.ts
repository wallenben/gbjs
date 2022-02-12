import {test} from "./cpu";

function draw() {
    let canvas = <HTMLCanvasElement>document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx_1 = canvas.getContext('2d');
            ctx_1.fillStyle = "grey";
            ctx_1.fillRect(0, 0, canvas.width, canvas.height);
            test();
        }else {}
    }