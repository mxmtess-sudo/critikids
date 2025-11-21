import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Welcome } from './pages/Welcome';
import { BookReviews } from './pages/BookReviews';
import { Essays } from './pages/Essays';
import { PressSummaries } from './pages/PressSummaries';
import { CorrespondenceView } from './pages/Correspondence';
import { PostDetail } from './pages/PostDetail';
import { MOCK_POSTS } from './constants';
import { BlogPost } from './types';

const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>(MOCK_POSTS);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleAddPost = (newPost: BlogPost) => {
    setPosts(current => [newPost, ...current]);
  };

  return (
    <Layout activePath={location.pathname} onNavigate={(path) => navigate(path)}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/books" element={<BookReviews posts={posts} onAddPost={handleAddPost} />} />
        <Route path="/essays" element={<Essays posts={posts} onAddPost={handleAddPost} />} />
        <Route path="/press" element={<PressSummaries posts={posts} onAddPost={handleAddPost} />} />
        <Route path="/letters" element={<CorrespondenceView posts={posts} />} />
        <Route path="/post/:id" element={<PostDetail posts={posts} />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;