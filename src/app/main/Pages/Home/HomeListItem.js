import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { Grid, Switch, FormControlLabel, Icon } from "@material-ui/core"
import createBrowserHistory from 'history/createBrowserHistory'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';
import _ from 'lodash';
import {getMaps} from 'helpers/utils.js'
import { withStyles } from '@material-ui/styles';
import './Lily.css'
import UseAnimations from "react-useanimations";
import grid from './grid.png'
import list from './list.png'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 25,
    },
    logo: {
        width: 'auto',
        fontFamily: 'Montserrat Subrayada',
        fontSize: 30,
        fontWeight: 700,
        transform: 'rotate(90deg)',
        height: '32px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    icon: {
        width: 'auto',
        height: '32px',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    title: {
        borderTop: '1px solid #999',
        height: 40,
        color: '#999'
    },
    imgCover: {
        width: '100%',
        height: '360px',
        transition: '0.3s',
        backgroundSize: 'cover',
       
    },
    image: {
        width: '100%',
        
        // imageSize: '100%',
        filter: 'grayscale(100%)',
        opacity: 0.8,
        transition: '0.3s',
        '&:hover': {
            filter: 'grayscale(30%)',
            opacity: 1,
            transition: '0.3s'
        }
    },
    listitem: {
        fontSize: 34,
        fontWeight: 300,
        fontFamily: 'Comfortaa',
        '& > span > a': {
            color: '#383838',
        },
        
        '&:hover > span > a': {
            cursor: 'pointer',
            color: 'rgb(0,0,254)',
        }
    },
    title: {
        
    },

})

  

class HomeListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            textDisplay: false,
        }
    }
    componentDidMount() {
    }
    ToggleButton(){
        this.setState((currentState) => ({
            textDisplay: !currentState.textDisplay, 
        }));
    }
    render() {
        const {games, classes, getGames, textDisplay} = this.props
        
        console.log(games)

        return(
            <React.Fragment>
                <main role="main">
                    <div className="flex flex-row">
                        <Grid container className={classes.root} spacing={1}>
                            <Grid item xs={12}>
                                <Grid container justify="center" spacing={5}>
                                    <Grid item xs={1} spacing={5}>
                                        <div className="flex flex-col" style={{height: '100vh', position:'fixed'}}>
                                                <div className="flex flex-col" style={{height: '100%'}}>

                                                    <div className={'flex flex-1'}>
                                                        <span className={classes.logo}>SMOOK</span>
                                                    </div>    
                                                
                                                    <div className={'flex flex-1 justify-center'} 
                                                        // onClick={() => this.props.getGames(3,1)}
                                                    >
                                                        <span onClick={ () => this.ToggleButton() } className={classes.icon}>
                                                            {!this.state.textDisplay ? <img src={grid}/>:<img src={list}/> }
                                                        </span>
                                                        
                                                        
                                                    </div>
                                                    
                                                </div>
                                        </div>
                                        
                                    </Grid>
                                    <Grid item xs={10}>
                                        <Grid container justify="center" spacing={0}>
                                        {!this.state.textDisplay ?
                                            games && games.map(item =>
                                                <Grid item xs={4}>
                                                    <div className="grid">
                                                        <figure className={classes.imgCover+ " effect-bubba"} style={{backgroundImage: 'url('+item.assetList[0].name+')'}}>
                                                            <figcaption>
                                                                <h2>{item.title} <span>Zoe</span></h2>
                                                                <p className="description">{item.description}</p>
                                                            </figcaption>			
                                                        </figure>
                                                    </div>
                                                </Grid>
                                            ):
                                            games && games.map(item =>
                                                <Grid item xs={12}>
                                                    <div className={classes.listitem}>
                                                        <span className={classes.title}><a href={item.url}>{item.title}</a></span>
                                                    </div>
                                                </Grid>
                                            )
                                        }
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={1}>

                                    </Grid>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    
                </main>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        getGames: Actions.getGames
      }, dispatch);
  
}
  
function mapStateToProps(state) {
console.log(state)
    return {
        
        games: state.user.games,
        textDisplay: state.user.textDisplay

    }

}

export default withStyles(styles, {withTheme: false})(connect(mapStateToProps, mapDispatchToProps)(HomeListItem));