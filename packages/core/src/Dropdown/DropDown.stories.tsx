import React from 'react'
import { text } from '@storybook/addon-knobs'
import { useDisclosure } from '../UtilFns'
import { DropDownButton } from '.'
import { NameHereProvider } from '../Theming'

export default {
	title: 'DropDown',
	component: DropDownButton,
}

export const DropDownButtonWithChevron: React.FC = () => {
	const { onToggle, isOpen } = useDisclosure()
	return (
		<NameHereProvider>
			<DropDownButton
				label={text('label', 'DropDownButton')}
				onToggle={onToggle}
				isOpen={isOpen}
				chevronRight={true}
			/>
		</NameHereProvider>
	)
}

export const DropDownButtonNoChevron: React.FC = () => {
	const { onToggle, isOpen } = useDisclosure()
	return (
		<NameHereProvider>
			<DropDownButton
				label={text('label', 'WithoutChevron')}
				onToggle={onToggle}
				isOpen={isOpen}
				chevronRight={false}
			/>
		</NameHereProvider>
	)
}

//@ts-ignore
DropDownButtonWithChevron.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
}
//@ts-ignore
DropDownButtonNoChevron.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
}
