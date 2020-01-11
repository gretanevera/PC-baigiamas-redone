import React, {useEffect} from 'react';
import PropTypes from 'prop-types';


export default function CateogryButtons(props){
    return(<>
{props.data.filter(item => item.id<10).map(item =>(
    <div key={item.id} id= {'button '+item.id}>
        {item.category_name }
    </div>)

)}



        </>
    )
}
CateogryButtons.propTypes={
    data: PropTypes.array,
};
CateogryButtons.defaultProps = {
    data: [],
}
