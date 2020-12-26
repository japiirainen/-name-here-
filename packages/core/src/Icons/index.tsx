/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
//@ts-ignore
import chevronRight from './right-chevron.svg'
//@ts-ignore
import chevronDown from './down-chevron.svg'

export interface ChevronProps {
	ml?: string | number
	mt?: string | number
}

export const ChevronRight: React.FC<ChevronProps> = ({ ml = 5, mt = 0 }) => {
	return (
		<img
			style={{ height: 10, width: 20, marginLeft: ml, marginTop: mt }}
			src={chevronRight}
			alt="chevron-rignt-icon"
		/>
	)
}
export const ChevronDown: React.FC<ChevronProps> = ({ ml = 5, mt = 0 }) => {
	return (
		<img
			style={{ height: 10, width: 20, marginLeft: ml, marginTop: mt }}
			src={chevronDown}
			alt="chevron-down-icon"
		/>
	)
}
