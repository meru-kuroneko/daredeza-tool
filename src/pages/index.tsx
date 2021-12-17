
import React from "react"
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import "@fontsource/amatic-sc";
import Tool from "./tool"
// @ts-ignore
const useStyles = makeStyles(() => ({
  title: {
    fontFamily: ["Amatic SC", "Caveat"],
  }
}));

const App = () => {
  const classes = useStyles();

  return (
    <Container>
      <Typography className={classes.title} variant="h3" component="div">
        誰デザシャッフルツール（β版）        
      </Typography>
      <Tool /> 
    </Container>
  )
}

export default App;
