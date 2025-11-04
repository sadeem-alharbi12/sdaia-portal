export default function AboutSdaia() {
    return (
        <section className="container py-5" dir="rtl" lang="ar">
            <div className="row align-items-center g-5">
                {/* Text Column */}
                <div className="col-md-6 mb-4">
                    <h2 className="fw-bold text-success mb-4">نبذة عن سدايا</h2>
                    <p className="fs-5">
                        الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا) هي الجهة المختصة في المملكة
                        بالبيانات والذكاء الاصطناعي وتشمل: البيانات الضخمة، وهي المرجع الوطني في كل ما يتعلق
                        بهما من تنظيم وتطوير وتعامل، وهي صاحبة الاختصاص الأصيل في كل ما يتعلق بالتشغيل
                        والأبحاث والابتكار في قطاع البيانات والذكاء الاصطناعي.
                    </p>
                </div>

                {/* Logo Column */}
                <div className="col-md-6 mb-4 text-center">
                    <div className="p-3 shadow rounded bg-white">
                        <img
                            src="/images/sdaia-logo.png"
                            alt="SDAIA Logo"
                            className="img-fluid"
                            style={{ maxHeight: "200px" }}
                        />
                    </div>
                </div>
            </div>

            {/* Cards Row */}
            <div className="row mt-5">
                <div className="col-md-3 mb-3 d-flex justify-content-center">
                    <div className="custom-card text-center shadow border-0 rounded-4 ">
                        <img src="/images/pdf-icon.png" height="30" alt="PDF Icon" />
                        <p className="mt-3 mb-2 fw-semibold">إصدارات سدايا</p>
                        <div className="d-flex justify-content-center gap-2">
                            <a
                                href="/pdfs/علم البيانات.pdf"
                                download
                                className="btn btn-success"
                                title="تحميل الملف"
                            >
                                <i className="bi bi-download"></i>
                            </a>
                            <a
                                href="/pdfs/علم البيانات.pdf"
                                target="_blank"
                                className="btn btn-outline-secondary"
                                title="عرض الملف"
                            >
                                <i className="bi bi-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-3 mb-3 d-flex justify-content-center">
                    <div className="custom-card text-center shadow border-0 rounded-4 ">
                        <img src="/images/pdf-icon.png" height="30" alt="pdf icon" />
                        <p className="mt-3 mb-2 fw-semibold">علم البيانات</p>
                        <div className="d-flex justify-content-center gap-2">
                            <a
                                href="/pdfs/تبني أنظمة الذكاء الاصطناعي.pdf"
                                download
                                className="btn btn-success"
                                title="تحميل الملف"
                            >
                                <i className="bi bi-download"></i>
                            </a>
                            <a
                                href="/pdfs/تبني أنظمة الذكاء الاصطناعي.pdf"
                                target="_blank"
                                className="btn btn-outline-secondary"
                                title="عرض الملف"
                            >
                                <i className="bi bi-eye"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer Rating and Timestamp */}
            <div className="mt-5 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center text-muted fs-6">
                <div>تاريخ آخر تعديل: 04/12/2020 - 4:13 م بتوقيت السعودية</div>
            </div>

            <hr className="primary-color" />

            <div className="row">
                {/* Feedback Question */}
                <div className="col-md-8 mt-3 d-flex align-items-center gap-3">
                    <span className="fw-bold">هل كانت هذه الصفحة مفيدة؟</span>
                    <button className="btn btn-success px-4">نعم</button>
                    <button className="btn btn-outline-secondary px-4">لا</button>
                </div>

                <div className="col-md-4 d-flex justify-content-end align-items-center">
                    60% من المستخدمين قالوا نعم من 2843 تقييماً
                </div>
            </div>
        </section>
    );
}
