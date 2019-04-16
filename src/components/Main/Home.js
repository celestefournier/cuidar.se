import React, { Component } from 'react';
import Card from '../Card/Card'
import AddButton from '../Button/AddButton';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            habits: [],
            isChecked: true
        }
        this.getHabits = this.getHabits.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("habits") !== null) {
            this.setState({habits: JSON.parse(localStorage.getItem("habits"))});
        }
    }

    getHabits () {
        var arr = [{name: "gustavo"}]
        console.log(arr);
        return arr;
    }

    render() {
        return (
            <div className="home">
                {this.state.habits.map((item => <Card key="" name={item.name} checked={this.state.isChecked}/> ))}
                <div className="nothing-here">
                    <p>Ainda não há nenhum hábito criado :(</p>
                    <p>Clique no botão de "+" para criar um novo hábito</p>
                </div>
                <AddButton />
            </div>
        );
    }
}

export default Home;