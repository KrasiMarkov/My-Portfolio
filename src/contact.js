// import { html } from '../../node_modules/lit-html/lit-html.js';
import { html } from 'https://unpkg.com/lit-html?module';


let contactTemplate = () => html`
<section id="contact-form">
<h1>CONTACT ME</h1>
   <div id="contact">
      <br/>
      <form action="https://formspree.io/f/myyannkp" method="POST">
      <input type="text" name="first" placeholder="First Name" autocomplete="off" required>
      <input type="text" name="last" placeholder="Last Name" autocomplete="off" required>
      <input type="email" name="email" placeholder="Email Address" autocomplete="off" required>
      <textarea rows="5" cols="60" name="message" placeholder="Enter text" autocomplete="off" required></textarea>
      <button type="submit">SEND MESSAGE</button>
      </form>
   </div>
   <div class="contact-items">
   <h3 id="social-media">SOCIAL MEDIA</h3>
   <br/>
          <a
            href="https://www.linkedin.com/in/krasimir-markov-47208022a/"
          >
            <img
              src="/src/images/icons/linkedin.png"
              alt="Linkedin Icon"
            />
          </a>
          <a
            href="https://github.com/KrasiMarkov"
          >
            <img src="/src/images/icons/github.png" alt="Github Ivon" />
          </a>
        </div>
</section>
`;

export function contactPage(ctx){

    ctx.render(contactTemplate());
}