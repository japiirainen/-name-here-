import React from 'react'
import { DdButtton, DdButtonContainer } from './styled'
import { ChevronDown, ChevronRight } from '../Icons'

export interface DropDownButtonProps {
	onToggle: () => void
	label: string
	chevronRight?: boolean
	isOpen: boolean
}

export const DropDownButton: React.FC<DropDownButtonProps> = ({
	isOpen,
	label,
	onToggle,
	chevronRight,
}) => {
	const chevron = chevronRight ? (
		isOpen ? (
			<ChevronDown />
		) : (
			<ChevronRight />
		)
	) : (
		<></>
	)
	const rightIcon = chevron
	return (
		<DdButtton onClick={onToggle}>
			<DdButtonContainer>
				{label}
				{rightIcon}
			</DdButtonContainer>
		</DdButtton>
	)
}

// interface DropDownIconButtonProps {
// 	icon: JSX.Element
// }

// export const DropDownIconButton: React.FC<DropDownIconButtonProps> = ({
// 	icon,
// 	onToggle,
// }) => {
// 	return (
// 		<>
// 			<button className={s.puheetsvgiconbutton} onClick={onToggle}>
// 				<svg className={cx('puheet-svg-icon')}>
// 					<use href={`#icon-${icon}`}></use>
// 				</svg>
// 			</button>
// 			{icon === 'envelope' && <MessagesBubble />}
// 		</>
// 	)
// }
