// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // adding data from firebase
  production: false,
  firebase : {
    apiKey: "AIzaSyCkpAO_vs2dxFfGM5P8aA6adOX55Czj3m0",
    authDomain: "fir-auth-cd390.firebaseapp.com",
    projectId: "fir-auth-cd390",
    storageBucket: "fir-auth-cd390.appspot.com",
    messagingSenderId: "315623534577",
    appId: "1:315623534577:web:74fe3afa6305a4c73ede50"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
