import { Card, CardHeader, CardContent, CardMedia, TextField, Typography, Button, Box } from '@mui/material';
import { useRef, useState } from 'react';

interface IPokemon {
  id: number,
  name: string
}

function App() {
  const searchValue = useRef<HTMLInputElement>()
  const [isPokemon, setIsPokemon] = useState<IPokemon>()

  function handleClick() {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue.current?.value.toLowerCase()}`)
      .then((data) => data.json())
      .then((pokemon) => setIsPokemon(pokemon))

    console.log(isPokemon);

  }

  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
        <h1>Pokémon Search App</h1>

        <Card>
          <CardHeader action={
            <>
              <Typography>Search for Pokémon Name or ID:</Typography>
              <TextField id="outlined-search" type="search" inputRef={searchValue} />
              <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={handleClick}>search</Button>
            </>
          }>
          </CardHeader>
          { isPokemon && 
          <CardContent>
            <Typography>{isPokemon.name.toUpperCase()} #{isPokemon.id}</Typography>
            <CardMedia sx={{ height: 150, width: 150 }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isPokemon.id}.png`} title="Poke" />
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
              <Typography sx={{ backgroundColor: "yellow", fontSize: "1rem", borderRadius: "5px", width: "fit-content", padding: "5px", marginRight: "5px" }}>ELECTRIC</Typography>
              <Typography sx={{ backgroundColor: "red", fontSize: "1rem", borderRadius: "5px", width: "fit-content", padding: "5px", marginRight: "5px" }}>FIRE</Typography>
            </Box>
          </CardContent>
          }
        </Card>
      </Box>
    </>
  )
}

export default App
