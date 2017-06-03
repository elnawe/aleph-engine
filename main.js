import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {

    render () {
        return (
            <div>
                Test
            </div>
        );
    }
};

ReactDOM.render(<div>Test</div>, document.getElementById('render'));
