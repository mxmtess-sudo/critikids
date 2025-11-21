
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost, PressSummary, PostType } from '../types';
import { generatePressSummary } from '../services/geminiService';

interface PressSummariesProps {
  posts: BlogPost[];
  onAddPost: (post: BlogPost) => void;
}

export const PressSummaries: React.FC<PressSummariesProps> = ({ posts, onAddPost }) => {
  const navigate = useNavigate();
  const [summaries, setSummaries] = useState<PressSummary[]>(
    posts.filter((p): p is PressSummary => p.type === PostType.PRESS_SUMMARY)
  );
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!inputText.trim()) return;
    
    setIsGenerating(true);
    setError(null);
    
    try {
      const result = await generatePressSummary(inputText);
      
      const newSummary: PressSummary = {
        id: Date.now().toString(),
        type: PostType.PRESS_SUMMARY,
        title: result.title,
        summary: result.summary,
        tags: result.tags,
        date: new Date().toISOString().split('T')[0],
        originalSource: 'User Input',
        context: 'Généré par IA'
      };

      setSummaries([newSummary, ...summaries]);
      onAddPost(newSummary);
      setShowInput(false);
      setInputText('');
    } catch (err) {
      setError("Failed to generate summary. Please check your API key and try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="animate-fade-in space-y-24">
      <header className="relative text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-4xl font-serif font-light mb-8 text-gray-700">Synthèses</h2>
        <p className="text-gray-600 font-light leading-relaxed font-serif text-lg">
          Dans cette section, je publierai la synthèse de quelques articles dont l'intérêt mérite à mes yeux qu'on s'y attarde
        </p>
        
        <button 
          onClick={() => setShowInput(!showInput)}
          className="absolute right-0 top-0 text-xs text-gray-300 hover:text-gray-500 transition-colors opacity-50 hover:opacity-100"
          title="Ajouter une synthèse par IA"
        >
          + AI
        </button>
      </header>

      {/* AI Input Section */}
      {showInput && (
        <div className="mb-12 bg-gray-50 p-6 md:p-8 animate-fade-in border border-gray-100">
          <h3 className="font-serif text-lg mb-4">Generate Summary with Gemini</h3>
          <textarea
            className="w-full p-4 border border-gray-200 bg-white mb-4 font-light focus:outline-none focus:border-gray-400 h-48 resize-none"
            placeholder="Paste the full article text here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="flex justify-end">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !inputText}
              className={`px-6 py-2 bg-black text-white text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-opacity ${isGenerating ? 'animate-pulse' : ''}`}
            >
              {isGenerating ? 'Summarizing...' : 'Generate Post'}
            </button>
          </div>
        </div>
      )}

      {/* Editorial List Layout */}
      <div className="space-y-24">
        {summaries.map((item) => (
          <article 
            key={item.id} 
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column: Title & Context */}
            <div className="md:col-span-5 lg:col-span-4 space-y-4 sticky top-24">
               <h3 
                  className="text-2xl font-serif font-bold text-gray-400 leading-tight cursor-pointer hover:text-gray-600 transition-colors"
                  onClick={() => navigate(`/post/${item.id}`)}
               >
                 {item.title}
               </h3>
               
               {item.context && (
                 <div className="font-sans italic font-light text-sm text-gray-500 leading-relaxed border-l-2 border-gray-200 pl-3">
                   {item.context}
                 </div>
               )}

               <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider text-gray-400 border border-gray-100 px-2 py-1">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
            
            {/* Right Column: Content */}
            <div className="md:col-span-7 lg:col-span-8">
              <div className="prose prose-lg prose-slate text-gray-700 leading-loose font-light font-serif">
                {item.summary.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 text-justify">{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
