"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fail = exports.success = void 0;
function success(message, obj = {}) {
    obj.success = true;
    obj.message = message;
    return obj;
}
exports.success = success;
function fail(message, obj = {}) {
    obj.success = false;
    obj.message = message;
    return obj;
}
exports.fail = fail;
//# sourceMappingURL=response-helpers.js.map