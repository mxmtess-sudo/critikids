
export enum PostType {
  BOOK_REVIEW = 'BOOK_REVIEW',
  ESSAY = 'ESSAY',
  PRESS_SUMMARY = 'PRESS_SUMMARY',
  CORRESPONDENCE = 'CORRESPONDENCE'
}

export type BookGenre = 'HISTORY' | 'BIOGRAPHY' | 'COMIC' | 'FICTION' | 'ADVENTURE';

export type EssayCategory = 'HISTORY' | 'POLITICS' | 'SOCIETY';

export interface BasePost {
  id: string;
  title: string;
  date: string;
  type: PostType;
}

export interface BookReview extends BasePost {
  type: PostType.BOOK_REVIEW;
  author: string;
  rating: number; // 1-5 (mapped from 1-10)
  coverUrl: string;
  content: string; // Fallback for legacy posts
  genre: BookGenre;
  // New fields for detailed structure
  summary?: string;
  critique?: string;
  ageRecommendation?: string;
  reviewerName?: string;
  purchaseLink?: string;
}

export interface Essay extends BasePost {
  type: PostType.ESSAY;
  subtitle?: string;
  content: string; // Markdown-like string
  readTime: string;
  category: EssayCategory;
  coverUrl?: string;
}

export interface PressSummary extends BasePost {
  type: PostType.PRESS_SUMMARY;
  originalSource: string;
  context?: string; // For author bio or source context
  summary: string;
  tags: string[];
}

export interface Correspondence extends BasePost {
  type: PostType.CORRESPONDENCE;
  recipient: string;
  intro?: string;
  messages: {
    id: string;
    sender: 'me' | 'them';
    text: string;
    timestamp?: string;
    title?: string;
    image?: string;
  }[];
}

export type BlogPost = BookReview | Essay | PressSummary | Correspondence;

export interface NavItem {
  label: string;
  path: string;
  type?: PostType;
}
