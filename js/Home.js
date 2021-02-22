// IMPORTS
/* header */
/* hero */
/* about me */
/* hobbies */
import { hobbies } from './components/hobbies/hobbies.js';
import { hobbiesData } from './data/hobbiesData.js';

/* achievements */
/* services */
/* resume */
/* expertise */
/* portfolio */
import { Gallery } from './components/gallery/Gallery.js';
import { portfolioData } from './data/portfolioData.js';

/* testimonials */
/* blog */
/* freelance */
/* contact me */
/* footer */

// EXECUTION
/* header */
/* hero */
/* about me */
/* hobbies */
hobbies(hobbiesData);

/* achievements */
/* services */
/* resume */
/* expertise */
/* portfolio */
const portfolioGallery = new Gallery(portfolioData);
portfolioGallery.init();

/* testimonials */
/* blog */
/* freelance */
/* contact me */
/* footer */
