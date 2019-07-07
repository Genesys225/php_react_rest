import React from "react";
// import Emoji from "emoji-mart";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const Country = props => {
  const classes = useStyles();
  const { Name, Region, Population, Code2 } = props;
  console.log(Name, Region, Code2, Population);
  // const emojiFlag = (
  //   <Emoji emoji={`:flag-${Code2}:`} set="facebook" size={32} />
  // );
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" className={classes.title} gutterBottom>
          {Name}
        </Typography>
        <Typography variant="h5" component="h4">
          Located in the "<em>{Region}</em>" region
        </Typography>
        {/* {emojiFlag} */}
      </CardContent>
      <CardActions>
        <Button size="small">To cities list</Button>
      </CardActions>
    </Card>
  );
};

export default Country;
