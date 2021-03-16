import * as React from "react"
import DarkModeToggle from "./DarkModeToggle"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-700">
    <div className="max-w-5xl mx-auto py-3.5 flex justify-between">
      <h1 className="text-2xl font-semibold text-white">{siteTitle}</h1>
      <DarkModeToggle />
    </div>
  </header>
)

export default Header
