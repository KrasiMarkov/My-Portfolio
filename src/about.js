// import { html } from '../../node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';

import { ToolkitItems, HobbiesItems } from '../src/items.js';



let aboutTemplate = (tools, hobbies) => html`
<section class="about-section">
        <div class="about animate__animated animate__bounceInLeft animate__slow">
          <h1>ABOUT</h1>
          <br />
          <div class="Hero-pic"></div>

          <p class="info">
            Hi I'm Krasimir, and I'm an aspiring Web Developer located in Sofia
            Bulgaria. I'm deeply interested in software development, I'm
            creative, highly motivated, eager to learn and open for the
            opportunity to begin my career as a web developer.
          </p>
        </div>
        <div class="toolkit-section animate__animated animate__bounceInRight animate__slow">
          <div class="toolkit">
            <h1>TOOLKIT</h1>
            <br />
            <ul class="toolkit-items">
            ${tools.map(x => RenderListTemplate(x))}
            </ul>
          </div>

          <div class="hobbies-section">
            <h1>HOBIES AND INTERESTS</h1>
            <br />
            <ul class="hobbies-items">
            ${hobbies.map(x => RenderListTemplate(x))}
            </ul>
          </div>
        </div>
    </section>
`;

let RenderListTemplate = (el) => html`
  <li>
        <p>${el.name}</p>
        <div class="project-links">
          ${el.link ? html`
            <a
              class="github-link"
              rel="noreferrer"
              target="_blank"
              href=${el.github}
            >
              GitHub
            </a>
           ` : html`
             `
        }
        </div>
        <a href=${el.link} target="_blank" rel="noreferrer">
          <img src=${el.img} alt=${el.name} />
        </a>
      </li>`;
        

export function aboutPage(ctx){

    let tools = ToolkitItems;
    let hobbies = HobbiesItems;

    ctx.render(aboutTemplate(tools, hobbies));
}