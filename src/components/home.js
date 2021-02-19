import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component{

    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="card m-3">
                Home Component
            </div>
        );
    }
}

export default Home;

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