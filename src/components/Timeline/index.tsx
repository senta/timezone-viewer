import React from "react"
// import moment from "moment"
import { range } from "../../libs/util"

import "./index.scss"

interface TimelineProps {
  timezone: string
  onTimezoneChange?: Function
}

const timeFormat = (hour: number) => {
  const h = hour < 10 ? '0' + hour : hour
  return `${h}:00`
}

const Timezone: React.FC<TimelineProps> = ({ timezone }: TimelineProps) => {
  return (
    <div className="Timezone">
      {timezone}
      {range(0, 24).map(i => <TimeBlock key={i} time={i} />)}
    </div>
  )
}

export default Timezone


// TODO: separate to another file
interface TimeBlockProps {
  time: number // TODO: replace with moment (or maybe just a Date?)
}
const TimeBlock: React.SFC<TimeBlockProps> = ({time}: TimeBlockProps) => {
  const h = time < 10 ? '0' + time : time
  return <div>{h}:00</div>
}
