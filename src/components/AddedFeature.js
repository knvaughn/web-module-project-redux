import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=>{
        if (props.car.features.includes(props.feature)) {
          props.removeFeature(props.feature)
        }
      }} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

export default connect(mapStateToProps, {removeFeature})(AddedFeature);

