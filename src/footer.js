import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { html } from 'https://unpkg.com/lit-html?module';

let footerTemplate = () => html`
  <div class="footer">
    <p>All Rights Reserved © Krasimir Markov 2023</p>
  </div>
`;


export function renderFooter(){

   return footerTemplate();
}