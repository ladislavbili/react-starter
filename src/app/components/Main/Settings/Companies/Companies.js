import React, {PropTypes, Component} from 'react';
import View from '../../../../views/templates/main/settings/companies/companies.jsx.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../../redux/actions/settings.action';

class Companies extends Component {

    componentWillMount() {
        this.props.actions.requestCompanies();
    }

    render() {
        return (
            <View {...this.props.companies} loadCompanies={this.props.actions.requestCompanies}/>
        );
    }
}
Companies.propTypes = {
    companies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
    return {
        companies: state.companies
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Companies);