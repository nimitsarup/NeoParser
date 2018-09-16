"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var NORM_TX = ["510832b1d90a000000001432e125258b7db0a0dffde5bd03b2b859253538ab08099425833800000020fc15ba85acc4dbb20da373eba9d90aefc7241b01cc338d09082c8e25a06b789a14e5d9d088fe7bb61ec4bb58835d6b107f1d08db6056c10966696c6c4f666665726726ae7c6c9861ec418468c1f0fdc4a7f2963eb891",
    "00c10877697468647261776926ae7c6c9861ec418468c1f0fdc4a7f2963eb891",
    "08806041630700000014ebaaae6d0cdbacf2bf6164de52173c59d844cb4b14027a10b3ba3d3b02f4e81934d4254fde696be02053c1087472616e7366657267fb1c540417067c270dee32f21023aa8b9b71abce",
    "206f87dc19068bf35e50740188998a869ea43d3dc5619b73f606786588bf8b36e151c10b63616e63656c4f666665726726ae7c6c9861ec418468c1f0fdc4a7f2963eb891"
];
test('parse exchange disassemble', function () {
    NORM_TX.forEach(function (element) {
        var c = index_1.disassemble(element);
        // The second to last attribute is the method name
        console.log(c[c.length - 2].friendlyName);
    });
});
