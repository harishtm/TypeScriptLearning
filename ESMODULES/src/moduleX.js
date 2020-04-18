import {greet, GreetMessage} from './moduleY.js';

greet("I am in moduleX imported from moduleY");


let gm = new GreetMessage("John")
gm.greet()