// import { html } from '../../node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';

let footerTemplate = () => html`
  <div class="footer">
    <p>All Rights Reserved © Krasimir Markov 2023</p>
  </div>
`;


export function renderFooter(){

   return footerTemplate();
}