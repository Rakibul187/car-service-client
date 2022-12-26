import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure className='p-4 h-48 rounded-xl'><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='font-bold text-red-500'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;