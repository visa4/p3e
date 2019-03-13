"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param derivedCtor
 * @param {any[]} baseCtors
 */
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
    return derivedCtor;
}
exports.applyMixins = applyMixins;
