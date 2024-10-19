"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { FaEdit } from 'react-icons/fa';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
}

export default function AdminPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [slug, setSlug] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/admin/login');
      } else {
        setIsLoading(false);
        fetchPosts();
      }
    };

    checkUser();
  }, [router]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingPost) {
      const { error } = await supabase
        .from('blog_posts')
        .update({ title, content, slug })
        .eq('id', editingPost.id);

      if (error) {
        console.error('Error updating post:', error);
        alert('Failed to update post');
      } else {
        resetForm();
        fetchPosts();
      }
    } else {
      const { error } = await supabase
        .from('blog_posts')
        .insert([{ 
          title, 
          content, 
          slug, 
          date: new Date().toISOString(),
          published: true
        }]);

      if (error) {
        console.error('Error creating post:', error);
        alert('Failed to create post');
      } else {
        resetForm();
        fetchPosts();
      }
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setTitle(post.title);
    setContent(post.content);
    setSlug(post.slug);
  };

  const resetForm = () => {
    setEditingPost(null);
    setTitle('');
    setContent('');
    setSlug('');
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Existing Posts</h2>
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {posts.map((post) => (
              <div key={post.id} className="border-b pb-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <button
                    onClick={() => handleEdit(post)}
                    className="text-black hover:text-black-600"
                    aria-label="Edit post"
                  >
                    <FaEdit size={20} />
                  </button>
                </div>
                <p className="text-sm text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            {editingPost ? 'Edit Post' : 'Create New Post'}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input
                  id="slug"
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 border rounded-md h-80 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            <div className="flex space-x-4">
              <button type="submit" className="flex-1 bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 text-lg font-semibold">
                {editingPost ? 'Update Post' : 'Create Post'}
              </button>
              {editingPost && (
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-300 text-gray-800 p-3 rounded-md hover:bg-gray-400 transition duration-300 text-lg font-semibold"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
