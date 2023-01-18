import { Component } from 'react';

import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: ''
        }
    }

    onUpdateRequest = (e) => {
        const request = e.target.value;
        this.setState(({request}));
        this.props.onUpdateSearch(request)
    }

    render() {
        return (
            <input 
                type="text" 
                className="form-control search-input"
                placeholder="Find employee"
                value={this.state.request}
                onChange={this.onUpdateRequest}/>
        )
    }
}

export default SearchPanel;