function config($logProvider, $mdThemingProvider, $translateProvider, $sceDelegateProvider, LOCALES) {
	'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Do themes stuff
	$mdThemingProvider.theme('default')
	.primaryPalette('blue')
	.accentPalette('light-blue')
	.warnPalette('pink');

  $mdThemingProvider.theme('dark', 'default')
  .primaryPalette('amber')
  .dark();

	//console.log(LOCALES.preferredLocale);

  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain. **.
    'https://api.instagram.com/**',
    'https://maps.googleapis.com/**'
  ]);

  $translateProvider
  	.useLocalStorage()
	  .useStaticFilesLoader({
	    prefix: 'assets/data/locale-',
	    suffix: '.json'
	  })
    .fallbackLanguage('en_US')
    //.useSanitizeValueStrategy('sanitize')
    .preferredLanguage(LOCALES.preferredLocale);
    //.determinePreferredLanguage();

  //console.log($translateProvider.determinePreferredLanguage());

  //tmhDynamicLocaleProvider.localeLocationPattern('/assets/data/locale-{{locale}}.json');

}

export default config;
