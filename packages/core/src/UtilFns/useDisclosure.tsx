import { useState, useCallback } from 'react'

export const useDisclosure = (): {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
	onToggle: () => void
} => {
	const [isOpen, setIsOpen] = useState(false)
	const onClose = useCallback(() => setIsOpen(false), [])
	const onOpen = useCallback(() => setIsOpen(true), [])
	const onToggle = useCallback(
		() => setIsOpen((prevIsOpen) => !prevIsOpen),
		[]
	)
	return { isOpen, onOpen, onClose, onToggle }
}
