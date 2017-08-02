
import React from 'react'
import ProgressBar from './component/ProgressBar'
class demo extends React.Component {
    constructor(props) {
        super(props)
        this.prevClick = this.prevClick.bind(this)
        this.nextClick = this.nextClick.bind(this)
        this.state = {
            step: 1,
            sections: ['step 1 hello this is long', 'step 2', 'step 3', 'step 3.5', 'step 4 Hello this is also long']
        }
    }

    render() {

        return (
            <div>
                <ProgressBar sections={this.state.sections} current={this.state.step} primaryColor="#002663" secondaryColor="#EAAD2E" tertiaryColor="white"/>
                <button onClick={this.prevClick}>Previous</button>
                <button onClick={this.nextClick}>Next</button>
            </div>
        )
    }

    prevClick(event) {
        event.preventDefault()
        if (this.state.step > 1) {
            const prev = this.state.step - 1
            this.setState({
                sections: this.state.sections,
                step: prev
            })
        }
    }

    nextClick(event) {
        event.preventDefault()
        if (this.state.step < this.state.sections.length) {
            const next = this.state.step + 1
            this.setState({
                sections: this.state.sections,
                step: next
            })
        }
    }
}
export default demo
