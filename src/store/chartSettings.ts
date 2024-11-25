import { persistentMap } from '@nanostores/persistent'

export type TSettings = {
  showColors: boolean
  showP3: boolean
  showRec2020: boolean
}

export const chartSettingsStore = persistentMap<TSettings>(
  'settings:',
  {
    showColors: false,
    showP3: false,
    showRec2020: false,
  },
  { encode: JSON.stringify, decode: JSON.parse }
)

const toggleSetting = (key: keyof TSettings) => {
  chartSettingsStore.setKey(key, !chartSettingsStore.get()[key])
}

export const toggleShowColors = () => toggleSetting('showColors')
export const toggleShowP3 = () => toggleSetting('showP3')
export const toggleShowRec2020 = () => toggleSetting('showRec2020')
