import { Stack } from "@mantine/core"

import "@mantine/core/styles.css"

import { ThemeProvider } from "~theme"

import "./popup.scss"

function IndexPopup() {
  return (
    <ThemeProvider>
      <Stack miw={240} p="lg">
        <span className="testing">Testing!</span>
      </Stack>
    </ThemeProvider>
  )
}

export default IndexPopup
