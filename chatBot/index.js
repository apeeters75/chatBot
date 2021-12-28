import Tchat from './tchat.js';
import Bot from './bot.js';

import './index.scss';

 const bots = [{
    id : '1',
    name :'Terminabot',
    avatar : 'ter.jpg',
    countMessage : 0
}];


const tchat = new Tchat (bots);

tchat.run (); 

const Terminabot = new bots(bots[0]);

console.log(Terminabot.entity);