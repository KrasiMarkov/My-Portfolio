// import { render } from '../../node_modules/lit-html/lit-html.js';
import { render } from 'https://unpkg.com/lit-html?module';

import { renderNavigation } from '../navigation.js';


let navigationElement = document.querySelector('#navigation');


export function navigationMiddleware(ctx, next) {

    render(renderNavigation(ctx), navigationElement);

    next();
}