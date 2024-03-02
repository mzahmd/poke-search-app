import { CardMedia, Typography, Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';

{/* <img src='https://raw.github usercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' /> */ }
function App() {

  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
        <h1>Pokémon Search App</h1>

        <Card>
          <CardHeader action={
            <>
              <Typography>Search for Pokémon Name or ID:</Typography>
              <TextField id="outlined-search" type="search" />
              <Button variant="contained" sx={{ marginLeft: "10px" }}>search</Button>
            </>
          }>
          </CardHeader>
          <CardContent>
            <Typography>Pikachu #25</Typography>
            <CardMedia sx={{ height: 150, width: 150 }} image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" title="Poke" />
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
              <Typography sx={{backgroundColor:"yellow", fontSize:"1rem", borderRadius:"5px", width:"fit-content", padding:"5px", marginRight:"5px"}}>ELECTRIC</Typography>
              <Typography sx={{backgroundColor:"red", fontSize:"1rem", borderRadius:"5px", width:"fit-content", padding:"5px", marginRight:"5px"}}>FIRE</Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default App
