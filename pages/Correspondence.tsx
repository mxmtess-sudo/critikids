import React, { useState } from 'react';
import { BlogPost, Correspondence, PostType } from '../types';

interface CorrespondenceProps {
  posts: BlogPost[];
}

export const CorrespondenceView: React.FC<CorrespondenceProps> = ({ posts }) => {
  // Retrieve the specific correspondence thread
  const thread = posts.find((p): p is Correspondence => p.type === PostType.CORRESPONDENCE);
  
  // Reverse the initial messages to show latest first (assuming mock data is chronological)
  const [messages, setMessages] = useState(
    thread?.messages ? [...thread.messages].reverse() : []
  );
  
  const [showForm, setShowForm] = useState(false);
  const [newContent, setNewContent] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');

  // Header Image State
  const [headerImage, setHeaderImage] = useState("https://picsum.photos/id/1048/1200/800");
  const [isEditingHeader, setIsEditingHeader] = useState(false);

  const handlePostMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent || !newTitle) return;

    const newMessage = {
      id: Date.now().toString(),
      sender: 'them' as const,
      title: newTitle,
      text: newContent,
      image: newImageUrl || undefined,
      timestamp: new Date().toISOString().split('T')[0] // Simple date for now
    };

    setMessages([newMessage, ...messages]);
    setNewContent('');
    setNewTitle('');
    setNewImageUrl('');
    setShowForm(false);
  };

  if (!thread) return null;

  return (
    <div className="animate-fade-in space-y-20">
      {/* Hero / Header */}
      <header className="relative w-full bg-gray-100 h-[40vh] flex items-center justify-center overflow-hidden mb-16 group">
        <img 
          src={headerImage} 
          alt="Brazil View" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Edit Header Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
             <button 
                onClick={() => setIsEditingHeader(!isEditingHeader)}
                className="bg-white/80 backdrop-blur text-xs uppercase tracking-widest px-3 py-1 hover:bg-white"
             >
                Edit Cover
             </button>
        </div>

        {isEditingHeader && (
             <div className="absolute inset-x-0 top-0 p-4 bg-white/95 border-b border-gray-200 z-30 flex gap-2">
                 <input 
                   type="text" 
                   value={headerImage}
                   onChange={(e) => setHeaderImage(e.target.value)}
                   placeholder="Header Image URL..."
                   className="flex-1 text-sm p-2 border border-gray-300 font-light"
                 />
                 <button 
                   onClick={() => setIsEditingHeader(false)}
                   className="px-4 py-2 bg-black text-white text-xs uppercase tracking-widest"
                 >
                   Done
                 </button>
             </div>
        )}

        <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm max-w-2xl mx-4 shadow-sm border border-gray-200">
            <h2 className="text-4xl font-serif font-light mb-4 text-gray-900">Les cahiers du Brésil</h2>
            {thread.intro && (
              <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                {thread.intro}
              </p>
            )}
        </div>
      </header>

      <div className="flex justify-end max-w-5xl mx-auto px-4 mb-8">
        <button 
          onClick={() => setShowForm(!showForm)}
          className="text-xs uppercase tracking-widest border border-gray-200 px-4 py-2 hover:bg-black hover:text-white transition-colors"
        >
          {showForm ? 'Close Editor' : '+ New Chronicle'}
        </button>
      </div>

      {/* Input Form */}
      {showForm && (
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handlePostMessage} className="bg-gray-50 p-8 animate-fade-in border border-gray-100">
            <h3 className="font-serif text-lg mb-6">Ajouter une chronique</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Titre / Date</label>
                <input 
                  type="text"
                  placeholder="e.g. Chronique du 26 septembre 2025"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white font-serif"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">URL de l'image (Optionnel)</label>
                <input 
                  type="url"
                  placeholder="https://..."
                  value={newImageUrl}
                  onChange={(e) => setNewImageUrl(e.target.value)}
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white"
                />
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Contenu</label>
                <textarea 
                  rows={8}
                  placeholder="Le texte de la chronique..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-3 border border-gray-200 focus:outline-none focus:border-black transition-colors bg-white resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button 
                  type="submit" 
                  disabled={!newContent || !newTitle}
                  className="bg-black text-white px-8 py-3 text-sm tracking-widest hover:bg-gray-800 disabled:opacity-50 transition-colors"
                >
                  PUBLIER
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

      {/* Timeline / Chronicles List */}
      <div className="max-w-5xl mx-auto space-y-24 px-4">
        {messages.map((msg) => (
          <article key={msg.id} className="grid grid-cols-1 md:grid-cols-12 gap-12 animate-fade-in items-start">
             
             {/* Left Column: Title & Image */}
             <div className="md:col-span-5 lg:col-span-4 space-y-6">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-400 leading-tight">
                  {msg.title}
                </h3>
                
                {msg.image && (
                  <div className="aspect-video w-full overflow-hidden shadow-sm border border-gray-100 relative group">
                    <img 
                      src={msg.image} 
                      alt={msg.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                )}
             </div>

             {/* Right Column: Text Content */}
             <div className="md:col-span-7 lg:col-span-8">
                <div className="prose prose-lg prose-slate text-gray-700 leading-loose font-light font-serif">
                   {msg.text.split('\n').map((paragraph, idx) => (
                     <p key={idx} className="mb-6">{paragraph}</p>
                   ))}
                </div>
             </div>
          </article>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-12 text-gray-400 italic">
            Aucune chronique pour le moment.
          </div>
        )}
      </div>
    </div>
  );
};