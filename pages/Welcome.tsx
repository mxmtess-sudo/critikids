import React, { useState } from 'react';

export const Welcome: React.FC = () => {
  const [heroImage, setHeroImage] = useState("https://picsum.photos/1200/800");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="animate-fade-in space-y-12">
      <div className="aspect-[16/9] w-full bg-gray-100 overflow-hidden relative group">
        <img 
          src={heroImage} 
          alt="Workspace" 
          className="object-cover w-full h-full grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Image Edit Overlay */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="bg-white/80 backdrop-blur text-xs uppercase tracking-widest px-3 py-1 hover:bg-white"
          >
            Edit Image
          </button>
        </div>

        {isEditing && (
          <div className="absolute inset-x-0 top-0 p-4 bg-white/95 border-b border-gray-200 z-10 flex gap-2">
             <input 
               type="text" 
               value={heroImage}
               onChange={(e) => setHeroImage(e.target.value)}
               placeholder="Paste image URL here..."
               className="flex-1 text-sm p-2 border border-gray-300 font-light"
             />
             <button 
               onClick={() => setIsEditing(false)}
               className="px-4 py-2 bg-black text-white text-xs uppercase tracking-widest"
             >
               Done
             </button>
          </div>
        )}
      </div>
      
      <div className="space-y-6 max-w-2xl">
        <h2 className="text-3xl font-serif font-light text-gray-900">Hello, I'm content.</h2>
        <p className="text-gray-600 leading-relaxed font-light text-lg">
          Welcome to my digital garden. This is a minimalist space where I collect my thoughts on literature, share long-form essays, summarize the noise of the press, and archive personal correspondence.
        </p>
        <p className="text-gray-600 leading-relaxed font-light text-lg">
          I believe in the quiet power of text and the importance of curation. Feel free to wander through the sections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-100">
        <div>
          <h3 className="font-medium mb-2">Reading</h3>
          <p className="text-sm text-gray-500">Currently exploring modernist literature and tech philosophy.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Writing</h3>
          <p className="text-sm text-gray-500">Drafting essays on digital minimalism and slow living.</p>
        </div>
        <div>
          <h3 className="font-medium mb-2">Connecting</h3>
          <p className="text-sm text-gray-500">Maintaing correspondence across oceans.</p>
        </div>
      </div>
    </div>
  );
};