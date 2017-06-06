import React from 'react';
import ReactDOM from 'react-dom';
import Sprite from 'sprites/sprite';
import DataStore from 'stores/data-store';

const testStore = new DataStore({name: 'Test', state: {charName:'',health: '',position:''}});

class Block extends React.Component {

    constructor () {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleStore = this.handleStore.bind(this);
        this.setQuietly = this.setQuietly.bind(this);
        this.state = _.extend({}, testStore.state, {quietly: false});
    }

    componentWillMount () {
        testStore.addListener('change', this.handleStore);
    }

    componentWillUnmount () {
        testStore.removeListener('change', this.handleStore);
    }

    render () {
        return (
            <div>
            {this.renderInput('charName')}
            {this.renderInput('health')}
            {this.renderInput('position')}
            <input type="checkbox" onChange={this.setQuietly} value={this.state.quietly} /> set quietly
            </div>
        );
    }

    setQuietly (e) {
        this.setState({
            quietly: e.target.checked
        });
    }

    renderInput (name) {
        return <div>{name}: <input type="text" name={name} onChange={this.handleChange} value={this.state[name]} /></div>;
    }

    handleChange (e) {
        let cs = {state: _.extend({}, this.state), quietly: this.state.quietly};
        cs.state[e.target.name] = e.target.value;
        console.log(cs);
        testStore.update_state = cs;
    }

    handleStore () {
        this.setState(testStore.state);
    }
}

ReactDOM.render(<Block />, document.getElementById('render'));
