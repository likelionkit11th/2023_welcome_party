import React from 'react';
import '../../styles/visitLog/log.css'

const log = () => {
    return (
			<div className='log_container'>
				<div className='log_time'>
					2023.03.03 3:18PM
				</div>
				<div className='log_commentLine'>
					<div className='log_timeCircle'>ㅤ</div>
					<hr className='log_line'/>
					<div className='log_comment'>
						학과 친구들을 많이 알게된 계기가 되어 너무 좋았어요~~ 학과생활이 너무 기대돼요.
					</div>
					<hr className='log_line' id='end'/>
				</div>
			</div>
    );
};

export default log;