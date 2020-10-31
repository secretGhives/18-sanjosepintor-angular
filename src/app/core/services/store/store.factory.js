function storeFactory($http, $templateCache) {
	'ngInject';

	// Google vars
	var g_args = {
		url: "https://maps.googleapis.com/maps/api/place/details/json?cid=",
		cid: "8585301736328483035",
		key: "AIzaSyCMPp4oiodsxxcs4ZShe0K8F1nQpCXQuKk"
	};

	// Instagram vars
	var i_args = {
		//userid: "4808193211",
		userid: "self",
		clientid: "666e9d7296c244a2b5ad7c82671fc55e",
		token: "4808193211.666e9d7.d0668e1290a0400eb6154ff5f6f46885",
		limit: "12",
		url: "https://api.instagram.com/v1/users/"
	};

	function handleSuccess(response) {
		// use response
		// response: { data, status, statusText, headers, config }
		// console.info('handleSucess');
		// console.table(response);
		//console.table(response.data);
		return response.data;
	};

	function handleError(response) {
		// handle errors
		// console.info('handleError');
		// console.table(response);
		return response;
	};

	return {
		company: 'SanJosePintor',
		phone: '8709-5738',
		email: 'contact@sanjosepintor.com',
		cities: 'San Jose & Heredia',
		instagurl: 'https://www.instagram.com/sanjosepintor/',
		getReviews() {
			return $http
				.jsonp(g_args.url + g_args.cid + '&key=' + g_args.key, {jsonpCallbackParam: 'callback'})
				.then(handleSuccess)
				.catch(handleError);
		},

		getInstagrams() {
			var code = null;
      var response = null;

      return $http({method: 'JSONP', url: i_args.url + i_args.userid + '/media/recent/?access_token=' + i_args.token + '&count=' + i_args.limit, cache: $templateCache}).
        then(function(response) {
          // console.table(response);
          // console.info('Status ' + response.status);
          return response.data
        }, function(response) {
          // console.info('fR ' + response || 'Request failed');
          // console.table(response);
          return response;
      });
			// return $http
			// 	.get(i_args.url + i_args.userid + '/media/recent/?access_token=' + i_args.token + '&count=' + i_args.limit)
			// 	.then(handleSuccess)
			// 	.catch(handleError);
		}
	};
}

export default storeFactory;
