import React from 'react';
//import axios from 'axios'
import {connect} from 'react-redux';
import * as actions from '../actions';

class NewTest extends React.Component {
    componentDidMount() {
        axios.get('/api/getCoursePercentages')
            .then((resp)=> {
                console.log(resp);
            })
    }
    render() {
        return (
            <div>
                Look at this component
            </div>
        );
    }
}

function mapStateToProps(state) {


    return {
        auth: state.auth
    }
}

export default connect(null)(NewTest);