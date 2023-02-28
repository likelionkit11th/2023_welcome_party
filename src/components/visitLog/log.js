import React from 'react';
import '../../styles/visitLog/log.css'

const log = ({logNum,logTime,comment}) => {

	let commentColor;

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
				{logTime}
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