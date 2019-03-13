"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventManager_1 = require("../event/EventManager");
const Container_1 = require("../container/Container");
/**
 *  Application
 */
class Application {
    /**
     * @param {Array<Module>} modules
     */
    constructor(modules) {
        /**
         * @type {EventManager}
         */
        this.eventManager = new EventManager_1.EventManager();
        /**
         * @type {Container}
         */
        this.container = new Container_1.Container();
        /**
         * Load module
         */
        this.loadModules(modules);
    }
    /**
     * @param {Array<Module>} modules
     */
    loadModules(modules) {
        console.log('Modules', modules);
        this.modules = modules;
        this.getEventManager().emit(Application.BOOTSTRAP_MODULE, this.modules);
    }
    /**
     * @return ContainerInterface
     */
    getContainer() {
        return this.container;
    }
    /**
     * @param {string} basePath
     * @return {Application}
     */
    setBasePath(basePath) {
        this.basePath = basePath;
        return this;
    }
    /**
     * @return {string}
     */
    getResourcePath() {
        return this.resourcePath;
    }
    /**
     * @param {string} resourcePath
     * @return {Application}
     */
    setResourcePath(resourcePath) {
        this.resourcePath = resourcePath;
        return this;
    }
    /**
     * @param {Module} module
     */
    addModule(module) {
        this.modules.push(module);
    }
    /**
     * @return {Array<Module>}
     */
    getModules() {
        return this.modules;
    }
    /**
     * @param {string} id
     * @return Application
     */
    removeModule(id) {
        for (let cont = 0; this.modules.length > cont; cont) {
            if (this.modules[cont].getId() === id) {
                this.modules.splice(cont, 1);
                break;
            }
        }
        return this;
    }
    /**
     * @param {ContainerInterface} container
     */
    static injectService(container) {
        console.log('inject');
    }
    /**
     * @param {EventManagerInterface} eventManager
     * @return {this}
     */
    setEventManager(eventManager) {
        this.eventManager = eventManager;
        return this;
    }
    /**
     * @return {EventManagerInterface}
     */
    getEventManager() {
        return this.eventManager;
    }
    /**
     * @param {string} container
     * @return this
     */
    setContainer(container) {
        this.container = container;
        return this;
    }
    /**
     * @return {string}
     */
    getBasePath() {
        return this.basePath;
    }
}
/**
 * @type {string}
 */
Application.BOOTSTRAP_MODULE = 'bootstrap-module';
/**
 * @type {string}
 */
Application.LOAD_MODULE = 'laod-module';
exports.Application = Application;
