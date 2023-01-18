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
            ],
            request: '',
            filter: 'all',
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

    searchEmployee = (data, request) => {
        if (request.length === 0) {
            return data;
        }

        return data.filter(item => {
            return item.name[0].toLowerCase() === request[0].toLowerCase();
        })
    }

    onUpdateSearch = (request) => {
        this.setState(({request}));
    }

    filterPost = (data, filter) => {
        switch(filter) {
            case 'promoted':
                return data.filter(item => item.promotion);
            case 'salaryFilter':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    onUpdateFilter = (filter) => {
        this.setState(({filter}))
    }

    render() {
        const {data, request, filter} = this.state;
        const employeeQty = this.state.data.length;
        const promotionStats = this.state.data.filter(item => item.increase).length;
        const filteredData = this.filterPost(this.searchEmployee(data, request), filter);

        return (
            <div className="app">
                <AppInfo
                    employeeQty={employeeQty}
                    promotionStats={promotionStats}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                    data={filteredData} 
                    onDelete={this.deleteEmployee}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAdd={this.addEmployee}/>
            </div>
        )
    }
}

export default App;

