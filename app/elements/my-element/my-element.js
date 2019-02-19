import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MyElement extends PolymerElement {
    static get template() {
        return html`<style>
        :host {
          display: block;
        } 
        
        div {
            font-size: 20px;
            color: green;
        }
      </style>
      <div>
        {{prop1}}
      </div>`;
    }

    static get properties() {
        return {
            prop1: {
                type: String,
                value: 'Good component'
            }
        };
    }
}

window.customElements.define('my-element', MyElement);
