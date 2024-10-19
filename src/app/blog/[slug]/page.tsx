"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { HiArrowLeft } from 'react-icons/hi';

interface BlogPost {
  title: string;
  content: string;
  date: string;
  slug: string;
}

export default function BlogPost() {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const slug = params.slug as string;

  useEffect(() => {
    async function fetchPost() {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching post:', error);
      } else {
        setPost(data);
      }
      setIsLoading(false);
    }

    fetchPost();
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/blog"
            className="inline-flex items-center border-2 border-black rounded-md px-2 py-1 text-black hover:text-black-800 transition-colors duration-200 font-medium"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Back to all posts
          </Link>
          <h1 className="text-4xl font-bold text-center flex-grow" data-cursor="text">{post.title}</h1>
          <div className="w-[104px]"></div>
        </div>

        <article className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
          <div className="prose dark:prose-invert max-w-none">{post.content}</div>
        </article>
      </div>
    </div>
  );
}
