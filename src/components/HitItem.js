import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HitItem extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return (
            <div className="col-md-4" key={this.props.hit.id}>
                <div className="card">
                    <div className="card-header">{this.props.hit.tags} | {this.props.hit.webformatWidth} x {this.props.hit.webformatHeigth} </div>
                    <div className="card-body">
                        <img className="card-img" height={200} src={this.props.hit.webformatURL} alt="hit image"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HitItem;