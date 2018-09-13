"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var NORM_TX = "510832b1d90a000000001432e125258b7db0a0dffde5bd03b2b859253538ab08099425833800000020fc15ba85acc4dbb20da373eba9d90aefc7241b01cc338d09082c8e25a06b789a14e5d9d088fe7bb61ec4bb58835d6b107f1d08db6056c10966696c6c4f666665726726ae7c6c9861ec418468c1f0fdc4a7f2963eb891";
test('parse exchange disassemble', function () {
    var tx = NORM_TX;
    var c = index_1.disassemble(tx);
    console.log(c);
});
