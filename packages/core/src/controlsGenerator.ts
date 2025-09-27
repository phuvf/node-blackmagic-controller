import type { BlackmagicControllerControlDefinition } from './controlDefinition.js'

export function freezeDefinitions(
	controls: BlackmagicControllerControlDefinition[],
): Readonly<BlackmagicControllerControlDefinition[]> {
	const seenIds = new Set<string>()
	for (const control of controls) {
		const id = `${control.type}:${control.id}`
		if (seenIds.has(id)) {
			throw new Error(`Duplicate control id "${id}"`)
		}
		seenIds.add(id)
	}

	return Object.freeze(controls.map((control) => Object.freeze(control)))
}

export function createRgbButtonDefinition(
	row: number,
	column: number,
	id: string,
	encodedIndex: number,
	ledBitIndex: number,
): BlackmagicControllerControlDefinition {
	return {
		type: 'button',
		row,
		column,
		id,
		encodedIndex,
		feedbackType: 'rgb',
		ledBitIndex,
	}
}

export function createBasicButtonDefinition(
	row: number,
	column: number,
	id: string,
	encodedIndex: number,
	ledBitIndex: number | null,
): BlackmagicControllerControlDefinition {
	return {
		type: 'button',
		row,
		column,
		id,
		encodedIndex,
		feedbackType: ledBitIndex != null ? 'on-off' : 'none',
		ledBitIndex: ledBitIndex ?? 0,
	}
}
