import React, { Suspense, lazy } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import KeywordTable from './components/KeywordTable';

const ActivityKeywords = lazy(() => import('./components/ActivityKeywords'));
const GuidelineSteps = lazy(() => import('./components/GuidelineSteps'));
const FAQ = lazy(() => import('./components/FAQ'));

const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner">로딩중...</div>
  </div>
);

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>피드메이커 가이드</h1>
      </header>
      
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Dashboard />
          <ActivityKeywords />
          <GuidelineSteps />
          <div className="notice-box">
            <h3>유의해주세요</h3>
            <p>협찬 게시글은 활동참여글 카운팅에서 제외됩니다.</p>
          </div>
          <FAQ />
          <KeywordTable />
        </Suspense>
      </main>
    </div>
  );
}

export default App; 