/// <reference types="@types/google.maps" />

import { Company } from './Company';
import {User} from './User';
import {CustomMap} from './CustomMap'

const user = new User();
const compnay = new Company(); 

console.log(user)
console.log(compnay)

const customMap = new CustomMap();
customMap.marker(user);
customMap.marker(compnay);


