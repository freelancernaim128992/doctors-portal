import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo';
import winson from '../../../images/winson.png'
import quote from '../../../images/quote.png'

const Blog = () => {
    const blogsInfo = [
        {
            id:1,
            name: 'Rashed Kabir',
            date: '22 Aug 2018',
            title: 'Check at least a doctor in a year of your teeth',
            icon: '',
            description: '',
            background: 'gradient'
        },
        {
            id:2,
            name: 'Dr. Caudi',
            date: '23 April 2019',
            title: '2 times of brush in a day can keep your health',
            icon: '',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, amet autem. Recusandae nemo magni similique?',
            img: winson
        },
        {
            id:3,
            name: 'Dr. Jhon Mitchel',
            date: '7 Aug 2019',
            title: 'The tooth cancer is talking a challenge',
            icon: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, vero nostrum. Ullam, maiores. Cumque, minus.',
            img: winson
        }
    ]
    return (
        <section className="pb-5">
            <div className="text-center">
                <h5 className="mt-5 fw-bold textStyle">OUR BLOG</h5>
                <h1 className="my-5">From Our Blog News</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    <img src={quote} alt="" className="quote-style"/>
                    {
                        blogsInfo.map(info => <BlogInfo key={info.id} info={info}></BlogInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;