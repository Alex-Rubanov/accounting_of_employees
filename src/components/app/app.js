import { Component } from 'react'

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John Doe', salary: 850, increase: true, id: 1},
                {name: 'Michael Smith', salary: 1200, increase: false, id: 2},
                {name: 'Erick Gordon', salary: 2500, increase: false, id: 3},
            ]
        }
        this.maxId = this.state.data.length;
    }

    deleteEmployee = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addEmployee = (name, salary) => {
        const newEmployee = {
            name,
            salary,
            increase: false,
            id: ++this.maxId
        }

        this.setState(({data}) => {
            const newArray = [...data, newEmployee];
            return {
                data: newArray
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList data={this.state.data} onDelete={this.deleteEmployee}/>
                <EmployeesAddForm onAdd={this.addEmployee}/>
            </div>
        )
    }
}

export default App;

