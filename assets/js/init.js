/*! Copyright © 2018 accengage-web-sdk 3.5.6 by Accengage */
"use strict";
! function () {
	function a(a, b) {
		return this.props = {
			window: a,
			document: b
		}, this
	}

	function b() {
		try {
			new a(window, document).validate().start()
		} catch (b) {}
	}! function (a) {
		function b(a) {
			var b = "create" in Object || "create" in Object.prototype,
				c = "bind" in Function || "bind" in Function.prototype;
			if (!b && !c) throw "Deprecated JavaScript rendering engine";
			if (!("Worker" in a)) throw "No WebWorker compliancy";
			if (!("indexedDB" in a || "localStorage" in a)) throw "No Storage compliancy"
		}

		function c(a) {
			if (!(n in a)) throw "Proxy references list does not exist in window";
			if (!(k in a[n])) throw "Proxy reference has not been declared for this master domain";
			if ("array" !== i(a[a[n][k]])) throw "Proxy has not been declared as an Array"
		}

		function d(a) {
			if ("object" !== i(a[a[n][k]][m])) throw "Parameters are not provided inside an Object"
		}

		function e(a) {
			if (j in a[a[n][k]]) throw "An initialised proxy is already running"
		}

		function f(a) {
			return "https://" + k + l + o + g(a)
		}

		function g(a) {
			for (var b = [], c = a.location.search.substr(1).split("&"), d = 0; d < c.length; d++) "ACC" === c[d].substr(0, 3) && (b.push(c[d]), 0 === c[d].indexOf("ACCdebugKey=") && b.push("ACCtimestamp=" + 1 * new Date));
			return "?" + b.join("&")
		}

		function h(a, b) {
			var c = a.createElement("script"),
				d = a.getElementsByTagName("script")[0];
			c.async = 1, c.src = b, d.parentNode.insertBefore(c, d)
		}

		function i(a) {
			var b = Object.prototype.toString.call(a);
			return b.slice(8, b.length - 1).toLowerCase()
		}
		var j = "a",
			k = "eu.winnernotification.net",
			l = "/pushweb/assets",
			m = "p",
			n = "AccengageWebSDKObject",
			o = "/t_main.js";
		a.prototype.validate = function () {
			return b(this.props.window), c(this.props.window), d(this.props.window), this
		}, a.prototype.start = function () {
			e(this.props.window), h(this.props.document, f(this.props.window))
		}
	}(a), b()
}();