import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddHabit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            daysweek: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
            notification: false,
            checkeddays: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.addHabit = this.addHabit.bind(this);
    }

    addHabit () {
        if (localStorage.getItem("habits") !== null) {
            var obj = JSON.parse(localStorage.getItem("habits"));
        } else {
            var obj = [];
        }
        obj.push(this.state);
        localStorage.setItem("habits", JSON.stringify(obj));
    }

    handleChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="add-habit">
            <form className="col">
                <div className="input-field col">
                    <input id="name" name="name" value={this.state.name} onChange={this.handleChange} type="text"/>
                    <label htmlFor="name">Nome</label>
                </div>
                <div className="input-field col">
                    <select>
                        <option value="" disabled selected>Frequência</option>
                        <option value="1">Diariamente</option>
                        <option value="2">Semanalmente</option>
                    </select>
                </div>
                <label className="notification">
                    <input type="checkbox" name="notification" checked={this.state.notification} onChange={this.handleChange} className="filled-in" />
                    <span>Ativar notificação</span>
                </label>
                <Link to="/" onClick={this.addHabit} className="waves-effect waves-light btn-large">Criar hábito</Link>
            </form>
            </div>
        );
    }
}

export default AddHabit;