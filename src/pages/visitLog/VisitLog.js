import React from 'react';
import '../../styles/visitLog/VisitLog.css'
import Log from '../../components/visitLog/log'
import axios from 'axios';
import { useEffect, useState } from 'react';

const VisitLog = () => {

	return (
    <div className='visitLog_page_container'>
			<div className='visitLog_page_header'>
				<h1>방명록</h1>
				<div>
					오늘의 소감과 함계 방명록을 작성해 주세요.<br/>
					심한 욕설이 포함된 비난글은 삭제 조치 될 수 있습니다.
			</div>
		</div>
		<Log/>
  </div>
	);
};

export default VisitLog;