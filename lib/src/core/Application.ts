import {ContainerInterface, ContainerAwareInterface} from "../container/index";
import {Module} from "./Module";
import {EventManagerAwareInterface, EventManagerInterface} from "../event/index";
import {EventManager} from "../event/EventManager";

/**
 *  Application
 */
export class Application implements EventManagerAwareInterface {

    /**
     * @type {string}
     */
    static BOOTSTRAP_MODULE: string = 'bootstrap-module';

    /**
     * @type {string}
     */
    static LOAD_MODULE: string = 'laod-module';

    /**
     * @type {string}
     */
    private basePath: string;

    /**
     * @type {string}
     */
    private resourcePath: string;

    /**
     * @type {string}
     */
    private modulePath: string;

    /**
     * @type {string}
     */
    private slash: string;

    /**
     * @type {Array<Module>}
     */
    private modules: Array<Module>;

    /**
     * @type {EventManager}
     */
    private eventManager:EventManagerInterface = new EventManager();

    /**
     * @param {Array<Module>} modules
     * @param {string} basePath
     * @param {string} modulePath
     * @param {string} slash
     */
    constructor(modules:Array<Module>, basePath:string, modulePath:string, slash:string) {

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
            this.loadModule(this.modules[cont])
        }
        this.getEventManager().emit(Application.BOOTSTRAP_MODULE, this.modules);
    }

    /**
     * @param {Module} module
     */
    private loadModule(module:Module) {

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
    public getBasePath() {
        return this.basePath;
    }

    /**
     * @param {string} basePath
     * @return {Application}
     */
    public setBasePath(basePath: string) {
        this.basePath = basePath;
        return this;
    }

    /**
     * @return {string}
     */
    public getResourcePath() {
        return this.resourcePath;
    }

    /**
     * @param {string} resourcePath
     * @return {Application}
     */
    public setResourcePath(resourcePath: string) {
        this.resourcePath = resourcePath;
        return this;
    }

    /**
     * @return {string}
     */
    public getModulePath() {
        return this.modulePath;
    }

    /**
     * @param {string} modulePath
     * @return {Application}
     */
    public setModulePath(modulePath: string) {
        this.modulePath = modulePath;
        return this;
    }

    /**
     * @return {string}
     */
    public getSlash() {
        return this.slash;
    }

    /**
     * @param {string} slash
     * @return {Application}
     */
    public setSlash(slash: string) {
        this.slash = slash;
        return this;
    }

    /**
     * @param {Module} module
     */
    public addModule(module:Module) {
        this.modules.push(module);
    }

    /**
     * @return {Array<Module>}
     */
    public getModules() {
        return this.modules;
    }

    /**
     * @param {string} id
     * @return Application
     */
    public removeModule(id: string) {
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
    public static injectService(container:ContainerInterface) {
        console.log('inject');
    }

    /**
     * @param {EventManagerInterface} eventManager
     * @return {this}
     */
    public setEventManager(eventManager:EventManagerInterface) {
        this.eventManager = eventManager;
        return this;
    }

    /**
     * @return {EventManagerInterface}
     */
    public getEventManager() {
        return this.eventManager;
    }
}