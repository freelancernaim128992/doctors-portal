import React from 'react';
import winson from '../../../images/winson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonialsInfo = [
        {
            id: 1,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dignissimos obcaecati quia alias similique voluptatem, repellat tempora dolor ab sint minus temporibus, eligendi a itaque hic esse necessitatibus, beatae doloremque.',
            img: winson,
            name: 'Winson Herry',
            city: 'California'
        },
        {
            id: 2,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dignissimos obcaecati quia alias similique voluptatem, repellat tempora dolor ab sint minus temporibus, eligendi a itaque hic esse necessitatibus, beatae doloremque.',
            img: ema,
            name: 'Ema Gomez',
            city: 'New York'
        },
        {
            id: 3,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dignissimos obcaecati quia alias similique voluptatem, repellat tempora dolor ab sint minus temporibus, eligendi a itaque hic esse necessitatibus, beatae doloremque.',
            img: aliza,
            name: 'Aliza Farari',
            city: 'Texas'
        }
    ]
    return (
        <section className="pb-5">
            <div className="d-flex justify-content-center">
                <div className="row w-75 mt-5">
                    <div>
                        <h5 className="mt-5 fw-bold textStyle">TESTIMONIAL</h5>
                        <h1 className="my-5">What's Our Patients <br/>Says</h1>
                    </div>
                    {
                        testimonialsInfo.map(info => <Testimonial key={info.id} info={info}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;