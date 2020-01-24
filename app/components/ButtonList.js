import React from 'react';
import PropTypes from 'prop-types';
import '../containers/CategoryPage/catStyle.css'



export default function CategoryButtons(props) {
  
  return (<>
      {props.data.map
      (item => (
        <div key={item.id} className={'button'} id={item.id} >
       <span id={item.id}>{item.title}</span>
        </div>
         )
      )}

    </>
  )
}
CategoryButtons.propTypes = {
  data: PropTypes.array,
};
CategoryButtons.defaultProps = {
  data: [],
};
