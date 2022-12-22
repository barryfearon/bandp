import 'bootstrap';

import './scss/app.scss';

import 'lazysizes';

import './scripts/custom';

//Image imports: https://medium.com/front-end-weekly/webpack-and-dynamic-imports-doing-it-right-72549ff49234
import(/* webpackMode: "eager" */ `./assets/images/${'blank'}.gif`);
import(/* webpackMode: "eager" */ `./assets/images/${'bandp-carousel-001'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'bandp-carousel-002'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'bandp-carousel-003'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-01'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-02'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-03'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-04'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-05'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'rw-image-06'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'Preparation-Services-800x533'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'Interior-Painting-Services-1200x900'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'ExteriorPainting'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'Wallpapering-Services-800x533'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'Health-and-Safety-800x533'}.jpg`);
import(/* webpackMode: "eager" */ `./assets/images/${'bandp-logo'}.png`);


