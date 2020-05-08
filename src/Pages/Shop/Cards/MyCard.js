import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 'auto',
  },
  media: {
    height: 280,
    padding: 10,
  },
  priceText: {
      padding: 3
  }
});

export default function MyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} >
            {props.slider}
        </CardMedia>


        <CardContent>
          <Typography 
            gutterBottom variant="h5" 
            component="h2"
        >
            {props.product}
          </Typography>

          <Typography 
            className={classes.priceText}
            variant="body2" 
            color="textSecondary" 
            component="p"
        >
            {props.priceBRL}
          </Typography>
          <Typography 
            className={classes.priceText}
            variant="body2" 
            color="textSecondary" 
            component="p"
        
        >
            {props.priceEUR} 
          </Typography>

        </CardContent>
      </CardActionArea>

    </Card>
  );
}
