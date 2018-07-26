import React, { Component } from 'react';

class Divider extends Component {
	render() {
		let styles = {
			borderTop: 'solid',
			borderWidth: '1.5px',
			borderColor: '#424874',
			width: this.props.width,
			margin: '1.5% auto 1.5% auto'
		};
		return(
				<div style={styles} />
		)
	}
}

export default Divider;