import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class NodeCircle extends Component {
    render() {
        return (
            <svg height="35" width="35">
                <circle cx="17" cy="17" r="16" strokeWidth="2" stroke={this.props.stroke} fill={this.props.fill}/>
                <text textAnchor="middle" x="17" y="21.5" fill={this.props.textColor}>{this.props.children}</text>
            </svg>

        )
    }
}

NodeCircle.propTypes = {
    stroke: PropTypes.string.isRequired,
    fill: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}
