import React, { useState } from "react";
import "../../styles/visitLog/SummitModal.css";
import axios from "axios";

const SummitModal = ({open, setOpen}) => {
  const [comment, setComment] = useState("");

  const onChange = (e) => {
    setComment(e.target.value);
  };

  const onCloseModal = () => {
    setOpen(!open);
  }

  const onSummit = async (e) => {
    try {
      const res = await axios.post(
        "http://43.200.55.207:8000/guestbook",
        // "https://jsonplaceholder.typicode.com/posts", axios 테스트 코드
        {
          headers: {
            "Content-Type": "application/json",
            withCredentials: true,
          },
          data: {
            comment: comment,
          },
        }
      );
      console.log(res);
      if (res.status === 200) {
        setOpen(!open);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    open ? (<div className="modalContainer">
      <div class="closeBox" onClick={onCloseModal}>
        <span class="closeBtn">    
                &#x00d7;
          </span>
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
    </div>) : null
  );
};

export default SummitModal;
