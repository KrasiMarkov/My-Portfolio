import { html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
// // import { html } from '../../node_modules/lit-html/lit-html.js';
// import { html } from 'https://unpkg.com/lit-html?module';


let HomeTemplate = () => html`
<section class="homepage">
<div class="animate__animated animate__bounceInDown animate__slow">
  <h1 class="title">Hi, I'm Krasimir</h1>
  <br />
  <br />
  <h3 class="show-once">Web Developer</h3>
  <br />
  <a href="/about" class="btn"><span class="animate__shakeX">ABOUT ME</span></a>
</div>
</section>`;



export function homePage(ctx){

  ctx.render(HomeTemplate());
}