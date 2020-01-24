/**
 *
 * CalendarPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalendarPage from './selectors';
import reducer from './reducer';
import saga from './saga';
// import Calendar from '../../components/CalendarComp';
// import "./Calendar.css";


export function CalendarPage() {
  useInjectReducer({ key: 'calendarPage', reducer });
  useInjectSaga({ key: 'calendarPage', saga });

  return (
    <div className={'mainBody'}>
    {/* <Calendar /> */}
    </div>
  );
}

CalendarPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  calendarPage: makeSelectCalendarPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CalendarPage);
