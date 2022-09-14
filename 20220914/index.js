import { veletlen } from './matek.js';
import { LOREM, NEV} from './kulonleges.js';
//import { concat } from 'lodash';
import _ from 'lodash';


console.log("csok");
console.log(veletlen(5, 10));
console.log(NEV + ' ' + LOREM);

var t1 = [ 1, 455, 6 ];
var t2 = [ 454, 33, 1 ];
var t3 = [ 2 ];

var osszefuzott = _.concat(t1, t2, t3);
console.log(osszefuzott);