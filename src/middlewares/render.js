import { render } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
// import { render } from '../../node_modules/lit-html/lit-html.js';
// import { render } from 'https://unpkg.com/lit-html?module';


let rootElement = document.querySelector('#root');

const contextRender = templateResult => {

    render(templateResult, rootElement);
}


export function renderMiddleware(ctx, next){

    ctx.render = contextRender;

    next();
}




