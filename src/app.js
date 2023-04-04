import page from '//unpkg.com/page/page.mjs';


import page from '../node_modules/page/page.mjs';
import { aboutPage } from './about.js';
import { contactPage } from './contact.js';
import { homePage } from './home.js';
import { footerMiddleware } from './middlewares/footerMiddleware.js';
import { navigationMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/render.js';
import { projectsPage } from './projects.js';


page(navigationMiddleware);
page(renderMiddleware);
page(footerMiddleware);

page('/', homePage);
page('/about', aboutPage);
page('/projects', projectsPage);
page('/contact', contactPage);


page.start();

