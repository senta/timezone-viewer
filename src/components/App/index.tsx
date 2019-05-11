import React, { useState } from "react"
import moment from "moment"

// supported languages
import "moment/locale/fr"
import "moment/locale/ja"

import "./index.css"

import Timline from "../Timeline"
import TimezoneSelector from "../TimezoneSelector"

const App: React.FC = () => {
  const [timezone, changeTimezone] = useState(moment.tz.guess())
  return (
    <div className="App">
      <TimezoneSelector
        value={timezone}
        onChange={zone => changeTimezone(zone)}
      />
      <Timline timezone={timezone} />
    </div>
  )
}

export default App
