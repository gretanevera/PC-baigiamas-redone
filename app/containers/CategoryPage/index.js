import React from 'react';
import {compose} from 'redux'
import {connect} from "react-redux";
import {useInjectReducer} from "../../utils/injectReducer";
import reducer from "./reducer";
import {getCategories, showInfo} from "./actions";
import { config, db } from  'codemash';
import {useInjectSaga} from "../../utils/injectSaga";
import {createStructuredSelector} from "reselect";










export  default function CategoryPage (props) {
  useInjectReducer({key: 'categoryPage', reducer});
  useInjectSaga({key: 'categoryPage' , saga});
  useEffect (() => {
    get();
  }, []);
const {get} = props;
  console.log('props', props);
  return (
    <div className={'categoryMain mainBody'}>
      import categories from DB with links to subcategories, subcategories lead to subsubs or to articles
      <h2>Please choose your poison</h2>
      <div className={'buttonBox'}/>

    </div>);
}


CategoryPage.propTypes = {
  get: PropTypes.func,
  categoryPage: PropTypes.shape

};
const mapStateToProps = createStructuredSelector({
  categoryPage: makeSelectCategoryPage(),
});
function mapDispachToProps (dispatch) {
  return {
   get: () => dispatch(getCategories()),
  };
}
