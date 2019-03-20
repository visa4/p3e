/**
 *
 */
class Config extends require("@p3e/library").container.ContainerAware {
    init() {

        this.getContainer().get('Test').then(function (service) {
            this.getContainer().set('HelpService', new HelpService(service))
        }.bind(this));
    }
}

module.exports = Config;