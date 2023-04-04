// import { render } from '../../node_modules/lit-html/lit-html.js';
import { render } from 'https://unpkg.com/lit-html?module';

import { renderFooter } from '../footer.js';


let footerElement = document.querySelector('#footer');


export function footerMiddleware(ctx, next) {

    render(renderFooter(ctx), footerElement);

    next();
}