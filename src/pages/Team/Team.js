import React from 'react';

const Team = () => {
    return (
        <div className="team-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="/images/team-1.jpg" alt="" />
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">اسماعیل احمدی</h5>
                                <small>جلو بندی</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="/images/team-2.jpg" alt="" />
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">حسین پنجه طلا</h5>
                                <small>موتور</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="/images/team-3.jpg" alt="" />
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">علی چکش طلا</h5>
                                <small>صافکار</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="team-item">
                            <div className="position-relative overflow-hidden">
                                <img className="img-fluid" src="/images/team-4.jpg" alt="" />
                                <div className="team-overlay position-absolute start-0 top-0 w-100 h-100">
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="bg-light text-center p-4">
                                <h5 className="fw-bold mb-0">نام مکانیک</h5>
                                <small>رنگ کار</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
