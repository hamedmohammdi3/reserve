import { useState, useEffect } from "react";
import RepairList from "../../RepairList";
import useFetch from "../use/useFetch";
import {Button, Carousel, Image} from "react-bootstrap";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import Team from "../Team/Team";
import BookingSection from "../BookingSection/BookingSection";
import Service from "../Service/Service";
import Footer from "../footer/Footer";




const Home = () => {
  /*const [name,setName] = useState('hamed');
  const handleClick =()=>{
      setName('Noshin');
  }
*/
/*const {data : person , loading, error} = useFetch("http://localhost:8000/repair");
    //const [name, setName] = useState('hamed');

    const title = "list all repair!!";
    const handelDelete =(id)=>{
        const newPerson = person.filter(person=> person.id !== id);
       /!* setPerson(newPerson);*!/
    }*/

    const spinner = () => {
        setTimeout(() => {
            const spinnerEl = document.querySelector('#spinner');
            if (spinnerEl) {
                spinnerEl.classList.remove('show');
            }
        }, 1);
    };
    spinner();





    return(
/*        <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{'--bs-nav-link-color': 'var(--bs-white)', '--bs-nav-pills-link-active-color': 'var(--bs-primary)', '--bs-nav-pills-link-active-bg': 'var(--bs-white)'}}>
            <li className="nav-item" role="presentation">
                <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
            </li>
        </ul>*/

<>
        <Carousel interval={2000}>
            <Carousel.Item  >
                <img
                    className="d-block w-100 darken-image"
                    src="/images/carousel-bg-1.jpg"
                    alt="First slide"
                />
                <div className="carousel-caption1 d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-10 col-lg-7 text-center text-lg-start">
                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">// سرویس ماشین//</h6>
                                <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">مرکز خدمات وتعمیر خودرو</h1>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">اطلاعات بیشتر<i
                                    className="fa fa-arrow-right ms-3"></i></a>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img className="img-fluid" src="/images/carousel-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 darken-image "
                    src="/images/carousel-bg-2.jpg"
                    alt="Second slide"
                />
                <div className="carousel-caption1 d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-10 col-lg-7 text-center text-lg-start">
                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">// سرویس ماشین//</h6>
                                <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">مرکز خدمات وتعمیر خودرو</h1>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">اطلاعات بیشتر<i
                                    className="fa fa-arrow-right ms-3"></i></a>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img className="img-fluid" src="/images/carousel-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 darken-image"
                    src="/images/carousel-bg-1.jpg"
                    alt="Third slide"
                />
                <div className="carousel-caption1 d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-center justify-content-lg-start">
                            <div className="col-10 col-lg-7 text-center text-lg-start">
                                <h6 className="text-white text-uppercase mb-3 animated slideInDown">// سرویس ماشین//</h6>
                                <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">مرکز خدمات وتعمیر خودرو</h1>
                                <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">اطلاعات بیشتر<i
                                    className="fa fa-arrow-right ms-3"></i></a>
                            </div>
                            <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                <img className="img-fluid" src="/images/carousel-2.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">خدمات باکیفیت</h5>
                            <p>حالا هرچی تو بخوای من اینجا مینویسم</p>
                            <a className="text-secondary border-bottom" href="">اطلاعات بیشتر</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">استاد کاران خبره</h5>
                            <p>بله حالا هرچی تو بخوای اینجا مینویسم</p>
                            <a className="text-secondary border-bottom" href="">اطلاعات بیشتر</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">تجهیزات مدرن</h5>
                            <p>بله حالا هرچی تو بخوای اینجا مینویسم</p>
                            <a className="text-secondary border-bottom" href="">اطلاعات بیشتر</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4 s1">
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid w-100 h-100 s7" src="/images/about.jpg"
                             alt=""/>
                            <div className="position-absolute top-0 end-0 mt-n4 me-n4 py-4 px-5 s8"
                                 >
                                <h1 className="display-4 text-white mb-0">15 <span className="fs-4">Years</span></h1>
                                <h4 className="text-white">تجربه</h4>
                            </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h6 className="text-primary text-uppercase">// درباره ما //</h6>
                    <h1 className="mb-4"><span className="text-primary">آچار</span>بهترین مکان برای اهمیت دادن به خودروی شما</h1>
                    <p className="mb-4">رانندگان جوان‌تر که بیشترین میزان تصادفات رانندگی را دارند، پیامک را به تماس‌های تلفنی و ایمیل ترجیح می‌دهند. با استفاده از پیامک برای نیازهای بازاریابی تعمیر خودرو خود، می‌توانید با رانندگان بیشتری که نیاز به تعمیر خودرو دارند تماس بگیرید.</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div
                                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 s4"
                                    >
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>حرفه ای و متخصص</h6>
                                    <span>رانندگان بیشتری که نیاز به تعمیر خودرو دارند تماس بگیرید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div
                                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 s4"
                                    >
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>مرکز خدمات با کیفیت</h6>
                                    <span>رانندگان بیشتری که نیاز به تعمیر خودرو دارند تماس بگیرید</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div
                                    className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1 s4"
                                    >
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>مکانیک های متخصص</h6>
                                    <span>رانندگان بیشتری که نیاز به تعمیر خودرو دارند تماس بگیرید</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="" className="btn btn-primary py-3 px-5">اطلاعات بیشتر<i className="fa fa-arrow-right ms-3"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid fact bg-dark my-5 py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-check fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">سالهای تجربه</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">تکنسین های خبره</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">مشتریان رازی</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-car fa-2x text-white mb-3"></i>
                    <h2 className="text-white mb-2" data-toggle="counter-up">1234</h2>
                    <p className="text-white mb-0">پروژه های انجام شده</p>
                </div>
            </div>
        </div>
    </div>
    <Service/>
    <BookingSection/>
    <Team/>
<TestimonialSection/>
    <Footer/>

</>
    );
}
export default Home;