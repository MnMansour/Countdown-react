import React, {Component} from "react";
import "./App.css";
import Clock from "./clock";
import { Form, FormControl, Button} from "react-bootstrap";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline : "December 25, 2017",
            newDeadline:""
        }
    }

    changeDeadline(){
        if ( Date.parse(this.state.newDeadline)){
            this.setState({deadline: this.state.newDeadline})
        }else{
            this.setState({deadline:"December 25, 2017"})
        }
        
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">Countdowon to {this.state.deadline}</div>
                <Clock deadline={this.state.deadline}/>
                <Form inline>
                    <FormControl className="Deadline-input" type="text" placeholder="New Date"
                    onChange={event=> this.setState({newDeadline : event.target.value})}/>
                    <Button onClick={()=> this.changeDeadline()}>Submit</Button>
                </Form>
            </div>
        )
    }
}

export default App;