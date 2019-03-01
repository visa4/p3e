import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

export class VideoPlayer extends PolymerElement {

    constructor() {
        super();
    }
    static get template() {
        return html`
            <style>
                :host {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: no-wrap;
                    width: 100%;
                    height: 50%;
                }
                .container {
                    width: 100%;
                    height: 100%;
                    background-color: green;
                    box-sizing: border-box;
                }
            </style>
            <div id="video-player" class="container">
                <video></video>
                <img/>
                <div class="pro">
                    <div class="va"></div>
                </div>
                
            </div>
        `;
    }


}

window.customElements.define('video-player', VideoPlayer);