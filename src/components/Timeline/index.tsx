import React from "react"
import moment from "moment"
import { range } from "../../libs/util"

import "./index.scss"

interface TimelineProps {
  timezone: string
  primary?: string
  onTimezoneChange?: Function
}

const timeFormat = (hour: number) => {
  const h = hour < 10 ? "0" + hour : hour
  return `${h}:00`
}

const Timezone: React.FC<TimelineProps> = ({
  timezone,
  primary
}: TimelineProps) => {
  const base = 0 + moment.tz(primary || timezone).zone()
  const local = 0 + moment.tz(timezone).zone()

  const diff = (base - local) / 60

  return (
    <div className="Timezone">
      {timezone}
      {range(0, 24).map(i => {
        let time = i + diff
        if (time < 0) {
          time = 24 + time
        }
        if (time > 24) {
          time = time - 24
        }
        // TODO: show +1/-1 day
        return <TimeBlock key={i} time={time} />
      })}
    </div>
  )
}

export default Timezone

// TODO: separate to another file
interface TimeBlockProps {
  time: number // TODO: replace with moment (or maybe just a Date?)
}
const TimeBlock: React.SFC<TimeBlockProps> = ({ time }: TimeBlockProps) => {
  const h = time < 10 ? "0" + time : time
  return <div>{h}:00</div>
}
