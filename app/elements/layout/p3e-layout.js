import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/paper-icon-button/paper-icon-button.js'

/**
 * @customElement
 * @polymer
 */
class P3ELayout extends PolymerElement {

    static get template() {
        return html`
             <slot></slot>
        `;
    }

    ready() {
        super.ready();

        this.shadowRoot.querySelector('slot').addEventListener('slotchange', e => this._handleSlotChange(e));
    }

    /**
     * @param evt
     * @private
     */
    _handleSlotChange(evt) {
        let button = this.querySelector('#buttonDrawer');
        if (button && !button.onclick) {
            button.onclick = this._tapDrawer.bind(this);
        }
    }

    /**
     * @param evt
     * @private
     */
    _tapDrawer(evt) {
        let drawer = this.querySelector('#settingDrawer');
        if (drawer) {
            drawer.open()
        }
    }
}

window.customElements.define('p3e-layout', P3ELayout);
