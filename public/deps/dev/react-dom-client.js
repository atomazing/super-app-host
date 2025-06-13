/* eslint-disable -- custom bundle(react-dom@18.3.1/client) es2022 development */
'use strict'

import m from 'react-dom'
var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
var createRoot = function (c, o) {
	i.usingClientEntryPoint = true
	try {
		return m.createRoot(c, o)
	} finally {
		i.usingClientEntryPoint = false
	}
}
var hydrateRoot = function (c, h, o) {
	i.usingClientEntryPoint = true
	try {
		return m.hydrateRoot(c, h, o)
	} finally {
		i.usingClientEntryPoint = false
	}
}

export { createRoot, hydrateRoot }
