import {ContainerInterface, ContainerAwareInterface} from "../container/index";
import {Module} from "./Module";
import {EventManagerAwareInterface, EventManagerInterface} from "../event/index";
import {EventManager} from "../event/EventManager";
import {Container} from "../container/Container";

/**
 *  Application
 */
export class Application implements EventManagerAwareInterface, ContainerAwareInterface {

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
     * @type {Array<Module>}
     */
    private modules: Array<Module>;

    /**
     * @type {EventManager}
     */
    private eventManager:EventManagerInterface = new EventManager();

    /**
     * @type {Container}
     */
    private container: ContainerInterface = new Container();

    /**
     * @param {Array<Module>} modules
     */
    constructor(modules:Array<Module>) {

        /**
         * Load module
         */
        this.loadModules(modules);
    }

    /**
     * @param {Array<Module>} modules
     */
    private loadModules(modules:Array<Module>) {
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

    /**
     * @param {string} container
     * @return this
     */
    setContainer(container:ContainerInterface) {
        this.container = container;
        return this;
    }

    /**
     * @return {string}
     */
    public getBasePath() {
        return this.basePath;
    }

}