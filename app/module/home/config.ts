import {ModuleConfigInterface} from '@p3e/library/src/core/module/ModuleConfigInterface';
import {ContainerAware} from '@p3e/library/src/container/ContainerAware';
import {HomeService} from "./src/HomeService";
/**
 *
 */
export class Config extends ContainerAware implements ModuleConfigInterface {

    init() {
        console.log('config home', this.getContainer());
        this.getContainer().set('HomeService', new HomeService());
    }
}