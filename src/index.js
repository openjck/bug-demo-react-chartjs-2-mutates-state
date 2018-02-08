import React from 'react';
import ReactDOM from 'react-dom';

import { Line } from 'react-chartjs-2';


class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.dataObject1 = {
            labels: ["Spring", "Summer", "Fall", "Winter"],
            datasets: [{
                label: "Data object 1",
                backgroundColor: '#f00',
                borderColor: '#f00',
                data: [1, 2, 3, 4],
            }],
        };

        this.dataObject2 = {
            labels: ["Spring", "Summer", "Fall", "Winter"],
            datasets: [{
                label: "Data object 2",
                backgroundColor: '#f00',
                borderColor: '#f00',
                data: [4, 3, 2, 1],
            }],
        };

        this.state = { activeDataObject: this.dataObject1 };
    }

    _toggleDataObject = () => {
        if (this.state.activeDataObject === this.dataObject1) {
            this.setState({ activeDataObject: this.dataObject2 });
        } else if (this.state.activeDataObject === this.dataObject2) {
            this.setState({ activeDataObject: this.dataObject1 });
        }
    }

    render() {
        let activeDataObject;
        if (this.state.activeDataObject === this.dataObject1) {
            activeDataObject = 'this.dataObject1';
        } else if (this.state.activeDataObject === this.dataObject2) {
            activeDataObject = 'this.dataObject2';
        }

        return (
            <div>
                <input type="button" value="Toggle data object" onClick={this._toggleDataObject} />
                <Line
                    width={500}
                    height={500}
                    options={{
                        maintainAspectRatio: false,
                        responsive: false,
                    }}
                    data={this.state.activeDataObject}
                />
                <p>Data object being passed to react-chartjs-2:<br />{activeDataObject}</p>
                <p><code>this.dataObject1.datasets[0].label</code>:<br />{this.dataObject1.datasets[0].label}</p>
                <p><code>this.dataObject1.datasets[0].data</code>:<br /><code>[{this.dataObject1.datasets[0].data.join(', ')}]</code></p>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'));
