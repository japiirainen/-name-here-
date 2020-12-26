// import { TFunctionResult } from 'i18next'
// import React from 'react'
// import { ChevronDown, ChevronRight } from './DropDownButton'
// import s from './dropdown.module.css'
// import cx from 'classnames'

// interface DropDownItemProps {
// 	label: string | TFunctionResult
// 	href?: string
// 	onClick?: () => void
// 	chevronRight?: boolean
// 	isOpen?: boolean
// }

// export const DropDownItem: React.FC<DropDownItemProps> = ({
// 	href,
// 	label,
// 	onClick,
// 	chevronRight,
// 	isOpen,
// }) => {
// 	const chevron = isOpen ? (
// 		<ChevronDown ml={'auto'} mt={7} />
// 	) : (
// 		<ChevronRight ml={'auto'} mt={7} />
// 	)

// 	return (
// 		<a
// 			className={cx(s.puheetdropdownitem, isOpen && s.dditemopen)}
// 			href={href ? href : '#'}
// 			onClick={onClick}
// 		>
// 			{label}
// 			{chevronRight ? chevron : <></>}
// 		</a>
// 	)
// }
