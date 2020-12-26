import React from 'react'
import { text } from '@storybook/addon-knobs'
import { useDisclosure } from '../UtilFns'
import { DropDownButton } from '.'

export default {
	title: 'DropDown',
	component: DropDownButton,
}

export const DropDownButtonStory: React.FC = () => {
	const { onToggle, isOpen } = useDisclosure()
	return (
		<div style={{ display: 'flex', margin: '20px' }}>
			<DropDownButton
				label={text('label', 'with chevron')}
				onToggle={onToggle}
				isOpen={isOpen}
				chevronRight={true}
			/>
			<DropDownButton
				label={text('label', 'without chevron')}
				onToggle={onToggle}
				isOpen={isOpen}
				chevronRight={false}
			/>
		</div>
	)
}

//@ts-ignore
DropDownButtonStory.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
}
