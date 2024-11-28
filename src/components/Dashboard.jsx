import React, { useState } from 'react';
import './Dashboard.css';

const DashboardCard = ({ title, content, isActive, onClick }) => (
  <div className={`dashboard-card ${isActive ? 'active' : ''}`} onClick={onClick}>
    <h3>{title}</h3>
    {isActive && <div className="card-content">{content}</div>}
  </div>
);

const Dashboard = () => {
  const [activeCard, setActiveCard] = useState(null);

  const dashboardItems = [
    {
      title: '이번 달 미션 현황',
      content: (
        <div className="mission-status">
          <div className="status-item">
            <span className="label">작성한 게시글</span>
            <span className="value">3/10</span>
          </div>
          <div className="status-item">
            <span className="label">남은 기간</span>
            <span className="value">15일</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '30%' }}></div>
          </div>
        </div>
      )
    },
    {
      title: '필수 해시태그 가이드',
      content: (
        <div className="hashtag-guide">
          <div className="guide-item">
            <h4>해시태그 작성 규칙</h4>
            <ul>
              <li>띄어쓰기 없이 작성</li>
              <li>정확한 키워드 입력 필수</li>
              <li>본문 내 #키워드 형식으로도 가능</li>
            </ul>
          </div>
          <div className="guide-item">
            <h4>주의사항</h4>
            <p>해시태그가 정확하지 않으면 활동 참여글로 인정되지 않습니다.</p>
          </div>
        </div>
      )
    },
    {
      title: '활동 가이드라인',
      content: (
        <div className="activity-guidelines">
          <div className="guideline-item">
            <h4>월별 필수 활동</h4>
            <ul>
              <li>월 10개 이상 게시글 작성</li>
              <li>정확한 해시태그 사용</li>
              <li>협찬 게시글 제외</li>
            </ul>
          </div>
          <div className="guideline-item">
            <h4>콘텐츠 제작 팁</h4>
            <ul>
              <li>다양한 컨셉과 관점의 글 작성</li>
              <li>유사 글 반복 작성 지양</li>
              <li>개성있는 제목 작성</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: '이달의 키워드 현황',
      content: (
        <div className="keyword-stats">
          <div className="category-section">
            <h4>운동/피트니스</h4>
            <div className="keyword-list">
              <span className="keyword-tag">실내운동</span>
              <span className="keyword-tag">오운완</span>
              <span className="keyword-tag">웨이트운동</span>
            </div>
          </div>
          <div className="category-section">
            <h4>아웃도어</h4>
            <div className="keyword-list">
              <span className="keyword-tag">겨울등산용품</span>
              <span className="keyword-tag">초겨울백패킹</span>
              <span className="keyword-tag">겨울둘레길</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '어워즈 현황',
      content: (
        <div className="awards-status">
          <div className="awards-info">
            <h4>카테고리 어워즈</h4>
            <p>매월 카테고리별 우수 활동자 선정</p>
            <ul>
              <li>1등: 1명</li>
              <li>2등: 1명</li>
              <li>3등: 10명</li>
            </ul>
          </div>
          <div className="current-rank">
            <span className="rank-label">현재 순위</span>
            <span className="rank-value">5위</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-grid">
        {dashboardItems.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeCard === index}
            onClick={() => setActiveCard(activeCard === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard; 