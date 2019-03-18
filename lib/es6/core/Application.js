import { EventManager } from "../event/EventManager";
/**
 *  Application
 */
export class Application {
    /**
     * @param {Array<Module>} modules
     * @param {string} basePath
     * @param {string} modulePath
     * @param {string} slash
     */
    constructor(modules, basePath, modulePath, slash) {
        /**
         * @type {EventManager}
         */
        this.eventManager = new EventManager();
        /**
         * @type {string}
         */
        this.basePath = basePath;
        /**
         * @type {string}
         */
        this.modulePath = modulePath;
        /**
         * @type {string}
         */
        this.slash = slash;
        /**
         * @type {Array<Module>}
         */
        this.modules = modules;
        /**
         * Load modules
         */
        for (let cont = 0; this.modules.length > cont; cont++) {
            this.loadModule(this.modules[cont]);
        }
        this.getEventManager().emit(Application.BOOTSTRAP_MODULE, this.modules);
    }
    /**
     * @param {Module} module
     */
    loadModule(module) {
        /**
         * Load entry point module
         */
        if (module.getWebComponentEntryPointName() && customElements && customElements.get(module.getWebComponentEntryPointName()) === undefined) {
            //  require(`${this.getModulePath()}/${module.getName()}/${module.getWebComponentEntryPointNameFile()}`);
            import(`${this.getModulePath()}${module.getName()}${this.getSlash()}${module.getWebComponentEntryPointNameFile()}`)
                .then((module) => {
                // lazyModule has all of the proper types, autocomplete works,
                // type checking works, code references work \o/
                console.log("TypeScript >= 2.4.0 Dynamic Import Expression:", module);
            })
                .catch((err) => {
                console.log("Failed to load moment", err);
            });
        }
    }
    /**
     * @return {string}
     */
    getBasePath() {
        return this.basePath;
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
     * @return {string}
     */
    getModulePath() {
        return this.modulePath;
    }
    /**
     * @param {string} modulePath
     * @return {Application}
     */
    setModulePath(modulePath) {
        this.modulePath = modulePath;
        return this;
    }
    /**
     * @return {string}
     */
    getSlash() {
        return this.slash;
    }
    /**
     * @param {string} slash
     * @return {Application}
     */
    setSlash(slash) {
        this.slash = slash;
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
}
/**
 * @type {string}
 */
Application.BOOTSTRAP_MODULE = 'bootstrap-module';
/**
 * @type {string}
 */
Application.LOAD_MODULE = 'laod-module';
