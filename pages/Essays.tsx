import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost, Essay, PostType, EssayCategory } from '../types';

interface EssaysProps {
  posts: BlogPost[];
  onAddPost: (post: BlogPost) => void;
}

export const Essays: React.FC<EssaysProps> = ({ posts, onAddPost }) => {
  const navigate = useNavigate();
  const essays = posts.filter((p): p is Essay => p.type === PostType.ESSAY);
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [category, setCategory] = useState<EssayCategory>('SOCIETY');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const newEssay: Essay = {
          id: Date.now().toString(),
          type: PostType.ESSAY,
          title,
          subtitle,
          category,
          coverUrl,
          content,
          date: new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }),
          readTime: `${Math.ceil(content.length / 500)} min`
      };
      onAddPost(newEssay);
      setShowForm(false);
      setTitle(''); setSubtitle(''); setCoverUrl(''); setContent('');
  };

  const galleries: { title: string; key: EssayCategory }[] = [
    { title: 'Histoire', key: 'HISTORY' },
    { title: 'Politique et géopolitique', key: 'POLITICS' },
    { title: 'Société', key: 'SOCIETY' },
  ];

  return (
    <div className="space-y-20 animate-fade-in">
      <header className="mb-12 border-b border-gray-100 pb-8 flex justify-between items-end">
        <div>
            <h2 className="text-3xl font-serif font-light mb-4">Articles</h2>
            <p className="text-gray-500 font-light">Réflexions sur l'histoire, la politique et la société.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="text-xs uppercase tracking-widest border border-gray-200 px-4 py-2 hover:bg-black hover:text-white transition-colors"
        >
          {showForm ? 'Fermer' : '+ Nouvel Article'}
        </button>
      </header>

      {/* Add Essay Form */}
      {showForm && (
        <div className="bg-gray-50 p-8 border border-gray-100 mb-12 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Titre</label>
                        <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Sous-titre</label>
                        <input type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Catégorie</label>
                        <select value={category} onChange={e => setCategory(e.target.value as EssayCategory)} className="w-full p-2 border border-gray-200 bg-white">
                            {galleries.map(g => <option key={g.key} value={g.key}>{g.title}</option>)}
                        </select>
                    </div>
                     <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">URL de l'image</label>
                        <input type="url" placeholder="https://..." value={coverUrl} onChange={e => setCoverUrl(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Contenu</label>
                    <textarea rows={8} value={content} onChange={e => setContent(e.target.value)} className="w-full p-2 border border-gray-200" />
                </div>

                <button type="submit" className="bg-black text-white px-8 py-3 text-sm tracking-widest w-full hover:bg-gray-800">PUBLIER</button>
            </form>
        </div>
      )}

      {galleries.map((gallery) => {
        const galleryEssays = essays.filter(e => e.category === gallery.key);
        if (galleryEssays.length === 0) return null;

        return (
          <section key={gallery.key} className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
               <h3 className="text-lg font-medium text-gray-800">{gallery.title}</h3>
               <span className="text-xs text-gray-400 uppercase tracking-wider">{galleryEssays.length} Articles</span>
            </div>
            
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {galleryEssays.map((essay) => (
                <div 
                  key={essay.id} 
                  onClick={() => navigate(`/post/${essay.id}`)}
                  className="min-w-[280px] w-[280px] snap-start flex-shrink-0 group cursor-pointer flex flex-col h-full"
                >
                  {/* Cover Image */}
                  <div className="aspect-video w-full bg-gray-50 overflow-hidden mb-4 shadow-sm relative border border-gray-100">
                    {essay.coverUrl ? (
                      <img 
                        src={essay.coverUrl} 
                        alt={essay.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300 bg-gray-100">
                         <span className="font-serif italic">Critikids</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                      <div className="mb-2 text-xs font-mono text-gray-400">
                          {essay.date} • {essay.readTime}
                      </div>
                      <h4 className="font-serif text-lg leading-tight text-gray-900 group-hover:text-black transition-colors mb-2">
                        {essay.title}
                      </h4>
                      {essay.subtitle && (
                          <p className="text-sm text-gray-500 font-light line-clamp-2">{essay.subtitle}</p>
                      )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};