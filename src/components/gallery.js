import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import HitItem from "./HitItem";
import SearchHitForm from "./SearchHitForm";

class Gallery extends Component{

    constructor(props){
        super(props);
        this.state={
            hits:[],
            currentPage:1,
            pageSize:10,
            currentkeyword:'paris',
            totalPages:1,
            pages:[]
        }
    }

    componentDidMount(){
        this.getHits(this.state.currentkeyword);
    }

    getHits(keyword){
        let url = "https://pixabay.com/api/?key=5832566-81dc7429a63c86e3b707d0429&q=" + keyword
                    + "&page=" + this.state.currentPage + "&per_page=" + this.state.pageSize;
        axios.get(url).then((resp)=>{
            let totalP = (resp.data.totalHits % this.state.pageSize === 0)
                                ? resp.data.totalHits / this.state.pageSize
                                : 1 + resp.data.totalHits / this.state.pageSize;
            this.setState({
                hits:resp.data.hits,
                totalPages:totalP,
                pages:new Array(totalP).fill(0),
                currentkeyword:keyword
            });
        }).catch(err=>{
            console.log(err);
        })
    }

    search=(keyword)=>{
        this.getHits(keyword);
    }

    gotoPage=(page)=>{
        this.setState({
            currentPage:page
        },()=>{
            this.getHits(this.state.currentkeyword);
        });
        //console.log(this.currentPage);
        //console.log(page);
    }

    render(){
        return (
            <div>
                <SearchHitForm onSearch={this.search}/>
                <div className="row">
                {
                    this.state.hits.map(hit=>
                        <HitItem hit={hit}/>
                    )
                }
                </div>
                <div className="card m-2 p-2">
                    <ul className="nav nav-pills">
                        {
                            this.state.pages.map((v,index)=>
                                <li key={index}>
                                    <button className={this.state.currentPage===index+1?'btn btn-primary':'btn btn-link'} onClick={()=>this.gotoPage(index+1)}>{index+1}</button>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Gallery;

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