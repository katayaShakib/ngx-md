// // // This file is required by karma.conf.js and loads recursively all the .spec and framework files

// // import 'zone.js/dist/long-stack-trace-zone';
// // import 'zone.js/dist/proxy.js';
// // import 'zone.js/dist/sync-test';
// // import 'zone.js/dist/jasmine-patch';
// // import 'zone.js/dist/async-test';
// // import 'zone.js/dist/fake-async-test';
// // const getTestBed  = require('@angular/core/testing').getTestBed;
// // const BrowserDynamicTestingModule  = require('@angular/platform-browser-dynamic/testing').BrowserDynamicTestingModule;
// // const platformBrowserDynamicTesting  = require('@angular/platform-browser-dynamic/testing').platformBrowserDynamicTesting;


// // // Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
// // declare var __karma__: any;
// // declare var require: any;

// // // Prevent Karma from running prematurely.
// // __karma__.loaded = function () {};

// // // First, initialize the Angular testing environment.
// // getTestBed().initTestEnvironment(
// //   BrowserDynamicTestingModule,
// //   platformBrowserDynamicTesting()
// // );

// // // Then we find all the tests.
// // const contextApps = require.context('./apps', true, /\.spec\.ts$/);
// // // And load the modules.
// // contextApps.keys().map(contextApps);

// // const contextLibs = require.context('./libs', true, /\.spec\.ts$/);
// // // And load the modules.
// // contextLibs.keys().map(contextLibs);



// // This file is required by karma.conf.js and loads recursively all the .spec and framework files

// import 'core-js/es7/reflect';
// import 'zone.js/dist/zone';
// import 'zone.js/dist/zone-testing';
// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';

// // declare const require: any;

// // First, initialize the Angular testing environment.
// getTestBed().initTestEnvironment(
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting()
// );
// // Then we find all the tests.
// const context = require.context('./', true, /\.spec\.ts$/);
// // And load the modules.
// context.keys().map(context);



// // Finally, start Karma to run the tests.
// // __karma__.start();




// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
