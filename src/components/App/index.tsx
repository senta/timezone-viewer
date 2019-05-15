import React, { useState } from "react"

// supported languages
import "moment/locale/fr"
import "moment/locale/ja"

import "./index.css"

import TimeTable from "../TimeTable"

const App: React.FC = () => {
  return (
    <div className="App">
      <TimeTable />
    </div>
  )
}

export default App
