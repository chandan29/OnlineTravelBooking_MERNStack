import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    {this.props.message && ( //Just a change here
                        <div className="alert alert-success" role="alert">
                            {this.props.message}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Message;
