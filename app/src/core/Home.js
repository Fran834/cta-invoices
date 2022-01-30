import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import invoiceImg from './../assets/images/invoice.jpg'
import Grid from '@mui/material/Grid'
//import auth from './../auth/auth-helper'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 30,
  },
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  title: {
    padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 400
  },
  credit: {
    padding: 10,
    textAlign: 'right',
    backgroundColor: '#ededed',
    borderBottom: '1px solid #d0d0d0',
    '& a':{
      color: '#3f4771'
    } 
  }
}))


export default function Home(){
  const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={8}>
            <Grid item xs={12}>
                <Card className={classes.card}>
                <Typography variant="h6" className={classes.title}>
                    Home Page
                </Typography>
                <CardMedia className={classes.media} image={invoiceImg} title="Invoice Image"/>
                <CardContent>
                    <Typography type="body1" component="p">
                    Welcome to the Invoices home page. 
                    </Typography>
                </CardContent>
                </Card>
            </Grid>
            </Grid>
        </div>
    )
}