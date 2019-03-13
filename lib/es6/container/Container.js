/**
 * Container
 */
export class Container {
    constructor() {
        /**
         * @type {object}
         */
        this.services = {};
    }
    /**
     * @param {string} id
     * @return Promise
     */
    get(id) {
        return new Promise((resolve, reject) => {
            /**
            * Inject container if the service is a callback
            */
            if (typeof this.services[name] === 'function') {
                this.services[id] = this.services[id](this);
            }
            resolve(this.services[name]);
        });
    }
    ;
    /**
     * @param {string} id
     * @return boolean
     */
    has(id) {
        return !!this.services[id];
    }
    ;
    /**
     * @param {string} id
     * @param service
     * @return ContainerInterface
     */
    set(id, service) {
        this.services[id] = service;
        return this;
    }
    ;
}
/**
 * @type {string}
 */
Container.LOAD_SERVICE = 'load-service';
