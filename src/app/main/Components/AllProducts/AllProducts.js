import React, {Component} from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from 'actions';
import _ from 'lodash';
import {getMaps} from 'helpers/utils.js'
import AOS from 'aos';



class AllProducts extends Component {
    
   
componentDidMount() {
   
}


render() {
   const {brands} = this.props;

   const brandsArr = _.orderBy(getMaps(brands));

      return(
         <React.Fragment>
            <main role="main">
               asd
            </main>
         </React.Fragment>
      )
   }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
          getBrands: Actions.getBrands
      }, dispatch);
}
  
function mapStateToProps(state) {
    return {
        brands: state.brands.brnds,
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(AllProducts));