import React from 'react';
import '../App.css';

class Buttons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calcTotal : "",
            calcANS : ""
        }
    }
    handleClick = calcVal => {
        let calcTotalTemp = this.state.calcTotal.concat(calcVal.toString())
        calcTotalTemp.toString();
        this.setState({calcTotal: calcTotalTemp});
    };
    handleEnter = (e) => {
        e.preventDefault();
        try {
            let calcTotalTemp = eval(this.state.calcTotal);
            this.setState({calcTotal: calcTotalTemp.toString()});
            this.setState({calcANS: calcTotalTemp.toString()});
          } catch (error) {
            alert("PLEASE ONLY IMPUT NUMBERS AND VALID OPERATIONS");
            this.setState({calcTotal: ""});
          }
        
    };
    handleEquals = () => {
        let calcTotalTemp = eval(this.state.calcTotal);
        this.setState({calcTotal: calcTotalTemp.toString()});
        this.setState({calcANS: calcTotalTemp.toString()});
    };
    handleCE = () => {
        this.setState({calcTotal: ""});
    };
    handleANS = () => {
        let calcTotalTemp = this.state.calcTotal.concat(this.state.calcANS.toString())
        calcTotalTemp.toString();
        this.setState({calcTotal: calcTotalTemp});
    };
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        const buttonVals = ["1", "2", "3", "4", "5", "6", "7", "8", "9", " + ", "0", " - ", " * ", " / ", ".", "(", ")", " ** "];
        return (
            <div>
                
                <div>
                <form onSubmit={this.handleEnter}>
                <input 
                placeholder={this.state.calcTotal}
                name="calcTotal" 
                type="text" 
                id="displayBox" 
                value={this.state.calcTotal}
                onChange={this.handleChange}
                />    
                
                </form>
                </div>
                <div>
                    {buttonVals.map(calcVal => {
                        return <button onClick={() => this.handleClick(calcVal)} label = {calcVal} id='buttonNumb'>{calcVal}</button>
                    })}
                </div>
                <button onClick={() => this.handleEquals()} id='buttonNumb'>=</button>
                <button onClick={() => this.handleCE()} id='buttonNumb'>CE</button>
                <button onClick={() => this.handleANS()} id='buttonNumb'>ANS</button>
                <div id = 'infoText'>
                    <p>How to use: either click on the buttons and click equals, or click on the green display box and type to input what you want to calculate, then press enter!
                        <br></br><br></br>
                        Also handles errors by telling you to only input valid numbers or operations if invalid symbols are typed in the display box.
                    </p>
                </div>
            </div>

        )
    }
}

export default Buttons;