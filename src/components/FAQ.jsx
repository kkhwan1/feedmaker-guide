import React, { useState, useCallback, useMemo } from 'react';
import './FAQ.css';

const FAQItem = React.memo(({ item, isActive, onToggle }) => (
  <div className="faq-item">
    <div 
      className="faq-question" 
      onClick={onToggle}
    >
      {item.question}
    </div>
    {isActive && (
      <div className="faq-answer">
        {item.answer}
      </div>
    )}
  </div>
));

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = useMemo(() => [
    {
      question: '활동 미션 키워드는 언제 업데이트되나요?',
      answer: '활동 미션 키워드는 활동 기간 4개월 동안 매월 1회(4주 간격) 정기 업데이트됩니다.'
    },
    {
      question: '하나의 게시글에 활동 미션 키워드 해시태그를 여러 개 삽입할 수 있나요?',
      answer: '하나의 게시글에 여러 개의 활동 미션 키워드 해시태그를 삽입할 수 있습니다. 다만, 월별 활동 기준 달성 여부는 게시글 수를 기준으로 합니다.'
    },
    {
      question: '게시글 유효성 기준은 어떻게 되나요?',
      answer: '선정성, 폭력성, 불법성/사행성 요소가 포함된 게시글, 협찬 게시글, 무성의한 게시글은 유효하지 않습니다.'
    },
    {
      question: '월별 활동 기준을 만족하지 못한 경우에는 어떻게 되나요?',
      answer: '월별 활동 기준인 10개 미달일 경우, 해당 월의 피드메이커 활동비가 지급되지 않습니다.'
    },
    {
      question: '카테고리 어워즈 수상 기준은 어떻게 되나요?',
      answer: '카테고리별 당월 피드메이커 활동 게시글 기준 월간 최다 홈피드 유입 클릭 수를 기록한 창작자들에게 시상됩니다.'
    }
  ], []);

  const toggleFAQ = useCallback((index) => {
    setActiveIndex(prev => prev === index ? null : index);
  }, []);

  return (
    <div className="faq-container">
      <h2>자주 묻는 질문</h2>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          isActive={activeIndex === index}
          onToggle={() => toggleFAQ(index)}
        />
      ))}
    </div>
  );
};

export default React.memo(FAQ); 