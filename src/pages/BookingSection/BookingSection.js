import React from 'react';

const BookingSection = () => {
    return (
        <div className="container-fluid bg-secondary booking my-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-6 py-5">
                        <div className="py-5">
                            <h1 className="text-white mb-4">ارائه دهنده خدمات تعمیر خودرو گواهی و برنده جایزه</h1>
                            <p className="text-white mb-0">به مدیریت گردش کار و اجرای روان خدمات خود به مشتریان استفاده کنند. مکانیکی‌های مستقل نیز دوش به دوش با زنجیره‌های بزرگ و نمایندگی‌های خدمات سرویس خودرو رقابت می‌کنند. این بدان معناست که تعمیرگاه‌های خودرو باید راهی پیدا کنند تا در میان رقبا خودی نشان دهند</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-primary h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                            <h1 className="text-white mb-4">رزرو برای سرویس</h1>
                            <form>
                                <div className="row g-3">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className="form-control border-0" placeholder="نام شما" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input type="tel" className="form-control border-0" placeholder="شماره تلفن" style={{ height: '55px' }} />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <select className="form-select border-0" style={{ height: '55px' }}>
                                            <option selected>سرویس مورد نظر را انتخاب کنید</option>
                                            <option value="1">سرویس 1</option>
                                            <option value="2">سرویس 2</option>
                                            <option value="3">سرویس 3</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <div className="date" id="date1" data-target-input="nearest">
                                            <input type="text" className="form-control border-0 datetimepicker-input" placeholder="اطلاعات خدماتی که میخواهید" data-target="#date1" data-toggle="datetimepicker" style={{ height: '55px' }} />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <textarea className="form-control border-0" placeholder="اطلاعات تکمیلی"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-secondary w-100 py-3" type="submit">رزرو</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingSection;
