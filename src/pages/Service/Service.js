import React, { useState } from 'react';

const Service = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} id="tab-1" data-bs-toggle="tab" onClick={() => handleTabChange(1)}>تست و تشخیصی</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} id="tab-2" data-bs-toggle="tab" onClick={() => handleTabChange(2)}>سرویس موتور</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} id="tab-3" data-bs-toggle="tab" onClick={() => handleTabChange(3)}>تعویض لاستیک</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`nav-link ${activeTab === 4 ? 'active' : ''}`} id="tab-4" data-bs-toggle="tab" onClick={() => handleTabChange(4)}>تعویض روغن</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        {activeTab === 1 && (
                            <div className="tab-pane fade show active" id="tab-pane-1">
                                <div className="row g-4">
                                    <div className="col-md-6 s5">
                                        <div className="position-relative h-100">
                                            <img className="position-absolute img-fluid w-100 h-100 s6"
                                                 src="/images/service-1.jpg"
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">13 سال تجربه در خدمات خودرو</h3>
                                        <p className="mb-4">در صنعت خودرو، زمان پول است. بنابراین، زمانی که صرف کار نکردن روی خودروها می‌شود، می‌تواند برای کسب  کار شما مضر باشد. مشتریانی که دیر می‌آیند یا در قرار ملاقات خود حاضر نمی‌شوند، سود شما را کاهش می‌دهند و فرصت‌های قرار ملاقاتی را می‌گیرند که می‌توانستید با سایر مشتریان پر کنید.</p>
                                        <p><i className="fa fa-check text-success me-3"></i>خدمات با کیفیت</p>
                                        <p><i className="fa fa-check text-success me-3"></i>مکانیک های با تجربه</p>
                                        <p><i className="fa fa-check text-success me-3"></i>تجهیزات مدرن</p>
                                        <a href="" className="btn btn-primary py-3 px-5 mt-3">اطلاعات بیشتر<i
                                            className="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 2 && (
                            <div className="tab-pane fade show active" id="tab-pane-2">
                                <div className="row g-4">
                                    <div className="col-md-6 s5">
                                        <div className="position-relative h-100">
                                            <img className="position-absolute img-fluid w-100 h-100 s6"
                                                 src="/images/service-2.jpg"
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">12 سال تجربه در خدمات خودرو</h3>
                                        <p className="mb-4">در صنعت خودرو، زمان پول است. بنابراین، زمانی که صرف کار نکردن روی خودروها می‌شود، می‌تواند برای کسب  کار شما مضر باشد. مشتریانی که دیر می‌آیند یا در قرار ملاقات خود حاضر نمی‌شوند، سود شما را کاهش می‌دهند و فرصت‌های قرار ملاقاتی را می‌گیرند که می‌توانستید با سایر مشتریان پر کنی3د.</p>
                                        <p><i className="fa fa-check text-success me-3"></i>خدمات با کیفیت</p>
                                        <p><i className="fa fa-check text-success me-3"></i>مکانیک های با تجربه</p>
                                        <p><i className="fa fa-check text-success me-3"></i>تجهیزات مدرن</p>
                                        <a href="" className="btn btn-primary py-3 px-5 mt-3">اطلاعات بیشتر<i
                                            className="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 3 && (
                            <div className="tab-pane fade show active" id="tab-pane-3">
                                <div className="row g-4">
                                    <div className="col-md-6 s5">
                                        <div className="position-relative h-100 s6">
                                            <img className="position-absolute img-fluid w-100 h-100"
                                                 src="/images/service-3.jpg"
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">11 سال تجربه در خدمات خودرو</h3>
                                        <p className="mb-4">در صنعت خودرو، زمان پول است. بنابراین، زمانی که صرف کار نکردن روی خودروها می‌شود، می‌تواند برای کسب  کار شما مضر باشد. مشتریانی که دیر می‌آیند یا در قرار ملاقات خود حاضر نمی‌شوند، سود شما را کاهش می‌دهند و فرصت‌های قرار ملاقاتی را می‌گیرند که می‌توانستید با سایر مشتریان پر کنی2د.</p>
                                        <p><i className="fa fa-check text-success me-3"></i>خدمات با کیفیت</p>
                                        <p><i className="fa fa-check text-success me-3"></i>مکانیک های با تجربه</p>
                                        <p><i className="fa fa-check text-success me-3"></i>تجهیزات مدرن</p>
                                        <a href="" className="btn btn-primary py-3 px-5 mt-3">اطلاعات بیشتر<i
                                            className="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 4 && (
                            <div className="tab-pane fade show active" id="tab-pane-4">
                                <div className="row g-4">
                                    <div className="col-md-6 s5">
                                        <div className="position-relative h-100">
                                            <img className="position-absolute img-fluid w-100 h-100 s6"
                                                 src="/images/service-4.jpg"
                                                 alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3">10 سال تجربه در خدمات خودرو</h3>
                                        <p className="mb-4">در صنعت خودرو، زمان پول است. بنابراین، زمانی که صرف کار نکردن روی خودروها می‌شود، می‌تواند برای کسب  کار شما مضر باشد. مشتریانی که دیر می‌آیند یا در قرار ملاقات خود حاضر نمی‌شوند، سود شما را کاهش می‌دهند و فرصت‌های قرار ملاقاتی را می‌گیرند که می‌توانستید با سایر مشتریان پر کنی1د.</p>
                                        <p><i className="fa fa-check text-success me-3"></i>خدمات با کیفیت</p>
                                        <p><i className="fa fa-check text-success me-3"></i>مکانیک های با تجربه</p>
                                        <p><i className="fa fa-check text-success me-3"></i>تجهیزات مدرن</p>
                                        <a href="" className="btn btn-primary py-3 px-5 mt-3">اطلاعات بیشتر<i
                                            className="fa fa-arrow-right ms-3"></i></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
