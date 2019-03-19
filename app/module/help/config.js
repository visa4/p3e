"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerAware_1 = require("@p3e/library/src/container/ContainerAware");
const HelpService_1 = require("./src/HelpService");
/**
 *
 */
class Config extends ContainerAware_1.ContainerAware {
    init() {
        this.getContainer().get('Test').then(function (service) {
            this.getContainer().set('HelpService', new HelpService_1.HelpService(service))
        }.bind(this));
    }
}
exports.Config = Config;
