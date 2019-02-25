import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header/app-header.js'
import '../my-element/my-element.js';

/**
 * @customElement
 * @polymer
 */
class P3ELayout extends PolymerElement {

    static get template() {
        return html`
      <style>
        :host {
          display: block;
        }
              
        app-header {
          background-color: #4285f4;
          color: #fff;
        }
      </style>
      <app-header-layout>
        <app-header slot="header" fixed condenses effects="waterfall">
            <app-toolbar>Polymer 3</app-toolbar>
        </app-header>
            <my-element></my-element>
        </app-header-layout>
    `;
    }
}

window.customElements.define('p3e-layout', P3ELayout);
