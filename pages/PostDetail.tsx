
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogPost, PostType, BookReview, PressSummary, Essay } from '../types';

interface PostDetailProps {
  posts: BlogPost[];
}

export const PostDetail: React.FC<PostDetailProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center h-64 animate-fade-in">
        <p className="text-gray-500 font-light mb-4">Content not found.</p>
        <button 
          onClick={() => navigate(-1)}
          className="text-sm border-b border-black pb-0.5 hover:text-gray-500 transition-colors"
        >
          Return
        </button>
      </div>
    );
  }

  const renderBookReview = (book: BookReview) => (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 animate-fade-in">
      {/* Left Column: Cover & Quick Info */}
      <div className="md:col-span-4 lg:col-span-3 space-y-6">
        <div className="aspect-[2/3] w-full bg-gray-50 relative shadow-sm border border-gray-100 sticky top-24">
            <img 
                src={book.coverUrl} 
                alt={book.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
        </div>
        
        <div className="sticky top-[400px] space-y-4 pt-4">
            {book.purchaseLink && (
              <a 
                href={book.purchaseLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center py-3 border border-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Acheter
              </a>
            )}
            
            {book.ageRecommendation && (
               <div className="bg-gray-50 p-4 text-center">
                  <span className="text-xs uppercase text-gray-400 block mb-1">Recommandation</span>
                  <span className="font-serif text-gray-900">{book.ageRecommendation}</span>
               </div>
            )}
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="md:col-span-8 lg:col-span-9 space-y-12">
        {/* Header */}
        <div className="border-b border-gray-100 pb-8">
            <div className="flex justify-between items-start">
                <span className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2 block">{book.genre}</span>
                <div className="text-yellow-600 text-sm tracking-widest">
                    {"★".repeat(book.rating)}{"☆".repeat(5 - book.rating)}
                </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-light text-gray-900 mb-4 leading-tight">{book.title}</h1>
            <p className="text-xl text-gray-500 font-light">{book.author}</p>
            
            {book.reviewerName && (
               <p className="mt-6 text-xs text-gray-400 font-mono">
                 Critique par <span className="text-gray-600 border-b border-gray-200 pb-0.5">{book.reviewerName}</span>
               </p>
            )}
        </div>

        {/* Structure: Summary & Critique */}
        {book.summary || book.critique ? (
           <div className="space-y-12">
              {book.summary && (
                <section>
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">Résumé</h3>
                   <p className="text-lg text-gray-600 font-light leading-relaxed font-serif">{book.summary}</p>
                </section>
              )}
              
              {book.critique && (
                <section className="bg-gray-50 p-8 border-l-2 border-black">
                   <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900 mb-4">L'Avis de {book.reviewerName ? book.reviewerName.split(' ')[0] : 'la rédaction'}</h3>
                   <p className="text-lg text-gray-800 font-light leading-relaxed italic">"{book.critique}"</p>
                </section>
              )}
           </div>
        ) : (
           // Fallback for legacy format
           <div className="prose prose-lg prose-slate text-gray-700 leading-loose font-light max-w-none">
              <p>{book.content}</p>
           </div>
        )}
      </div>
    </div>
  );

  const renderPressSummary = (press: PressSummary) => (
    <div className="max-w-3xl mx-auto animate-fade-in mt-8">
        <header className="mb-12 border-b border-gray-100 pb-8">
            <div className="flex items-center gap-3 text-xs font-mono text-gray-400 mb-4">
                <span>{press.date}</span>
                <span>—</span>
                <span className="uppercase tracking-widest">{press.originalSource}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-medium text-gray-800 mb-6 leading-tight">{press.title}</h1>
            
            {press.context && (
                <div className="font-sans italic font-light text-gray-500 border-l-2 border-gray-200 pl-4 py-1 mb-6">
                    {press.context}
                </div>
            )}

            <div className="flex flex-wrap gap-2">
                {press.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-50 px-3 py-1 rounded-full text-gray-500">#{tag}</span>
                ))}
            </div>
        </header>

        <div className="prose prose-lg prose-slate text-gray-700 leading-loose font-light font-serif">
             {press.summary.split('\n\n').map((p, i) => (
               <p key={i}>{p}</p>
             ))}
        </div>
    </div>
  );

  const renderEssay = (essay: Essay) => (
    <article className="max-w-2xl mx-auto animate-fade-in">
        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-12">
            <div className="text-xs font-mono text-gray-400 mb-6 flex gap-4">
                <span className="uppercase tracking-widest">{essay.category}</span>
                <span>•</span>
                <span>{essay.date}</span>
                <span>•</span>
                <span>{essay.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 mb-6 leading-tight">{essay.title}</h1>
            
            {essay.subtitle && (
                <h2 className="text-xl text-gray-500 font-light italic font-serif">{essay.subtitle}</h2>
            )}
        </header>

        {/* Cover Image (if exists) */}
        {essay.coverUrl && (
            <div className="mb-12">
                 <img src={essay.coverUrl} alt={essay.title} className="w-full h-auto grayscale opacity-90" />
            </div>
        )}

        {/* Content */}
        <div className="prose prose-lg prose-slate text-gray-800 leading-loose font-light font-serif drop-cap">
             {essay.content.split('\n').map((paragraph, i) => (
                 <p key={i} className="mb-6">{paragraph}</p>
             ))}
        </div>
    </article>
  );

  return (
    <div className="min-h-[60vh]">
        <button 
            onClick={() => navigate(-1)} 
            className="group mb-12 flex items-center gap-2 text-sm text-gray-400 hover:text-black transition-colors"
        >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span> Back
        </button>

        {post.type === PostType.BOOK_REVIEW && renderBookReview(post as BookReview)}
        {post.type === PostType.PRESS_SUMMARY && renderPressSummary(post as PressSummary)}
        {post.type === PostType.ESSAY && renderEssay(post as Essay)}
        
        {/* Fallback logic for other types if linked */}
        {!['BOOK_REVIEW', 'PRESS_SUMMARY', 'ESSAY'].includes(post.type) && (
             <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-serif mb-4">{post.title}</h1>
                {/* @ts-ignore */}
                <p className="text-gray-600">{post.content || (post as any).summary || 'No content available.'}</p>
             </div>
        )}
    </div>
  );
};
