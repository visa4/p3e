import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/polymer/lib/elements/dom-module';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/polymer/lib/elements/dom-repeat';

import '@polymer/iron-icons/iron-icons';
import '@polymer/iron-pages/iron-pages';
import '../../../style/app-style';

import '../../../elements/layout/p3e-layout'
import '../../../elements/demo-elements/demo-elements'
import '../../../entrypoint/dashboard/src/dashboard'
/*

import {Application} from '../../../../lib/es6/core/Application';
const ApplicationCommonjs = require('../../../../lib/commonjs/core/Application').Application;

let commonjs = new ApplicationCommonjs();
let es6 = new Application();
console.log(commonjs);
console.log(commonjs.getBasePath === es6.getBasePath);
console.log(commonjs === es6);
console.log(commonjs.getBasePath === es6.getBasePath);
console.log(es6);
*/