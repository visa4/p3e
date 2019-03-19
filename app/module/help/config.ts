import {ModuleConfigInterface} from '@p3e/library/src/core/module/ModuleConfigInterface';
import {ContainerAware} from '@p3e/library/src/container/ContainerAware';
import {HomeService} from "../home/src/HomeService";
import {HelpService} from "./src/HelpService";
/**
 *
 */
export class Config extends ContainerAware implements ModuleConfigInterface {

    init() {

        this.getContainer().set('HelpService', new HelpService(this.getContainer().get('Test')));
    }
}