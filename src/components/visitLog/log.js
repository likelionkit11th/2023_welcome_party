import React from 'react';
import '../../styles/visitLog/log.css'

const log = ({logNum,logTime,comment}) => {

	let commentColor;
	let create_date = logTime.substr(0,16).replaceAll("-",".").replace("T"," ") + "PM";

	switch (logNum % 3) {
		case 0:
			commentColor = '#F1F0FF'
			break;
		case 1:
			commentColor = "#F3FFF2"
			break;
		case 2:
			commentColor = "#EDF6FF"
			break;
		default:
			commentColor = '#F1F0FF'
			break;
	}

	return (
		<div className='log_container'>
			<div className='log_time'>
				{/* 2023.03.02 17:00PM */}
				{create_date}
			</div>
			<div className='log_commentLine'>
				<div className='log_timeCircle'>ㅤ</div>
				<hr className='log_line'/>
				<div className='log_comment' style={{backgroundColor : commentColor}}>
					{comment}
				</div>
				<hr className='log_line' id='end'/>
			</div>
		</div>
	);
};

export default log;