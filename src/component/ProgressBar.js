import React, {Component} from 'react'
import PropTypes from 'prop-types'
import 'css-loader!./ProgressBar.css'
import NodeCircle from "./NodeCircle"

export default class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            primaryColor: this.props.primaryColor || '#002663',
            secondaryColor: this.props.secondaryColor || '#EAAD2E',
            tertiaryColor: this.props.tertiaryColor || '#FFFFFF',
        }
    }

    render() {
        return (
            <div className="progress-bar-wrapper" style={{"background": this.state.primaryColor}}>
                <div className="progress-bar-container">
                    {this.props.sections.map((section, index) => {
                        const step = index + 1
                        if (index === this.props.sections.length - 1) {
                            return this.createNode(section, step)
                        }
                        return this.createNodeAndBar(section, step)
                    })}
                </div>
            </div>
        )
    }

    createNode(section, step) {
        const current = parseInt(this.props.current, 10)

        if (current > step) {
            return (
                <div key={step} className="progress-bar-node">
                    <NodeCircle stroke={this.state.secondaryColor} fill={this.state.primaryColor} textColor={this.props.secondaryColor}>{step}</NodeCircle>
                    <div className="node-bottom-text complete" style={{"color": this.state.tertiaryColor}}>{section}</div>
                </div>
            )
        }
        if (current === step) {
            return (
                <div key={step} className="progress-bar-node">
                    <NodeCircle stroke={this.state.secondaryColor} fill={this.state.secondaryColor} textColor={this.props.primaryColor}>{step}</NodeCircle>
                    <div className="node-bottom-text current" style={{"color": this.state.tertiaryColor}}>{section}</div>
                </div>
            )
        }
        if (current < step) {
            return (
                <div key={step} className="progress-bar-node">
                    <NodeCircle stroke={this.state.tertiaryColor} fill={this.state.primaryColor} textColor={this.props.tertiaryColor}>{step}</NodeCircle>
                    <div className="node-bottom-text incomplete" style={{"color": this.state.tertiaryColor}}>{section}</div>
                </div>
            )
        }
    }

    createNodeAndBar(section, step) {
        return ([
            this.createNode(section, step),
            this.createBar(step)
        ])
    }

    createBar(index) {
        const current = parseInt(this.props.current, 10)

        if (current > index) {
            return (<div className="bar-line complete" style={{"background": this.state.secondaryColor}}/>)
        }
        if (current === index) {
            const backgroundValue = "linear-gradient(90deg, " + this.state.secondaryColor + " 50%," + this.state.tertiaryColor + " 50%)"
            return (<div className="bar-line current" style={{"background": backgroundValue}}/>)
        }
        if (current < index) {
            return (<div className="bar-line" style={{"background": this.state.tertiaryColor}}/>)
        }
    }
}

// this.props.current
// this.props.sections
// this.props.primaryColor
// this.props.secondaryColor
// this.props.tertiaryColor
ProgressBar.propTypes = {
    current: PropTypes.number.isRequired,
    sections: PropTypes.array.isRequired,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    tertiaryColor: PropTypes.string
}
