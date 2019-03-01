import {html} from '@polymer/polymer/lib/utils/html-tag.js';
import '@polymer/paper-styles/default-theme';
import '@polymer/iron-flex-layout/iron-flex-layout';

const template = html`
<custom-style id="development-style">
    <style is="custom-style">
     
        /**************************************
                EXAMPLE STYLE COMPONENT
        **************************************/
        .debug {
            background-color: red;
        }

        .debug1 {
            background-color: yellow;
        }
    </style>
</custom-style>`;

template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);