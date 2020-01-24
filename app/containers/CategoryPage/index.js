
import React, {useEffect, onChange} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCategoryPage2 from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {getCategories, loading } from './actions';
import CategoryButtons from '../../components/ButtonList';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Spinner from 'react-bootstrap/Spinner';


export function CategoryPage2(props) {
  useInjectReducer({ key: 'categoryPage2', reducer });
  useInjectSaga({ key: 'categoryPage2', saga });

const {get }= props;
const {categories} = props.categoryPage2;
const {loading} =props.categoryPage2;

const loader = loading;
console.log('loader is ',loader);

  useEffect(()=> {
    get();
  }, []);


 let  SpinnerStyle={
    display: "flex"
  };


if (loading === false){
  SpinnerStyle={display: 'none'};
  console.log('ddo thing');
}
else{
  console.log('no things');
}



  return (
    <>
    <div className={'mainBody'}>
      <h2>This is The main category tree, please choose to your liking</h2>

      <div className={'spinnerino'} style={SpinnerStyle}>

      {/* <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner> */}
</div>


<div className={'categoryMenuwrap'}>
    <div className={'categoryMenu'}>
    <CategoryButtons data={categories} />
    </div>
    </div>
    </div>
    </>

  );

}


CategoryPage2.propTypes = {
  get: PropTypes.func ,
  dispatch: PropTypes.shape({
 }),
};

const mapStateToProps = createStructuredSelector({
  categoryPage2: makeSelectCategoryPage2(),
});

function mapDispatchToProps(dispatch) {
  return {
 get: () => dispatch (getCategories()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CategoryPage2);
