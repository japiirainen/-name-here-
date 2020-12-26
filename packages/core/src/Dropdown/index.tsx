import { DropDownButton } from './DropDownButton'

// interface DropDownProps {
// 	position:
// 		| 'bottom'
// 		| 'bottom-right'
// 		| 'bottom-left'
// 		| 'bottom-slightly-left'
// 		| 'right'
// 	button: JSX.Element
// 	isOpen: boolean
// 	onClose: () => void
// 	onToggle?: () => void
// 	label?: string
// }

// export const DropDown: React.FC<DropDownProps> = ({
// 	position,
// 	button,
// 	isOpen,
// 	onClose,
// 	children,
// 	onToggle,
// }) => {
// 	const pos =
// 		position === 'bottom'
// 			? s.bottom
// 			: position === 'bottom-left'
// 			? s.bottomleft
// 			: position === 'bottom-right'
// 			? s.bottomright
// 			: position === 'bottom-slightly-left'
// 			? s.bottomslightlyleft
// 			: position === 'right'
// 			? s.right
// 			: 'foo'

// 	if (onToggle) {
// 		return (
// 			<div onMouseEnter={onToggle} onMouseLeave={onToggle} className="foo">
// 				<DropDownWrapper onClose={onClose}>
// 					{button}
// 					<div
// 						className={cx(
// 							s.puheetdropdown,
// 							pos,
// 							isOpen ? s.open : s.closed
// 						)}
// 					>
// 						{children}
// 					</div>
// 				</DropDownWrapper>
// 			</div>
// 		)
// 	}
// 	return (
// 		<DropDownWrapper onClose={onClose}>
// 			{button}
// 			<div className={cx(s.puheetdropdown, pos, isOpen ? s.open : s.closed)}>
// 				{children}
// 			</div>
// 		</DropDownWrapper>
// 	)
// }

export { DropDownButton }
