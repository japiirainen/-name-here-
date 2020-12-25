import React from 'react'
import { SampleButton } from './styled'

export const Button: React.FC<{
	value: string
	onClickHandler: () => void
}> = ({ value, onClickHandler }) => (
	<SampleButton onClick={onClickHandler}>{value}</SampleButton>
)
