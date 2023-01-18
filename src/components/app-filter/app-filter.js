
import './app-filter.css';

const AppFilter = (props) => {
    const btnsData = [
        {name: 'all', label: 'All Employees'},
        {name: 'promoted', label: 'Promotion'},
        {name: 'salaryFilter', label: 'Salary more than 1000€'}

    ]

    const btns = btnsData.map(({name, label}) => {
        const active = (props.filter === name);
        const clazz = active ? 'btn-light' : 'btn-outline-light';

        return (
            <button 
                className={`btn ${clazz}`}
                key={name}
                type="button"
                onClick={() => props.onUpdateFilter(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {btns}
        </div>
    );

}

export default AppFilter;