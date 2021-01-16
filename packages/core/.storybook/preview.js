import { addParameters, addDecorator } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { withTests } from '@storybook/addon-jest'
import { withInfo } from '@storybook/addon-info'
import results from '../.jest-test-results.json'
import { darkTheme, lightTheme } from '../themes'

export const getAllThemes = () => {
	return [lightTheme, darkTheme]
}

addDecorator(withThemesProvider(getAllThemes()))

addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(withInfo)
addDecorator(
	withTests({
		results,
	})
)

addParameters({
	options: {
		brandTitle: 'Awesome component library',
		brandUrl: 'https://github.com/japiirainen/react-jp',
		showRoots: true,
	},
})
