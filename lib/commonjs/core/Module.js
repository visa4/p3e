"use strict";
/**
 *  Module
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Module {
    constructor() {
        /**
         * @type string
         */
        this.id = null;
        /**
         * @type string
         */
        this.icon = '';
        /**
         * @type string
         */
        this.name = '';
        /**
         * @type string
         */
        this.nameWc = '';
        /**
         * @type string
         */
        this.label = '';
        /**
         * @type Array<string>
         */
        this.autoloads = [];
        /**
         * @type Array<string>
         */
        this.autoloadWs = [];
    }
    /**
     * @return {string}
     */
    getId() {
        return this.id;
    }
    /**
     * @param {string} id
     * @return {Module}
     */
    setId(id) {
        this.id = id;
        return this;
    }
    /**
     * @return {string}
     */
    getName() {
        return this.name;
    }
    /**
     * @param {string} name
     * @return {Module}
     */
    setName(name) {
        this.name = name;
        return this;
    }
    /**
     * @return {string}
     */
    getIcon() {
        return this.icon;
    }
    /**
     * @param {string} name
     * @return {Module}
     */
    setIcon(icon) {
        this.icon = icon;
        return this;
    }
}
exports.Module = Module;
