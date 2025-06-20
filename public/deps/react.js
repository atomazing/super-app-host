/* eslint-disable -- source esbuild bundle(react@18.3.1) es2022 production */
var B = Object.create
var E = Object.defineProperty
var H = Object.getOwnPropertyDescriptor
var W = Object.getOwnPropertyNames
var Y = Object.getPrototypeOf,
	G = Object.prototype.hasOwnProperty
var x = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
	J = (e, t) => {
		for (var r in t) E(e, r, { get: t[r], enumerable: !0 })
	},
	S = (e, t, r, u) => {
		if ((t && typeof t == 'object') || typeof t == 'function')
			for (let o of W(t))
				!G.call(e, o) &&
					o !== r &&
					E(e, o, { get: () => t[o], enumerable: !(u = H(t, o)) || u.enumerable })
		return e
	},
	y = (e, t, r) => (S(e, t, 'default'), r && S(r, t, 'default')),
	O = (e, t, r) => (
		(r = e != null ? B(Y(e)) : {}),
		S(t || !e || !e.__esModule ? E(r, 'default', { value: e, enumerable: !0 }) : r, e)
	)
var q = x((n) => {
	'use strict'
	var _ = Symbol.for('react.element'),
		K = Symbol.for('react.portal'),
		Q = Symbol.for('react.fragment'),
		X = Symbol.for('react.strict_mode'),
		Z = Symbol.for('react.profiler'),
		ee = Symbol.for('react.provider'),
		te = Symbol.for('react.context'),
		re = Symbol.for('react.forward_ref'),
		ne = Symbol.for('react.suspense'),
		oe = Symbol.for('react.memo'),
		ue = Symbol.for('react.lazy'),
		j = Symbol.iterator
	function se(e) {
		return e === null || typeof e != 'object'
			? null
			: ((e = (j && e[j]) || e['@@iterator']), typeof e == 'function' ? e : null)
	}
	var P = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {},
		},
		T = Object.assign,
		D = {}
	function d(e, t, r) {
		;(this.props = e), (this.context = t), (this.refs = D), (this.updater = r || P)
	}
	d.prototype.isReactComponent = {}
	d.prototype.setState = function (e, t) {
		if (typeof e != 'object' && typeof e != 'function' && e != null)
			throw Error(
				'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
			)
		this.updater.enqueueSetState(this, e, t, 'setState')
	}
	d.prototype.forceUpdate = function (e) {
		this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
	}
	function V() {}
	V.prototype = d.prototype
	function C(e, t, r) {
		;(this.props = e), (this.context = t), (this.refs = D), (this.updater = r || P)
	}
	var k = (C.prototype = new V())
	k.constructor = C
	T(k, d.prototype)
	k.isPureReactComponent = !0
	var I = Array.isArray,
		L = Object.prototype.hasOwnProperty,
		w = { current: null },
		N = { key: !0, ref: !0, __self: !0, __source: !0 }
	function F(e, t, r) {
		var u,
			o = {},
			c = null,
			f = null
		if (t != null)
			for (u in (t.ref !== void 0 && (f = t.ref), t.key !== void 0 && (c = '' + t.key), t))
				L.call(t, u) && !N.hasOwnProperty(u) && (o[u] = t[u])
		var i = arguments.length - 2
		if (i === 1) o.children = r
		else if (1 < i) {
			for (var s = Array(i), a = 0; a < i; a++) s[a] = arguments[a + 2]
			o.children = s
		}
		if (e && e.defaultProps) for (u in ((i = e.defaultProps), i)) o[u] === void 0 && (o[u] = i[u])
		return { $$typeof: _, type: e, key: c, ref: f, props: o, _owner: w.current }
	}
	function ce(e, t) {
		return { $$typeof: _, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner }
	}
	function b(e) {
		return typeof e == 'object' && e !== null && e.$$typeof === _
	}
	function ie(e) {
		var t = { '=': '=0', ':': '=2' }
		return (
			'$' +
			e.replace(/[=:]/g, function (r) {
				return t[r]
			})
		)
	}
	var g = /\/+/g
	function R(e, t) {
		return typeof e == 'object' && e !== null && e.key != null ? ie('' + e.key) : t.toString(36)
	}
	function h(e, t, r, u, o) {
		var c = typeof e
		;(c === 'undefined' || c === 'boolean') && (e = null)
		var f = !1
		if (e === null) f = !0
		else
			switch (c) {
				case 'string':
				case 'number':
					f = !0
					break
				case 'object':
					switch (e.$$typeof) {
						case _:
						case K:
							f = !0
					}
			}
		if (f)
			return (
				(f = e),
				(o = o(f)),
				(e = u === '' ? '.' + R(f, 0) : u),
				I(o)
					? ((r = ''),
						e != null && (r = e.replace(g, '$&/') + '/'),
						h(o, t, r, '', function (a) {
							return a
						}))
					: o != null &&
						(b(o) &&
							(o = ce(
								o,
								r +
									(!o.key || (f && f.key === o.key) ? '' : ('' + o.key).replace(g, '$&/') + '/') +
									e,
							)),
						t.push(o)),
				1
			)
		if (((f = 0), (u = u === '' ? '.' : u + ':'), I(e)))
			for (var i = 0; i < e.length; i++) {
				c = e[i]
				var s = u + R(c, i)
				f += h(c, t, r, s, o)
			}
		else if (((s = se(e)), typeof s == 'function'))
			for (e = s.call(e), i = 0; !(c = e.next()).done; )
				(c = c.value), (s = u + R(c, i++)), (f += h(c, t, r, s, o))
		else if (c === 'object')
			throw (
				((t = String(e)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
						'). If you meant to render a collection of children, use an array instead.',
				))
			)
		return f
	}
	function m(e, t, r) {
		if (e == null) return e
		var u = [],
			o = 0
		return (
			h(e, u, '', '', function (c) {
				return t.call(r, c, o++)
			}),
			u
		)
	}
	function fe(e) {
		if (e._status === -1) {
			var t = e._result
			;(t = t()),
				t.then(
					function (r) {
						;(e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = r))
					},
					function (r) {
						;(e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = r))
					},
				),
				e._status === -1 && ((e._status = 0), (e._result = t))
		}
		if (e._status === 1) return e._result.default
		throw e._result
	}
	var l = { current: null },
		v = { transition: null },
		le = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: v, ReactCurrentOwner: w }
	function U() {
		throw Error('act(...) is not supported in production builds of React.')
	}
	n.Children = {
		map: m,
		forEach: function (e, t, r) {
			m(
				e,
				function () {
					t.apply(this, arguments)
				},
				r,
			)
		},
		count: function (e) {
			var t = 0
			return (
				m(e, function () {
					t++
				}),
				t
			)
		},
		toArray: function (e) {
			return (
				m(e, function (t) {
					return t
				}) || []
			)
		},
		only: function (e) {
			if (!b(e))
				throw Error('React.Children.only expected to receive a single React element child.')
			return e
		},
	}
	n.Component = d
	n.Fragment = Q
	n.Profiler = Z
	n.PureComponent = C
	n.StrictMode = X
	n.Suspense = ne
	n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le
	n.act = U
	n.cloneElement = function (e, t, r) {
		if (e == null)
			throw Error(
				'React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.',
			)
		var u = T({}, e.props),
			o = e.key,
			c = e.ref,
			f = e._owner
		if (t != null) {
			if (
				(t.ref !== void 0 && ((c = t.ref), (f = w.current)),
				t.key !== void 0 && (o = '' + t.key),
				e.type && e.type.defaultProps)
			)
				var i = e.type.defaultProps
			for (s in t)
				L.call(t, s) &&
					!N.hasOwnProperty(s) &&
					(u[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s])
		}
		var s = arguments.length - 2
		if (s === 1) u.children = r
		else if (1 < s) {
			i = Array(s)
			for (var a = 0; a < s; a++) i[a] = arguments[a + 2]
			u.children = i
		}
		return { $$typeof: _, type: e.type, key: o, ref: c, props: u, _owner: f }
	}
	n.createContext = function (e) {
		return (
			(e = {
				$$typeof: te,
				_currentValue: e,
				_currentValue2: e,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
				_defaultValue: null,
				_globalName: null,
			}),
			(e.Provider = { $$typeof: ee, _context: e }),
			(e.Consumer = e)
		)
	}
	n.createElement = F
	n.createFactory = function (e) {
		var t = F.bind(null, e)
		return (t.type = e), t
	}
	n.createRef = function () {
		return { current: null }
	}
	n.forwardRef = function (e) {
		return { $$typeof: re, render: e }
	}
	n.isValidElement = b
	n.lazy = function (e) {
		return { $$typeof: ue, _payload: { _status: -1, _result: e }, _init: fe }
	}
	n.memo = function (e, t) {
		return { $$typeof: oe, type: e, compare: t === void 0 ? null : t }
	}
	n.startTransition = function (e) {
		var t = v.transition
		v.transition = {}
		try {
			e()
		} finally {
			v.transition = t
		}
	}
	n.unstable_act = U
	n.useCallback = function (e, t) {
		return l.current.useCallback(e, t)
	}
	n.useContext = function (e) {
		return l.current.useContext(e)
	}
	n.useDebugValue = function () {}
	n.useDeferredValue = function (e) {
		return l.current.useDeferredValue(e)
	}
	n.useEffect = function (e, t) {
		return l.current.useEffect(e, t)
	}
	n.useId = function () {
		return l.current.useId()
	}
	n.useImperativeHandle = function (e, t, r) {
		return l.current.useImperativeHandle(e, t, r)
	}
	n.useInsertionEffect = function (e, t) {
		return l.current.useInsertionEffect(e, t)
	}
	n.useLayoutEffect = function (e, t) {
		return l.current.useLayoutEffect(e, t)
	}
	n.useMemo = function (e, t) {
		return l.current.useMemo(e, t)
	}
	n.useReducer = function (e, t, r) {
		return l.current.useReducer(e, t, r)
	}
	n.useRef = function (e) {
		return l.current.useRef(e)
	}
	n.useState = function (e) {
		return l.current.useState(e)
	}
	n.useSyncExternalStore = function (e, t, r) {
		return l.current.useSyncExternalStore(e, t, r)
	}
	n.useTransition = function () {
		return l.current.useTransition()
	}
	n.version = '18.3.1'
})
var $ = x((Qe, A) => {
	'use strict'
	A.exports = q()
})
var p = {}
J(p, {
	Children: () => ae,
	Component: () => pe,
	Fragment: () => ye,
	Profiler: () => de,
	PureComponent: () => _e,
	StrictMode: () => me,
	Suspense: () => he,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: () => ve,
	act: () => Se,
	cloneElement: () => Ee,
	createContext: () => Re,
	createElement: () => Ce,
	createFactory: () => ke,
	createRef: () => we,
	default: () => Ge,
	forwardRef: () => be,
	isValidElement: () => $e,
	lazy: () => xe,
	memo: () => Oe,
	startTransition: () => je,
	unstable_act: () => Ie,
	useCallback: () => ge,
	useContext: () => Pe,
	useDebugValue: () => Te,
	useDeferredValue: () => De,
	useEffect: () => Ve,
	useId: () => Le,
	useImperativeHandle: () => Ne,
	useInsertionEffect: () => Fe,
	useLayoutEffect: () => Ue,
	useMemo: () => qe,
	useReducer: () => Ae,
	useRef: () => Me,
	useState: () => ze,
	useSyncExternalStore: () => Be,
	useTransition: () => He,
	version: () => We,
})
var z = O($())
y(p, O($()))
var {
		Children: ae,
		Component: pe,
		Fragment: ye,
		Profiler: de,
		PureComponent: _e,
		StrictMode: me,
		Suspense: he,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ve,
		act: Se,
		cloneElement: Ee,
		createContext: Re,
		createElement: Ce,
		createFactory: ke,
		createRef: we,
		forwardRef: be,
		isValidElement: $e,
		lazy: xe,
		memo: Oe,
		startTransition: je,
		unstable_act: Ie,
		useCallback: ge,
		useContext: Pe,
		useDebugValue: Te,
		useDeferredValue: De,
		useEffect: Ve,
		useId: Le,
		useImperativeHandle: Ne,
		useInsertionEffect: Fe,
		useLayoutEffect: Ue,
		useMemo: qe,
		useReducer: Ae,
		useRef: Me,
		useState: ze,
		useSyncExternalStore: Be,
		useTransition: He,
		version: We,
	} = z,
	{ default: M, ...Ye } = z,
	Ge = M !== void 0 ? M : Ye
export {
	ae as Children,
	pe as Component,
	ye as Fragment,
	de as Profiler,
	_e as PureComponent,
	me as StrictMode,
	he as Suspense,
	ve as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	Se as act,
	Ee as cloneElement,
	Re as createContext,
	Ce as createElement,
	ke as createFactory,
	we as createRef,
	Ge as default,
	be as forwardRef,
	$e as isValidElement,
	xe as lazy,
	Oe as memo,
	je as startTransition,
	Ie as unstable_act,
	ge as useCallback,
	Pe as useContext,
	Te as useDebugValue,
	De as useDeferredValue,
	Ve as useEffect,
	Le as useId,
	Ne as useImperativeHandle,
	Fe as useInsertionEffect,
	Ue as useLayoutEffect,
	qe as useMemo,
	Ae as useReducer,
	Me as useRef,
	ze as useState,
	Be as useSyncExternalStore,
	He as useTransition,
	We as version,
}
