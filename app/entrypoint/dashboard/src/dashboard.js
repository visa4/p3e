import {Application} from '../../../../lib/es6/core/Application'
import {Module} from '../../../../lib/es6/core/Module'

let modules = [
    (new Module()).setName('primo').setIcon('icons:apps'),
    (new Module()).setName('secondo').setIcon('icons:check-circle'),
    (new Module()).setName('terzo').setIcon('icons:help'),
];

const application = new Application(modules);

/**
 * Load application in global scope
 */
switch (true) {
    case  typeof window !== 'undefined':

        Object.defineProperty(window, 'application', {
            value: application,
            writable: false
        });

        break;
    case  typeof global !== 'undefined':

        Object.defineProperty(global, 'application', {
            value: application,
            writable: false
        });

        break;
    default:
        throw 'wrong context';
}