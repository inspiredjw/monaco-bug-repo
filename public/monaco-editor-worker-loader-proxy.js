var __extends = function (d, b) {
    for (var p in b)
        if (b.hasOwnProperty(p))
            d[p] = b[p];
    function __() { Object.defineProperty(this, "constructor", { configurable: true, value: d, writable: true }); }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = function (decorators, target, key, desc) {
    var global = window;
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof global.Reflect === "object" && typeof global.Reflect.decorate === "function")
        r = global.Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

self.MonacoEnvironment = {
    baseUrl: 'https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min/'
    // baseUrl: 'https://shell-s3-portal.azurecomcdn.net/Content/5.0.202.75156524.161026-1033/Scripts/_oss/monaco-editor/dev/'
};
importScripts('https://microsoft.github.io/monaco-editor/node_modules/monaco-editor/min//vs/base/worker/workerMain.js');
// importScripts('https://shell-s3-portal.azurecomcdn.net/Content/5.0.202.75156524.161026-1033/Scripts/_oss/monaco-editor/dev/vs/base/worker/workerMain.js');