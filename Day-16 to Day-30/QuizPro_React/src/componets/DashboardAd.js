import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import GraphicEqIcon from "@material-ui/icons/GraphicEq";
import "./Dashboard.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    width: 280,
    height: 258,
  },
  media: {
    height: 140,
  },
});

function DashboardAd() {
  const classes = useStyles();
  let history = useHistory();

  function handleClickLeader() {
    history.push("/Leaderboard");
  }

  return (
    <div className="quiz">
      <div className="quiz__header">
        <div className="quiz__headerLeft">
          <h4 className="quiz__channelName">
            <strong>
              <GraphicEqIcon /> Admin Dashboard
            </strong>
          </h4>
        </div>
        <div className="quiz__headerRight">
          <p>
            <InfoIcon /> Details
          </p>
        </div>
      </div>
      <div className="quiz__card1">
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://techbeacon.scdn7.secure.raxcdn.com/sites/default/files/styles/article_hero_image/public/html5-mobile-app-native-hybrid-pros-cons.jpg?itok=f2OysLvu"
                title="HTML"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  HTML
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
              Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
                title="CSS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  CSS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
              Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
              Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/practicaldev/image/fetch/s--nRLyWy0y--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/buz4t2ckimsj48zieyja.png"
                title="React JS"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React JS
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
              Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
              Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="html__link">
         <Button onClick={handleClickLeader} size="small"> <EmojiEventsIcon /> Leaderboard </Button>
        </div>
      </div>
      <div className="quiz__card2">
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.pragimtech.com/wp-content/uploads/2019/03/java-script.jpg"
                title="JavaScript"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  JavaScript
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
              Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
              Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://nareshit.com/wp-content/uploads/2018/08/C-Programming-online-training-nareshit.jpg"
                title="C Programming"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  C Programming
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
              Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
              Delete
              </Button>
            </CardActions>
          </Card>
        </div>
        <div className="html__card">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://www.ialm.academy/upload/course/PYTHON.jpg"
                title="Python "
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Python
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
              Update
              </Button>
              <Button size="small" variant="outlined" color="secondary">
                Delete
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DashboardAd;
