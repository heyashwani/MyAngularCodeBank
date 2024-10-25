// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  envName: 'development',
  firebase: {
    apiKey: "AIzaSyDDQr2RHt87P8KAaXyn0pp_jZy4UI1DmMo",
    authDomain: "ashwaninotificationproject.firebaseapp.com",
    databaseURL: "https://ashwaninotificationproject-default-rtdb.firebaseio.com",
    projectId: "ashwaninotificationproject",
    storageBucket: "ashwaninotificationproject.appspot.com",
    messagingSenderId: "799640560640",
    appId: "1:799640560640:web:d5e4d003b4d256887ea4e5",
    measurementId: "G-6P7B7KH5VZ",
    vapidKey: "BE16inU1UFVH7gr6nU8Klagc1DDLKxl7B9q1vNb4Y3ZJr8LwXTzDfJc234WJh6kqS4a0zZN2QLZZvm3NTCQdcjo"
  },
  recaptcha: {
    siteKey: '6Lf7UL0cAAAAAIt_m-d24WG4mA1XFPHE8yVckc5S',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
