import { Box, Typography } from "@mui/material"
import "./App.css"
import Cards from "./cards"

function App() {
  return (
    <Box>
      <Box className="card-information">
        <Typography
          fontSize="26px"
          fontWeight="700"
          width="270px"
          padding="71px 0 38px"
          margin="0"
          className="card-title"
        >
          The creative crew
        </Typography>
        <Box marginBottom="48px" className="card-subtitle-content">
          <Typography fontSize="18px" fontWeight="600">
            WHO WE ARE
          </Typography>
          <Typography fontSize="14px" fontWeight="400" paddingTop="10px">
            We are team of creatively diverse. driven. innovative individuals
            working in various locations from the world.
          </Typography>
        </Box>
      </Box>
      <Cards />
    </Box>
  )
}

export default App
