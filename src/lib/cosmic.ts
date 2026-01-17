import { createBucketClient } from '@cosmicjs/sdk';
import type { Post, Author, Category, AboutPage } from '../types';
import { hasStatus } from '../types';

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.COSMIC_BUCKET_SLUG as string,
  readKey: import.meta.env.COSMIC_READ_KEY as string,
  writeKey: import.meta.env.COSMIC_WRITE_KEY as string,
});

// Fetch all posts
export async function getPosts(): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'posts' })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return (response.objects || []) as Post[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Fetch single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'posts', slug })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return response.object as Post;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching post:', error);
    return null;
  }
}

// Fetch posts by category
export async function getPostsByCategory(categoryId: string): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.categories': categoryId 
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return (response.objects || []) as Post[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

// Fetch posts by author
export async function getPostsByAuthor(authorId: string): Promise<Post[]> {
  try {
    const response = await cosmic.objects
      .find({ 
        type: 'posts',
        'metadata.author': authorId 
      })
      .props(['id', 'title', 'slug', 'metadata', 'created_at'])
      .depth(1);
    
    return (response.objects || []) as Post[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching posts by author:', error);
    return [];
  }
}

// Fetch all authors
export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'authors' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return (response.objects || []) as Author[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching authors:', error);
    return [];
  }
}

// Fetch single author by slug
export async function getAuthorBySlug(slug: string): Promise<Author | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'authors', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Author;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching author:', error);
    return null;
  }
}

// Fetch all categories
export async function getCategories(): Promise<Category[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return (response.objects || []) as Category[];
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Fetch single category by slug
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'categories', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as Category;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching category:', error);
    return null;
  }
}

// Fetch About page content
export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'about-pages', slug: 'about' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object as AboutPage;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    console.error('Error fetching about page:', error);
    return null;
  }
}