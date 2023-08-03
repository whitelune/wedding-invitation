import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="Common-content-background-1">
            <div className="Common-empty-20"></div>
            <div className="Common-sub-content">없는 페이지 입니다 ㅠㅠ</div>
            <div className="Common-empty-20"></div>
            <Link className="Common-link" to="/">
                메인으로 돌아가기
            </Link>
            <div className="Common-empty-20"></div>
        </div>
    );
};
  
export default NotFound;