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
import { portfolioItem } from './components/portfolio/portfolioItem.js';

/* shop */
import { shopData } from './data/shopData.js';
import { shopItem } from './components/shop/shopItem.js';

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
const portfolioGallery = new Gallery(portfolioData, portfolioItem);
portfolioGallery.init();

/* shop */
const shopGallery = new Gallery(shopData, shopItem);
shopGallery.init();

/* testimonials */
/* blog */
/* freelance */
/* contact me */
/* footer */
