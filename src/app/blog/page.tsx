"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { formatDistanceToNow } from 'date-fns';
import { HiArrowLeft } from 'react-icons/hi';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, content, date, slug')
        .order('date', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
      } else {
        setPosts(data || []);
      }
      setIsLoading(false);
    }

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center border-2 border-black rounded-md px-2 py-1 text-black hover:text-black-800 transition-colors duration-200 font-medium"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Back to home
          </Link>
          <h1 className="text-4xl font-bold text-center flex-grow" data-cursor="text">Kard Project Devlog</h1>
          <div className="w-[104px]"></div>
        </div>

        <hr className="mb-12 border-t border-black dark:border-white" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 transform 
                              perspective-1000 group-hover:rotate-1
                              border-4 border-gray-300 dark:border-gray-600
                              shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]
                              group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.3)]
                              group-hover:-translate-x-1 group-hover:-translate-y-1
                              relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="p-6 relative z-10">
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors duration-300" data-cursor="text">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3" data-cursor="text">{post.content}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span data-cursor="text">{formatDistanceToNow(new Date(post.date), { addSuffix: true })}</span>
                    <span className="text-blue-500 group-hover:underline" data-cursor="text">Read more</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
