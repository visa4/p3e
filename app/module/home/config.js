/**
 *
 */
class Config extends require("@p3e/library").container.ContainerAware {

    /**
     *
     * @return {string}
     * @constructor
     */
    static get COLLECTION() { return 'store1'; };

    /**
     *
     * @return {string}
     * @constructor
     */
    static get STORAGE_SERVICE() { return 'HomeStorage'; };


    /**
     *
     * @return {string}
     * @constructor
     */
    static get ENTITY_SERVICE() { return 'HomeEntity'; };

    /**
     *
     * @return {string}
     * @constructor
     */
    static get HYDRATOR_SERVICE() { return 'HomeEntityHydrator'; };
    
    /**
     * 
     */
    init() {
        //this.getContainer().set('HomeService', new HomeService());
        this.initStorage();
        this.initEntity();
        this.initHydrator();
    }

    /**
     *
     */
    initStorage() {

        const dexieManager = this.getContainer().get('DexieManager');

        /**
         * Add schema
         */
        let store = new (require("@p3e/library").storage.adapter.dexie.Store)(
            Config.COLLECTION,
            ['id', 'test']

        );

        dexieManager.addStore(store);

        /**
         * Create Schema
         */
        dexieManager.on("ready", () => {


            const adapter = new (require("@p3e/library").storage.adapter.dexie.DexieAdapter)(dexieManager, Config.COLLECTION);
            const storage = new (require("@p3e/library").storage.Storage)(adapter);
            storage.setHydrator(this.getContainer().get('HydratorContainerAggregate').get(Config.HYDRATOR_SERVICE));

            this.getContainer().get('StorageContainerAggregate').set(
                Config.STORAGE_SERVICE,
                storage
            )
        });
    }

    /**
     *
     */
    initHydrator() {
        this.getContainer()
            .get('HydratorContainerAggregate')
            .set(
                Config.HYDRATOR_SERVICE,
                Config.getHomeEntityHydrator(this.getContainer().get('EntityContainerAggregate'))
            )
    }

    /**
     *
     */
    initEntity() {
        this.getContainer()
            .get('EntityContainerAggregate')
            .set(Config.ENTITY_SERVICE, new HomeEntity());
    }

    /**
     *
     */
    static getHomeEntityHydrator(container) {
        let hydrator = new (require("@p3e/library").hydrator.PropertyHydrator)(
            container.get(Config.ENTITY_SERVICE)
        );

        return hydrator;
    }

}


module.exports = Config;
