/**
 *
 */
class Config extends require("@p3e/library").container.ContainerAware {
    init() {
        this.getContainer().set('HomeService', new HomeService());
    }
}


module.exports = Config;
