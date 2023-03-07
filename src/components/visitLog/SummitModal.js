import React, { useState } from 'react';
import '../../styles/visitLog/SummitModal.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SummitModal = ({ open, setOpen }) => {
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const onChange = e => {
    setComment(e.target.value);
  };

  const onCloseModal = () => {
    setOpen(!open);
  };

  const onSummit = async e => {
    try {
      e.preventDefault();
      const res = await axios.post('http://43.200.55.207:8000/guestbook/', {
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
        data: {
          comment: comment,
        },
      });
      if (res.status === 201) {
        window.location.reload(true);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modalContainer">
      <div className="closeBox" onClick={onCloseModal}>
        <span className="closeBtn">&#x00d7;</span>
      </div>
      <form className="commentForm" onSubmit={onSummit}>
        <div className="commentBox">
          <textarea
            className="commentInput font"
            onChange={onChange}
            rows="8"
            placeholder="글을 작성해 주세요"
          />
        </div>
        <button className="submitBtn font" type="submit">
          등록하기
        </button>
      </form>
    </div>
  );
};

export default SummitModal;
