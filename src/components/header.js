import * as React from "react"
import ThemeToggler from "./ThemeToggler"

const Header = ({ siteTitle }) => (
  <header className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100">
    <div className="max-w-5xl mx-auto py-3.5 flex justify-between">
      <h1 className="text-2xl font-semibold">{siteTitle}</h1>
      <ThemeToggler />
    </div>
  </header>
)

export default Header
