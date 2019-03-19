"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ContainerAware_1 = require("@p3e/library/src/container/ContainerAware");
const HomeService_1 = require("./src/HomeService");
/**
 *
 */
class Config extends ContainerAware_1.ContainerAware {
    init() {
        console.log('config home', this.getContainer());
        this.getContainer().set('HomeService', new HomeService_1.HomeService());
    }
}
exports.Config = Config;
