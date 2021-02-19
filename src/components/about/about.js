import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SkillsForm from "./SkillsForm";

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Soyez Toujours Joyeux",
            contact: {name: "Olivier Kouokam", profile: "images/profile.jfif", email: "olivierk@kkoc.com"},
            skills: [
                {id: 1, skill: "Software Engineering"},
                {id: 2, skill: "Frontend Developpement"},
                {id: 3, skill: "IT Essentials"}
            ],
            skillValue: ""
        }
    }

    setSkill = (event) => {
        this.setState({
            skillValue: event.target.value
        })
    }

    onAddSkill = (skillTitle) => {

        const skill = {
            id: [...this.state.skills].pop().id + 1,
            skill: skillTitle
        }
        this.setState({
            skills: [...this.state.skills, skill]
        })
    }

    onDelete = (skill) => {
        let index = this.state.skills.indexOf(skill);
        let listSkills = [...this.state.skills];
        listSkills.splice(index, 1);

        this.setState({
            skills: listSkills
        })
    }

    render() {
        console.log("About-1 Component Rendering...");
        return (
            <div>
                <div className="card">
                    <div className="card-header"><strong><label>{this.state.title}</label></strong></div>
                    <div className="row card-body">
                        <div className="col-auto">
                            <img src={this.state.contact.profile}/>
                        </div>
                        <div className="col">
                            <ul className="list-group">
                                <li className="list-group-item">{this.state.contact.name}</li>
                                <li className="list-group-item">{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card mt-3">
                    <div className="card-header">Skills : {this.state.skillValue}</div>
                    <div className="card-body">
                        <div className="my-3">
                            <SkillsForm onAddNewSkill={this.onAddSkill}/>
                        </div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Skills</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.skills.map((s, index) =>
                                    <tr key={index}>
                                        <td>{s.id}</td>
                                        <td>{s.skill}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={() => this.onDelete(s)}>X
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){console.log("Component Did Mount")}
    componentWillMount(){console.log("Component Will Mount...")}
    componentWillUpdate(){console.log("Component Will Update")}
    componentDidUpdate(){console.log("Component Did Update")}
}

export default About;

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