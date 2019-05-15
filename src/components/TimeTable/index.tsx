import React, { useState } from "react"
import moment from "moment"
import { randomPick } from "../../libs/util"

// supported languages
import "moment/locale/fr"
import "moment/locale/ja"

import "./index.scss"

import Timeline from "../Timeline"
import TimezoneSelector from "../TimezoneSelector"

const TimeTable: React.FC = () => {
  const [primaryTimezone, changePrimaryTimezone] = useState(moment.tz.guess())
  const [timezones, changeTimezones] = useState([
    "Asia/Tokyo",
    "Europe/Brussels"
  ])

  return (
    <div className="TimeTable">
      <div className="TimeTable__timezone TimeTable__timezone--primary">
        <Timeline timezone={primaryTimezone}>
          <TimezoneSelector
            value={primaryTimezone}
            onChange={zone => changePrimaryTimezone(zone)}
          />
        </Timeline>
      </div>

      {timezones.map((tiemzone, index) => (
        <div className="TimeTable__timezone">
          <Timeline timezone={tiemzone} primary={primaryTimezone}>
            <TimezoneSelector
              value={tiemzone}
              onChange={zone => {
                const newTimezones = [...timezones]
                newTimezones.splice(index, 1, zone)
                changeTimezones(newTimezones)
              }}
            />
            <button onClick={() => {
              const newTimezones = [...timezones]
              newTimezones.splice(index, 1)
              changeTimezones(newTimezones)
            }}>delete</button>
          </Timeline>
        </div>
      ))}
      <div className="TimeTable__timezone">
        <button
          type="button"
          onClick={() => {
            const zone = randomPick(moment.tz.names())
            changeTimezones(timezones.concat(zone))
          }}
        >
          add one
        </button>
      </div>
    </div>
  )
}

export default TimeTable
