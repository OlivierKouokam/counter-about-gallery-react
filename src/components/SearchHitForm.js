import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class SearchHitForm extends Component{

    constructor(props){
        super(props);
        this.state={
            keyWordValue:"",

        }
    }

    setKeyword=(event)=>{
        event.preventDefault();
        this.setState({
            keyWordValue:event.target.value
        })
    }

    doSearch=(event)=>{
        event.preventDefault();
        this.props.onSearch(this.state.keyWordValue);
    }

    render(){
        return (
            <div>
                <form onSubmit={this.doSearch}>
                    <div>{this.state.currentkeyword} </div>
                    <div className="row m-2 p-2">
                        <div className="col">
                            <input type="text" className="form-control"
                                   placeholder="KeyWord"
                                   value={this.state.keyWordValue} onChange={this.setKeyword}/>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-success" type="submit">Chercher</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchHitForm;