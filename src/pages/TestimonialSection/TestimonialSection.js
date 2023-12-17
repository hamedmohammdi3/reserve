import React from 'react';

const TestimonialSection = () => {

    return (
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="text-center">
                    <h1 className="mb-5">نظرات مشتریان</h1>
                </div>
                <div className="owl-carousel testimonial-carousel position-relative">
                    <div className="testimonial-item text-center">
                        <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/images/testimonial-1.jpg"
                             style={{ width: '80px', height: '80px' }}
                             alt={''}/>
                        <h5 className="mb-0">نام مشتری</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0"> خیلی خوب بود به دیگران پیشنهاد میکنم
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/images/testimonial-2.jpg"
                             style={{ width: '80px', height: '80px' }}
                             alt={''}/>
                        <h5 className="mb-0">نام مشتری</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0"> خیلی خوب بود به دیگران پیشنهاد میکنم
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/images/testimonial-3.jpg"
                             style={{ width: '80px', height: '80px' }}
                             alt={''}/>
                        <h5 className="mb-0">نام مشتری</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0"> خیلی خوب بود به دیگران پیشنهاد میکنم
                            </p>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="/images/testimonial-4.jpg"
                             style={{ width: '80px', height: '80px' }}
                             alt={''}/>
                        <h5 className="mb-0">نام مشتری</h5>
                        <p>Profession</p>
                        <div className="testimonial-text bg-light text-center p-4">
                            <p className="mb-0"> خیلی خوب بود به دیگران پیشنهاد میکنم
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
