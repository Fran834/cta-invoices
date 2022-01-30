import { styled } from '@mui/material/styles';
import { makeStyles} from '@mui/styles';
import { Paper, TextField, Grid } from '@mui/material'

const useStyles = makeStyles(theme => ({
  cv__paper: {
    boxShadow: "0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%) !important"
  }
}))

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const myType = (type) => {
  return type;

  // if (type !== "number") { return type }
  // return "text";
}

const myInputProps = (type) => {
  if (type !== "number") { return {} }

  return { inputMode: 'numeric', pattern: '[0-9]*' };
}

export function CustomTextField(props) {
  const classes = useStyles();
  //console.log(myInputProps(props.type));

  //No consigo poner un input con patrón para que no se puedan escribir letras en los números
  return(
    <Grid item xs={12} md={props.md}>
      <Item className={classes.cv__paper}>
        <TextField id={props.id} 
          label={props.label}
          value={props.value} 
          onChange={props.onChange} 
          type= {myType(props.type)} 
          variant="standard" 
          fullWidth 
          InputLabelProps={{ shrink: true }}
          />            
      </Item>
    </Grid>
  )

  //inputProps={{ inputMode: 'decimal', pattern: '[0-9]*' }}

}