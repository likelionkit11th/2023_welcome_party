import React from 'react';
import '../../styles/visitLog/VisitLog.css'
import Log from '../../components/visitLog/log'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MenuBar from '../../components/menuBar/MenuBar';
import SummitModal from '../../components/visitLog/SummitModal';

const VisitLog = () => {
	const [open, setOpen] = useState(false);
	const [logData,setLogData] = useState([]);

	const axiosLog = () => {
        axios.get('http://43.200.55.207:8000/guestbook/')
            .then((res) => {
                console.log(res.data);
                setLogData(res.data);
            })
            .catch((err) => {
                // console.log(err);
            })
    }

    useEffect(() => {
        axiosLog();
    }, []);

	return (
    <div className='visitLog_page_container'>
			<div className='visitLog_page_header'>
				<h1>방명록</h1>
				<div>
					오늘의 소감과 함계 방명록을 작성해 주세요.<br/>
					심한 욕설이 포함된 비난글은 삭제 조치 될 수 있습니다.
				</div>
			</div>
			<div className='vistLog_page_Log'>
				{logData.map((e,i)=>{
						return(
							<Log key ={i} logNum = {i} logTime = {e.create_date} comment = {e.comment}/>
						)
					})}
			</div>
			<div className='vistLog_page_summit'>
				<SummitModal open={open} setOpen={setOpen} />
				<MenuBar open={open} setOpen={setOpen}  />
			</div>
		</div>
	);
};

export default VisitLog;