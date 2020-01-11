
import React, {useEffect} from 'react';
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
import {getCategories} from './actions'
import CateogryButtons from '../../components/ButtonList'


export function CategoryPage2(props) {
  useInjectReducer({ key: 'categoryPage2', reducer });
  useInjectSaga({ key: 'categoryPage2', saga });

const {get }= props;
const {categories} = props.categoryPage2

  useEffect(()=> {
    get();
  }, [])
 console.log(props)
  return (
    <div>
    hello
   <CateogryButtons data={categories} />
    </div>
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
