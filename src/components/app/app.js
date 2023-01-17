import { Component } from 'react';

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
                {name: 'John Doe', salary: 850, increase: true, promotion: false, id: 1},
                {name: 'Michael Smith', salary: 1200, increase: false, promotion: false, id: 2},
                {name: 'Erick Gordon', salary: 2500, increase: false, promotion: false, id: 3},
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
            promotion: false,
            id: ++this.maxId
        }

        this.setState(({data}) => {
            const newArray = [...data, newEmployee];
            return {
                data: newArray
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]};
                }
                return item;
            })
        }))
    }

    render() {
        const employeeQty = this.state.data.length;
        const promotionStats = this.state.data.filter(item => item.increase).length;

        return (
            <div className="app">
                <AppInfo
                    employeeQty={employeeQty}
                    promotionStats={promotionStats}/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data={this.state.data} 
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addEmployee}/>
            </div>
        )
    }
}

export default App;

