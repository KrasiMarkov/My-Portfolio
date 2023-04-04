// import { html } from '../../node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';


const navigationTemplate = () => html`
<!-- <div class="container red topBotomBordersOut">
  <a id="krasi" left" href="/">KRASIMIR MARKOV</a>
  <a href="/about">ABOUT</a>
  <a href="/projects">PROJECTS</a>
  <a href="/contact">CONTACT</a>
</div> -->
<nav id="navbar">
<ul>
  <li style="float:left"><a href="/">KRASIMIR MARKOV</a></li>
  <li style="float:right"><a href="/contact">CONTACT</a></li>
  <li style="float:right"><a href="/projects">PROJECTS</a></li>
  <li style="float:right"><a href="/about">ABOUT ME</a></li>
</ul>
</nav>
`;


export function renderNavigation(){

    return navigationTemplate();
}