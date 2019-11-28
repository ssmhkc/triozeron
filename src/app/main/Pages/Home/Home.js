import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import classNames from 'classnames'
import {withStyles, Grid, GridContainer} from '@material-ui/core'
import createBrowserHistory from 'history/createBrowserHistory'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';
import _ from 'lodash';
import {getMaps} from 'helpers/utils.js'

import HomeListItem from './HomeListItem'
import { fontStyle } from '@material-ui/system';

const styles = theme => ({
    header: {
         padding: 40
    },
    logo: {
        width: 'auto',
        fontFamily: 'Montserrat Subrayada',
        fontSize: 30,
        fontWeight: 700
    },
    checkout: {
        backgroundColor: 'rgb(30, 232, 255)',
        borderRadius: 100,
        width: 100,
        height: 100,
        color: '#fff',
        fontSize: 16,
        lineHeight: 1.2,
        padding: 15,
        fontWeight: 400,
        textAlign: 'center'
    },
    mainmenu: {
        float: 'left',
        "& li": {
            fontFamily: 'Lato',
            fontSize: 16,
            float: 'left',
            height: 50,
            lineHeight: 2.5,
            width: 100,
            listStyleType: 'none',
            fontWeight: 700

        }
    
    },
    footer: {
        height: 250
    }
})

class Home extends Component {
    componentDidMount() {
        
    this.props.getGames(12,1)
        
        const { match: { params } } = this.props;

    }
    render() {
        const {games, classes} = this.props
        // const gamesArr = _.orderBy(getMaps(games))
        // console.log(gamesArr && gamesArr)
        console.log(games)
        return(
            <React.Fragment>
                <div className={classNames(classes.header)+' flex flex-row justify-between'}>
                    {/* <div className={classNames(classes.logo)}>Loodle</div>
                    <div className="flex justify-start">
                        
                    </div> */}
                    

                </div>
                <HomeListItem games={games} />
                <footer className={classes.footer}>

                </footer>
            </React.Fragment>
        )
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({
        //   getBrands: Actions.getBrands
        getGames: Actions.getGames
      }, dispatch);
  
}
  
function mapStateToProps(state) {
console.log(state)
    return {
        // brands: state.brands.brnds
        games: state.games

    }

}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Home)));