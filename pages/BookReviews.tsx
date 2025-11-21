import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogPost, BookReview, PostType, BookGenre } from '../types';

interface BookReviewsProps {
  posts: BlogPost[];
  onAddPost: (post: BlogPost) => void;
}

export const BookReviews: React.FC<BookReviewsProps> = ({ posts, onAddPost }) => {
  const navigate = useNavigate();
  const reviews = posts.filter((p): p is BookReview => p.type === PostType.BOOK_REVIEW);
  const [showForm, setShowForm] = useState(false);

  // Form State
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState<BookGenre>('ADVENTURE');
  const [coverUrl, setCoverUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [critique, setCritique] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: BookReview = {
        id: Date.now().toString(),
        type: PostType.BOOK_REVIEW,
        title,
        author,
        genre,
        coverUrl: coverUrl || 'https://placehold.co/400x600/e2e8f0/1e293b?text=No+Cover',
        summary,
        critique,
        rating,
        date: new Date().toISOString().split('T')[0],
        content: summary // Fallback
    };
    onAddPost(newBook);
    setShowForm(false);
    // Reset form
    setTitle(''); setAuthor(''); setCoverUrl(''); setSummary(''); setCritique('');
  };

  const galleries: { title: string; key: BookGenre }[] = [
    { title: 'Aventure', key: 'ADVENTURE' },
    { title: 'Bande dessinée', key: 'COMIC' },
    { title: 'Historiques', key: 'HISTORY' },
    { title: 'Biographies', key: 'BIOGRAPHY' },
  ];

  return (
    <div className="space-y-20 animate-fade-in">
      <header className="mb-12 flex justify-between items-end">
        <div>
            <h2 className="text-3xl font-serif font-light mb-4">Livres</h2>
            <p className="text-gray-500 font-light">Ma bibliothèque, classée.</p>
        </div>
        <button 
          onClick={() => setShowForm(!showForm)}
          className="text-xs uppercase tracking-widest border border-gray-200 px-4 py-2 hover:bg-black hover:text-white transition-colors"
        >
          {showForm ? 'Fermer' : '+ Ajouter un Livre'}
        </button>
      </header>

      {/* Add Book Form */}
      {showForm && (
        <div className="bg-gray-50 p-8 border border-gray-100 mb-12 animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Titre</label>
                        <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Auteur</label>
                        <input required type="text" value={author} onChange={e => setAuthor(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Genre</label>
                        <select value={genre} onChange={e => setGenre(e.target.value as BookGenre)} className="w-full p-2 border border-gray-200 bg-white">
                            {galleries.map(g => <option key={g.key} value={g.key}>{g.title}</option>)}
                        </select>
                    </div>
                     <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">URL de couverture</label>
                        <input type="url" placeholder="https://..." value={coverUrl} onChange={e => setCoverUrl(e.target.value)} className="w-full p-2 border border-gray-200" />
                    </div>
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Résumé</label>
                    <textarea rows={3} value={summary} onChange={e => setSummary(e.target.value)} className="w-full p-2 border border-gray-200" />
                </div>
                
                <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Critique</label>
                    <textarea rows={3} value={critique} onChange={e => setCritique(e.target.value)} className="w-full p-2 border border-gray-200" />
                </div>

                <button type="submit" className="bg-black text-white px-8 py-3 text-sm tracking-widest w-full hover:bg-gray-800">ENREGISTRER</button>
            </form>
        </div>
      )}

      {galleries.map((gallery) => {
        const galleryBooks = reviews.filter(book => book.genre === gallery.key);
        if (galleryBooks.length === 0) return null;

        return (
          <section key={gallery.key} className="space-y-6">
            <div className="flex items-baseline justify-between border-b border-gray-100 pb-2">
               <h3 className="text-lg font-medium text-gray-800">{gallery.title}</h3>
               <span className="text-xs text-gray-400 uppercase tracking-wider">{galleryBooks.length} Volumes</span>
            </div>
            
            <div className="flex overflow-x-auto pb-8 gap-6 snap-x scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
              {galleryBooks.map((book) => (
                <div 
                  key={book.id} 
                  onClick={() => navigate(`/post/${book.id}`)}
                  className="min-w-[180px] w-[180px] snap-start flex-shrink-0 group cursor-pointer"
                >
                  <div className="aspect-[2/3] w-full bg-gray-50 overflow-hidden mb-3 shadow-sm relative border border-gray-100">
                    <img 
                      src={book.coverUrl} 
                      alt={book.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                    />
                  </div>
                  
                  <h4 className="font-serif text-base leading-tight text-gray-900 group-hover:text-black transition-colors line-clamp-2">
                    {book.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Fallback for other books not in the main categories */}
      {reviews.filter(r => !['HISTORY', 'BIOGRAPHY', 'COMIC', 'ADVENTURE'].includes(r.genre)).length > 0 && (
         <section className="space-y-6 pt-8 opacity-75">
            <div className="border-b border-gray-100 pb-2">
               <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest">Autres Lectures</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {reviews.filter(r => !['HISTORY', 'BIOGRAPHY', 'COMIC', 'ADVENTURE'].includes(r.genre)).map(book => (
                 <div 
                    key={book.id} 
                    onClick={() => navigate(`/post/${book.id}`)}
                    className="space-y-2 cursor-pointer hover:opacity-75 transition-opacity"
                 >
                    <p className="font-serif text-sm">{book.title}</p>
                    <p className="text-xs text-gray-400">{book.author}</p>
                 </div>
               ))}
            </div>
         </section>
      )}
    </div>
  );
};