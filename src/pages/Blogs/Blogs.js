import React from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {
    return (
        <>
            <Helmet><title>Blogs</title></Helmet>
            <div className='container py-10 mx-auto px-5'>
                <div className='w-full lg:w-9/12 mx-auto'>
                    <div className='border border-gray-200 rounded-md shadow-lg px-3 py-4 mb-5'>
                        <h2 className='text-lg font-semibold'>What is the difference between SQL and NoSQL?</h2>
                        <blockquote className='mt-3 pl-3 border-l ml-3'>
                            <p>SQL databases are primarily called Relational Databases (RDBMS); whereas NoSQL databases are primarily called non-relational or distributed databases. SQL databases are table-based on the other hand NoSQL databases are either document-based. In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU, or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database.</p>
                        </blockquote>
                    </div>
                    <div className='border border-gray-200 rounded-md shadow-lg px-3 py-4 mb-5'>
                        <h2 className='text-lg font-semibold'>What is JWT, and how does it work?</h2>
                        <blockquote className='mt-3 pl-3 border-l ml-3'>
                            <p>JSON Web Tokens are commonly called JWT by people. JWT is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. The authentication server verifies the credentials and issues a JWT signed using either a secret key. The user's Client uses the JWT to access protected resources by passing the JWT in the HTTP Authorization header. The resource server then verifies the authenticity of the token using the secret key.</p>
                        </blockquote>
                    </div>
                    <div className='border border-gray-200 rounded-md shadow-lg px-3 py-4 mb-5'>
                        <h2 className='text-lg font-semibold'>What is the difference between javascript and Node JS?</h2>
                        <blockquote className='mt-3 pl-3 border-l ml-3'>
                            <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. It's most commonly used on client-side servers. On the other hand, NodeJS is a cross-platform and open-source Javascript runtime environment that allows the javascript to be run on the server side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and is mostly used in web development. It's mainly popular on the server-side.</p>
                        </blockquote>
                    </div>
                    <div className='border border-gray-200 rounded-md shadow-lg px-3 py-4 mb-5'>
                        <h2 className='text-lg font-semibold'>How does Node JS handle multiple requests at the same time?</h2>
                        <blockquote className='mt-3 pl-3 border-l ml-3'>
                            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for EventQueue. The main loop will accept requests as they arrive and spawn a child thread to deal with them.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;
