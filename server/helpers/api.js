import fetch from 'node-fetch';
import settings from './settings';

export default class Api {
  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'dataType': 'json',
    }
  }

  static get(path) {
  	return this.xhr(path, null, 'GET');
  }

  static xhr(path, params, verb) {
  	const options = Object.assign({
  		method: verb,
  		headers: Api.headers(),
  	});

  	if (params) {
  	  options.body = JSON.stringify(params);
  	}

    const keySign = path.indexOf('?') === -1 ? '?' : '&';
    const url = `${settings.apiHost}${path}${keySign}api_key=${settings.apiKey}`;

    return fetch(url, options).then(resp => {
      const json = resp.json();
      if (resp.ok) {
        return json;
      }
      return json.then(err => {throw err});
    }).then(json => json.data);
  }
}