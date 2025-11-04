import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DataSharingDetails() {
    const [feedbackValue, setFeedbackValue] = useState(null);
    const [activeTab, setActiveTab] = useState('requirements');

    return (
        <div className="container my-5" dir="rtl">
            <div className="row flex-row-reverse">
                {/* الشريط الجانبي على اليسار */}
                <div className="col-lg-4">
                    <div className="bg-light p-4 rounded shadow-sm">
                        {/* الفئة المستهدفة */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">
                                <i className="bi bi-people-fill text-success me-2"></i>
                                الفئة المستهدفة
                            </h5>
                            <p className="text-end text-muted">موظفي الأمانة</p>
                        </div>

                        {/* المدة الزمنية */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">
                                <i className="bi bi-clock-fill text-success me-2"></i>
                                المدة الزمنية للخدمة
                            </h5>
                            <p className="text-end text-muted">خلال 5 أيام عمل</p>
                        </div>

                        {/* قنوات تقديم الخدمة */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">
                                <i className="bi bi-laptop-fill text-success me-2"></i>
                                قنوات تقديم الخدمة
                            </h5>
                            <p className="text-end text-muted">موقع الأمانة</p>
                        </div>

                        {/* تكلفة الخدمة */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">
                                <i className="bi bi-currency-dollar text-success me-2"></i>
                                تكلفة الخدمة
                            </h5>
                            <p className="text-end text-muted">مجاناً</p>
                        </div>

                        <hr />

                        {/* الصفحة الخاصة بالاستفسار */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">الصفحة الخاصة بالاستفسار</h5>
                            <a href="#" className="text-decoration-none text-success d-flex align-items-center justify-content-end">
                                <span className="me-2">Madinah Municipality FAQ's page</span>
                                <i className="bi bi-link-45deg"></i>
                            </a>
                        </div>

                        {/* رقم الهاتف */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">رقم الهاتف</h5>
                            <a href="tel:920011940" className="text-decoration-none text-success d-flex align-items-center justify-content-end">
                                <span className="me-2">920011940</span>
                                <i className="bi bi-telephone-fill"></i>
                            </a>
                        </div>

                        {/* البريد الإلكتروني */}
                        <div className="mb-4">
                            <h5 className="fw-bold mb-3 text-end">البريد الإلكتروني</h5>
                            <a href="mailto:cr@amana-md.gov.sa" className="text-decoration-none text-success d-flex align-items-center justify-content-end">
                                <span className="me-2">cr@amana-md.gov.sa</span>
                                <i className="bi bi-envelope-fill"></i>
                            </a>
                        </div>

                        <hr />

                        {/* تطبيقات ذات صلة */}
                        <div className="mb-3">
                            <h5 className="fw-bold mb-3 text-end">تطبيقات ذات صلة</h5>
                            <div className="d-flex gap-2 justify-content-end">
                                <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={{height: '40px'}} />
                                </a>
                                <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style={{height: '40px'}} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* المحتوى الرئيسي على اليمين */}
                <div className="col-lg-8">
                    {/* المستطيل الأخضر مع جدول من عمودين */}
                    <div className="p-4 rounded shadow-sm mb-4" style={{backgroundColor: 'rgba(25, 135, 84, 0.08)'}}>
                        <div className="row">
                            {/* العمود الأيمن: العنوان والمحتوى */}
                            <div className="col-lg-8">
                                <h2 className="fw-bold mb-4 text-end">مشاركة البيانات</h2>
                                <div className="mb-4">
                                    <span className="badge bg-secondary">موظفي الأمانة</span>
                                </div>
                                <p className="text-end" style={{lineHeight: "1.8"}}>
                                    خدمة مشاركة البيانات تتيح للجهات الحكومية والموظفين المصرح لهم مشاركة البيانات والمعلومات بين الإدارات المختلفة بطريقة آمنة ومنظمة. تهدف هذه الخدمة إلى تحسين التعاون وتبادل المعلومات لتحقيق الكفاءة في العمل الحكومي وتقديم خدمات أفضل للمواطنين.
                                </p>
                                <p className="text-end" style={{lineHeight: "1.8"}}>
                                    تتيح هذه الخدمة للجهات الحكومية والأفراد والقطاع الخاص طلب الحصول على البيانات الحكومية المفتوحة بطريقة منظمة وآمنة. يتم معالجة الطلبات وفقاً للسياسات واللوائح المعتمدة لضمان حماية البيانات والخصوصية مع تسهيل الوصول إلى المعلومات المفتوحة.
                                </p>
                            </div>

                            {/* العمود الأيسر: الأزرار */}
                            <div className="col-lg-4 d-flex flex-column justify-content-start align-items-start gap-3">
                                <a href="https://www.iam.gov.sa/authservice/userauthservice?lang=ar" target="_blank" rel="noopener noreferrer" className="btn btn-success w-100 py-2">
                                    ابدأ الخدمة
                                </a>
                                <Link to="/services/data-sharing" className="btn btn-success w-100 py-2">
                                    تعبئة النموذج
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* التبويبات خارج الخلفية الخضراء */}
                    <div className="mt-4">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button 
                                    className={`nav-link ${activeTab === 'requirements' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('requirements')}
                                    type="button"
                                >
                                    المتطلبات
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button 
                                    className={`nav-link ${activeTab === 'method' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('method')}
                                    type="button"
                                >
                                    طريقة التقديم
                                </button>
                            </li>
                        </ul>
                        
                        {/* محتوى فارغ */}
                        <div className="tab-content mt-4">
                            {activeTab === 'requirements' && (
                                <div className="bg-white p-4 rounded border">
                                    {/* محتوى فارغ */}
                                </div>
                            )}
                            {activeTab === 'method' && (
                                <div className="bg-white p-4 rounded border text-end">
                                    {/* محتوى فارغ */}
                                </div>
                            )}
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
        </div>
    );
}
