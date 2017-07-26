import React from 'react';
import Axios from 'axios';

class Main extends React.Component{
	constructor(){
		super();

		this.state ={
			topic: "",
			startYear: "",
			endYear: ""
		};
	}

handleChange = (event) => {
	// console.log(event.target.value);
	this.setState({
		[event.target.id] : event.target.value,

	})
}

handleSubmit = (event) => {
	event.preventDefault()
	Axios.get('www.api.newyorktimes.com',{
		topic: this.state.topic
	})

}


	render(){
		return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
  				<div className="row justify-content-center">
    				<h1 className="display-3">New York Times React Search</h1>
    			</div>
				</div>
			
			<div className="row justify-content-center">
				<div className="col-md-11">
					<div className="card">
						<div className="card-header">
							Search for Articles
						</div>
						<div className="card-block">
							<form>
								<div className="form-goup">
							    <label htmlFor="topic">Topic:</label>
							    <input type="text" 
							    value={this.state.topic}
							    onChange={this.handleChange} 
							    className="form-control" 
							    id="topic" 
							    placeholder="Example: Bernie Sanders"
							    required 
							    />
									<br />
							    <label htmlFor="startYear">Start Year:</label>
							    <input type="number" 
							    value={this.state.startYear}
							    onChange={this.handleChange} 
							    className="form-control" 
							    id="startYear" 
							    placeholder="Example: 2015"
							    required 
							    />
							  	<br />
							    <label htmlFor="endYear">End Year:</label>
							    <input type="number" 
							    value={this.state.endYear}
							    onChange={this.handleChange} 
							    className="form-control" 
							    id="endYear" 
							    placeholder="Example: 2017"
							    required 
							    />
								</div>
								<br />
								<button type="button" className="btn btn-secondary" onClick={this.handleSubmit}>Search</button>
							</form>
						</div>
					</div>
				</div>
			</div>	
		</div>
		)
	}
}

export default Main;