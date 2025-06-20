/* eslint-disable -- esbuild bundle(scheduler@0.23.2) es2022 production */
var __setImmediate$ = (cb, ...args) => setTimeout(cb, 0, ...args)
var ee = Object.create
var T = Object.defineProperty
var ne = Object.getOwnPropertyDescriptor
var te = Object.getOwnPropertyNames
var re = Object.getPrototypeOf,
	le = Object.prototype.hasOwnProperty
var W = (e, n) => () => (n || e((n = { exports: {} }).exports, n), n.exports),
	ie = (e, n) => {
		for (var t in n) T(e, t, { get: n[t], enumerable: !0 })
	},
	E = (e, n, t, l) => {
		if ((n && typeof n == 'object') || typeof n == 'function')
			for (let i of te(n))
				!le.call(e, i) &&
					i !== t &&
					T(e, i, { get: () => n[i], enumerable: !(l = ne(n, i)) || l.enumerable })
		return e
	},
	d = (e, n, t) => (E(e, n, 'default'), t && E(t, n, 'default')),
	Y = (e, n, t) => (
		(t = e != null ? ee(re(e)) : {}),
		E(n || !e || !e.__esModule ? T(t, 'default', { value: e, enumerable: !0 }) : t, e)
	)
var U = W((r) => {
	'use strict'
	function M(e, n) {
		var t = e.length
		e.push(n)
		e: for (; 0 < t; ) {
			var l = (t - 1) >>> 1,
				i = e[l]
			if (0 < k(i, n)) (e[l] = n), (e[t] = i), (t = l)
			else break e
		}
	}
	function o(e) {
		return e.length === 0 ? null : e[0]
	}
	function w(e) {
		if (e.length === 0) return null
		var n = e[0],
			t = e.pop()
		if (t !== n) {
			e[0] = t
			e: for (var l = 0, i = e.length, g = i >>> 1; l < g; ) {
				var b = 2 * (l + 1) - 1,
					C = e[b],
					_ = b + 1,
					h = e[_]
				if (0 > k(C, t))
					_ < i && 0 > k(h, C)
						? ((e[l] = h), (e[_] = t), (l = _))
						: ((e[l] = C), (e[b] = t), (l = b))
				else if (_ < i && 0 > k(h, t)) (e[l] = h), (e[_] = t), (l = _)
				else break e
			}
		}
		return n
	}
	function k(e, n) {
		var t = e.sortIndex - n.sortIndex
		return t !== 0 ? t : e.id - n.id
	}
	typeof performance == 'object' && typeof performance.now == 'function'
		? ((z = performance),
			(r.unstable_now = function () {
				return z.now()
			}))
		: ((L = Date),
			(A = L.now()),
			(r.unstable_now = function () {
				return L.now() - A
			}))
	var z,
		L,
		A,
		s = [],
		c = [],
		ue = 1,
		a = null,
		u = 3,
		x = !1,
		p = !1,
		y = !1,
		J = typeof setTimeout == 'function' ? setTimeout : null,
		K = typeof clearTimeout == 'function' ? clearTimeout : null,
		G = typeof __setImmediate$ < 'u' ? __setImmediate$ : null
	typeof navigator < 'u' &&
		navigator.scheduling !== void 0 &&
		navigator.scheduling.isInputPending !== void 0 &&
		navigator.scheduling.isInputPending.bind(navigator.scheduling)
	function j(e) {
		for (var n = o(c); n !== null; ) {
			if (n.callback === null) w(c)
			else if (n.startTime <= e) w(c), (n.sortIndex = n.expirationTime), M(s, n)
			else break
			n = o(c)
		}
	}
	function R(e) {
		if (((y = !1), j(e), !p))
			if (o(s) !== null) (p = !0), D(B)
			else {
				var n = o(c)
				n !== null && q(R, n.startTime - e)
			}
	}
	function B(e, n) {
		;(p = !1), y && ((y = !1), K(m), (m = -1)), (x = !0)
		var t = u
		try {
			for (j(n), a = o(s); a !== null && (!(a.expirationTime > n) || (e && !V())); ) {
				var l = a.callback
				if (typeof l == 'function') {
					;(a.callback = null), (u = a.priorityLevel)
					var i = l(a.expirationTime <= n)
					;(n = r.unstable_now()),
						typeof i == 'function' ? (a.callback = i) : a === o(s) && w(s),
						j(n)
				} else w(s)
				a = o(s)
			}
			if (a !== null) var g = !0
			else {
				var b = o(c)
				b !== null && q(R, b.startTime - n), (g = !1)
			}
			return g
		} finally {
			;(a = null), (u = t), (x = !1)
		}
	}
	var I = !1,
		P = null,
		m = -1,
		Q = 5,
		S = -1
	function V() {
		return !(r.unstable_now() - S < Q)
	}
	function N() {
		if (P !== null) {
			var e = r.unstable_now()
			S = e
			var n = !0
			try {
				n = P(!0, e)
			} finally {
				n ? v() : ((I = !1), (P = null))
			}
		} else I = !1
	}
	var v
	typeof G == 'function'
		? (v = function () {
				G(N)
			})
		: typeof MessageChannel < 'u'
			? ((F = new MessageChannel()),
				(H = F.port2),
				(F.port1.onmessage = N),
				(v = function () {
					H.postMessage(null)
				}))
			: (v = function () {
					J(N, 0)
				})
	var F, H
	function D(e) {
		;(P = e), I || ((I = !0), v())
	}
	function q(e, n) {
		m = J(function () {
			e(r.unstable_now())
		}, n)
	}
	r.unstable_IdlePriority = 5
	r.unstable_ImmediatePriority = 1
	r.unstable_LowPriority = 4
	r.unstable_NormalPriority = 3
	r.unstable_Profiling = null
	r.unstable_UserBlockingPriority = 2
	r.unstable_cancelCallback = function (e) {
		e.callback = null
	}
	r.unstable_continueExecution = function () {
		p || x || ((p = !0), D(B))
	}
	r.unstable_forceFrameRate = function (e) {
		0 > e || 125 < e
			? console.error(
					'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
				)
			: (Q = 0 < e ? Math.floor(1e3 / e) : 5)
	}
	r.unstable_getCurrentPriorityLevel = function () {
		return u
	}
	r.unstable_getFirstCallbackNode = function () {
		return o(s)
	}
	r.unstable_next = function (e) {
		switch (u) {
			case 1:
			case 2:
			case 3:
				var n = 3
				break
			default:
				n = u
		}
		var t = u
		u = n
		try {
			return e()
		} finally {
			u = t
		}
	}
	r.unstable_pauseExecution = function () {}
	r.unstable_requestPaint = function () {}
	r.unstable_runWithPriority = function (e, n) {
		switch (e) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				break
			default:
				e = 3
		}
		var t = u
		u = e
		try {
			return n()
		} finally {
			u = t
		}
	}
	r.unstable_scheduleCallback = function (e, n, t) {
		var l = r.unstable_now()
		switch (
			(typeof t == 'object' && t !== null
				? ((t = t.delay), (t = typeof t == 'number' && 0 < t ? l + t : l))
				: (t = l),
			e)
		) {
			case 1:
				var i = -1
				break
			case 2:
				i = 250
				break
			case 5:
				i = 1073741823
				break
			case 4:
				i = 1e4
				break
			default:
				i = 5e3
		}
		return (
			(i = t + i),
			(e = {
				id: ue++,
				callback: n,
				priorityLevel: e,
				startTime: t,
				expirationTime: i,
				sortIndex: -1,
			}),
			t > l
				? ((e.sortIndex = t),
					M(c, e),
					o(s) === null && e === o(c) && (y ? (K(m), (m = -1)) : (y = !0), q(R, t - l)))
				: ((e.sortIndex = i), M(s, e), p || x || ((p = !0), D(B))),
			e
		)
	}
	r.unstable_shouldYield = V
	r.unstable_wrapCallback = function (e) {
		var n = u
		return function () {
			var t = u
			u = n
			try {
				return e.apply(this, arguments)
			} finally {
				u = t
			}
		}
	}
})
var O = W((Ne, X) => {
	'use strict'
	X.exports = U()
})
var f = {}
ie(f, {
	default: () => Ee,
	unstable_IdlePriority: () => oe,
	unstable_ImmediatePriority: () => se,
	unstable_LowPriority: () => ce,
	unstable_NormalPriority: () => fe,
	unstable_Profiling: () => be,
	unstable_UserBlockingPriority: () => _e,
	unstable_cancelCallback: () => de,
	unstable_continueExecution: () => pe,
	unstable_forceFrameRate: () => ve,
	unstable_getCurrentPriorityLevel: () => ye,
	unstable_getFirstCallbackNode: () => me,
	unstable_next: () => ge,
	unstable_now: () => ae,
	unstable_pauseExecution: () => he,
	unstable_requestPaint: () => ke,
	unstable_runWithPriority: () => Pe,
	unstable_scheduleCallback: () => we,
	unstable_shouldYield: () => xe,
	unstable_wrapCallback: () => Ie,
})
var $ = Y(O())
d(f, Y(O()))
var {
		unstable_now: ae,
		unstable_IdlePriority: oe,
		unstable_ImmediatePriority: se,
		unstable_LowPriority: ce,
		unstable_NormalPriority: fe,
		unstable_Profiling: be,
		unstable_UserBlockingPriority: _e,
		unstable_cancelCallback: de,
		unstable_continueExecution: pe,
		unstable_forceFrameRate: ve,
		unstable_getCurrentPriorityLevel: ye,
		unstable_getFirstCallbackNode: me,
		unstable_next: ge,
		unstable_pauseExecution: he,
		unstable_requestPaint: ke,
		unstable_runWithPriority: Pe,
		unstable_scheduleCallback: we,
		unstable_shouldYield: xe,
		unstable_wrapCallback: Ie,
	} = $,
	{ default: Z, ...Ce } = $,
	Ee = Z !== void 0 ? Z : Ce
export {
	Ee as default,
	oe as unstable_IdlePriority,
	se as unstable_ImmediatePriority,
	ce as unstable_LowPriority,
	fe as unstable_NormalPriority,
	be as unstable_Profiling,
	_e as unstable_UserBlockingPriority,
	de as unstable_cancelCallback,
	pe as unstable_continueExecution,
	ve as unstable_forceFrameRate,
	ye as unstable_getCurrentPriorityLevel,
	me as unstable_getFirstCallbackNode,
	ge as unstable_next,
	ae as unstable_now,
	he as unstable_pauseExecution,
	ke as unstable_requestPaint,
	Pe as unstable_runWithPriority,
	we as unstable_scheduleCallback,
	xe as unstable_shouldYield,
	Ie as unstable_wrapCallback,
}
