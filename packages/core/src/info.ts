import { assertNever } from './util.js'

export type KeyId = string

export enum BlackmagicControllerModelId {
	AtemMicroPanel = 'atem-micro-panel',
	DaVinciResolveReplayEditor = 'davinci-resolve-replay-editor',
	DaVinciResolveSpeedEditor = 'davinci-resolve-speed-editor',
}

export function getBlackmagicControllerName(modelId: BlackmagicControllerModelId): string {
	switch (modelId) {
		case BlackmagicControllerModelId.AtemMicroPanel:
			return 'ATEM Micro Panel'
		case BlackmagicControllerModelId.DaVinciResolveReplayEditor:
			return 'DaVinci Resolve Replay Editor'
		case BlackmagicControllerModelId.DaVinciResolveSpeedEditor:
			return 'DaVinci Resolve Speed Editor'
		default:
			assertNever(modelId)
			return 'Unknown Blackmagic Controller'
	}
}
