import React, { useMemo } from 'react';
import './ActivityKeywords.css';

const ActivityKeywords = () => {
  const keywords = useMemo(() => [
    '실내운동', '겨울등산용품', '초겨울라이딩복장', '오운완', '캠핑박람회',
    '초겨울자전거여행', '초겨울백패킹', '겨울둘레길', '피트니스연말결산',
    '초겨울걷기좋은길', '러닝연말결산', '초겨울바이크여행', '겨울러닝가이드',
    '겨울캠핑용품', '겨울유산소운동', '초겨울산행', '겨울라이딩팁',
    '겨울운동복', '초겨울라이딩코스', '겨울러닝용품', '겨울라이딩용품',
    '초겨울글램핑', '11월등산코스', '초겨울러닝코스', '연말캠핑',
    '초겨울걷기', '초겨울러닝복', '크리스마스캠핑', '초겨울캠핑',
    '초겨울마라톤', '등산연말결산', '초겨울운동루틴', '초겨울등산복',
    '초겨울러닝', '초겨울트래킹코스', '웨이트운동', '겨울캠핑요리'
  ], []);

  const KeywordItem = React.memo(({ keyword }) => (
    <div className="keyword-item">
      #{keyword}
    </div>
  ));

  return (
    <div className="keywords-container">
      <h2>활동 미션 키워드</h2>
      <div className="keywords-grid">
        {keywords.map((keyword, index) => (
          <KeywordItem key={index} keyword={keyword} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ActivityKeywords); 