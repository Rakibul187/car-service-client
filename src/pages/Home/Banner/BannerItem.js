import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item conta relative w-full">
            <div className='banner-image'>
                <img src={image} alt='' />
            </div>
            <div className="absolute flex justify-start text-white transform -translate-y-1/2 left-20 top-1/3 text-3xl font-bold">
                <h1>Affordable <br />
                    Price For Car
                    <br />
                    Servicing</h1>
            </div>
            <div className="absolute flex justify-start w-2/5 transform -translate-y-1/2 left-20 top-1/2 text-lg text-gray-400 ">
                <p>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start w-2/5 text-white transform -translate-y-1/2 left-20 top-2/3 text-xl ">
                <button className="btn mr-5 btn-warning">Warning</button>
                <button className="btn btn-outline btn-warning">Success</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle bg-warning ">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;