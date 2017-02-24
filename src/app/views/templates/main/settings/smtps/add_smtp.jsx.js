import React, {PropTypes} from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

class AddSmtp extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">Add SMTP</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>email</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Server</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Port</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Login</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Password</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Project folder</label>
                                <select className="md-input label-fixed">
                                    {this.props.projects.map((p,i)=>{
                                        return (
                                            <option key={i} value={p.key}>{p.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">TSL</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <input type="checkbox" name="checkbox_demo_inline_mercury" id="checkbox_demo_inline_1"
                                       data-md-icheck/>
                                <label className="uk_dp1 uk-text-muted">SSL</label>
                            </div>

                            <h3>Test smtp</h3>
                            <div className="uk-margin-bottom">
                                <label>email for send test mail</label>
                                <input type="text" className="md-input label-fixed"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-success" href="settings_units.html">SEND</a>

                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-danger" href="#">Delete</a>
                                <button type="submit" className="md-btn md-btn-primary alignright" href="settings_smtps.html">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

AddSmtp = reduxForm({
    form: 'AddSmtp'
})(AddSmtp);

export default connect()(AddSmtp);
