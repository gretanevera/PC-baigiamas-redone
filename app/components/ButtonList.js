import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import '../containers/CategoryPage/catStyle.css'

export default function CategoryButtons(props) {
  return (<>
      {props.data.filter(item => item.id < 10).map(item => (
        <div key={item.id} id={'button ' + item.id}>
       <span>{item.category_name}</span>
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
