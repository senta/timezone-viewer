import React from "react"
import moment from "moment"
import "moment-timezone"

// import './index.css';

interface TimezoneSelectorProps {
  value?: string
  onChange?: (value: string) => void
}

const TimezoneSelector: React.SFC<TimezoneSelectorProps> = ({
  value,
  onChange = () => {}
}: TimezoneSelectorProps) => {
  const availableZones = moment.tz.names()

  function handleChange(event: React.ChangeEvent) {
    const value = (event.target as HTMLInputElement).value
    onChange(value)
  }

  return (
    <div className="TimezoneSelector">
      <select onChange={handleChange} value={value}>
        {availableZones.map(zone => (
          <option key={zone} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  )
}

export default TimezoneSelector
