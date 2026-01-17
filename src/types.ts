// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at?: string;
  modified_at?: string;
}

// File/Image type
export interface CosmicFile {
  url: string;
  imgix_url: string;
}

// Author type
export interface Author extends CosmicObject {
  type: 'authors';
  metadata: {
    name: string;
    bio?: string;
    avatar?: CosmicFile;
  };
}

// Category type
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name: string;
    description?: string;
  };
}

// Post type
export interface Post extends CosmicObject {
  type: 'posts';
  metadata: {
    title: string;
    content?: string;
    excerpt?: string;
    featured_image?: CosmicFile;
    author?: Author;
    categories?: Category[];
  };
}

// About Page type
export interface AboutPage extends CosmicObject {
  type: 'about-pages';
  metadata: {
    heading: string;
    subheading?: string;
    content?: string;
    hero_image?: CosmicFile;
    mission_title?: string;
    mission_content?: string;
    team_title?: string;
    team_members?: Author[];
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
}

export interface CosmicSingleResponse<T> {
  object: T;
}

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}