import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200 my-24">
                <div className="hero-content  flex-col lg:flex-row">
                    <div className='w-1/2 relative  p-2'>
                        <img src={person} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                        <img src={parts} alt='' className="max-w-sm absolute top-1/2 right-6 w-1/2 rounded-lg shadow-2xl" />
                    </div>
                    <div className='w-1/2 p-2'>
                        <p className='text-xl text-red-600 font-bold mb-2'>About Us</p>
                        <h1 className="text-4xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p >the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

                        <button className="btn  mt-4 btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;