/* eslint-disable -- source esbuild bundle(react-dom@18.3.1/client) es2022 production  */
import * as __0$ from 'react-dom'
var require = (n) => {
	const e = (m) => (typeof m.default < 'u' ? m.default : m),
		c = (m) => Object.assign({ __esModule: true }, m)
	switch (n) {
		case 'react-dom':
			return e(__0$)
		default:
			throw new Error('module "' + n + '" not found')
	}
}
var d = Object.create
var u = Object.defineProperty
var E = Object.getOwnPropertyDescriptor
var m = Object.getOwnPropertyNames
var p = Object.getPrototypeOf,
	h = Object.prototype.hasOwnProperty
var x = ((t) =>
	typeof require < 'u'
		? require
		: typeof Proxy < 'u'
			? new Proxy(t, { get: (e, o) => (typeof require < 'u' ? require : e)[o] })
			: t)(function (t) {
	if (typeof require < 'u') return require.apply(this, arguments)
	throw Error('Dynamic require of "' + t + '" is not supported')
})
var C = (t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports),
	N = (t, e) => {
		for (var o in e) u(t, o, { get: e[o], enumerable: !0 })
	},
	a = (t, e, o, c) => {
		if ((e && typeof e == 'object') || typeof e == 'function')
			for (let i of m(e))
				!h.call(t, i) &&
					i !== o &&
					u(t, i, { get: () => e[i], enumerable: !(c = E(e, i)) || c.enumerable })
		return t
	},
	n = (t, e, o) => (a(t, e, 'default'), o && a(o, e, 'default')),
	l = (t, e, o) => (
		(o = t != null ? d(p(t)) : {}),
		a(e || !t || !t.__esModule ? u(o, 'default', { value: t, enumerable: !0 }) : o, t)
	)
var s = C((_) => {
	'use strict'
	var R = x('react-dom')
	;(_.createRoot = R.createRoot), (_.hydrateRoot = R.hydrateRoot)
	var I
})
var r = {}
N(r, { createRoot: () => O, default: () => v, hydrateRoot: () => g })
var y = l(s())
n(r, l(s()))
var { createRoot: O, hydrateRoot: g } = y,
	{ default: f, ...P } = y,
	v = f !== void 0 ? f : P
export { O as createRoot, v as default, g as hydrateRoot }
//# sourceMappingURL=client.js.map
