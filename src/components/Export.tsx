import { FC, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { useStore } from '@nanostores/react'
import { exportToHexPalette, parseHexPalette } from 'store/palette'
import { paletteStore, setPalette } from 'store/palette'
import { TextArea } from './inputs'

export const ExportField: FC = () => {
  const palette = useStore(paletteStore)
  const ref = useRef<any>()
  const [areaValue, setAreaValue] = useState('')
  const currentJSON = JSON.stringify(exportToHexPalette(palette), null, 2)

  useEffect(() => {
    if (document.activeElement !== ref.current) {
      const newPaletteJson = currentJSON
      setAreaValue(newPaletteJson)
    }
  }, [currentJSON])

  return (
    <JSONArea
      ref={ref}
      onBlur={() => setAreaValue(currentJSON)}
      value={areaValue}
      onFocus={(e: { target: { select: () => any } }) => e.target.select()}
      onChange={(e: { target: { value: any } }) => {
        const value = e.target.value
        setAreaValue(value)
        if (value) {
          try {
            const json = JSON.parse(value)
            const newPalette = parseHexPalette(json, palette.mode)
            setPalette(newPalette)
          } catch (error) {
            console.warn('Parsing error', error)
          }
        }
      }}
    />
  )
}

const JSONArea = styled(TextArea)`
  width: 100%;
  min-height: 120px;
  resize: none;
`
