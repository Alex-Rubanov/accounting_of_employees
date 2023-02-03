import './app-info.css';

const AppInfo = ({employeeQty, promotionStats}) => {
    return (
        <div className="app-info">
            <h1>Employees accounting in Tech Company</h1>
            <h2>Overall number of employees: {employeeQty}</h2>
            <h2>Bonus will get: {promotionStats}</h2>
        </div>
    )
}

export default AppInfo;
