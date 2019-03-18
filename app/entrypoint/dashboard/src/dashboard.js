import {Application} from '../../../../lib/es6/core/Application'
import {Module} from '../../../../lib/es6/core/Module'
import {Container} from "../../../../lib/es6/container/Container";
import {Localize} from "../../../../lib/es6/language/Localize";

process.env.APP_ENVIRONMENT = process.env.APP_ENVIRONMENT === undefined ? 'production' : process.env.APP_ENVIRONMENT;

const fs = require('fs');
const path = require('path');
const back = process.env.APP_ENVIRONMENT === 'development' ? '/../../../' : '/../../';

const basePath = path.normalize(`${__dirname}${back}`);
const modulePath = path.normalize(`${__dirname}/${back}module${back}`);
const resourcePath = path.normalize(`${__dirname}${back}storage${back}`);
process.env.APP_ENVIRONMENT = process.env.APP_ENVIRONMENT === undefined ? 'production' : process.env.APP_ENVIRONMENT;

/**
 * Container service of application
 *
 * @type {Container}
 */
const container = new Container();

const config =  JSON.parse(
    fs.readFileSync(`${basePath}/config/config-${process.env.APP_ENVIRONMENT}.json`).toString()
);
/***********************************************************************************************************************
                                               CONFIG SERVICE
***********************************************************************************************************************/
container.set('Config', config);

/***********************************************************************************************************************
                                                LOCALIZE SERVICE
 ***********************************************************************************************************************/
container.set('Localize', new Localize(
    config.localize.defaultLanguage,
    config.localize.languages
));

/***********************************************************************************************************************
                                            APPLICATION SERVICE
 **********************************************************************************************************************/
let modules = JSON.parse(fs.readFileSync(`${basePath}/config/module.json`).toString());
// TODO refactor after the introduction of the hydrator module
let modulesHydrate = [];
for (let cont = 0; modules.length > cont; cont++) {
    let module = new Module();
    for (var property in modules[cont]) {
        module[property] = modules[cont][property];
    }
    modulesHydrate.push(module);
}

const application = new Application(modulesHydrate, basePath, modulePath, window.navigator.appVersion.indexOf('Win') != -1 ? '\\' : '/');

application.setResourcePath(resourcePath);

container.set('Application', application);


/**
 * Load application in global scope
 */
switch (true) {
    case  typeof window !== 'undefined':

        Object.defineProperty(window, 'container', {
            value: container,
            writable: false
        });

        break;
    case  typeof global !== 'undefined':

        Object.defineProperty(global, 'container', {
            value: container,
            writable: false
        });

        break;
    default:
        throw 'wrong context';
}