import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import articleContent from './article-content';
import NotFound from './NotFound';

import Articles from '../components/Articles';
import CommentsList from '../components/CommentsList';
import AddCommentForm from '../components/AddCommentForm';

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;

  const otherArticles = articleContent.filter((article) => article.name !== name);
  const previousArticle = otherArticles[0];
  const nextArticle = otherArticles[1];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-500 font-bold">
              &lt; <a href="#" className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a>
            </p>
            <h1 className="font-bold break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{article.title}</h1>
            <p className="text-sm md:text-base font-normal text-gray-600">Published 12 July 2023</p>
          </div>

          {article.content.map((paragraph, index) => (
            <p className="py-6" key={index}>
              {paragraph}
            </p>
          ))}

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Look around, choose your own ground
                 - Breathe, Pink Floyd
          </blockquote>

          <CommentsList comments={articleInfo.comments} />
        <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
        <h1 className="text-2xl font-bold my-8 text-gray-800">Other Articles</h1>
        <div className="flex flex-wrap -m-4">
          <Articles articles={otherArticles} />
        </div>
      
    

          <div className="text-base md:text-sm text-gray-500 px-4 py-6">
            Tags: <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a> .{' '}
            <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">
              Link
            </a>
          </div>

          <hr className="border-b-2 border-gray-400 mb-8 mx-4" />

          <div className="font-sans flex justify-between content-center px-4 pb-12">
            <div className="text-left">
              {previousArticle && (
                <>
                  <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
                  <br />
                  <p>
                    <a
                      href={`/article/${previousArticle.name}`}
                      className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                    >
                      {previousArticle.title}
                    </a>
                  </p>
                </>
              )}
            </div>
            <div className="text-right">
              {nextArticle && (
                <>
                  <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
                  <br />
                  <p>
                    <a
                      href={`/article/${nextArticle.name}`}
                      className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"
                    >
                      {nextArticle.title}
                    </a>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t border-gray-400 shadow">
        <div className="container max-w-4xl mx-auto flex py-8">
          <div className="w-full mx-auto flex flex-wrap">
            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">About</h3>
                <p className="py-4 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel mi ut felis tempus commodo nec id erat. Suspendisse
                  consectetur dapibus velit ut lacinia.
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-1/2">
              <div className="px-8">
                <h3 className="font-bold text-gray-900">Social</h3>
                <ul className="list-reset items-center text-sm pt-3">
                  <li>
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">
                      Add social link
                    </a>
                  </li>
                  <li>
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">
                      Add social link
                    </a>
                  </li>
                  <li>
                    <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-1" href="#">
                      Add social link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
