// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environments = {
    production: false,
    latest :'https://openexchangerates.org/api/latest.json',
    convert :'https://openexchangerates.org/api/latest.json?app_id=74e13acbd59d494db7eec637d784aba2',
    historical: "https://openexchangerates.org/api/historical/:date.json"
  };
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.