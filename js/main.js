'use strict';

import {createObject} from '../js/data.js';

const OBJECT_COUNT = 10;

const similarArrays = new Array(OBJECT_COUNT).fill(null).map(() => createObject());
similarArrays; //чтобы линтер не ругался
