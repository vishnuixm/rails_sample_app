!
function t(e, n, r) {
	//console.log('e=' + JSON.stringify(e));
	//console.log('n=' + JSON.stringify(n));
	//console.log('r=' + JSON.stringify(r));
	function o(u, a) {
		if (!n[u]) {
			if (!e[u]) {
				var c = "function" == typeof require && require;
				//console.log('c>>>' + c);
				if (!a && c) return c(u, !0);
				if (i) return i(u, !0);
				var f = new Error("Cannot find module '" + u + "'");
				throw f.code = "MODULE_NOT_FOUND",
				f
			}
			var s = n[u] = {
				exports: {}
			};
			e[u][0].call(s.exports, function (t) {
				var n = e[u][1][t];
				return o(n ? n: t)
			},
			s, s.exports, t, e, n, r)
		}
		return n[u].exports
	}
	for (var i = "function" == typeof require && require, u = 0; u < r.length; u++) o(r[u]);
	return o
} ({
	1 : [function (t) {
		"use strict";
		console.log("beginging of 1");
		function e(t) {
			console.log("inside e()");
			return Q.isFunction(String.prototype.trim) ? t.trim() : t.replace(/^\s+|\s+$/g, "")
		}
		function n(t) {

			var e = r(t, "class");
			console.log("inside n() e.baseVal=" + e.baseVal);
			return Q.isObject(e) ? e.baseVal: e
		}
		function r(t, e) {
			console.log("inside getatt r() =" + t.getAttribute(e));
			return t.getAttribute ? t.getAttribute(e) || "": t[e]
		}
		function o(t, e) {
			console.log("inside o()");
			return t.hasAttribute ? t.hasAttribute(e) : function () {
				var n = t.getAttributeNode(e);
				return ! (!n || !n.specified && !n.nodeValue)
			} ()
		}
		function i(t) {
			console.log("inside i()");
			return t.target || t.srcElement
		}
		function u(t) {
			console.log("inside u()");
			return t && se.getElementById(t.form) ||
			function () {
				for (var e = t; e && ("undefined" == typeof e.tagName || "form" !== e.tagName.toLowerCase());) e = e.parentNode;
				return e
			} ()
		}
		function a(t) {
			console.log("inside a()");
			t.preventDefault ? t.preventDefault() : t.returnValue = !1
		}
		function c(t) {
			console.log("inside c()");
			return t.defaultPrevented || void 0 === t.defaultPrevented && (t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault())
		}
		function f(t) {
			console.log("inside f()");
			var e = t.which || void 0 === t.button ? t.which: 1 & t.button ? 1 : 0;
			return 1 === e
		}
		function s(t) {
			console.log("inside s()");
			var e = t,
			n = e.target || e.srcElement,
			r = n.getBoundingClientRect(),
			o = 0 === e.screenX && 0 === e.screenY;
			if (o) return [0, 0];
			var i = Math.floor(e.clientX - r.left),
			u = Math.floor(e.clientY - r.top),
			a = void 0 === e.offsetX ? i: e.offsetX,
			c = void 0 === e.offsetY ? u: e.offsetY;
			return [a, c]
		}
		function l(t, e, n, r) {
			console.log("Item", t);
			console.log("inside l() adding event listeners, t=" + t + ",e=" + e ); //+ ",n=" + n + ",r=" + r );
			se.addEventListener ? t.addEventListener(e, n, r) : se.attachEvent ? t.attachEvent("on" + e, function () {
				var e = pe.event;
				e.currentTarget = t,
				e.target = e.srcElement,
				n.call(t, e)
			}) : t["on" + e] = n
		}
		function p(t, e, n, r) {
			console.log("inside p() remove listeners");
			return t.removeEventListener ? (t.removeEventListener(e, n, r), !0) : t.detachEvent ? t.detachEvent("on" + e, n) : void(t["on" + e] == n && delete t["on" + e])
		}
		function h(t) {
			console.log("inside h()");
			return t.innerText || t.textContent
		}
		function v(t) {
			console.log("inside v()");
			switch (t.tagName.toLowerCase()) {
			case "input":
				switch (t.type) {
				case "checkbox":
					return t.checked;
				case "radio":
					return t.checked;
				default:
					return t.value
				}
			default:
				return h(t)
			}
		}
		function g() {
			console.log("inside g()");
			var t, e;
			if (ze.flush(), e = De - Pe, ae) do t = new Date;
			while (t.gt() < ae - e);
			ne && (setTimeout(ne, 0), ne = null)
		}
		function d() {
			console.log("inside d()");
			if (Re) return ! 1;
			var t = pe.top === pe.self;
			return t && (O(be) || L(Ee)) && (M(Ee, "on", 18e5), _(), pe.heapV = {
				appid: heap.appid,
				track: heap.track,
				identify: heap.identify
			},
			heap.appid = ee = "3407116132", heap.track = heap.identify = function () {},
			ze.clear(), He = []),
			setTimeout(function () {
				Re = !0,
				K(),
				ze.startLoop(),
				W(He)
			},
			0),
			!0
		}
		function _() {
			console.log("inside _()");
			var t, e;
			t = se.createElement("script"),
			t.type = "text/javascript",
			t.charset = "UTF-8",
			t.src = xe,
			se.head.appendChild(t),
			e = se.createElement("link"),
			e.rel = "stylesheet",
			e.href = je,
			se.head.appendChild(e)
		}
		function y() {
			console.log("inside y()");
			return "interactive" === se.readyState || "complete" === se.readyState ? d() : (se.addEventListener ? l(se, "DOMContentLoaded", function t() {
				se.removeEventListener("DOMContentLoaded", t, !1),
				d()
			}) : se.attachEvent && se.attachEvent("onreadystatechange", function e() {
				"complete" === se.readyState && (se.detachEvent("onreadystatechange", e), d())
			}), void l(pe, "load", d, !1))
		}
		function m(t, e) {
			console.log("inside m()");
			var n = function (r) {
				p(pe, r.type, n),
				r !== t || c(r) || e(r)
			};
			l(pe, t.type, n)
		}
		function w(t, e) {
			console.log("inside w()");
			var n = Q.once(e);
			ze.flush(n),
			a(t),
			setTimeout(n, De),
			ne = n
		}
		function b(t, e) {
			console.log("inside b()");
			return t && "BODY" !== t.tagName && "HTML" !== t.tagName ? e(t) ? t: b(t.parentElement, e) : null
		}
		function E(t) {
			console.log("inside E()");
			var e, n;
			if (t = t || pe.event, e = t.which || t.button, n = i(t), (!oe || n === t.currentTarget) && n && n.tagName) if ("click" === t.type) {
				if (X(t), f(t)) {
					var r = n,
					a = function (t) {
						var e = t.tagName.toLowerCase();
						return ("input" === e || "button" === e) && t.type.match(/^(submit|image)$/i) && null !== u(t)
					},
					c = b(r, a),
					s = null !== c,
					l = void 0 !== t.__impl4cf1e782hg__;
					s ? Je.push([t, c]) : l || t.metaKey || t.shiftKey || t.ctrlKey || t.altKey || m(t, function () {
						for (; r && ("undefined" == typeof r.tagName || "a" !== r.tagName.toLowerCase() || !r.href);) r = r.parentNode;
						if (r && r.href) {
							var e = o(r, "download"),
							n = new RegExp("^\\s*(" + pe.location.href.split(pe.location.hash || "#")[0].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + ")?#").test(r.href),
							i = /^\s*javascript:/.test(r.href);
							r.isContentEditable || e || n || i || (r.target && "_self" !== r.target.toLowerCase() ? r.target.match(/^_(parent|top)$/i) && w(t, function () {
								pe.open(r.href, r.target)
							}) : w(t, function () {
								se.location.href = r.href
							}))
						}
					})
				}
			} else "mousedown" === t.type ? 1 !== e && 2 !== e || !n ? lastButton = lastTarget = null: (lastButton = e, lastTarget = n) : "mouseup" === t.type && (e === lastButton && n === lastTarget && X(t), lastButton = lastTarget = null)
		}
		function x(t) {
			console.log("inside x()");
			if (t = t || pe.event, X(t), !oe) {
				var e = i(t),
				n = Q.findLast(Je, function (t) {
					var n = t[1];
					return u(n) === e
				});
				if (Je = [], n) var a = n[0],
				c = n[1];
				m(t, function () {
					"_blank" !== e.target && w(t, function () {
						if (c) {
							var t = r(c, "type");
							if ("submit" === t) {
								var n = se.createElement("input");
								n.type = "hidden",
								o(c, "name") && (n.name = c.name),
								o(c, "value") && (n.value = c.value),
								e.appendChild(n)
							} else if ("image" === t) {
								var i = s(a),
								u = se.createElement("input");
								u.type = "hidden",
								u.name = c.name + ".x",
								u.value = i[0];
								var f = se.createElement("input");
								f.type = "hidden",
								f.name = c.name + ".y",
								f.value = i[1],
								e.appendChild(u),
								e.appendChild(f)
							}
						}
						var l = se.createElement("form");
						se.body.appendChild(l),
						l.submit.apply(e),
						se.body.removeChild(l),
						n && e.removeChild(n),
						u && f && (e.removeChild(u), e.removeChild(f))
					})
				})
			}
		}
		function j(t, e) {
			console.log("inside j()");
			return Q.isString(t) ? t.slice(0, e) : t
		}
		function S(t) {
			console.log("inside S()");
			var e = new RegExp("#.*");
			return t.replace(e, "")
		}
		function O(t, e) {
			console.log("inside O()");
			e = e || pe.location.search,
			t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
			var n = new RegExp("[\\?&]" + t + "=([^&#]*)"),
			r = n.exec(e);
			return null === r ? "": decodeURIComponent(r[1].replace(/\+/g, " "))
		}
		function A(t) {
			console.log("inside A()");
			var e = new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),
			n = e.exec(t);
			return n ? n[1] : t
		}
		function N(t) {
			console.log("inside N()");
			var e, n, r;
			if (e = A(t), r = t.slice(t.indexOf("?")), e.search("google.([^/?]*)$") >= 0 || e.search("bing.com$") >= 0) n = "q";
			else {
				if (! (e.search("yahoo.com$") >= 0)) return "";
				n = "p"
			}
			return ge(O(n, r))
		}
		function k(t, e, n) {
			console.log("inside k()");
			return "translate.googleusercontent.com" === t ? ("" === n && (n = e), e = getParameter(e, "u"), t = A(e)) : ("cc.bingj.com" === t || "webcache.googleusercontent.com" === t || "74.6." === t.slice(0, 5)) && (e = se.links[0].href, t = A(e)),
			[t, e, n]
		}
		function C(t) {
			console.log("inside C()");
			return (de ? "https": "http") + "://" + t
		}
		function T(t) {
			console.log("inside T()");
			return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(t)
		}
		function $(t) {
			console.log("inside t()");
			return t = t.toString(),
			t.length > Te && (t = t.slice(0, Te).split(" ").slice(0, -1).join(" ")),
			t.replace(/[\(\)\!\@\#\$\%\^\&\*]/g, "")
		}
		function M(t, e, n, r) {
			console.log("inside M()");
			var o;
			r || (r = re),
			n && (o = new Date, o.setTime(o.gt() + n)),
			se.cookie = t + "=" + ve(e) + (n ? ";expires=" + o.toGMTString() : "") + (r ? ";domain=." + r: "") + ";path=/" + (de && he.secureCookie ? ";secure": "")
		}
		function L(t) {
	//		console.log("inside L()");
			var e = new RegExp("(^|;)[ ]*" + t + "=([^;]*)"),
			n = e.exec(se.cookie);
			return n ? ge(n[2]) : 0
		}
		function D(t) {
		//	console.log("inside D()");
			return Ae + t + "." + ee
		}
		function P(t, e, n) {
			console.log("inside P()");
			M(D("id"), t + "." + e + "." + n, Ne)
		}
		function I() {
			console.log("inside I()");
			M(D("ses"), "*", ke)
		}
		function R(t) {
			console.log("inside R()");
			M(D("props"), JSON.stringify(t), Ne)
		}
		function U() {
			console.log("inside U()");
			var t, e, n, r, o, i;
			n = "hld",
			e = D(n),
			t = ye.split(".");
			console.log("bf for loop t=" + ye.split(".") + ", D(n)=" + D(n));
			for (var u = t.length - 1; u >= 0; u--) L(e) !== n && (r = t.slice(u, t.length).join("."), M(e, n, null, r));
			return M(e, n, -1, r),
			o = !r.match(/[a-zA-Z]/),
			i = r.indexOf(".") < 0,
			(o || i) && (r = null),
			r
		}
		function q() {
			console.log("inside q()");
			var t, e;
			try {
				e = L(D("props")),
				t = JSON.parse(e)
			} catch(n) {}
			return t || {}
		}
		function B() {
			console.log("inside B()");
			var t, e, n;
			return t = L(D("id")),
			e = L(D("ses")),
			t ? (ue = 2, n = t.split("."), n[1] = Be(32, 10), e || (ue = 1, n[2] = Be(32, 10))) : (ue = 0, n = [Be(53, 10), Be(32, 10), Be(32, 10)]),
			I(),
			P(n[0], n[1], n[2]),
			n
		}
		function F(t, e, n) {
			console.log("inside F()");
			var r, o;
			e && (e = e ? "&" + e: "", pe._hpjsonpcallback = n, o = se.head || se.getElementsByTagName("head")[0] || se.documentElement, r = se.createElement("script"), r.async = "async", r.src = t + "?" + ce + e + "&callback=_hpjsonpcallback", r.onload = r.onreadystatechange = function () { (!r.readyState || /loaded|complete/.test(r.readyState)) && (r.onload = r.onreadystatechange = null, o && r.parentNode && o.removeChild(r), r = void 0)
			},
			o.insertBefore(r, o.firstChild))
		}
		function J(t, e) {
			console.log("inside J()");
			if (t && !qe) {
				var n = new Image(1, 1);
				n.onload = function () {
					ae = 0,
					e && e()
				},
				n.onerror = function () {
					qe = !0
				},
				console.log("Se=" + Se);
				console.log("ce=" + ce);
				console.log("t=" + t);
				n.src = Se + "?" + ce + "&" + t + "&tm=" + (new Date).gt(),
				ae = (new Date).gt() + De
			}
		}
		function z(t, e) {
		//	console.log("inside z()");
			var n = L(D("id"));
			if (t[0] && n) {
				var r = n.split("."),
				o = Ue + ke < (new Date).gt();
				console.log("in func z...b4 call to J()");
				for (o && (ue = 1, r[1] = Be(32, 10), r[2] = Be(32, 10), Ve(r), P(r[0], r[1], r[2]), K()), Ue = (new Date).gt(), J(t[0], e), fe = 1; fe < t.length; fe++) !
				function (t, e) {
					setTimeout(function () {
						J(t)
					},
					10 * e)
				} (t[fe], fe)
			} else e()
		}
		function V(t) {
	//		console.log("inside V()");
			var e = "",
			n = 0,
			r = [],
			o = function (t, e) {
				return Q.isUndefined(e) || Q.isNull(e) || "" === e ? "": "&" + ve(t) + "=" + ve(e)
			},
			i = function (e) {
				var r, i, u, a;
				a = "",
				i = t ? n++:"";
				for (r in e) if (e.hasOwnProperty(r)) if (u = e[r], Q.isArray(u)) for (fe = 0; fe < u.length; fe++) a += o(r + i, u[fe]);
				else a += o(r + i, u);
				return a
			};
			return {
				addProps: function (t) {
					var o = i(t);
					o.length + e.length > Me && (r.push(e), e = "", n = 0, o = i(t)),
					e += o
				},
				build: function (t) {
					if (!t) return e.slice(1);
					for (r.push(e), fe = 0; fe < r.length; fe++) r[fe] = r[fe].slice(1);
					return r
				}
			}
		}
		function Y(t) {
			console.log("inside Y()");
			return Q.isObject(t) ? Q(t).chain().pick(function (t, e, n) {
				return n.hasOwnProperty(e) && !(Q.isUndefined(t) || Q.isNull(t) || "" === t)
			}).map(function (t, e) {
				return [e, t.toString()]
			}).flatten().value() : []
		}
		function W(t) {
			console.log("inside W()");
			for (fe = 0; fe < t.length; fe++) {
				var e = t[fe][0];
				console.log("-> in W e=" + e);
				pe.heap[e].apply(this, t[fe].slice(1))
			}
		}
		function H() {
			console.log("inside H()");
			var t = B();
			Ve(t)
		}
		function Z() {
			console.log("inside Z()");
			var t, e, n;
			return t = V(),
			e = S(me),
			n = {
				z: ue,
				g: j(pe.location.hash, Ce),
				h: j(pe.location.pathname, Ce),
				q: j(pe.location.search, Ce),
				d: j(pe.location.hostname, Ce),
				t: j(se.title, Te),
				r: j(e, Ce),
				e: j(N(e), Ce),
				us: j(O("utm_source"), Ce),
				um: j(O("utm_medium"), Ce),
				ut: j(O("utm_term"), Ce),
				uc: j(O("utm_content"), Ce),
				ua: j(O("utm_campaign"), Ce),
				k: Y(Ie)
			},
			t.addProps(n),
			t.build()
		}
		function K() {

			console.log("inside K()");
			var t;
			H(),
			Ie = q(),
			t = Z(),
			J(t)
		}
		function X(t) {
			console.log("inside X()");
			ze.queueEvent(t)
		}
		console.log("Starting of exec");
		t(4);
		var Q = t(2),
		G = t(3),
		te = t(5),
		SNAPSHOT_CONFIG = {
			"click": {
				"a.signup_button.round": {
					"s": {
						"But val": ".signup_button.round"
					}
				},
				"span.microposts": {
					"s": {
						"Posts count": ".microposts"
					}
				}
			},
			"submit": {
				"form#new_micropost.new_micropost": {
					"s": {
						"User post": "#micropost_content"
					}
				}
			}
		};
		console.log("After init dec");
		Date.prototype.gt = Date.prototype.getTime;
		var ee, ne, re, oe, ie, ue, ae, ce, fe, se = document,
		le = navigator,
		pe = window,
		he = Q.extend({
			disableTextCapture: !1,
			forceSSL: !1,
			secureCookie: !1
		},
		(pe.heap || {}).config),
		ve = pe.encodeURIComponent,
		ge = pe.decodeURIComponent,
		de = he.forceSSL || "https:" === se.location.protocol,
		//call to k()
		_e = k(se.domain, pe.location.href, se.referrer),
		ye = _e[0],
		me = (_e[1], _e[2]),
		we = pe.location.pathname + pe.location.hash,
		be = "heap-event-visualizer",
		Ee = "_hp_ved",
		//xe = C("heapanalytics.com/js/ved.js"),
		//je = C("heapanalytics.com/css/ved.css"),
		xe = "/ved-unmin-edit.js",
		je = "/ved-edit.css",
		//Call to C()
		Se = C("heapanalytics.com/h"),
		Oe = C("heapanalytics.com/api/identify"),
		Ae = "_hp2_",
		Ne = 63072e6,
		ke = 18e5,
		Ce = 1024,
		Te = 255,
		$e = 64,
		Me = 3900,
		Le = 2e3,
		De = 300,
		Pe = 100,
		Ie = {},
		Re = !1,
		Ue = (new Date).gt(),
		qe = !1;
		ie = le.appVersion,
		ie && (ie.indexOf("MSIE 6.") > -1 ? (oe = 6, Me = 1700) : ie.indexOf("MSIE 7.") > -1 ? (oe = 7, Me = 1900) : ie.indexOf("MSIE 8.") > -1 && (oe = 8));
		console.log("ye=" + ye + ", me=" + me + ", we=" + we);
		console.log("se=" + Se + ", Oe=" + Oe);
		var Be = function (t, e) {
			console.log("in Be varibale");
			if (e || (e = 16), void 0 === t && (t = 128), 0 >= t) return "0";
			for (var n = Math.log(Math.pow(2, t)) / Math.log(e), r = 2; 1 / 0 === n; r *= 2) n = Math.log(Math.pow(2, t / r)) / Math.log(e) * r;
			for (var o = n - Math.floor(n), i = "", r = 0; r < Math.floor(n); r++) {
				var u = Math.floor(Math.random() * e).toString(e);
				i = u + i
			}
			if (o) {
				var a = Math.pow(e, o),
				u = Math.floor(Math.random() * a).toString(e);
				i = u + i
			}
			var c = parseInt(i, e);
			return 1 / 0 !== c && c >= Math.pow(2, t) ? Be(t, e) : i
		},
		Fe = Q.memoize(function (t, e) {
			console.log(">>Fe call for Snapshot config??? match=");
			return Q(SNAPSHOT_CONFIG[t]).chain().pick(function (t, n) {
				console.log("e=" + e + "n=" + n);
				console.log("G.matchesSelector(e, n)=" + G.matchesSelector(e, n));
				return G.matchesSelector(e, n) > 0
			}).values().value()
		},
		function (t, e) {
			return t + "." + e
		}),
		Je = [],
		ze = function () {
			console.log("in ze variable, imm exec");
			var t = [],
			o = !1,
			u = function () {
		//		console.log("-> ze u");
				a(),
				setTimeout(u, Le)
			},
			a = function (e) {
		//		console.log("-> ze a");
				var n, r, i, u;
				if (e = e ||
				function () {},
				!o) return void e();
				for (r = V(!0), u = 0; u < t.length; u++) n = t[u],
				r.addProps(n);
				i = r.build(!0),
				z(i, e),
				t = []
			},
			c = function (t) {
				console.log("-> ze c");
				var e = i(t);
				return oe && t.srcElement !== t.currentTarget ? !1 : e && e.tagName ? 3 === e.nodeType ? !1 : r(e, "heap-ignore") ? !1 : "mousedown" === t.type || "mousemove" === t.type ? !1 : !0 : !1
			},
			f = function (t) {
				console.log("-> ze f");
				for (var e = null; t && "BODY" !== t.tagName && "HTML" !== t.tagName;) {
					if (e = r(t, "href")) return e;
					t = t.parentElement
				}
				return e
			},
			s = function (t) {
				console.log("-> ze s");
				var e, o, i, u;
				for (o = ""; t && "BODY" !== t.tagName && "HTML" !== t.tagName && (e = "@" + t.tagName.toLowerCase() + ";", u = r(t, "id"), u && (e += "#" + u.replace(/\s/g, "") + ";"), i = n(t), i && (e += "." + i.split(/\s+/).sort().join(";.") + ";"), e += "|", !(o.length + e.length > Ce));) o = e + o,
				t = t.parentElement;
				return o
			},
			l = function (t) {
				console.log("-> ze l");
				var o, u, a, c, l, p;
				if (t = t || pe.event, a = i(t), c = n(a), p = "mouseup" === t.type ? "click": t.type, l = s(a), o = Fe(p, l), u = {
					t: j(p, Te),
					n: j(a.tagName.toLowerCase(), Te),
					c: j($(c), Te),
					i: j(r(a, "id"), Te),
					h: j(f(a), Ce),
					y: l,
					k: Y(Ie)
				},
				he.disableTextCapture || "change" === p || a.isContentEditable || !Q.isString(h(a)) || (u.x = j(h(a).replace(/^\s+|\s+$/g, ""), $e)), "password" !== r(a, "type") && T(a.value) && (u.l = j(a.value, Te)), o) {
					var g = {
						s: function (t) {
							var n = v(Q(te(t)).first());
							return Q.isString(n) ? e(n) : n
						},
						j: function (e) {
							var n = new Function("event", "return " + e);
							return n.call(window, t)
						}
					},
					d = Q(g).chain().map(function (t, e) {
						return Q(o).chain().map(e).map(function (e) {
							return Q.mapValues(e, function (e) {
								try {
									return t(e)
								} catch(n) {
									return n.toString()
								}
							})
						}).value()
					}).flatten().value(),
					_ = Q.extend.apply({},
					d);
					u.k = (u.k || []).concat(Y(_))
				}
				return u
			};
			console.log("-> before return new");
			return new
			function () {
				console.log("-> inside new function()");
				this.startLoop = function () {
					o = !0,
					u()
				},
				this.clear = function () {
					t = []
				},
				this.flush = a,
				this.queueEvent = function (t) {
					console.log("event e=" + t + ">>>" + pe.event);
					console.log("Item" , t);
					var e, n;
					e = t || pe.event,
		//
					c(e) && (n = l(e), this.queue(n))
				},
				this.queue = function (e) {
					t.push(e)
				}
				console.log("-> after new func startloop, clear, flush...");
			}
		} (),
		Ve = function (t) {
			console.log("in Ve variable");
			pe.heap.userid = t[0];
			var e = {
				a: ee,
				u: t[0],
				v: t[1],
				s: t[2],
				b: "web"
			},
			n = V();
			n.addProps(e),
			ce = n.build()
		};
	//	console.log("Event=" + Event);
		if ("undefined" != typeof Event) {
			console.log("in if cond typeof Event=" + typeof Event);
			var Ye = Event.prototype.dispatchEvent;
			console.log("Ye=" + Ye);
			Event.prototype.dispatchEvent = function () {
				console.log("###in dispatchEvent, arguments=" + arguments);
				return X(this),
				Ye.apply(this, arguments)
			}
		}
		console.log("b4 last if cond");
	//	console.log("U()=" + U());
		console.log("pe.heap=" + pe.heap);
		console.log("heap.loaded=" + !heap.loaded);
		if (re = U(), pe.heap || (pe.heap = []), !heap.loaded) {
			console.log("Inside last if cond re=" + re);
			ee = pe._heapid ? heap.appid = _heapid: heap.appid;
			console.log("ee=" + ee);
			console.log("We=" + heap);
			var We = heap,
			He = [];
			console.log("->pe.heap appid=" + ee);
			console.log("->pe.heap config=" + JSON.stringify(he));
			// Build Window.heap object

			console.log("We=" + We);
		//	console.log("W(We)=" + W(We));
			console.log("g=" + g);
			console.log("oe=" + oe);
			if (pe.heap = {
				appid: ee,
				config: he,
				loaded: !0,
				identify: function (t) {
					console.log("->pe.heap.identify function");
					var e, n, r, o, i, u;
					if (!Re) return void He.push(["identify", t]);
					if (n = {},
					e = V(), i = ["handle", "email"], Q.isObject(t)) {
						for (o in t) t.hasOwnProperty(o) && (Q.isObject(t[o]) || (u = j(t[o], Te), Q.indexOf(i, o) >= 0 ? n[o.charAt(0)] = u: n[j(o, Te)] = u));
						e.addProps(n),
						r = e.build(),
						F(Oe, r, function (t) {
							var e, n;
							t && t.uid && (e = L(D("id")), n = e.split("."), P(t.uid, n[1], n[2]), H())
						})
					}
				},
				track: function (t, e) {
					console.log("->pe.heap.track function");
					if (Q.isString(t)) {
						var n = {
							k: Y(Q.extend({},
							Ie, e)),
							t: t
						};
						ze.queue(n),
						ze.flush()
					}
				},
				setEventProperties: function (t) {
					console.log("->pe.heap.setEventProp function");
					Ie = q(),
					Q.extend(Ie, t),
					R(Ie)
				},
				unsetEventProperty: function (t) {
					console.log("->pe.heap.unsetEventProp function");
					Ie = q(),
					delete Ie[t],
					R(Ie)
				},
				clearEventProperties: function () {
					console.log("->pe.heap.clearEventProp function");
					Ie = {},
					R(Ie)
				}
			},
				W(We), l(pe, "beforeunload", g, !0), oe) {
				console.log("inside the long if cond!");
				var Ze = function () {
					for (var t = se.getElementsByTagName("*"), e = 0; e < t.length; e++) {
						var n = t[e];
						1 === n.nodeType && (n._hpseen || (n._hpseen = !0, l(n, "change", X), l(n, "click", E), l(n, "submit", x)))
					}
					setTimeout(Ze, Le)
				};
				Ze()
			} else l(pe, "change", X, !0),
			l(pe, "click", E, !0),
			l(pe, "submit", x, !0);
			if (pe.history.pushState) {
				var Ke = function (t, e, n) {
					console.log("Ke arguments=" + JSON.stringify(arguments));
					var r = t[e];
					t[e] = function () {
						var e = r.apply(t, arguments);
						console.log("Ke e=" + e);
						return Q.isFunction(t[n]) && t[n](),
						e
					}
				};
				console.log("before Ke function ");
				Ke(pe.history, "pushState", "heappushstate"),
				Ke(pe.history, "replaceState", "heapreplacestate");
				var Xe = function () {
					var t = pe.location.pathname + pe.location.hash;
					we !== t && (we = t, ze.flush(), K())
				};
				console.log("Xe=" + Xe);
				history.heappushstate = history.heapreplacestate = Xe,
				pe.addEventListener("popstate", Xe, !0),
				pe.addEventListener("hashchange", Xe, !0)
			}
			y()
		}
	},
	{}],
	//Lodash Lib
	2 : [function (t, e, n) { (function (t) { (function () {
				function r(t, e, n) {
					if (e !== e) return u(t, n);
					for (var r = n - 1, o = t.length; ++r < o;) if (t[r] === e) return r;
					return - 1
				}
				function o(t) {
					return "function" == typeof t || !1
				}
				function i(t) {
					return "string" == typeof t ? t: null == t ? "": t + ""
				}
				function u(t, e, n) {
					for (var r = t.length, o = e + (n ? 0 : -1); n ? o--:++o < r;) {
						var i = t[o];
						if (i !== i) return o
					}
					return - 1
				}
				function a(t) {
					return t && "object" == typeof t || !1
				}
				function c(t) {
					if (a(t) && !Lr(t) && !(t instanceof l)) {
						if (t instanceof s) return t;
						if (rr.call(t, "__chain__") && rr.call(t, "__wrapped__")) return be(t)
					}
					return new s(t)
				}
				function f() {}
				function s(t, e, n) {
					this.__wrapped__ = t,
					this.__actions__ = n || [],
					this.__chain__ = !!e
				}
				function l(t) {
					this.__wrapped__ = t,
					this.__actions__ = null,
					this.__dir__ = 1,
					this.__dropCount__ = 0,
					this.__filtered__ = !1,
					this.__iteratees__ = null,
					this.__takeCount__ = br,
					this.__views__ = null
				}
				function p() {
					var t = this.__actions__,
					e = this.__iteratees__,
					n = this.__views__,
					r = new l(this.__wrapped__);
					return r.__actions__ = t ? x(t) : null,
					r.__dir__ = this.__dir__,
					r.__filtered__ = this.__filtered__,
					r.__iteratees__ = e ? x(e) : null,
					r.__takeCount__ = this.__takeCount__,
					r.__views__ = n ? x(n) : null,
					r
				}
				function h() {
					if (this.__filtered__) {
						var t = new l(this);
						t.__dir__ = -1,
						t.__filtered__ = !0
					} else t = this.clone(),
					t.__dir__ *= -1;
					return t
				}
				function v() {
					var t = this.__wrapped__.value();
					if (!Lr(t)) return X(t, this.__actions__);
					var e = this.__dir__,
					n = 0 > e,
					r = ce(0, t.length, this.__views__),
					o = r.start,
					i = r.end,
					u = i - o,
					a = n ? i: o - 1,
					c = wr(u, this.__takeCount__),
					f = this.__iteratees__,
					s = f ? f.length: 0,
					l = 0,
					p = [];
					t: for (; u--&&c > l;) {
						a += e;
						for (var h = -1, v = t[a]; ++h < s;) {
							var g = f[h],
							d = g.iteratee,
							_ = g.type;
							if (_ == cn) {
								if (g.done && (n ? a > g.index: a < g.index) && (g.count = 0, g.done = !1), g.index = a, !g.done) {
									var y = g.limit;
									if (! (g.done = y > -1 ? g.count++>=y: !d(v))) continue t
								}
							} else {
								var m = d(v);
								if (_ == sn) v = m;
								else if (!m) {
									if (_ == fn) continue t;
									break t
								}
							}
						}
						p[l++] = v
					}
					return p
				}
				function g() {
					this.__data__ = {}
				}
				function d(t) {
					return this.has(t) && delete this.__data__[t]
				}
				function _(t) {
					return "__proto__" == t ? un: this.__data__[t]
				}
				function y(t) {
					return "__proto__" != t && rr.call(this.__data__, t)
				}
				function m(t, e) {
					return "__proto__" != t && (this.__data__[t] = e),
					this
				}
				function w(t) {
					var e = t ? t.length: 0;
					for (this.data = {
						hash: _r(null),
						set: new lr
					}; e--;) this.push(t[e])
				}
				function b(t, e) {
					var n = t.data,
					r = "string" == typeof e || Je(e) ? n.set.has(e) : n.hash[e];
					return r ? 0 : -1
				}
				function E(t) {
					var e = this.data;
					"string" == typeof t || Je(t) ? e.set.add(t) : e.hash[t] = !0
				}
				function x(t, e) {
					var n = -1,
					r = t.length;
					for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
					return e
				}
				function j(t, e) {
					for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
					return t
				}
				function S(t, e) {
					for (var n = -1, r = t.length, o = Array(r); ++n < r;) o[n] = e(t[n], n, t);
					return o
				}
				function O(t, e, n, r) {
					var o = -1,
					i = t.length;
					for (r && i && (n = t[++o]); ++o < i;) n = e(n, t[o], o, t);
					return n
				}
				function A(t, e, n) {
					var r = Ir(e);
					if (!n) return N(e, t, r);
					for (var o = -1, i = r.length; ++o < i;) {
						var u = r[o],
						a = t[u],
						c = n(a, e[u], u, t, e);
						(c === c ? c === a: a !== a) && ("undefined" != typeof a || u in t) || (t[u] = c)
					}
					return t
				}
				function N(t, e, n) {
					n || (n = e, e = {});
					for (var r = -1, o = n.length; ++r < o;) {
						var i = n[r];
						e[i] = t[i]
					}
					return e
				}
				function k(t, e, n) {
					var r = typeof t;
					return "function" == r ? "undefined" != typeof e && pe(t) ? te(t, e, n) : t: null == t ? nn: "object" == r ? Y(t) : "undefined" == typeof e ? H(t + "") : W(t + "", e)
				}
				function C(t, e, n, r, o, i, u) {
					var a;
					if (n && (a = o ? n(t, r, o) : n(t)), "undefined" != typeof a) return a;
					if (!Je(t)) return t;
					var c = Lr(t);
					if (c) {
						if (a = fe(t), !e) return x(t, a)
					} else {
						var f = or.call(t),
						s = f == _n;
						if (f != wn && f != pn && (!s || o)) return Jn[f] ? le(t, f, e) : o ? t: {};
						if (Xn(t)) return o ? t: {};
						if (a = se(s ? {}: t), !e) return N(t, a, Ir(t))
					}
					i || (i = []),
					u || (u = []);
					for (var l = i.length; l--;) if (i[l] == t) return u[l];
					return i.push(t),
					u.push(a),
					(c ? j: U)(t, function (r, o) {
						a[o] = C(r, e, n, o, t, i, u)
					}),
					a
				}
				function T(t, e) {
					var n = t ? t.length: 0,
					o = [];
					if (!n) return o;
					var i = -1,
					u = ae(),
					a = u == r,
					c = a && e.length >= 200 ? Mr(e) : null,
					f = e.length;
					c && (u = b, a = !1, e = c);
					t: for (; ++i < n;) {
						var s = t[i];
						if (a && s === s) {
							for (var l = f; l--;) if (e[l] === s) continue t;
							o.push(s)
						} else u(e, s, 0) < 0 && o.push(s)
					}
					return o
				}
				function $(t, e) {
					var n = t ? t.length: 0;
					if (!ge(n)) return U(t, e);
					for (var r = -1, o = we(t); ++r < n && e(o[r], r, o) !== !1;);
					return t
				}
				function M(t, e) {
					var n = t ? t.length: 0;
					if (!ge(n)) return q(t, e);
					for (var r = we(t); n--&&e(r[n], n, r) !== !1;);
					return t
				}
				function L(t, e, n, r) {
					var o;
					return n(t, function (t, n, i) {
						return e(t, n, i) ? (o = r ? n: t, !1) : void 0
					}),
					o
				}
				function D(t, e, n, r) {
					for (var o = r - 1, i = t.length, u = -1, c = []; ++o < i;) {
						var f = t[o];
						if (a(f) && ge(f.length) && (Lr(f) || Fe(f))) {
							e && (f = D(f, e, n, 0));
							var s = -1,
							l = f.length;
							for (c.length += l; ++s < l;) c[++u] = f[s]
						} else n || (c[++u] = f)
					}
					return c
				}
				function P(t, e, n) {
					for (var r = -1, o = we(t), i = n(t), u = i.length; ++r < u;) {
						var a = i[r];
						if (e(o[a], a, o) === !1) break
					}
					return t
				}
				function I(t, e, n) {
					for (var r = we(t), o = n(t), i = o.length; i--;) {
						var u = o[i];
						if (e(r[u], u, r) === !1) break
					}
					return t
				}
				function R(t, e) {
					return P(t, e, Ze)
				}
				function U(t, e) {
					return P(t, e, Ir)
				}
				function q(t, e) {
					return I(t, e, Ir)
				}
				function B(t, e) {
					for (var n = -1, r = e.length, o = -1, i = []; ++n < r;) {
						var u = e[n];
						Dr(t[u]) && (i[++o] = u)
					}
					return i
				}
				function F(t, e, n, r, o, i) {
					if (t === e) return 0 !== t || 1 / t == 1 / e;
					var u = typeof t,
					a = typeof e;
					return "function" != u && "object" != u && "function" != a && "object" != a || null == t || null == e ? t !== t && e !== e: J(t, e, F, n, r, o, i)
				}
				function J(t, e, n, r, o, i, u) {
					var a = Lr(t),
					c = Lr(e),
					f = hn,
					s = hn;
					a || (f = or.call(t), f == pn ? f = wn: f != wn && (a = We(t))),
					c || (s = or.call(e), s == pn ? s = wn: s != wn && (c = We(e)));
					var l = f == wn && !Xn(t),
					p = s == wn && !Xn(e),
					h = f == s;
					if (h && !a && !l) return oe(t, e, f);
					var v = l && rr.call(t, "__wrapped__"),
					g = p && rr.call(e, "__wrapped__");
					if (v || g) return n(v ? t.value() : t, g ? e.value() : e, r, o, i, u);
					if (!h) return ! 1;
					i || (i = []),
					u || (u = []);
					for (var d = i.length; d--;) if (i[d] == t) return u[d] == e;
					i.push(t),
					u.push(e);
					var _ = (a ? re: ie)(t, e, n, r, o, i, u);
					return i.pop(),
					u.pop(),
					_
				}
				function z(t, e, n, r, o) {
					var i = e.length;
					if (null == t) return ! i;
					for (var u = -1, a = !o; ++u < i;) if (a && r[u] ? n[u] !== t[e[u]] : !rr.call(t, e[u])) return ! 1;
					for (u = -1; ++u < i;) {
						var c = e[u];
						if (a && r[u]) var f = rr.call(t, c);
						else {
							var s = t[c],
							l = n[u];
							f = o ? o(s, l, c) : un,
							"undefined" == typeof f && (f = F(l, s, o, !0))
						}
						if (!f) return ! 1
					}
					return ! 0
				}
				function V(t, e) {
					var n = [];
					return $(t, function (t, r, o) {
						n.push(e(t, r, o))
					}),
					n
				}
				function Y(t) {
					var e = Ir(t),
					n = e.length;
					if (1 == n) {
						var r = e[0],
						o = t[r];
						if (de(o)) return function (t) {
							return null != t && t[r] === o && rr.call(t, r)
						}
					}
					for (var i = Array(n), u = Array(n); n--;) o = t[e[n]],
					i[n] = o,
					u[n] = de(o);
					return function (t) {
						return z(t, e, i, u)
					}
				}
				function W(t, e) {
					return de(e) ?
					function (n) {
						return null != n && n[t] === e
					}: function (n) {
						return null != n && F(e, n[t], null, !0)
					}
				}
				function H(t) {
					return function (e) {
						return null == e ? un: e[t]
					}
				}
				function Z(t, e, n, r, o) {
					return o(t, function (t, o, i) {
						n = r ? (r = !1, t) : e(n, t, o, i)
					}),
					n
				}
				function K(t, e) {
					for (var n = -1, r = e.length, o = Array(r); ++n < r;) o[n] = t[e[n]];
					return o
				}
				function X(t, e) {
					var n = t;
					n instanceof l && (n = n.value());
					for (var r = -1, o = e.length; ++r < o;) {
						var i = [n],
						u = e[r];
						fr.apply(i, u.args),
						n = u.func.apply(u.thisArg, i)
					}
					return n
				}
				function Q(t, e, n) {
					var r = 0,
					o = t ? t.length: r;
					if ("number" == typeof e && e === e && jr >= o) {
						for (; o > r;) {
							var i = r + o >>> 1,
							u = t[i];
							(n ? e >= u: e > u) ? r = i + 1 : o = i
						}
						return o
					}
					return G(t, e, nn, n)
				}
				function G(t, e, n, r) {
					e = n(e);
					for (var o = 0, i = t ? t.length: 0, u = e !== e, a = "undefined" == typeof e; i > o;) {
						var c = cr((o + i) / 2),
						f = n(t[c]),
						s = f === f;
						if (u) var l = s || r;
						else l = a ? s && (r || "undefined" != typeof f) : r ? e >= f: e > f;
						l ? o = c + 1 : i = c
					}
					return wr(i, xr)
				}
				function te(t, e, n) {
					if ("function" != typeof t) return nn;
					if ("undefined" == typeof e) return t;
					switch (n) {
					case 1:
						return function (n) {
							return t.call(e, n)
						};
					case 3:
						return function (n, r, o) {
							return t.call(e, n, r, o)
						};
					case 4:
						return function (n, r, o, i) {
							return t.call(e, n, r, o, i)
						};
					case 5:
						return function (n, r, o, i, u) {
							return t.call(e, n, r, o, i, u)
						}
					}
					return function () {
						return t.apply(e, arguments)
					}
				}
				function ee(t) {
					return ar.call(t, 0)
				}
				function ne(t) {
					return function () {
						var e = arguments,
						n = e.length,
						r = e[0];
						if (2 > n || null == r) return r;
						var o = e[n - 2],
						i = e[n - 1],
						u = e[3];
						n > 3 && "function" == typeof o ? (o = te(o, i, 5), n -= 2) : (o = n > 2 && "function" == typeof i ? i: null, n -= o ? 1 : 0),
						u && ve(e[1], e[2], u) && (o = 3 == n ? null: o, n = 2);
						for (var a = 0; ++a < n;) {
							var c = e[a];
							c && t(r, c, o)
						}
						return r
					}
				}
				function re(t, e, n, r, o, i, u) {
					var a = -1,
					c = t.length,
					f = e.length,
					s = !0;
					if (c != f && !(o && f > c)) return ! 1;
					for (; s && ++a < c;) {
						var l = t[a],
						p = e[a];
						if (s = un, r && (s = o ? r(p, l, a) : r(l, p, a)), "undefined" == typeof s) if (o) for (var h = f; h--&&(p = e[h], !(s = l && l === p || n(l, p, r, o, i, u))););
						else s = l && l === p || n(l, p, r, o, i, u)
					}
					return !! s
				}
				function oe(t, e, n) {
					switch (n) {
					case vn:
					case gn:
						return + t == +e;
					case dn:
						return t.name == e.name && t.message == e.message;
					case mn:
						return t != +t ? e != +e: 0 == t ? 1 / t == 1 / e: t == +e;
					case bn:
					case xn:
						return t == e + ""
					}
					return ! 1
				}
				function ie(t, e, n, r, o, i, u) {
					var a = Ir(t),
					c = a.length,
					f = Ir(e),
					s = f.length;
					if (c != s && !o) return ! 1;
					for (var l, p = -1; ++p < c;) {
						var h = a[p],
						v = rr.call(e, h);
						if (v) {
							var g = t[h],
							d = e[h];
							v = un,
							r && (v = o ? r(d, g, h) : r(g, d, h)),
							"undefined" == typeof v && (v = g && g === d || n(g, d, r, o, i, u))
						}
						if (!v) return ! 1;
						l || (l = "constructor" == h)
					}
					if (!l) {
						var _ = t.constructor,
						y = e.constructor;
						if (_ != y && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof y && y instanceof y)) return ! 1
					}
					return ! 0
				}
				function ue(t, e, n) {
					var r = c.callback || tn;
					return r = r === tn ? k: r,
					n ? r(t, e, n) : r
				}
				function ae(t, e, n) {
					var o = c.indexOf || Se;
					return o = o === Se ? r: o,
					t ? o(t, e, n) : o
				}
				function ce(t, e, n) {
					for (var r = -1, o = n ? n.length: 0; ++r < o;) {
						var i = n[r],
						u = i.size;
						switch (i.type) {
						case "drop":
							t += u;
							break;
						case "dropRight":
							e -= u;
							break;
						case "take":
							e = wr(e, t + u);
							break;
						case "takeRight":
							t = mr(t, e - u)
						}
					}
					return {
						start: t,
						end: e
					}
				}
				function fe(t) {
					var e = t.length,
					n = new t.constructor(e);
					return e && "string" == typeof t[0] && rr.call(t, "index") && (n.index = t.index, n.input = t.input),
					n
				}
				function se(t) {
					var e = t.constructor;
					return "function" == typeof e && e instanceof e || (e = Object),
					new e
				}
				function le(t, e, n) {
					var r = t.constructor;
					switch (e) {
					case Sn:
						return ee(t);
					case vn:
					case gn:
						return new r( + t);
					case On:
					case An:
					case Nn:
					case kn:
					case Cn:
					case Tn:
					case $n:
					case Mn:
					case Ln:
						r instanceof r && (r = Nr[e]);
						var o = t.buffer;
						return new r(n ? ee(o) : o, t.byteOffset, t.length);
					case mn:
					case xn:
						return new r(t);
					case bn:
						var i = new r(t.source, Dn.exec(t));
						i.lastIndex = t.lastIndex
					}
					return i
				}
				function pe(t) {
					var e = c.support,
					n = !(e.funcNames ? t.name: e.funcDecomp);
					if (!n) {
						var r = nr.call(t);
						e.funcNames || (n = !Pn.test(r)),
						n || (n = qn.test(r) || ze(t), $r(t, n))
					}
					return n
				}
				function he(t, e) {
					return t = +t,
					e = null == e ? Or: e,
					t > -1 && t % 1 == 0 && e > t
				}
				function ve(t, e, n) {
					if (!Je(n)) return ! 1;
					var r = typeof e;
					if ("number" == r) var o = n.length,
					i = ge(o) && he(e, o);
					else i = "string" == r && e in n;
					if (i) {
						var u = n[e];
						return t === t ? t === u: u !== u
					}
					return ! 1
				}
				function ge(t) {
					return "number" == typeof t && t > -1 && t % 1 == 0 && Or >= t
				}
				function de(t) {
					return t === t && (0 === t ? 1 / t > 0 : !Je(t))
				}
				function _e(t, e) {
					t = we(t);
					for (var n = -1, r = e.length, o = {}; ++n < r;) {
						var i = e[n];
						i in t && (o[i] = t[i])
					}
					return o
				}
				function ye(t, e) {
					var n = {};
					return R(t, function (t, r, o) {
						e(t, r, o) && (n[r] = t)
					}),
					n
				}
				function me(t) {
					for (var e = Ze(t), n = e.length, r = n && t.length, o = c.support, i = r && ge(r) && (Lr(t) || o.nonEnumStrings && Ye(t) || o.nonEnumArgs && Fe(t)), u = -1, a = []; ++u < n;) {
						var f = e[u];
						(i && he(f, r) || rr.call(t, f)) && a.push(f)
					}
					return a
				}
				function we(t) {
					if (c.support.unindexedChars && Ye(t)) {
						for (var e = -1, n = t.length, r = Object(t); ++e < n;) r[e] = t.charAt(e);
						return r
					}
					return Je(t) ? t: Object(t)
				}
				function be(t) {
					return t instanceof l ? t.clone() : new s(t.__wrapped__, t.__chain__, x(t.__actions__))
				}
				function Ee() {
					for (var t = arguments, e = -1, n = t.length; ++e < n;) {
						var r = t[e];
						if (Lr(r) || Fe(r)) break
					}
					return T(r, D(t, !1, !0, ++e))
				}
				function xe(t) {
					return t ? t[0] : un
				}
				function je(t, e, n) {
					var r = t ? t.length: 0;
					return n && ve(t, e, n) && (e = !1),
					r ? D(t, e, !1, 0) : []
				}
				function Se(t, e, n) {
					var o = t ? t.length: 0;
					if (!o) return - 1;
					if ("number" == typeof n) n = 0 > n ? mr(o + n, 0) : n;
					else if (n) {
						var i = Q(t, e),
						u = t[i];
						return (e === e ? e === u: u !== u) ? i: -1
					}
					return r(t, e, n || 0)
				}
				function Oe(t) {
					var e = t ? t.length: 0;
					return e ? t[e - 1] : un
				}
				function Ae(t) {
					var e = c(t);
					return e.__chain__ = !0,
					e
				}
				function Ne(t, e, n) {
					return e.call(n, t),
					t
				}
				function ke(t, e, n) {
					return e.call(n, t)
				}
				function Ce() {
					return Ae(this)
				}
				function Te() {
					return new s(this.value(), this.__chain__)
				}
				function $e(t) {
					for (var e, n = this; n instanceof f;) {
						var r = be(n);
						e ? o.__wrapped__ = r: e = r;
						var o = r;
						n = n.__wrapped__
					}
					return o.__wrapped__ = t,
					e
				}
				function Me() {
					var t = this.__wrapped__;
					return t instanceof l ? (this.__actions__.length && (t = new l(this)), new s(t.reverse(), this.__chain__)) : this.thru(function (t) {
						return t.reverse()
					})
				}
				function Le() {
					return this.value() + ""
				}
				function De() {
					return X(this.__wrapped__, this.__actions__)
				}
				function Pe(t, e, n) {
					return e = ue(e, n, 3),
					L(t, e, M)
				}
				function Ie(t, e, n) {
					var r = Lr(t) ? S: V;
					return e = ue(e, n, 3),
					r(t, e)
				}
				function Re(t, e, n, r) {
					var o = Lr(t) ? O: Z;
					return o(t, ue(e, r, 4), n, arguments.length < 3, $)
				}
				function Ue(t, e) {
					var n;
					if ("function" != typeof e) {
						if ("function" != typeof t) throw new TypeError(ln);
						var r = t;
						t = e,
						e = r
					}
					return function () {
						return--t > 0 ? n = e.apply(this, arguments) : e = null,
						n
					}
				}
				function qe(t, e) {
					if ("function" != typeof t || e && "function" != typeof e) throw new TypeError(ln);
					var n = function () {
						var r = arguments,
						o = n.cache,
						i = e ? e.apply(this, r) : r[0];
						if (o.has(i)) return o.get(i);
						var u = t.apply(this, r);
						return o.set(i, u),
						u
					};
					return n.cache = new qe.Cache,
					n
				}
				function Be(t) {
					return Ue(t, 2)
				}
				function Fe(t) {
					var e = a(t) ? t.length: un;
					return ge(e) && or.call(t) == pn || !1
				}
				function Je(t) {
					var e = typeof t;
					return "function" == e || t && "object" == e || !1
				}
				function ze(t) {
					return null == t ? !1 : or.call(t) == _n ? ir.test(nr.call(t)) : a(t) && (Xn(t) ? ir: In).test(t) || !1
				}
				function Ve(t) {
					return null === t
				}
				function Ye(t) {
					return "string" == typeof t || a(t) && or.call(t) == xn || !1
				}
				function We(t) {
					return a(t) && ge(t.length) && Fn[or.call(t)] || !1
				}
				function He(t) {
					return "undefined" == typeof t
				}
				function Ze(t) {
					if (null == t) return [];
					Je(t) || (t = Object(t));
					var e = t.length,
					n = c.support;
					e = e && ge(e) && (Lr(t) || n.nonEnumStrings && Ye(t) || n.nonEnumArgs && Fe(t)) && e || 0;
					for (var r = t.constructor, o = -1, i = Dr(r) && r.prototype || tr, u = i === t, a = Array(e), f = e > 0, s = n.enumErrorProps && (t === Gn || t instanceof Error), l = n.enumPrototypes && Dr(t); ++o < e;) a[o] = o + "";
					for (var p in t) l && "prototype" == p || s && ("message" == p || "name" == p) || f && he(p, e) || "constructor" == p && (u || !rr.call(t, p)) || a.push(p);
					if (n.nonEnumShadows && t !== tr) {
						var h = t === er ? xn: t === Gn ? dn: or.call(t),
						v = kr[h] || kr[wn];
						for (h == wn && (i = tr), e = Bn.length; e--;) {
							p = Bn[e];
							var g = v[p];
							u && g || (g ? !rr.call(t, p) : t[p] === i[p]) || a.push(p)
						}
					}
					return a
				}
				function Ke(t, e, n) {
					var r = {};
					return e = ue(e, n, 3),
					U(t, function (t, n, o) {
						r[n] = e(t, n, o)
					}),
					r
				}
				function Xe(t, e, n) {
					return null == t ? {}: "function" == typeof e ? ye(t, te(e, n, 3)) : _e(t, D(arguments, !1, !1, 1))
				}
				function Qe(t) {
					return K(t, Ir(t))
				}
				function Ge(t) {
					return t = i(t),
					t && Un.test(t) ? t.replace(Rn, "\\$&") : t
				}
				function tn(t, e, n) {
					return n && ve(t, e, n) && (e = null),
					a(t) ? rn(t) : k(t, e)
				}
				function en(t) {
					return function () {
						return t
					}
				}
				function nn(t) {
					return t
				}
				function rn(t) {
					return Y(C(t, !0))
				}
				function on(t, e, n) {
					if (null == n) {
						var r = Je(e),
						o = r && Ir(e),
						i = o && o.length && B(e, o);
						(i ? i.length: r) || (i = !1, n = e, e = t, t = this)
					}
					i || (i = B(e, Ir(e)));
					var u = !0,
					a = -1,
					c = Dr(t),
					f = i.length;
					n === !1 ? u = !1 : Je(n) && "chain" in n && (u = n.chain);
					for (; ++a < f;) {
						var s = i[a],
						l = e[s];
						t[s] = l,
						c && (t.prototype[s] = function (e) {
							return function () {
								var n = this.__chain__;
								if (u || n) {
									var r = t(this.__wrapped__);
									return (r.__actions__ = x(this.__actions__)).push({
										func: e,
										args: arguments,
										thisArg: t
									}),
									r.__chain__ = n,
									r
								}
								var o = [this.value()];
								return fr.apply(o, arguments),
								e.apply(t, o)
							}
						} (l))
					}
					return t
				}
				var un, an = "3.5.0",
				cn = 0,
				fn = 1,
				sn = 2,
				ln = "Expected a function",
				pn = "[object Arguments]",
				hn = "[object Array]",
				vn = "[object Boolean]",
				gn = "[object Date]",
				dn = "[object Error]",
				_n = "[object Function]",
				yn = "[object Map]",
				mn = "[object Number]",
				wn = "[object Object]",
				bn = "[object RegExp]",
				En = "[object Set]",
				xn = "[object String]",
				jn = "[object WeakMap]",
				Sn = "[object ArrayBuffer]",
				On = "[object Float32Array]",
				An = "[object Float64Array]",
				Nn = "[object Int8Array]",
				kn = "[object Int16Array]",
				Cn = "[object Int32Array]",
				Tn = "[object Uint8Array]",
				$n = "[object Uint8ClampedArray]",
				Mn = "[object Uint16Array]",
				Ln = "[object Uint32Array]",
				Dn = /\w*$/,
				Pn = /^\s*function[ \n\r\t]+\w/,
				In = /^\[object .+?Constructor\]$/,
				Rn = /[.*+?^${}()|[\]\/\\]/g,
				Un = RegExp(Rn.source),
				qn = /\bthis\b/,
				Bn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
				Fn = {};
				Fn[On] = Fn[An] = Fn[Nn] = Fn[kn] = Fn[Cn] = Fn[Tn] = Fn[$n] = Fn[Mn] = Fn[Ln] = !0,
				Fn[pn] = Fn[hn] = Fn[Sn] = Fn[vn] = Fn[gn] = Fn[dn] = Fn[_n] = Fn[yn] = Fn[mn] = Fn[wn] = Fn[bn] = Fn[En] = Fn[xn] = Fn[jn] = !1;
				var Jn = {};
				Jn[pn] = Jn[hn] = Jn[Sn] = Jn[vn] = Jn[gn] = Jn[On] = Jn[An] = Jn[Nn] = Jn[kn] = Jn[Cn] = Jn[mn] = Jn[wn] = Jn[bn] = Jn[xn] = Jn[Tn] = Jn[$n] = Jn[Mn] = Jn[Ln] = !0,
				Jn[dn] = Jn[_n] = Jn[yn] = Jn[En] = Jn[jn] = !1;
				var zn = {
					"function": !0,
					object: !0
				},
				Vn = zn[typeof n] && n && !n.nodeType && n,
				Yn = zn[typeof e] && e && !e.nodeType && e,
				Wn = Vn && Yn && "object" == typeof t && t,
				Hn = zn[typeof window] && window,
				Zn = Yn && Yn.exports === Vn && Vn,
				Kn = Wn || Hn !== (this && this.window) && Hn || this,
				Xn = function () {
					try {
						Object({
							toString: 0
						} + "")
					} catch(t) {
						return function () {
							return ! 1
						}
					}
					return function (t) {
						return "function" != typeof t.toString && "string" == typeof(t + "")
					}
				} (),
				Qn = Array.prototype,
				Gn = Error.prototype,
				tr = Object.prototype,
				er = String.prototype,
				nr = Function.prototype.toString,
				rr = tr.hasOwnProperty,
				or = tr.toString,
				ir = RegExp("^" + Ge(or).replace(/toString|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
				ur = ze(ur = Kn.ArrayBuffer) && ur,
				ar = ze(ar = ur && new ur(0).slice) && ar,
				cr = Math.floor,
				fr = Qn.push,
				sr = tr.propertyIsEnumerable,
				lr = ze(lr = Kn.Set) && lr,
				pr = Qn.splice,
				hr = ze(hr = Kn.Uint8Array) && hr,
				vr = ze(vr = Kn.WeakMap) && vr,
				gr = function () {
					try {
						var t = ze(t = Kn.Float64Array) && t,
						e = new t(new ur(10), 0, 1) && t
					} catch(n) {}
					return e
				} (),
				dr = ze(dr = Array.isArray) && dr,
				_r = ze(_r = Object.create) && _r,
				yr = ze(yr = Object.keys) && yr,
				mr = Math.max,
				wr = Math.min,
				br = Number.POSITIVE_INFINITY,
				Er = Math.pow(2, 32) - 1,
				xr = Er - 1,
				jr = Er >>> 1,
				Sr = gr ? gr.BYTES_PER_ELEMENT: 0,
				Or = Math.pow(2, 53) - 1,
				Ar = vr && new vr,
				Nr = {};
				Nr[On] = Kn.Float32Array,
				Nr[An] = Kn.Float64Array,
				Nr[Nn] = Kn.Int8Array,
				Nr[kn] = Kn.Int16Array,
				Nr[Cn] = Kn.Int32Array,
				Nr[Tn] = Kn.Uint8Array,
				Nr[$n] = Kn.Uint8ClampedArray,
				Nr[Mn] = Kn.Uint16Array,
				Nr[Ln] = Kn.Uint32Array;
				var kr = {};
				kr[hn] = kr[gn] = kr[mn] = {
					constructor: !0,
					toLocaleString: !0,
					toString: !0,
					valueOf: !0
				},
				kr[vn] = kr[xn] = {
					constructor: !0,
					toString: !0,
					valueOf: !0
				},
				kr[dn] = kr[_n] = kr[bn] = {
					constructor: !0,
					toString: !0
				},
				kr[wn] = {
					constructor: !0
				},
				j(Bn, function (t) {
					for (var e in kr) if (rr.call(kr, e)) {
						var n = kr[e];
						n[t] = rr.call(n, t)
					}
				});
				var Cr = c.support = {}; !
				function () {
					var t = function () {
						this.x = 1
					},
					e = {
						0 : 1,
						length: 1
					},
					n = [];
					t.prototype = {
						valueOf: 1,
						y: 1
					};
					for (var r in new t) n.push(r);
					Cr.argsTag = or.call(arguments) == pn,
					Cr.enumErrorProps = sr.call(Gn, "message") || sr.call(Gn, "name"),
					Cr.enumPrototypes = sr.call(t, "prototype"),
					Cr.funcDecomp = !ze(Kn.WinRTError) && qn.test(function () {
						return this
					}),
					Cr.funcNames = "string" == typeof Function.name,
					Cr.nonEnumStrings = !sr.call("x", 0),
					Cr.nonEnumShadows = !/valueOf/.test(n),
					Cr.spliceObjects = (pr.call(e, 0, 1), !e[0]),
					Cr.unindexedChars = "x" [0] + Object("x")[0] != "xx";
					try {
						Cr.nonEnumArgs = !sr.call(arguments, 1)
					} catch(o) {
						Cr.nonEnumArgs = !0
					}
				} (0, 0);
				var Tr = function () {
					function t() {}
					return function (e) {
						if (Je(e)) {
							t.prototype = e;
							var n = new t;
							t.prototype = null
						}
						return n || Kn.Object()
					}
				} (),
				$r = Ar ?
				function (t, e) {
					return Ar.set(t, e),
					t
				}: nn;
				ar || (ee = ur && hr ?
				function (t) {
					var e = t.byteLength,
					n = gr ? cr(e / Sr) : 0,
					r = n * Sr,
					o = new ur(e);
					if (n) {
						var i = new gr(o, 0, n);
						i.set(new gr(t, 0, n))
					}
					return e != r && (i = new hr(o, r), i.set(new hr(t, r))),
					o
				}: en(null));
				var Mr = _r && lr ?
				function (t) {
					return new w(t)
				}: en(null);
				Cr.argsTag || (Fe = function (t) {
					var e = a(t) ? t.length: un;
					return ge(e) && rr.call(t, "callee") && !sr.call(t, "callee") || !1
				});
				var Lr = dr ||
				function (t) {
					return a(t) && ge(t.length) && or.call(t) == hn || !1
				},
				Dr = o(/x/) || hr && !o(hr) ?
				function (t) {
					return or.call(t) == _n
				}: o,
				Pr = ne(A),
				Ir = yr ?
				function (t) {
					if (t) var e = t.constructor,
					n = t.length;
					return "function" == typeof e && e.prototype === t || ("function" == typeof t ? c.support.enumPrototypes: n && ge(n)) ? me(t) : Je(t) ? yr(t) : []
				}: me;
				c.prototype = f.prototype,
				s.prototype = Tr(f.prototype),
				s.prototype.constructor = s,
				l.prototype = Tr(f.prototype),
				l.prototype.constructor = l,
				g.prototype["delete"] = d,
				g.prototype.get = _,
				g.prototype.has = y,
				g.prototype.set = m,
				w.prototype.push = E,
				qe.Cache = g,
				c.assign = Pr,
				c.before = Ue,
				c.callback = tn,
				c.chain = Ae,
				c.constant = en,
				c.difference = Ee,
				c.flatten = je,
				c.keys = Ir,
				c.keysIn = Ze,
				c.map = Ie,
				c.mapValues = Ke,
				c.matches = rn,
				c.memoize = qe,
				c.mixin = on,
				c.once = Be,
				c.pick = Xe,
				c.tap = Ne,
				c.thru = ke,
				c.values = Qe,
				c.collect = Ie,
				c.extend = Pr,
				c.iteratee = tn,
				on(c, c),
				c.escapeRegExp = Ge,
				c.findLast = Pe,
				c.first = xe,
				c.identity = nn,
				c.indexOf = Se,
				c.isArguments = Fe,
				c.isArray = Lr,
				c.isFunction = Dr,
				c.isNative = ze,
				c.isNull = Ve,
				c.isObject = Je,
				c.isString = Ye,
				c.isTypedArray = We,
				c.isUndefined = He,
				c.last = Oe,
				c.reduce = Re,
				c.foldl = Re,
				c.head = xe,
				c.inject = Re,
				on(c, function () {
					var t = {};
					return U(c, function (e, n) {
						c.prototype[n] || (t[n] = e)
					}),
					t
				} (), !1),
				c.prototype.sample = function (t) {
					return this.__chain__ || null != t ? this.thru(function (e) {
						return sample(e, t)
					}) : sample(this.value())
				},
				c.VERSION = an,
				j(["dropWhile", "filter", "map", "takeWhile"], function (t, e) {
					var n = e != sn,
					r = e == cn;
					l.prototype[t] = function (t, o) {
						var i = this.__filtered__,
						u = i && r ? new l(this) : this.clone(),
						a = u.__iteratees__ || (u.__iteratees__ = []);
						return a.push({
							done: !1,
							count: 0,
							index: 0,
							iteratee: ue(t, o, 1),
							limit: -1,
							type: e
						}),
						u.__filtered__ = i || n,
						u
					}
				}),
				j(["drop", "take"], function (t, e) {
					var n = t + "While";
					l.prototype[t] = function (n) {
						var r = this.__filtered__,
						o = r && !e ? this.dropWhile() : this.clone();
						if (n = null == n ? 1 : mr(cr(n) || 0, 0), r) e ? o.__takeCount__ = wr(o.__takeCount__, n) : Oe(o.__iteratees__).limit = n;
						else {
							var i = o.__views__ || (o.__views__ = []);
							i.push({
								size: n,
								type: t + (o.__dir__ < 0 ? "Right": "")
							})
						}
						return o
					},
					l.prototype[t + "Right"] = function (e) {
						return this.reverse()[t](e).reverse()
					},
					l.prototype[t + "RightWhile"] = function (t, e) {
						return this.reverse()[n](t, e).reverse()
					}
				}),
				j(["first", "last"], function (t, e) {
					var n = "take" + (e ? "Right": "");
					l.prototype[t] = function () {
						return this[n](1).value()[0]
					}
				}),
				j(["initial", "rest"], function (t, e) {
					var n = "drop" + (e ? "": "Right");
					l.prototype[t] = function () {
						return this[n](1)
					}
				}),
				j(["pluck", "where"], function (t, e) {
					var n = e ? "filter": "map",
					r = e ? Y: H;
					l.prototype[t] = function (t) {
						return this[n](r(t))
					}
				}),
				l.prototype.compact = function () {
					return this.filter(nn)
				},
				l.prototype.reject = function (t, e) {
					return t = ue(t, e, 1),
					this.filter(function (e) {
						return ! t(e)
					})
				},
				l.prototype.slice = function (t, e) {
					t = null == t ? 0 : +t || 0;
					var n = 0 > t ? this.takeRight( - t) : this.drop(t);
					return "undefined" != typeof e && (e = +e || 0, n = 0 > e ? n.dropRight( - e) : n.take(e - t)),
					n
				},
				l.prototype.toArray = function () {
					return this.drop(0)
				},
				U(l.prototype, function (t, e) {
					var n = c[e],
					r = /^(?:filter|map|reject)|While$/.test(e),
					o = /^(?:first|last)$/.test(e);
					c.prototype[e] = function () {
						var e = arguments,
						i = (e.length, this.__chain__),
						u = this.__wrapped__,
						a = !!this.__actions__.length,
						f = u instanceof l,
						p = e[0],
						h = f || Lr(u);
						h && r && "function" == typeof p && 1 != p.length && (f = h = !1);
						var v = f && !a;
						if (o && !i) return v ? t.call(u) : n.call(c, this.value());
						var g = function (t) {
							var r = [t];
							return fr.apply(r, e),
							n.apply(c, r)
						};
						if (h) {
							var d = v ? u: new l(this),
							_ = t.apply(d, e);
							if (!o && (a || _.__actions__)) {
								var y = _.__actions__ || (_.__actions__ = []);
								y.push({
									func: ke,
									args: [g],
									thisArg: c
								})
							}
							return new s(_, i)
						}
						return this.thru(g)
					}
				}),
				j(["concat", "join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
					var e = (/^(?:replace|split)$/.test(t) ? er: Qn)[t],
					n = /^(?:push|sort|unshift)$/.test(t) ? "tap": "thru",
					r = !Cr.spliceObjects && /^(?:pop|shift|splice)$/.test(t),
					o = /^(?:join|pop|replace|shift)$/.test(t),
					i = r ?
					function () {
						var t = e.apply(this, arguments);
						return 0 === this.length && delete this[0],
						t
					}: e;
					c.prototype[t] = function () {
						var t = arguments;
						return o && !this.__chain__ ? i.apply(this.value(), t) : this[n](function (e) {
							return i.apply(e, t)
						})
					}
				}),
				l.prototype.clone = p,
				l.prototype.reverse = h,
				l.prototype.value = v,
				c.prototype.chain = Ce,
				c.prototype.commit = Te,
				c.prototype.plant = $e,
				c.prototype.reverse = Me,
				c.prototype.toString = Le,
				c.prototype.run = c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = De,
				c.prototype.collect = c.prototype.map,
				c.prototype.head = c.prototype.first,
				c.prototype.select = c.prototype.filter,
				c.prototype.tail = c.prototype.rest,
				Vn && Yn && Zn && ((Yn.exports = c)._ = c)
			}).call(this)
		}).call(this, "undefined" != typeof global ? global: "undefined" != typeof self ? self: "undefined" != typeof window ? window: {})
	},
	{}],
	3 : [function (t, e) {
		var n, r, o, i, u = [].slice;
		i = t(2),
		n = function (t) {
			return !! t.tag + !!t.id + t.classes.length
		},
		r = function (t) {
			var e, n, r, o, i, a;
			return n = null != (o = null != (i = t.match(/(#[\w-]+)/)) ? i[0] : void 0) ? o: "",
			n && (t = t.replace(n, "")),
			a = t.split("."),
			r = a[0],
			e = 2 <= a.length ? u.call(a, 1) : [],
			{
				id: n,
				tag: r,
				classes: e
			}
		},
		o = function (t) {
			return i.reduce(t, function (t, e) {
				return t + +e
			},
			0)
		},
		e.exports = {
			matchesSelector: function (t, e) {
				var u, a, c, f, s, l, p, h, v, g, d, _;
				if (!t) return 0;
				for (a = e.split(" "), s = i.map(t.split("|"), function (t) {
					return t.split(";").join("").slice(1)
				}), v = 0, f = i.map(a, r), d = 0, _ = s.length; _ > d && (h = s[d], v !== f.length); d++) c = f[v],
				l = r(h),
				g = !c.tag || c.tag === l.tag,
				p = !c.id || c.id === l.id,
				u = !c.classes.length || 0 === i.difference(c.classes, l.classes).length,
				g && p && u && v++;
				return v === f.length ? o(i.map(f, n)) : 0
			}
		}
	},
	{}],
	4 : [function (t, e, n) {
		"object" != typeof JSON && (JSON = {}),
		function () {
			"use strict";
			function t(t) {
				return 10 > t ? "0" + t: t
			}
			function e(t) {
				return o.lastIndex = 0,
				o.test(t) ? '"' + t.replace(o, function (t) {
					var e = a[t];
					return "string" == typeof e ? e: "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
				}) + '"': '"' + t + '"'
			}
			function n(t, r) {
				var o, a, f, s, l, p = i,
				h = r[t];
				switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(t)), "function" == typeof c && (h = c.call(r, t, h)), typeof h) {
				case "string":
					return e(h);
				case "number":
					return isFinite(h) ? String(h) : "null";
				case "boolean":
				case "null":
					return String(h);
				case "object":
					if (!h) return "null";
					if (i += u, l = [], "[object Array]" === Object.prototype.toString.apply(h)) {
						for (s = h.length, o = 0; s > o; o += 1) l[o] = n(o, h) || "null";
						return f = 0 === l.length ? "[]": i ? "[\n" + i + l.join(",\n" + i) + "\n" + p + "]": "[" + l.join(",") + "]",
						i = p,
						f
					}
					if (c && "object" == typeof c) for (s = c.length, o = 0; s > o; o += 1)"string" == typeof c[o] && (a = c[o], f = n(a, h), f && l.push(e(a) + (i ? ": ": ":") + f));
					else for (a in h) Object.prototype.hasOwnProperty.call(h, a) && (f = n(a, h), f && l.push(e(a) + (i ? ": ": ":") + f));
					return f = 0 === l.length ? "{}": i ? "{\n" + i + l.join(",\n" + i) + "\n" + p + "}": "{" + l.join(",") + "}",
					i = p,
					f
				}
			}
			"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
				return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "Z": null
			},
			String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
				return this.valueOf()
			});
			var r, o, i, u, a, c;
			"function" != typeof JSON.stringify && (o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, a = {
				"\b": "\\b",
				"	": "\\t",
				"\n": "\\n",
				"\f": "\\f",
				"\r": "\\r",
				'"': '\\"',
				"\\": "\\\\"
			},
			JSON.stringify = function (t, e, r) {
				var o;
				if (i = "", u = "", "number" == typeof r) for (o = 0; r > o; o += 1) u += " ";
				else "string" == typeof r && (u = r);
				if (c = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
				return n("", {
					"": t
				})
			}),
			"function" != typeof JSON.parse && (r = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, JSON.parse = function (t, e) {
				function n(t, r) {
					var o, i, u = t[r];
					if (u && "object" == typeof u) for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (i = n(u, o), void 0 !== i ? u[o] = i: delete u[o]);
					return e.call(t, r, u)
				}
				var o;
				if (t = String(t), r.lastIndex = 0, r.test(t) && (t = t.replace(r, function (t) {
					return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice( - 4)
				})), /^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return o = eval("(" + t + ")"),
				"function" == typeof e ? n({
					"": o
				},
				"") : o;
				throw new SyntaxError("JSON.parse")
			})
		} ()
	},
	{}],
	5 : [function (t, e) { !
		function (t, n, r) {
			"undefined" != typeof e && e.exports ? e.exports = r() : "function" == typeof define && define.amd ? define(r) : n[t] = r()
		} ("qwery", this, function () {
			function t() {
				this.c = {}
			}
			function e(t) {
				return H.g(t) || H.s(t, "(^|\\s+)" + t + "(\\s+|$)", 1)
			}
			function n(t, e) {
				for (var n = 0, r = t.length; r > n; n++) e(t[n])
			}
			function r(t) {
				for (var e = [], n = 0, r = t.length; r > n; ++n) g(t[n]) ? e = e.concat(t[n]) : e[e.length] = t[n];
				return e
			}
			function o(t) {
				for (var e = 0, n = t.length, r = []; n > e; e++) r[e] = t[e];
				return r
			}
			function i(t) {
				for (;
				(t = t.previousSibling) && 1 != t[N];);
				return t
			}
			function u(t) {
				return t.match(Y)
			}
			function a(t, n, r, o, i, u, a, c, s, l, p) {
				var h, v, g, d, _;
				if (1 !== this[N]) return ! 1;
				if (n && "*" !== n && this[A] && this[A].toLowerCase() !== n) return ! 1;
				if (r && (v = r.match(k)) && v[1] !== this.id) return ! 1;
				if (r && (_ = r.match(C))) for (h = _.length; h--;) if (!e(_[h].slice(1)).test(this.className)) return ! 1;
				if (s && y.pseudos[s] && !y.pseudos[s](this, p)) return ! 1;
				if (o && !a) {
					d = this.attributes;
					for (g in d) if (Object.prototype.hasOwnProperty.call(d, g) && (d[g].name || g) == i) return this
				}
				return o && !f(u, G(this, i) || "", a) ? !1 : this
			}
			function c(t) {
				return Z.g(t) || Z.s(t, t.replace(U, "\\$1"))
			}
			function f(t, e, n) {
				switch (t) {
				case "=":
					return e == n;
				case "^=":
					return e.match(K.g("^=" + n) || K.s("^=" + n, "^" + c(n), 1));
				case "$=":
					return e.match(K.g("$=" + n) || K.s("$=" + n, c(n) + "$", 1));
				case "*=":
					return e.match(K.g(n) || K.s(n, c(n), 1));
				case "~=":
					return e.match(K.g("~=" + n) || K.s("~=" + n, "(?:^|\\s+)" + c(n) + "(?:\\s+|$)", 1));
				case "|=":
					return e.match(K.g("|=" + n) || K.s("|=" + n, "^" + c(n) + "(-|$)", 1))
				}
				return 0
			}
			function s(t, e) {
				var r, o, i, c, f, s, l, h = [],
				v = [],
				g = e,
				d = X.g(t) || X.s(t, t.split(V)),
				y = t.match(z);
				if (!d.length) return h;
				if (c = (d = d.slice(0)).pop(), d.length && (i = d[d.length - 1].match(T)) && (g = _(e, i[1])), !g) return h;
				for (s = u(c), f = g !== e && 9 !== g[N] && y && /^[+~]$/.test(y[y.length - 1]) ?
				function (t) {
					for (; g = g.nextSibling;) 1 == g[N] && (s[1] ? s[1] == g[A].toLowerCase() : 1) && (t[t.length] = g);
					return t
				} ([]) : g[j](s[1] || "*"), r = 0, o = f.length; o > r; r++)(l = a.apply(f[r], s)) && (h[h.length] = l);
				return d.length ? (n(h, function (t) {
					p(t, d, y) && (v[v.length] = t)
				}), v) : h
			}
			function l(t, e, n) {
				if (h(e)) return t == e;
				if (g(e)) return !! ~r(e).indexOf(t);
				for (var o, i, c = e.split(","); e = c.pop();) if (o = X.g(e) || X.s(e, e.split(V)), i = e.match(z), o = o.slice(0), a.apply(t, u(o.pop())) && (!o.length || p(t, o, i, n))) return ! 0;
				return ! 1
			}
			function p(t, e, n, r) {
				function o(t, r, c) {
					for (; c = W[n[r]](c, t);) if (h(c) && a.apply(c, u(e[r]))) {
						if (!r) return c;
						if (i = o(c, r - 1, c)) return i
					}
				}
				var i;
				return (i = o(t, e.length - 1, t)) && (!r || Q(i, r))
			}
			function h(t, e) {
				return t && "object" == typeof t && (e = t[N]) && (1 == e || 9 == e)
			}
			function v(t) {
				var e, n, r = [];
				t: for (e = 0; e < t.length; ++e) {
					for (n = 0; n < r.length; ++n) if (r[n] == t[e]) continue t;
					r[r.length] = t[e]
				}
				return r
			}
			function g(t) {
				return "object" == typeof t && isFinite(t.length)
			}
			function d(t) {
				return t ? "string" == typeof t ? y(t)[0] : !t[N] && g(t) ? t[0] : t: b
			}
			function _(t, e, n) {
				return 9 === t[N] ? t.getElementById(e) : t.ownerDocument && ((n = t.ownerDocument.getElementById(e)) && Q(n, t) && n || !Q(t, t.ownerDocument) && w('[id="' + e + '"]', t)[0])
			}
			function y(t, e) {
				var n, i, u = d(e);
				if (!u || !t) return [];
				if (t === window || h(t)) return ! e || t !== window && h(u) && Q(t, u) ? [t] : [];
				if (t && g(t)) return r(t);
				if (n = t.match(J)) {
					if (n[1]) return (i = _(u, n[1])) ? [i] : [];
					if (n[2]) return o(u[j](n[2]));
					if (te && n[3]) return o(u[x](n[3]))
				}
				return w(t, u)
			}
			function m(t, e) {
				return function (n) {
					var r, o;
					return D.test(n) ? void(9 !== t[N] && ((o = r = t.getAttribute("id")) || t.setAttribute("id", o = "__qwerymeupscotty"), n = '[id="' + o + '"]' + n, e(t.parentNode || t, n, !0), r || t.removeAttribute("id"))) : void(n.length && e(t, n, !1))
				}
			}
			var w, b = document,
			E = b.documentElement,
			x = "getElementsByClassName",
			j = "getElementsByTagName",
			S = "querySelectorAll",
			O = "useNativeQSA",
			A = "tagName",
			N = "nodeType",
			k = /#([\w\-]+)/,
			C = /\.[\w\-]+/g,
			T = /^#([\w\-]+)$/,
			$ = /^\.([\w\-]+)$/,
			M = /^([\w\-]+)$/,
			L = /^([\w]+)?\.([\w\-]+)$/,
			D = /(^|,)\s*[>~+]/,
			P = /^\s+|\s*([,\s\+\~>]|$)\s*/g,
			I = /[\s\>\+\~]/,
			R = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
			U = /([.*+?\^=!:${}()|\[\]\/\\])/g,
			q = /^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/,
			B = /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/,
			F = /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/,
			J = new RegExp(T.source + "|" + M.source + "|" + $.source),
			z = new RegExp("(" + I.source + ")" + R.source, "g"),
			V = new RegExp(I.source + R.source),
			Y = new RegExp(q.source + "(" + B.source + ")?(" + F.source + ")?"),
			W = {
				" ": function (t) {
					return t && t !== E && t.parentNode
				},
				">": function (t, e) {
					return t && t.parentNode == e.parentNode && t.parentNode
				},
				"~": function (t) {
					return t && t.previousSibling
				},
				"+": function (t, e, n, r) {
					return t ? (n = i(t)) && (r = i(e)) && n == r && n: !1
				}
			};
			t.prototype = {
				g: function (t) {
					return this.c[t] || void 0
				},
				s: function (t, e, n) {
					return e = n ? new RegExp(e) : e,
					this.c[t] = e
				}
			};
			var H = new t,
			Z = new t,
			K = new t,
			X = new t,
			Q = "compareDocumentPosition" in E ?
			function (t, e) {
				return 16 == (16 & e.compareDocumentPosition(t))
			}: "contains" in E ?
			function (t, e) {
				return e = 9 === e[N] || e == window ? E: e,
				e !== t && e.contains(t)
			}: function (t, e) {
				for (; t = t.parentNode;) if (t === e) return 1;
				return 0
			},
			G = function () {
				var t = b.createElement("p");
				return (t.innerHTML = '<a href="#x">x</a>') && "#x" != t.firstChild.getAttribute("href") ?
				function (t, e) {
					return "class" === e ? t.className: "href" === e || "src" === e ? t.getAttribute(e, 2) : t.getAttribute(e)
				}: function (t, e) {
					return t.getAttribute(e)
				}
			} (),
			te = !!b[x],
			ee = b.querySelector && b[S],
			ne = function (t, e) {
				var r, i, u = [];
				try {
					return 9 !== e[N] && D.test(t) ? (n(r = t.split(","), m(e, function (t, e) {
						i = t[S](e),
						1 == i.length ? u[u.length] = i.item(0) : i.length && (u = u.concat(o(i)))
					})), r.length > 1 && u.length > 1 ? v(u) : u) : o(e[S](t))
				} catch(a) {}
				return re(t, e)
			},
			re = function (t, r) {
				var o, i, u, a, c, f, l = [];
				if (t = t.replace(P, "$1"), i = t.match(L)) {
					for (c = e(i[2]), o = r[j](i[1] || "*"), u = 0, a = o.length; a > u; u++) c.test(o[u].className) && (l[l.length] = o[u]);
					return l
				}
				return n(f = t.split(","), m(r, function (t, e, n) {
					for (c = s(e, t), u = 0, a = c.length; a > u; u++)(9 === t[N] || n || Q(c[u], r)) && (l[l.length] = c[u])
				})),
				f.length > 1 && l.length > 1 ? v(l) : l
			},
			oe = function (t) {
				"undefined" != typeof t[O] && (w = t[O] && ee ? ne: re)
			};
			return oe({
				useNativeQSA: !0
			}),
			y.configure = oe,
			y.uniq = v,
			y.is = l,
			y.pseudos = {},
			y
		})
	},
	{}]
},
{},
[1]);
