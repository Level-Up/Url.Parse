/** 
* @projectDescription 	@aaronbassett's fork of Poly9's polyvalent URLParser class
*
* @author		Aaron Bassett - me@aaronbassett.com - http://aaronbassett.com
* @version		0.2 
* @namespace	Url
*
* Usage: var u = new Url.Parse('http://user:password@example.com/pathname?arguments=1#fragment');
* u.getHost() == 'example.com';
* u.getProtocol() == 'http';
* u.getPathname() == '/pathname';
* u.getQuerystring() == 'arguments=1';
* u.getFragment() == 'fragment';
* u.getUsername() == 'user';
* u.getPassword() == 'password';
*
* Url.Parse is freely distributable under the terms of an MIT-style license.
*/

/**
 * Creates an Parse instance
 *
 * @classDescription	Creates an Parse instance
 * @return {Object}	return an Parse object
 * @param {String} url	The url to parse
 * @constructor
 * @exception {String}  Throws an exception if the specified url is invalid
 */
Url.Parse = function(url) {
	this._fields = {'Username' : 4, 'Password' : 5, 'Port' : 7, 'Protocol' : 2, 'Host' : 6, 'Pathname' : 8, 'URL' : 0, 'Querystring' : 9, 'Fragment' : 10};
	this._values = {};
	this._regex = null;
	this.version = 0.1;
	this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/;
	for(var f in this._fields) {
		this['get' + f] = this._makeGetter(f);
		if (typeof url != 'undefined') {
			this._parse(url);
		}
	}
}

/**
 * @method 
 * @param {String} url	The url to parse
 * @exception {String} 	Throws an exception if the specified url is invalid
 */
Url.Parse.prototype.setURL = function(url) {
	this._parse(url);
}

Url.Parse.prototype._initValues = function() {
	for(var f in this._fields) {
		this._values[f] = '';
	}
}

Url.Parse.prototype._parse = function(url) {
	this._initValues();
	var r = this._regex.exec(url);
	if (!r) throw "DPURLParser::_parse -> Invalid URL"
	for(var f in this._fields) if (typeof r[this._fields[f]] != 'undefined') {
		this._values[f] = r[this._fields[f]];
	}
}

Url.Parse.prototype._makeGetter = function(field) {
	return function() {
		return this._values[field];
	}
}