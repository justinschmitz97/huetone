import { atom, computed } from 'nanostores'
import { clamp } from 'shared/utils'
import { paletteStore } from './palette'

export type TPosition = [number, number]

const currentPositionStore = atom<TPosition | null>(null)

// Function to set the selected position
export const setSelected = (position: TPosition) => {
  currentPositionStore.set(position)
}

// Computed store for the selected color data based on current position and palette
export const selectedStore = computed(
  [currentPositionStore, paletteStore],
  (position, palette) => {
    let hueId = 0
    let toneId = 0

    if (!position) {
      // If no current position, select the middle of the palette
      hueId = Math.floor(palette.hues.length / 2)
      toneId = Math.floor(palette.tones.length / 2)
    } else {
      // Ensure current position isn't outside the palette bounds
      hueId = clamp(position[0], 0, palette.hues.length - 1)
      toneId = clamp(position[1], 0, palette.tones.length - 1)
    }

    const color = palette.colors[hueId][toneId]
    return { hueId, toneId, color }
  }
)
