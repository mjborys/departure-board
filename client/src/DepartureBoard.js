import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './DepartureBoard.css';
import {FormatDate,FormatLateness} from './utils';

class DepartureBoard extends Component {
	state = {
    	departures: []
  	};

  	componentDidMount() {
    	this.callApi()
      	.then(res => {
      		this.setState({ departures: JSON.parse(res.departures) });
      	})
      	.catch(err => console.log(err));
  	}

  	callApi = async () => {
    	const response = await fetch('/schedules/departures');
    	const body = await response.json();

    	if (response.status !== 200) throw Error(body.message);
    	return body;
  	};

	render() {
		return (
			<div className="departure-board-container">
				<ReactTable
					data={this.state.departures}
					columns={[{
						Header: 'Train #',
						accessor: 'Trip',
						maxWidth: 100
					}, {
						Header: 'Origin',
						accessor: 'Origin',
						Cell: row => (
							<span>
			            <span style={{
			              color: row.value === 'South Station' ? '#ff2e00' : '#ffbf00',
			              transition: 'all .3s ease'
			            }}>            
			              &#x25cf;
			            </span> 
			            <span style={{ 
			            	color: '#57d500',
			            	display: row.value === 'South Station' ? 'none' : 'inline',
			            	 transition: 'all .3s ease'
			           	}}>
		            		&#x25cf;
		            		</span>
		            		{row.value}
						</span>	)
			        }, {
						Header: 'Destination',
						accessor: 'Destination'
					}, {
						Header: 'Scheduled Time',
						accessor: 'ScheduledTime',
						Cell: row => (
							<div className="center-align-cell"> {FormatDate(row.value)} </div>
						)
					}, {
						Header: 'Lateness',
						accessor: 'Lateness',
						Cell: row => (
							<div className="center-align-cell"> {FormatLateness(row.value)} </div>
						)
					}, {
						Header: 'Track',
						accessor: 'Track',
						Cell: row => (
							<div className="center-align-cell"> {row.value} </div>
						)
					}, {
						Header: 'Status',
						accessor: 'Status'
					}]}
					className="-striped -highlight"
				/>
			</div>
		)
	}
}

export default DepartureBoard