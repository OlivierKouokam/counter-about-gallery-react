import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SkillsForm extends Component{

    constructor(props){
        super(props);
        this.state={
            skillValue:''
        }
    }

    setSkillValue = (event) => {
        this.setState({
            skillValue:event.target.value
        })
    }

    onAddSkill = (event) => {
        event.preventDefault();
        this.props.onAddNewSkill(this.state.skillValue);
        this.setState({
            skillValue:''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onAddSkill}>
                    <div className="row">
                        <div className="col">
                            <input value={this.state.skillValue} onClick={this.setSkillValue}
                                className="form-control" type="text" placeholder="Skill To Add"/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SkillsForm;

/*
function Counter(props) {
    return (
        <div className="card m-3">
            <div className="card-header">
                <strong>
                    {this.props.title} : {this.props.value}
                </strong>
            </div>
            <div className="card-body">
                <img width={100} src={this.props.image} />
            </div>
        </div>
    );
}

export default Counter;

*/