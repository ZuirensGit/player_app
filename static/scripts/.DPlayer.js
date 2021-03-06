! function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("DPlayer", [], t) : "object" == typeof exports ? exports.DPlayer = t() : e.DPlayer = t()
}(this, function() {
	return function(e) {
		function t(n) {
			if(a[n]) return a[n].exports;
			var r = a[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
		}
		var a = {};
		return t.m = e, t.c = a, t.p = "", t(0)
	}([function(e, t, a) {
		"use strict";

		function n(e, t) {
			if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
				return typeof e
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			},
			l = function() {
				function e(e, t) {
					for(var a = 0; a < t.length; a++) {
						var n = t[a];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
					}
				}
				return function(t, a, n) {
					return a && e(t.prototype, a), n && e(t, n), t
				}
			}();
		console.log("\n %c DPlayer 1.1.2 %c http://dplayer.js.org \n\n", "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;"), a(1);
		var o = a(5),
			i = 0,
			s = function() {
				function e(t) {
					var a = this;
					n(this, e);
					var l = {
						play: ["0 0 16 32", "M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"],
						pause: ["0 0 17 32", "M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"],
						"volume-up": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z"],
						"volume-down": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"],
						"volume-off": ["0 0 21 32", "M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"],
						loop: ["0 0 32 32", "M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z"],
						full: ["0 0 32 33", "M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"],
						setting: ["0 0 32 28", "M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"],
						right: ["0 0 32 32", "M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"],
						comment: ["0 0 32 32", "M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"],
						"comment-off": ["0 0 32 32", "M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"],
						send: ["0 0 32 32", "M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"],
						menu: ["0 0 22 32", "M20.8 14.4q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2zM1.6 11.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2zM20.8 20.8q0.704 0 1.152 0.48t0.448 1.12-0.48 1.12-1.12 0.48h-19.2q-0.64 0-1.12-0.48t-0.48-1.12 0.448-1.12 1.152-0.48h19.2z"],
						camera: ["0 0 32 32", "M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"]
					};
					this.getSVG = function(e) {
						return '\n                <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="' + l[e][0] + '" width="100%">\n                    <use xlink:href="#dplayer-' + e + '"></use>\n                    <path class="dplayer-fill" d="' + l[e][1] + '" id="dplayer-' + e + '"></path>\n                </svg>\n            '
					}, this.option = t;
					var s = /mobile/i.test(window.navigator.userAgent);
					s && (this.option.autoplay = !1);
					var d = {
						element: document.getElementsByClassName("dplayer")[0],
						autoplay: !1,
						theme: "#b7daff",
						loop: !1,
						lang: navigator.language.indexOf("zh") !== -1 ? "zh" : "en",
						screenshot: !1,
						hotkey: !0,
						preload: "auto",
						apiBackend: o
					};
					for(var p in d) d.hasOwnProperty(p) && !this.option.hasOwnProperty(p) && (this.option[p] = d[p]);
					var m = {
							"Danmaku is loading": "弹幕加载中",
							Top: "顶部",
							Bottom: "底部",
							Rolling: "滚动",
							"Input danmaku, hit Enter": "输入弹幕，回车发送",
							"About author": "关于作者",
							"DPlayer feedback": "播放器意见反馈",
							"About DPlayer": "关于 DPlay 播放器",
							Loop: "洗脑循环",
							Speed: "速度",
							"Opacity for danmaku": "弹幕透明度",
							Normal: "正常",
							"Please input danmaku!": "要输入弹幕内容啊喂！",
							"Set danmaku color": "设置弹幕颜色",
							"Set danmaku type": "设置弹幕类型",
							Danmaku: "弹幕"
						},
						c = function(e) {
							return "en" === a.option.lang ? e : "zh" === a.option.lang ? m[e] : void 0
						};
					this.updateBar = function(e, t, a) {
						t = t > 0 ? t : 0, t = t < 1 ? t : 1, Y[e + "Bar"].style[a] = 100 * t + "%"
					};
					var y = ["play", "pause", "canplay", "playing", "ended", "error"];
					this.event = {};
					for(var u = 0; u < y.length; u++) this.event[y[u]] = [];
					this.trigger = function(e) {
						for(var t = 0; t < a.event[e].length; t++) a.event[e][t]()
					}, this.element = this.option.element, this.option.danmaku || this.element.classList.add("dplayer-no-danmaku"), this.element.innerHTML = '\n            <div class="dplayer-mask"></div>\n            <div class="dplayer-video-wrap">\n                <video class="dplayer-video" ' + (this.option.video.pic ? 'poster="' + this.option.video.pic + '"' : "") + " webkit-playsinline " + (this.option.screenshot ? 'crossorigin="anonymous"' : "") + ' preload="' + this.option.preload + '" src="' + this.option.video.url + '"></video>\n                <div class="dplayer-danmaku">\n                    <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n                </div>\n                <div class="dplayer-bezel">\n                    <span class="dplayer-bezel-icon"></span>\n                    ' + (this.option.danmaku ? '<span class="dplayer-danloading">' + c("Danmaku is loading") + "</span>" : "") + '\n                    <span class="diplayer-loading-icon">\n                        <svg height="100%" version="1.1" viewBox="0 0 22 22" width="100%">\n                            <svg x="7" y="1">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="11" y="3">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="13" y="7">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="11" y="11">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="7" y="13">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="3" y="11">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="1" y="7">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                            <svg x="3" y="3">\n                                <circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle>\n                            </svg>\n                        </svg>\n                    </span>\n                </div>\n            </div>\n            <div class="dplayer-controller-mask"></div>\n            <div class="dplayer-controller">\n                <div class="dplayer-icons dplayer-icons-left">\n                    <button class="dplayer-icon dplayer-play-icon">' + this.getSVG("play") + ('     </button>\n                    <div class="dplayer-volume" ' + (s ? 'style="display: none;"' : "") + '>\n                        <button class="dplayer-icon dplayer-volume-icon">') + this.getSVG("volume-down") + ('         </button>\n                        <div class="dplayer-volume-bar-wrap">\n                            <div class="dplayer-volume-bar">\n                                <div class="dplayer-volume-bar-inner" style="width: 70%; background: ' + this.option.theme + ';">\n                                    <span class="dplayer-thumb" style="background: ' + this.option.theme + '"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <span class="dplayer-time"><span class="dplayer-ptime">0:00</span> / <span class="dplayer-dtime">0:00</span></span>\n                </div>\n                <div class="dplayer-icons dplayer-icons-right">\n                    ' + (this.option.screenshot ? '\n                    <a href="#" class="dplayer-icon dplayer-camera-icon" ' + (s ? 'style="display: none;"' : "") + "dplayer-volume>" + this.getSVG("camera") + "     </a>\n                    " : "") + '\n                    <div class="dplayer-comment">\n                        <button class="dplayer-icon dplayer-comment-icon">') + this.getSVG("comment") + '         </button>\n                        <div class="dplayer-comment-box">\n                            <button class="dplayer-icon dplayer-comment-setting-icon">' + this.getSVG("menu") + ('             </button>\n                            <div class="dplayer-comment-setting-box">\n                                <div class="dplayer-comment-setting-color">\n                                   <div class="dplayer-comment-setting-title">' + c("Set danmaku color") + '</div>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#fff" checked>\n                                        <span style="background: #fff; border: 1px solid rgba(0,0,0,.1);"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#e54256">\n                                        <span style="background: #e54256"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#ffe133">\n                                        <span style="background: #ffe133"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#64DD17">\n                                        <span style="background: #64DD17"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#39ccff">\n                                        <span style="background: #39ccff"></span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-color-' + i + '" value="#D500F9">\n                                        <span style="background: #D500F9"></span>\n                                    </label>\n                                </div>\n                                <div class="dplayer-comment-setting-type">\n                                    <div class="dplayer-comment-setting-title">' + c("Set danmaku type") + '</div>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + i + '" value="top">\n                                        <span>' + c("Top") + '</span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + i + '" value="right" checked>\n                                        <span>' + c("Rolling") + '</span>\n                                    </label>\n                                    <label>\n                                        <input type="radio" name="dplayer-danmaku-type-' + i + '" value="bottom">\n                                        <span>' + c("Bottom") + '</span>\n                                    </label>\n                                </div>\n                            </div>\n                            <input class="dplayer-comment-input" type="text" placeholder="' + c("Input danmaku, hit Enter") + '" maxlength="30">\n                            <button class="dplayer-icon dplayer-send-icon">') + this.getSVG("send") + '             </button>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting">\n                        <button class="dplayer-icon dplayer-setting-icon">' + this.getSVG("setting") + '         </button>\n                        <div class="dplayer-setting-box"></div>\n                    </div>\n                    <button class="dplayer-icon dplayer-full-icon">' + this.getSVG("full") + ('     </button>\n                </div>\n                <div class="dplayer-bar-wrap">\n                    <div class="dplayer-bar">\n                        <div class="dplayer-loaded" style="width: 0;"></div>\n                        <div class="dplayer-played" style="width: 0; background: ' + this.option.theme + '">\n                            <span class="dplayer-thumb" style="background: ' + this.option.theme + '"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="dplayer-menu">\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="http://diygod.me/">' + c("About Zuirens") + '</a></span></div>\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer/issues">' + c("DPlayer feedback") + '</a></span></div>\n                <div class="dplayer-menu-item"><span class="dplayer-menu-label"><a target="_blank" href="https://github.com/DIYgod/DPlayer">' + c("About DPlayer") + "</a></span></div>\n            </div>\n        ");
					var g = this.element.offsetWidth <= 500;
					if(g) {
						var f = document.createElement("style");
						f.innerHTML = ".dplayer .dplayer-danmaku{font-size:18px}", document.head.appendChild(f)
					}
					if(this.video = this.element.getElementsByClassName("dplayer-video")[0], /(m3u8\?|m3u8$)/i.exec(this.option.video.url) && Hls.isSupported() && ! function() {
							a.element.getElementsByClassName("dplayer-time")[0].style.display = "none";
							var e = new Hls;
							e.attachMedia(a.video), e.on(Hls.Events.MEDIA_ATTACHED, function() {
								e.loadSource(a.option.video.url), e.on(Hls.Events.MANIFEST_PARSED, function(e, t) {
									console.log("manifest loaded, found " + t.levels.length + " quality level")
								})
							})
						}(), /(flv\?|flv$)/i.exec(this.option.video.url) && flvjs.isSupported()) {
						var v = flvjs.createPlayer({
							type: "flv",
							url: this.option.video.url
						});
						v.attachMediaElement(this.video), v.load()
					}
					this.bezel = this.element.getElementsByClassName("dplayer-bezel-icon")[0], this.bezel.addEventListener("animationend", function() {
						a.bezel.classList.remove("dplayer-bezel-transition")
					}), this.playButton = this.element.getElementsByClassName("dplayer-play-icon")[0], this.shouldpause = !0, this.playButton.addEventListener("click", function() {
						a.toggle()
					});
					var h = this.element.getElementsByClassName("dplayer-video-wrap")[0],
						b = this.element.getElementsByClassName("dplayer-controller-mask")[0];
					if(s) {
						var x = function() {
							a.element.classList.contains("dplayer-hide-controller") ? a.element.classList.remove("dplayer-hide-controller") : a.element.classList.add("dplayer-hide-controller")
						};
						h.addEventListener("click", x), b.addEventListener("click", x)
					} else h.addEventListener("click", function() {
						a.toggle()
					}), b.addEventListener("click", function() {
						a.toggle()
					});
					var k = function(e) {
							var t = function(e) {
									return e < 10 ? "0" + e : "" + e
								},
								a = parseInt(e / 60),
								n = parseInt(e - 60 * a);
							return t(a) + ":" + t(n)
						},
						w = function(e) {
							var t = e.offsetLeft,
								n = e.offsetParent,
								r = void 0;
							if(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
								for(; null !== n && n !== a.element;) t += n.offsetLeft, n = n.offsetParent;
							else
								for(; null !== n;) t += n.offsetLeft, n = n.offsetParent;
							return r = document.body.scrollLeft + document.documentElement.scrollLeft, t - r
						},
						Y = {};
					Y.playedBar = this.element.getElementsByClassName("dplayer-played")[0], Y.loadedBar = this.element.getElementsByClassName("dplayer-loaded")[0];
					var E = this.element.getElementsByClassName("dplayer-bar-wrap")[0],
						L = void 0;
					this.option.danmaku && this.video.addEventListener("seeking", function() {
						for(var e = 0; e < a.dan.length; e++) {
							if(a.dan[e].time >= a.video.currentTime) return void(a.danIndex = e);
							a.danIndex = a.dan.length
						}
					});
					var z = 0,
						B = 0,
						C = !1,
						T = void 0;
					this.setTime = function() {
						a.playedTime = setInterval(function() {
							B = a.video.currentTime, !C && B < z + .01 && !a.video.paused && (a.element.classList.add("dplayer-loading"), C = !0), C && B > z + .01 && !a.video.paused && (a.element.classList.remove("dplayer-loading"), C = !1), z = B, a.updateBar("played", a.video.currentTime / a.video.duration, "width"), a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = k(a.video.currentTime), a.trigger("playing")
						}, 100), a.option.danmaku && (T = setInterval(function() {
							for(var e = a.dan[a.danIndex]; e && a.video.currentTime >= parseFloat(e.time);) le(e.text, e.color, e.type), e = a.dan[++a.danIndex]
						}, 0))
					}, this.clearTime = function() {
						clearInterval(a.playedTime), a.option.danmaku && clearInterval(T)
					}, E.addEventListener("click", function(e) {
						var t = e || window.event;
						L = E.clientWidth;
						var n = (t.clientX - w(E)) / L;
						n = n > 0 ? n : 0, n = n < 1 ? n : 1, a.updateBar("played", n, "width"), a.video.currentTime = parseFloat(Y.playedBar.style.width) / 100 * a.video.duration
					});
					var N = function(e) {
							var t = e || window.event,
								n = (t.clientX - w(E)) / L;
							n = n > 0 ? n : 0, n = n < 1 ? n : 1, a.updateBar("played", n, "width"), a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = k(n * a.video.duration)
						},
						M = function we() {
							document.removeEventListener("mouseup", we), document.removeEventListener("mousemove", N), a.video.currentTime = parseFloat(Y.playedBar.style.width) / 100 * a.video.duration, a.setTime()
						};
					E.addEventListener("mousedown", function() {
						L = E.clientWidth, a.clearTime(), document.addEventListener("mousemove", N), document.addEventListener("mouseup", M)
					}), Y.volumeBar = this.element.getElementsByClassName("dplayer-volume-bar-inner")[0];
					var q = this.element.getElementsByClassName("dplayer-volume")[0],
						S = this.element.getElementsByClassName("dplayer-volume-bar-wrap")[0],
						A = this.element.getElementsByClassName("dplayer-volume-bar")[0],
						D = this.element.getElementsByClassName("dplayer-volume-icon")[0],
						I = 35;
					this.switchVolumeIcon = function() {
						var e = a.element.getElementsByClassName("dplayer-volume-icon")[0];
						a.video.volume >= .8 ? e.innerHTML = a.getSVG("volume-up") : a.video.volume > 0 ? e.innerHTML = a.getSVG("volume-down") : e.innerHTML = a.getSVG("volume-off")
					};
					var R = function(e) {
							var t = e || window.event,
								n = (t.clientX - w(A) - 5.5) / I;
							a.volume(n)
						},
						H = function Ye() {
							document.removeEventListener("mouseup", Ye), document.removeEventListener("mousemove", R), q.classList.remove("dplayer-volume-active")
						};
					S.addEventListener("click", function(e) {
						var t = e || window.event,
							n = (t.clientX - w(A) - 5.5) / I;
						a.volume(n)
					}), S.addEventListener("mousedown", function() {
						document.addEventListener("mousemove", R), document.addEventListener("mouseup", H), q.classList.add("dplayer-volume-active")
					}), D.addEventListener("click", function() {
						a.video.muted ? (a.video.muted = !1, a.switchVolumeIcon(), a.updateBar("volume", a.video.volume, "width")) : (a.video.muted = !0, D.innerHTML = a.getSVG("volume-off"), a.updateBar("volume", 0, "width"))
					});
					var F = 0;
					if(!s) {
						var P = function() {
							a.element.classList.remove("dplayer-hide-controller"), clearTimeout(F), F = setTimeout(function() {
								a.video.played.length && (a.element.classList.add("dplayer-hide-controller"), G(), ve())
							}, 2e3)
						};
						this.element.addEventListener("mousemove", P), this.element.addEventListener("click", P)
					}
					var X = localStorage.getItem("DPlayer-opacity") || .7,
						V = {
							original: '\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">' + c("Speed") + '</span>\n                        <div class="dplayer-toggle">' + this.getSVG("right") + ('     </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">' + c("Loop") + '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">' + c("Danmaku") + '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">' + c("Opacity for danmaku") + '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner" style="width: ' + 100 * X + '%">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>'),
							speed: '\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">' + c("Normal") + '</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>'
						},
						O = this.element.getElementsByClassName("dplayer-setting-icon")[0],
						U = this.element.getElementsByClassName("dplayer-setting-box")[0],
						j = this.element.getElementsByClassName("dplayer-mask")[0];
					U.innerHTML = V.original;
					var G = function() {
							U.classList.contains("dplayer-setting-box-open") && (U.classList.remove("dplayer-setting-box-open"), j.classList.remove("dplayer-mask-show"), setTimeout(function() {
								U.classList.remove("dplayer-setting-box-narrow"), U.innerHTML = V.original, $()
							}, 300))
						},
						W = function() {
							U.classList.add("dplayer-setting-box-open"), j.classList.add("dplayer-mask-show")
						};
					j.addEventListener("click", function() {
						G()
					}), O.addEventListener("click", function() {
						W()
					});
					var J = this.option.loop,
						_ = this.element.getElementsByClassName("dplayer-danmaku")[0],
						Q = !0,
						$ = function() {
							var e = a.element.getElementsByClassName("dplayer-setting-loop")[0],
								t = e.getElementsByClassName("dplayer-toggle-setting-input")[0];
							t.checked = J, e.addEventListener("click", function() {
								t.checked = !t.checked, t.checked ? (J = !0, a.video.loop = J) : (J = !1, a.video.loop = J), G()
							});
							var n = a.element.getElementsByClassName("dplayer-setting-showdan")[0],
								r = n.getElementsByClassName("dplayer-showdan-setting-input")[0];
							r.checked = Q, n.addEventListener("click", function() {
								if(r.checked = !r.checked, r.checked) {
									if(Q = !0, a.option.danmaku) {
										for(var e = 0; e < a.dan.length; e++) {
											if(a.dan[e].time >= a.video.currentTime) {
												a.danIndex = e;
												break
											}
											a.danIndex = a.dan.length
										}
										T = setInterval(function() {
											for(var e = a.dan[a.danIndex]; e && a.video.currentTime >= parseFloat(e.time);) le(e.text, e.color, e.type), e = a.dan[++a.danIndex]
										}, 0)
									}
								} else Q = !1, a.option.danmaku && (clearInterval(T), _.innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>', a.danTunnel = {
									right: {},
									top: {},
									bottom: {}
								}, a.itemDemo = a.element.getElementsByClassName("dplayer-danmaku-item")[0]);
								G()
							});
							var l = a.element.getElementsByClassName("dplayer-setting-speed")[0];
							l.addEventListener("click", function() {
								U.classList.add("dplayer-setting-box-narrow"), U.innerHTML = V.speed;
								for(var e = U.getElementsByClassName("dplayer-setting-speed-item"), t = function(t) {
										e[t].addEventListener("click", function() {
											a.video.playbackRate = e[t].dataset.speed, G()
										})
									}, n = 0; n < e.length; n++) t(n)
							}), a.option.danmaku && ! function() {
								Y.danmakuBar = a.element.getElementsByClassName("dplayer-danmaku-bar-inner")[0];
								var e = a.element.getElementsByClassName("dplayer-danmaku-bar-wrap")[0],
									t = a.element.getElementsByClassName("dplayer-danmaku-bar")[0],
									n = a.element.getElementsByClassName("dplayer-setting-danmaku")[0],
									r = 130;
								a.updateBar("danmaku", X, "width");
								var l = function(e) {
										var n = e || window.event,
											l = (n.clientX - w(t)) / r;
										l = l > 0 ? l : 0, l = l < 1 ? l : 1, a.updateBar("danmaku", l, "width");
										for(var o = a.element.getElementsByClassName("dplayer-danmaku-item"), i = 0; i < o.length; i++) o[i].style.opacity = l;
										X = l, localStorage.setItem("DPlayer-opacity", X)
									},
									o = function i() {
										document.removeEventListener("mouseup", i), document.removeEventListener("mousemove", l), n.classList.remove("dplayer-setting-danmaku-active")
									};
								e.addEventListener("click", function(e) {
									var n = e || window.event,
										l = (n.clientX - w(t)) / r;
									l = l > 0 ? l : 0, l = l < 1 ? l : 1, a.updateBar("danmaku", l, "width");
									for(var o = a.element.getElementsByClassName("dplayer-danmaku-item"), i = 0; i < o.length; i++) o[i].style.opacity = l;
									X = l, localStorage.setItem("DPlayer-opacity", X)
								}), e.addEventListener("mousedown", function() {
									document.addEventListener("mousemove", l), document.addEventListener("mouseup", o), n.classList.add("dplayer-setting-danmaku-active")
								})
							}()
						};
					$(), this.video.addEventListener("durationchange", function() {
						1 !== a.video.duration && (a.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = k(a.video.duration))
					}), this.video.addEventListener("progress", function() {
						var e = a.video.buffered.length ? a.video.buffered.end(a.video.buffered.length - 1) / a.video.duration : 0;
						a.updateBar("loaded", e, "width")
					}), this.video.addEventListener("error", function() {
						a.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "Error happens ╥﹏╥", a.trigger("pause")
					}), this.video.addEventListener("canplay", function() {
						a.trigger("canplay")
					}), this.ended = !1, this.video.addEventListener("ended", function() {
						a.updateBar("played", 1, "width"), J || (a.ended = !0, a.pause(), a.trigger("ended"))
					}), this.video.volume = parseInt(this.element.getElementsByClassName("dplayer-volume-bar-inner")[0].style.width) / 100, this.video.loop = J, 1 !== this.video.duration && (this.element.getElementsByClassName("dplayer-dtime")[0].innerHTML = this.video.duration ? k(this.video.duration) : "00:00");
					var Z = g ? 24 : 30,
						K = void 0,
						ee = void 0,
						te = void 0;
					this.danTunnel = {
						right: {},
						top: {},
						bottom: {}
					};
					var ae = function(e) {
							return _.getBoundingClientRect().right - e.getBoundingClientRect().right
						},
						ne = function(e) {
							return(K + e) / 5
						},
						re = function(e, t, n) {
							for(var l = K / ne(n), o = function(n) {
									var r = a.danTunnel[t][n + ""];
									if(!r || !r.length) return a.danTunnel[t][n + ""] = [e], e.addEventListener("animationend", function() {
										a.danTunnel[t][n + ""].splice(0, 1)
									}), {
										v: n % te
									};
									for(var o = 0; o < r.length; o++) {
										var i = ae(r[o]) - 10;
										if(i <= K - l * ne(r[o].offsetWidth) || i <= 0) break;
										if(o === r.length - 1) return a.danTunnel[t][n + ""].push(e), e.addEventListener("animationend", function() {
											a.danTunnel[t][n + ""].splice(0, 1)
										}), {
											v: n % te
										}
									}
								}, i = 0;; i++) {
								var s = o(i);
								if("object" === ("undefined" == typeof s ? "undefined" : r(s))) return s.v
							}
						};
					this.itemDemo = this.element.getElementsByClassName("dplayer-danmaku-item")[0];
					var le = function(e, t, n) {
						K = _.offsetWidth, ee = _.offsetHeight, te = parseInt(ee / Z);
						var r = document.createElement("div");
						r.classList.add("dplayer-danmaku-item"), r.classList.add("dplayer-danmaku-" + n), r.innerHTML = e, r.style.opacity = X, r.style.color = t, r.addEventListener("animationend", function() {
							_.removeChild(r)
						}), a.itemDemo.innerHTML = e;
						var l = a.itemDemo.offsetWidth;
						switch(n) {
							case "right":
								r.style.top = Z * re(r, n, l) + "px", r.style.width = l + 1 + "px", r.style.transform = "translateX(-" + K + "px)";
								break;
							case "top":
								r.style.top = Z * re(r, n) + "px";
								break;
							case "bottom":
								r.style.bottom = Z * re(r, n) + "px";
								break;
							default:
								console.error("Can't handled danmaku type: " + n)
						}
						return _.appendChild(r), r.classList.add("dplayer-danmaku-move"), r
					};
					this.option.danmaku ? (this.danIndex = 0, this.readDanmaku()) : this.option.autoplay && !s ? this.play() : s && this.pause();
					var oe = this.element.getElementsByClassName("dplayer-comment-input")[0],
						ie = this.element.getElementsByClassName("dplayer-comment-icon")[0],
						se = this.element.getElementsByClassName("dplayer-comment-box")[0],
						de = this.element.getElementsByClassName("dplayer-comment-setting-icon")[0],
						pe = this.element.getElementsByClassName("dplayer-comment-setting-box")[0],
						me = this.element.getElementsByClassName("dplayer-send-icon")[0],
						ce = function(e) {
							return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
						},
						ye = function() {
							if(oe.blur(), !oe.value.replace(/^\s+|\s+$/g, "")) return void alert(c("Please input danmaku!"));
							var e = {
								token: a.option.danmaku.token,
								player: a.option.danmaku.id,
								author: "DIYgod",
								time: a.video.currentTime,
								text: oe.value,
								color: a.element.querySelector(".dplayer-comment-setting-color input:checked").value,
								type: a.element.querySelector(".dplayer-comment-setting-type input:checked").value
							};
							a.option.apiBackend.send(a.option.danmaku.api, e), oe.value = "", ve(), a.dan.splice(a.danIndex, 0, e), a.danIndex++;
							var t = le(ce(e.text), e.color, e.type);
							t.style.border = "2px solid " + a.option.theme
						},
						ue = function() {
							pe.classList.contains("dplayer-comment-setting-open") && pe.classList.remove("dplayer-comment-setting-open")
						},
						ge = function() {
							pe.classList.contains("dplayer-comment-setting-open") ? pe.classList.remove("dplayer-comment-setting-open") : pe.classList.add("dplayer-comment-setting-open")
						},
						fe = 0,
						ve = function() {
							se.classList.contains("dplayer-comment-box-open") && (se.classList.remove("dplayer-comment-box-open"), j.classList.remove("dplayer-mask-show"), clearInterval(fe), a.element.classList.remove("dplayer-show-controller"), ue())
						},
						he = function() {
							se.classList.add("dplayer-comment-box-open"), j.classList.add("dplayer-mask-show"), fe = setInterval(function() {
								clearTimeout(F)
							}, 1e3), a.element.classList.add("dplayer-show-controller")
						};
					j.addEventListener("click", function() {
						ve()
					}), ie.addEventListener("click", function() {
						he(), setTimeout(function() {
							oe.focus()
						}, 300)
					}), de.addEventListener("click", function() {
						ge()
					}), this.element.getElementsByClassName("dplayer-comment-setting-color")[0].addEventListener("click", function() {
						var e = a.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked+span');
						e && (de.getElementsByClassName("dplayer-fill")[0].style.fill = a.element.querySelector('input[name="dplayer-danmaku-color-${index}"]:checked').value)
					}), oe.addEventListener("click", function() {
						ue()
					}), oe.addEventListener("keydown", function(e) {
						var t = e || window.event;
						13 === t.keyCode && ye()
					}), me.addEventListener("click", ye);
					var be = function() {
						K = _.offsetWidth;
						for(var e = a.element.getElementsByClassName("dplayer-danmaku-item"), t = 0; t < e.length; t++) e[t].style.transform = "translateX(-" + K + "px)"
					};
					this.element.addEventListener("fullscreenchange", function() {
						be(), console.log(_.offsetHeight)
					}), this.element.addEventListener("mozfullscreenchange", function() {
						be(), console.log(_.offsetHeight)
					}), this.element.addEventListener("webkitfullscreenchange", function() {
						be(), console.log(_.offsetHeight)
					}), this.element.getElementsByClassName("dplayer-full-icon")[0].addEventListener("click", function() {
						document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : a.element.requestFullscreen ? a.element.requestFullscreen() : a.element.mozRequestFullScreen ? a.element.mozRequestFullScreen() : a.element.webkitRequestFullscreen && a.element.webkitRequestFullscreen(), be()
					});
					var xe = function(e) {
						var t = document.activeElement.tagName.toUpperCase(),
							n = document.activeElement.getAttribute("contenteditable");
						if("INPUT" !== t && "TEXTAREA" !== t && "" !== n && "true" !== n) {
							var r = e || window.event,
								l = void 0;
							switch(r.keyCode) {
								case 32:
									r.preventDefault(), a.toggle();
									break;
								case 37:
									r.preventDefault(), a.video.currentTime = a.video.currentTime - 5;
									break;
								case 39:
									r.preventDefault(), a.video.currentTime = a.video.currentTime + 5;
									break;
								case 38:
									r.preventDefault(), l = a.video.volume + .1, a.volume(l);
									break;
								case 40:
									r.preventDefault(), l = a.video.volume - .1, a.volume(l)
							}
						}
					};
					this.option.hotkey && document.addEventListener("keydown", xe);
					var ke = this.element.getElementsByClassName("dplayer-menu")[0];
					this.element.addEventListener("contextmenu", function(e) {
						var t = e || window.event;
						t.preventDefault(), ke.style.left = t.clientX - a.element.getBoundingClientRect().left + "px", ke.style.top = t.clientY - a.element.getBoundingClientRect().top + "px", ke.classList.add("dplayer-menu-show"), j.classList.add("dplayer-mask-show"), j.addEventListener("click", function() {
							j.classList.remove("dplayer-mask-show"), ke.classList.remove("dplayer-menu-show")
						})
					}), this.option.screenshot && ! function() {
						var e = a.element.getElementsByClassName("dplayer-camera-icon")[0];
						e.addEventListener("click", function() {
							var t = document.createElement("canvas");
							t.width = a.video.videoWidth, t.height = a.video.videoHeight, t.getContext("2d").drawImage(a.video, 0, 0, t.width, t.height), e.href = t.toDataURL(), e.download = "DPlayer.png"
						})
					}(), i++
				}
				return l(e, [{
					key: "play",
					value: function(e) {
						"[object Number]" === Object.prototype.toString.call(e) && (this.video.currentTime = e), this.video.paused && (this.shouldpause = !1, this.bezel.innerHTML = this.getSVG("play"), this.bezel.classList.add("dplayer-bezel-transition"), this.playButton.innerHTML = this.getSVG("pause"), this.video.play(), this.playedTime && this.clearTime(), this.setTime(), this.element.classList.add("dplayer-playing"), this.trigger("play"))
					}
				}, {
					key: "pause",
					value: function() {
						this.shouldpause && !this.ended || (this.shouldpause = !0, this.element.classList.remove("dplayer-loading"), this.bezel.innerHTML = this.getSVG("pause"), this.bezel.classList.add("dplayer-bezel-transition"), this.ended = !1, this.playButton.innerHTML = this.getSVG("play"), this.video.pause(), this.clearTime(), this.element.classList.remove("dplayer-playing"), this.trigger("pause"))
					}
				}, {
					key: "volume",
					value: function(e) {
						e = e > 0 ? e : 0, e = e < 1 ? e : 1, this.updateBar("volume", e, "width"), this.video.volume = e, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
					}
				}, {
					key: "toggle",
					value: function() {
						this.video.paused ? this.play() : this.pause()
					}
				}, {
					key: "on",
					value: function(e, t) {
						"function" == typeof t && this.event[e].push(t)
					}
				}, {
					key: "_readAllEndpoints",
					value: function(e, t) {
						for(var a = [], n = 0, r = function(r) {
								return function(l, o) {
									if(++n, l ? (l.response ? alert(l.response.msg) : console.log("Request was unsuccessful: " + l.status), a[r] = []) : a[r] = o, n == e.length) return t(a)
								}
							}, l = 0; l < e.length; ++l) this.option.apiBackend.read(e[l], r(l))
					}
				}, {
					key: "readDanmaku",
					value: function() {
						var e = this,
							t = /mobile/i.test(window.navigator.userAgent),
							a = void 0;
						a = this.option.danmaku.maximum ? this.option.danmaku.api + "?id=" + this.option.danmaku.id + "&max=" + this.option.danmaku.maximum : this.option.danmaku.api + "?id=" + this.option.danmaku.id;
						var n = (this.option.danmaku.addition || []).slice(0);
						n.push(a), this._readAllEndpoints(n, function(a) {
							e.danIndex = 0, e.dan = [].concat.apply([], a).sort(function(e, t) {
								return e.time - t.time
							}), e.element.getElementsByClassName("dplayer-danloading")[0].style.display = "none", e.option.autoplay && !t ? e.play() : t && e.pause()
						})
					}
				}, {
					key: "switchVideo",
					value: function(e, t) {
						this.video.src = e.url, this.video.poster = e.pic ? e.pic : "", this.video.currentTime = 0, this.pause(), t && (this.dan = [], this.danIndex = 0, this.element.getElementsByClassName("dplayer-danloading")[0].style.display = "block", this.updateBar("played", 0, "width"), this.updateBar("loaded", 0, "width"), this.element.getElementsByClassName("dplayer-ptime")[0].innerHTML = "00:00", this.element.getElementsByClassName("dplayer-danmaku")[0].innerHTML = '<div class="dplayer-danmaku-item  dplayer-danmaku-item--demo"></div>', this.danTunnel = {
							right: {},
							top: {},
							bottom: {}
						}, this.itemDemo = this.element.getElementsByClassName("dplayer-danmaku-item")[0], this.option.danmaku = t, this.readDanmaku())
					}
				}]), e
			}();
		e.exports = s
	}, function(e, t, a) {
		var n = a(2);
		"string" == typeof n && (n = [
			[e.id, n, ""]
		]);
		a(4)(n, {});
		n.locals && (e.exports = n.locals)
	}, function(e, t, a) {
		t = e.exports = a(3)(), t.push([e.id, '.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{height:60px}.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running!important;animation-play-state:running!important}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller,.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:paused!important;animation-play-state:paused!important}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer .dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer .dplayer-mask.dplayer-mask-show{display:block}.dplayer .dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer .dplayer-video-wrap .dplayer-video{width:100%;height:100%}.dplayer .dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer .dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;font-weight:bolder;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer .dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer .dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.dplayer .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}.dplayer .dplayer-danmaku .dplayer-danmaku-bottom,.dplayer .dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer .dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer .dplayer-bezel .dplayer-fill{fill:hsla(0,0%,100%,.8)}.dplayer .dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer .dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}.dplayer .dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s infinite ease-in-out;animation:my-face 5s infinite ease-in-out}.dplayer .dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;fill:#fff;-webkit-transform-origin:4px 4px;transform-origin:4px 4px}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer .dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}.dplayer .dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer .dplayer-controller,.dplayer .dplayer-controller-mask{position:absolute;bottom:0;-webkit-transition:all .3s ease;transition:all .3s ease}.dplayer .dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer .dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer .dplayer-controller .dplayer-bar-wrap:hover .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer!important}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:hsla(0,0%,100%,.4);height:3px;-webkit-transition:all .5s ease;transition:all .5s ease;will-change:width}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer .dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer .dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer .dplayer-controller .dplayer-icons #dplayer-menu{stroke:#ddd;stroke-width:1px}.dplayer .dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon{width:46px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon:hover{opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px}.dplayer .dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer .dplayer-controller .dplayer-icons .dplayer-fill{fill:#fff}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer!important;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar{width:45px!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar{width:45px!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-thumb{-webkit-transform:scale(1)!important;transform:scale(1)!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 5px 0 -5px;vertical-align:middle;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;will-change:width}.dplayer .dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting{display:inline-block;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;-webkit-transform:translateX(170px);transform:translateX(170px);width:150px;height:120px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{-webkit-transform:translateX(0);transform:translateX(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;background:#aaa;will-change:width}.dplayer .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer!important;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box{position:absolute;right:0;bottom:50px;-webkit-transform:translateX(382px);transform:translateX(382px);border-radius:2px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:2}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box.dplayer-comment-box-open{-webkit-transform:translateX(0);transform:translateX(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon{height:24px;width:24px;position:absolute;top:5px;left:7px;padding:0;opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon:hover .dplayer-fill{fill:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-icon .dplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;fill:#ddd}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:#fff;bottom:40px;left:-93px;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box:after{content:\'\';position:absolute;top:100%;left:50%;margin-left:-12px;background:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 12"><path fill="#FFF" d="M23.7,0c-1.2,0-2.4,0.5-3.2,1.3l-7.7,7.8c-0.4,0.4-1.1,0.4-1.5,0L3.5,1.3C2.7,0.5,1.5,0,0.3,0"/></svg>\');width:24px;height:12px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:14px;color:#555;padding:6px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#555;border:1px solid #e4e4e6;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{-webkit-animation:my-face 5s infinite ease-in-out;animation:my-face 5s infinite ease-in-out;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color input:checked+span{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);border:none!important}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;width:300px;background:#fff;margin:0;height:auto}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon{height:22px;width:22px;position:absolute;top:6px;right:7px;padding:0;opacity:1}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon:hover .dplayer-fill{fill:#aaa}.dplayer .dplayer-controller .dplayer-icons .dplayer-comment .dplayer-comment-box .dplayer-send-icon .dplayer-fill{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;fill:#ddd}.dplayer .dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:100%;text-align:center;display:inline-block;font-size:0;vertical-align:middle;float:right}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after,.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.4)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer .dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer .dplayer-menu{position:absolute;width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer .dplayer-menu.dplayer-menu-show{display:block}.dplayer .dplayer-menu .dplayer-menu-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer}.dplayer .dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer .dplayer-menu .dplayer-menu-item .dplayer-menu-label a{color:#eee;font-size:13px;display:inline-block;vertical-align:middle}@-webkit-keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}', ""]);
	}, function(e, t) {
		e.exports = function() {
			var e = [];
			return e.toString = function() {
				for(var e = [], t = 0; t < this.length; t++) {
					var a = this[t];
					a[2] ? e.push("@media " + a[2] + "{" + a[1] + "}") : e.push(a[1])
				}
				return e.join("")
			}, e.i = function(t, a) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for(var n = {}, r = 0; r < this.length; r++) {
					var l = this[r][0];
					"number" == typeof l && (n[l] = !0)
				}
				for(r = 0; r < t.length; r++) {
					var o = t[r];
					"number" == typeof o[0] && n[o[0]] || (a && !o[2] ? o[2] = a : a && (o[2] = "(" + o[2] + ") and (" + a + ")"), e.push(o))
				}
			}, e
		}
	}, function(e, t, a) {
		function n(e, t) {
			for(var a = 0; a < e.length; a++) {
				var n = e[a],
					r = y[n.id];
				if(r) {
					r.refs++;
					for(var l = 0; l < r.parts.length; l++) r.parts[l](n.parts[l]);
					for(; l < n.parts.length; l++) r.parts.push(d(n.parts[l], t))
				} else {
					for(var o = [], l = 0; l < n.parts.length; l++) o.push(d(n.parts[l], t));
					y[n.id] = {
						id: n.id,
						refs: 1,
						parts: o
					}
				}
			}
		}

		function r(e) {
			for(var t = [], a = {}, n = 0; n < e.length; n++) {
				var r = e[n],
					l = r[0],
					o = r[1],
					i = r[2],
					s = r[3],
					d = {
						css: o,
						media: i,
						sourceMap: s
					};
				a[l] ? a[l].parts.push(d) : t.push(a[l] = {
					id: l,
					parts: [d]
				})
			}
			return t
		}

		function l(e, t) {
			var a = f(),
				n = b[b.length - 1];
			if("top" === e.insertAt) n ? n.nextSibling ? a.insertBefore(t, n.nextSibling) : a.appendChild(t) : a.insertBefore(t, a.firstChild), b.push(t);
			else {
				if("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
				a.appendChild(t)
			}
		}

		function o(e) {
			e.parentNode.removeChild(e);
			var t = b.indexOf(e);
			t >= 0 && b.splice(t, 1)
		}

		function i(e) {
			var t = document.createElement("style");
			return t.type = "text/css", l(e, t), t
		}

		function s(e) {
			var t = document.createElement("link");
			return t.rel = "stylesheet", l(e, t), t
		}

		function d(e, t) {
			var a, n, r;
			if(t.singleton) {
				var l = h++;
				a = v || (v = i(t)), n = p.bind(null, a, l, !1), r = p.bind(null, a, l, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = s(t), n = c.bind(null, a), r = function() {
				o(a), a.href && URL.revokeObjectURL(a.href)
			}) : (a = i(t), n = m.bind(null, a), r = function() {
				o(a)
			});
			return n(e),
				function(t) {
					if(t) {
						if(t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						n(e = t)
					} else r()
				}
		}

		function p(e, t, a, n) {
			var r = a ? "" : n.css;
			if(e.styleSheet) e.styleSheet.cssText = x(t, r);
			else {
				var l = document.createTextNode(r),
					o = e.childNodes;
				o[t] && e.removeChild(o[t]), o.length ? e.insertBefore(l, o[t]) : e.appendChild(l)
			}
		}

		function m(e, t) {
			var a = t.css,
				n = t.media;
			if(n && e.setAttribute("media", n), e.styleSheet) e.styleSheet.cssText = a;
			else {
				for(; e.firstChild;) e.removeChild(e.firstChild);
				e.appendChild(document.createTextNode(a))
			}
		}

		function c(e, t) {
			var a = t.css,
				n = t.sourceMap;
			n && (a += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
			var r = new Blob([a], {
					type: "text/css"
				}),
				l = e.href;
			e.href = URL.createObjectURL(r), l && URL.revokeObjectURL(l)
		}
		var y = {},
			u = function(e) {
				var t;
				return function() {
					return "undefined" == typeof t && (t = e.apply(this, arguments)), t
				}
			},
			g = u(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
			}),
			f = u(function() {
				return document.head || document.getElementsByTagName("head")[0]
			}),
			v = null,
			h = 0,
			b = [];
		e.exports = function(e, t) {
			t = t || {}, "undefined" == typeof t.singleton && (t.singleton = g()), "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
			var a = r(e);
			return n(a, t),
				function(e) {
					for(var l = [], o = 0; o < a.length; o++) {
						var i = a[o],
							s = y[i.id];
						s.refs--, l.push(s)
					}
					if(e) {
						var d = r(e);
						n(d, t)
					}
					for(var o = 0; o < l.length; o++) {
						var s = l[o];
						if(0 === s.refs) {
							for(var p = 0; p < s.parts.length; p++) s.parts[p]();
							delete y[s.id]
						}
					}
				}
		};
		var x = function() {
			var e = [];
			return function(t, a) {
				return e[t] = a, e.filter(Boolean).join("\n")
			}
		}()
	}, function(e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		t.send = function(e, t) {
			var a = new XMLHttpRequest;
			a.onreadystatechange = function() {
				if(4 === a.readyState)
					if(a.status >= 200 && a.status < 300 || 304 === a.status) {
						var e = JSON.parse(a.responseText);
						1 !== e.code ? alert(e.msg) : console.log("Post danmaku: ", JSON.parse(a.responseText))
					} else console.log("Request was unsuccessful: " + a.status)
			}, a.open("post", e, !0), a.send(JSON.stringify(t))
		}, t.read = function(e, t) {
			var a = new XMLHttpRequest;
			a.onreadystatechange = function() {
				if(4 === a.readyState) {
					if(a.status >= 200 && a.status < 300 || 304 === a.status) {
						var e = JSON.parse(a.responseText);
						return 1 !== e.code ? t({
							status: a.status,
							response: e
						}) : t(null, e.danmaku)
					}
					return t({
						status: a.status,
						response: null
					})
				}
			}, a.open("get", e, !0), a.send(null)
		}
	}])
});
//# sourceMappingURL=DPlayer.min.js.map
