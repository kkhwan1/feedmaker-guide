import React from 'react';
import './GuidelineSteps.css';

const GuidelineSteps = () => {
  const steps = [
    {
      step: 1,
      title: '블로그 글로 발행할 활동 미션 키워드를 고르고',
    },
    {
      step: 2,
      title: '활동 미션 키워드 해시태그는 필수 입력',
      description: '띄어쓰기 없이 해시태그로 작성해주세요.'
    },
    {
      step: 3,
      title: '활동 미션 키워드에 맞는 블로그 글 발행!',
      description: '활동 미션 키워드를 제목에 개성있게 표현해주세요!'
    }
  ];

  return (
    <div className="guidelines-container">
      <h2>피드메이커 활동 필수 팁</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="step-number">STEP. {step.step}</div>
            <h3>{step.title}</h3>
            {step.description && <p>{step.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuidelineSteps; 