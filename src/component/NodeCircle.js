import React, {Component} from 'react'

export default class NodeCircle extends Component {
    render() {
        return (
            <svg height="34" width="34">
                <circle cx="17" cy="17" r="16" strokeWidth="2" stroke={this.props.stroke} fill={this.props.fill}/>
                <text textAnchor="middle" x="17" y="21" fill={this.props.textColor}>{this.props.children}</text>
            </svg>

        )
    }

}
