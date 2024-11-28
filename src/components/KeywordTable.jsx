import React, { useMemo } from 'react';
import './KeywordTable.css';

const KeywordTable = () => {
  const categories = useMemo(() => ({
    운동: [
      '실내운동', '오운완', '피트니스연말결산', '겨울유산소운동',
      '웨이트운동', '초겨울운동루틴'
    ],
    등산: [
      '겨울등산용품', '초겨울산행', '11월등산코스', '초겨울등산복',
      '초겨울트래킹코스', '등산연말결산'
    ],
    러닝: [
      '러닝연말결산', '겨울러닝가이드', '겨울러닝용품', '초겨울러닝코스',
      '초겨울러닝복', '초겨울마라톤', '초겨울러닝'
    ],
    자전거: [
      '초겨울라이딩복장', '초겨울자전거여행', '초겨울바이크여행',
      '겨울라이딩팁', '초겨울라이딩코스', '겨울라이딩용품'
    ],
    캠핑: [
      '캠핑박람회', '겨울캠핑용품', '초겨울글램핑', '연말캠핑',
      '크리스마스캠핑', '초겨울캠핑', '겨울캠핑요리'
    ],
    기타: [
      '초겨울백패킹', '겨울둘레길', '초겨울걷기좋은길',
      '겨울운동복', '초겨울걷기'
    ]
  }), []);

  return (
    <div className="keyword-table-container">
      <h2>활동 미션 키워드 목록</h2>
      <div className="category-grid">
        {Object.entries(categories).map(([category, keywords]) => (
          <div key={category} className="category-section">
            <h3>{category}</h3>
            <div className="keyword-grid">
              {keywords.map((keyword, index) => (
                <div key={index} className="keyword-item">
                  <span className="keyword-tag">#{keyword}</span>
                  <span className="keyword-count">{keyword.length}자</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(KeywordTable); 