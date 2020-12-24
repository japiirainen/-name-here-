import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from '../Button';

export default {
	title: 'Sample / Button',
	component: Button,
};

export const withText: any = () => (
	<Button
		value={text('value', 'klikkaa minua')}
		onClickHandler={action('button-click')}
	/>
);

withText.story = {
	parameters: {
		jest: ['Button.test.tsx'],
	},
};
