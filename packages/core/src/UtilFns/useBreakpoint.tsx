import { useState, useEffect } from 'react'
import { throttle } from './throttle'

const getDeviceConfig = (width: number) => {
	if (width < 900) {
		return 'sm'
	} else if (width >= 900) {
		return 'md'
	}
}

export const useBreakpoint = () => {
	const [brkPnt, setBrkPnt] = useState(() =>
		getDeviceConfig(window.innerWidth)
	)

	useEffect(() => {
		const calcInnerWidth = throttle(
			function () {
				setBrkPnt(getDeviceConfig(window.innerWidth))
			},
			200,
			null
		)
		window.addEventListener('resize', calcInnerWidth)
		return () => window.removeEventListener('resize', calcInnerWidth)
	}, [])

	return brkPnt
}
