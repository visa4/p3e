import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

import '@polymer/paper-badge/paper-badge';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-card/paper-card';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';
import '@polymer/paper-progress/paper-progress';
import '@polymer/paper-spinner/paper-spinner';
import '@polymer/paper-swatch-picker/paper-swatch-picker';
import '@polymer/paper-tabs/paper-tabs'
import '@polymer/paper-tooltip/paper-tooltip';

import '@webcomponents/webcomponentsjs/';

/**
 * @customElement
 * @polymer
 */
class DemoElements extends PolymerElement {

    static get template() {
        return html`
            <style>
                :host { 
                    padding-bottom: 20px;
                }
            
                .container {
                    margin-bottom: 40px;
                }
                
                .section {
                    margin-top: 10px;
                }
            
                .paper-badge {
                    width: fit-content;
                    display: inline-block;
                    margin-left: 5px;
                    margin-right: 30px;
                }
                /* Need to position the badge to look like a text superscript */
                .paper-badge > paper-badge {
                    --paper-badge-margin-left: 20px;
                    --paper-badge-margin-bottom: 0px;
                }
                
                paper-card {
                    width: 300px;
                    height: auto;
                }
               
                .paper-progress div {
                    margin-top: 8px;
                    margin-bottom: 8px;
                }
               
                paper-progress {
                    width: 100%;
                }
               
                paper-progress.slow {
                  --paper-progress-indeterminate-cycle-duration: 20s;
                }
                
                .paper-spinner div {
                    display: flex;
                    align-items: center;
                }
                
                .paper-spinner div span {
                    padding-right: 8px;
                }
                
                #id_4 {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: orange;
                }

            </style>
            <div class="container">
                <div class="paper-badge" tabindex="0">
                    <span>paper badge</span>
                    <paper-badge icon="icons:apps" label="happy"></paper-badge>
                </div>
                <div class="paper-button section" tabindex="1">
                    <paper-button>paper button</paper-button>
                </div>
                <div class="paper-card section" tabindex="2">
                    <paper-card heading="Emmental" image="http://placehold.it/300x100/FFC107/000000" alt="Emmental">
                        <div class="card-content">
                            paper card  
                        </div>
                        <div class="card-actions">
                            <paper-button>Share</paper-button>
                            <paper-button>Explore!</paper-button>
                        </div>
                    </paper-card>
                </div>
                <div class="paper-dropdown-menu section" tabindex="3">
                    <paper-dropdown-menu label="Paper dropdown menu">
                      <paper-listbox slot="dropdown-content" class="dropdown-content">
                        <paper-item>select 1</paper-item>
                        <paper-item>select 2</paper-item>
                        <paper-item>select 3</paper-item>
                        <paper-item>select 3</paper-item>
                      </paper-listbox>
                    </paper-dropdown-menu>
                </div>
                <div class="paper-icon-button section" tabindex="4">
                    <paper-icon-button icon="icons:apps"></paper-icon-button>
                </div>
                <div class="paper-item section" tabindex="3">
                    <paper-item class="fancy">paper item 1</paper-item>
                    <paper-item class="fancy">paper item 2</paper-item>
                    <paper-item class="fancy">paper item 3</paper-item>
                </div>
                <div class="paper-menu-button section" tabindex="5">
                    <paper-menu-button>
                        <paper-icon-button icon="menu" slot="dropdown-trigger" alt="menu"></paper-icon-button>
                        <paper-listbox slot="dropdown-content">
                            <paper-item>paper menu button 1</paper-item>
                            <paper-item>paper menu button 2</paper-item>
                            <paper-item>paper menu button 3</paper-item>
                        </paper-listbox>
                    </paper-menu-button>
                </div>
                 <div class="paper-progress section" tabindex="6">
                    <paper-progress indeterminate></paper-progress>
                    <div>paper progress</div>
                    <paper-progress indeterminate class="slow"></paper-progress>
                </div>
                <div class="paper-spinner section" tabindex="7">
                    <div>
                        <span>paper spinner </span> <paper-spinner active></paper-spinner>
                    </div>
                </div>
                <div class="paper-swatch-picker section" tabindex="8">
                    <paper-swatch-picker></paper-swatch-picker>
                    <paper-swatch-picker color="#E91E63"></paper-swatch-picker>
                </div>
                <div class="paper-tabs section" tabindex="9">
                    <paper-tabs selected="0">
                        <paper-tab>paper tab 1</paper-tab>
                        <paper-tab>paper tab 2</paper-tab>
                        <paper-tab>paper tab 3</paper-tab>
                    </paper-tabs>
                </div>
                 <div class="paper-tabs section" tabindex="10">
                    <paper-toolbar>
                        <span slot="top" class="title">paper toolbar</span>
                    </paper-toolbar>
                </div>
                <div class="paper-tooltip section" tabindex="11">
                    <div id="id_4" tabindex="0"></div>
                    <paper-tooltip for="id_4" offset="0">meow!</paper-tooltip>
                </div>
            </div>
        `;
    }
}

window.customElements.define('demo-elements', DemoElements);
