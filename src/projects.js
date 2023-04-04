// import { html } from '../../node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';

import { ProjectsItems } from '../src/items.js'; 

let projectsTemplate = (projects) => html`
<div class="projects-section">
   ${projects.map(x => RenderListTemplate(x))}
</div>`;



let RenderListTemplate = (el) => html`
  <li class="animate__animated animate__bounceInLeft animate__slow">
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
            "" `
        }
        </div>
        <a href=${el.link} target="_blank" rel="noreferrer">
          <img src=${el.img} alt=${el.name} />
        </a>
      </li>`;


export function projectsPage(ctx){

    let projects = ProjectsItems;

    ctx.render(projectsTemplate(projects));
}