import React, {Component} from 'react';


class Sum extends Component{
    constructor (){
        super();

        this.state = {
            userInputOne: 0,
            userInputTwo: 0,
            total: 0
        }
    }

    handleInputOne(val){
        this.setState({userInputOne: parseInt(val)})
        console.log(val)
    }

    handleInputTwo(val){
        this.setState({userInputTwo: parseInt(val)})
    }

    addNumbers (num1,num2) {
        let sum = 0

        sum = num1 + num2
        this.setState({ total: sum })
    }


    render(){
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange = { (e) => this.handleInputOne(e.target.value) } />
                <input className='inputLine' onChange = { (e) => this.handleInputTwo(e.target.value) } />
                <button className='confirmationButton' onClick = { () => this.addNumbers(this.state.userInputOne,this.state.userInputTwo)}> Sum </button>
                <span className='resultsBox'> {this.state.total} </span>
            </div>

        )
    }
}

export default Sum