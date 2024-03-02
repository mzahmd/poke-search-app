import { Card, CardHeader, CardContent, CardMedia, TextField, Typography, Button, Box, Grid } from '@mui/material';
import { pokeTypes } from "./data/types"

import { useRef, useState } from 'react';

interface IPokemon {
  id: number,
  name: string
  types: { type: { name: string } }[]
  stats: { base_stat: number, stat: { name: string } }[]
}

function App() {
  const searchValue = useRef<HTMLInputElement>()
  const [isPokemon, setIsPokemon] = useState<IPokemon>()

  function handleClick() {
    fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchValue.current?.value.toLowerCase()}`)
      .then((data) => data.json())
      .then((pokemon) => {
        setIsPokemon(pokemon)
      }).catch((error) => {
        alert("Eingabe ungültig")
        console.log(error)
      })
  }

  return (
    <>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"} sx={{ paddingTop: "1rem" }}>
        <Typography variant="h4" sx={{ marginBottom: "1rem" }}>Pokémon Search App</Typography>
        <Card>
          <CardHeader title={
            <>
              <Typography>Search for Pokémon Name or ID:</Typography>
              <TextField id="outlined-search" type="search" inputRef={searchValue} size='small' sx={{ padding: "none", margin: "none" }} />
              <Button variant="contained" sx={{ marginLeft: "10px" }} onClick={handleClick}>search</Button>
            </>
          }>
          </CardHeader>
          <CardContent sx={{ minHeight: "30rem", width: "100%", backgroundImage: "radial-gradient(circle at 18.7% 37.8%, rgb(250, 250, 250) 0%, rgb(225, 234, 238) 90%)" }}>
            {isPokemon &&
              <>
                <Typography>{isPokemon.name.toUpperCase()} #{isPokemon.id}</Typography>
                <Box display={"flex"} justifyContent={"center"}>
                  <CardMedia sx={{ height: 150, width: 150 }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${isPokemon.id}.png`} title="poke" />
                  <CardMedia sx={{ height: 150, width: 150 }} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${isPokemon.id}.png`} title="poke" />
                </Box>
                <Box display={"flex"} alignItems={"center"} flexDirection={"row"}>
                  {isPokemon?.types.map(({ type }) =>
                    <Typography sx={{ backgroundColor: pokeTypes[type.name], fontSize: "1rem", borderRadius: "5px", width: "fit-content", padding: "5px", marginRight: "5px" }}>{type.name}</Typography>
                  )}
                </Box>
              </>
            }
            <Grid container spacing={1} sx={{ textAlign: "center", marginTop: "1rem" }}>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Base</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Stats</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>HP:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[0].base_stat || "0"}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Attack:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[1].base_stat || "0"}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Defense:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[2].base_stat || "0"}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Sp. Attack:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[3].base_stat || "0"}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Sp. Defense:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[4].base_stat || "0"}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>Speed:</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography sx={{ backgroundColor: "lightgray", padding: "5px" }}>{isPokemon?.stats[5].base_stat || "0"}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default App
