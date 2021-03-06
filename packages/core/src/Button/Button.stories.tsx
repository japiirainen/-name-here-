import React from 'react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'
import { Button } from '.'

export default {
	title: 'Button',
	component: Button,
}

export const withText: any = () => (
	<Button
		value={text('value', 'click me')}
		onClickHandler={action('button-click')}
	/>
)

withText.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
}
