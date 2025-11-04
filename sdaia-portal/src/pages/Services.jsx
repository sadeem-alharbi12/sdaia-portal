import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";


export default function Services() {
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState(null);
    const [sortBy, setSortBy] = useState("default");
    const [feedbackValue, setFeedbackValue] = useState(null);

    // بيانات الخدمات
    const servicesData = {
        employees: {
            title: "خدمات للموظفين بالأمانة",
            icon: "👥",
            services: [
                {
                    id: 1,
                    title: "مشاركة البيانات",
                    description: "تقديم المكتب خدمات لتسهيل الحصول على البيانات الحكومية المفتوحة للأفراد والقطاع الخاص والجهات الحكومية.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.20 PM.jpeg",
                    link: "/services/details/data-sharing",
                    badge: "خدمات مشاركة البيانات",
                    responseTime: "زمن الاستجابة: خلال 3 أيام"
                },
                {
                    id: 2,
                    title: "نشر البيانات المفتوحة",
                    description: "عبر منصة البيانات المفتوحة - في منصة موحدة قابلة لإعادة الاستخدام يمكن الحصول عليها أو تحميلها أو بناء مختلف التطبيقات.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.21 PM.jpeg",
                    link: "/services/details/open-data-publishing",
                    badge: "نشر البيانات المفتوحة",
                    responseTime: "زمن الاستجابة: خلال 5 أيام"
                },
                {
                    id: 3,
                    title: "إشعار تسريب البيانات",
                    description: "خدمة مكتب إشعار الجهات الحكومية من التبليغ عن حالة تسريب البيانات الحساسية أو البيانات الشخصية.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.22 PM.jpeg",
                    link: "/services/details/data-breach-notification",
                    badge: "إشعار تسريب البيانات",
                    responseTime: "زمن الاستجابة: فوري"
                },
                {
                    id: 4,
                    title: "بناء مؤشر أداء",
                    description: "استخدام الأدوات الحديثة لجمع وتحليل البيانات الإحصائية والحالية المتعلقة من قبل الإدارات والمؤسسات لتقييم الأداء.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.23 PM.jpeg",
                    link: "/services/details/performance-indicator",
                    badge: "بناء مؤشر أداء",
                    responseTime: "زمن الاستجابة: خلال 7 أيام"
                }
            ]
        },
        individuals: {
            title: "خدمات للأفراد والقطاع الخاص",
            icon: "👤",
            services: [
                {
                    id: 5,
                    title: "نشر البيانات المفتوحة",
                    description: "سوق البيانات الوطنية: منصة متقدمة تتيح للأفراد والجهات الحكومية والقطاع الخاص بيع وشراء البيانات.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.24 PM.jpeg",
                    link: "/services/open-data-market",
                    badge: "خدمات للأفراد المفتوحة",
                    responseTime: "زمن الاستجابة: خلال 3 أيام"
                },
                {
                    id: 6,
                    title: "مشاركة البيانات",
                    description: "تقديم المكتب خدمات لتسهيل الحصول على البيانات الحكومية المفتوحة للأفراد والقطاع الخاص والجهات الحكومية.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.25 PM.jpeg",
                    link: "/services/individual-data-sharing",
                    badge: "خدمات مشاركة البيانات",
                    responseTime: "زمن الاستجابة: خلال 5 أيام"
                }
            ]
        },
        government: {
            title: "خدمات للجهات الحكومية",
            icon: "🏛️",
            services: [
                {
                    id: 7,
                    title: "إشعار تسريب البيانات",
                    description: "يتم التبليغ عن حالة تسريب البيانات الحساسية أو البيانات الشخصية أو أي تطبيق حماية البيانات الشخصية.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.26 PM.jpeg",
                    link: "/services/government-data-breach",
                    badge: "إشعار تسريب البيانات",
                    responseTime: "زمن الاستجابة: فوري"
                },
                {
                    id: 8,
                    title: "بناء مؤشر أداء",
                    description: "استخدام الأدوات الحديثة لجمع وتحليل البيانات الإحصائية والحالية المتعلقة من قبل الإدارات والمؤسسات.",
                    icon: "/icons/WhatsApp Image 2025-10-31 at 4.54.27 PM.jpeg",
                    link: "/services/government-performance",
                    badge: "بناء مؤشر أداء",
                    responseTime: "زمن الاستجابة: خلال 7 أيام"
                }
            ]
        }
    };

    // تصفية الخدمات بناءً على البحث
    const filterServices = (services) => {
        if (!searchTerm) return services;
        return services.filter(service =>
            service.title.includes(searchTerm) ||
            service.description.includes(searchTerm)
        );
    };

    return (
        <div dir="rtl">
            <div className="container my-5">
                {/* العنوان الرئيسي - محاذاة لليمين */}
                <section className="text-end mb-5">
                    <h2 className="fw-bold" style={{ color: "#000" }}>خدمات المكتب</h2>
                    <p className="text-muted mt-3" style={{ maxWidth: "100%", textAlign: "right" }}>
                        يقدم مكتب البيانات أو الأمانة العديد من الخدمات التي تتماشى مع أهداف رؤية المملكة 2030 لاستثمار البيانات الوطنية وتوزيعها وحوكمتها وضمان جودتها وتكاملها في إطار وطني يضمن من عدة محاور...
                    </p>
                </section>

                {/* شريط البحث والفلترة */}
                <div className="row mb-5 align-items-center">
                    <div className="col-md-10">
                        <div className="input-group" style={{ border: "1px solid #d0d0d0", borderRadius: "0", backgroundColor: "white" }}>
                            <span className="input-group-text" style={{ backgroundColor: "white", border: "none", borderRadius: "0" }}>
                                <i className="bi bi-search" style={{ color: "#999", fontSize: "14px" }}></i>
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="ابحث عن الخدمة"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ 
                                    border: "none", 
                                    borderRadius: "0", 
                                    textAlign: "right",
                                    fontSize: "14px",
                                    color: "#999",
                                    boxShadow: "none"
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <select 
                            className="form-select" 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            style={{ textAlign: "right" }}
                        >
                            <option value="default">ترتيب بالخدمات</option>
                            <option value="name">الأحدث</option>
                            <option value="date">الأقدم</option>
                        </select>
                    </div>
                </div>

                {/* التصنيفات الرئيسية */}
                <div className="row g-4 mb-5">
                    {/* خدمات للموظفين بالأمانة - فعّال */}
                    <div className="col-md-4">
                        <div
                            className={`card h-100 shadow-sm ${activeCategory === 'employees' ? 'border-success border-3' : 'border-0'}`}
                            style={{ cursor: "pointer", transition: "all 0.3s" }}
                            onClick={() => setActiveCategory(activeCategory === 'employees' ? null : 'employees')}
                        >
                            <div className="card-body text-end p-4">
                                <div className="d-flex justify-content-end mb-3">
                                    <div style={{ fontSize: "3rem" }}>
                                        <i className="bi bi-people-fill text-success"></i>
                                    </div>
                                </div>
                                <h5 className="card-title fw-bold text-end">خدمات للموظفين بالأمانة</h5>
                                <p className="text-muted small text-end">
                                    تقديم المكتب خدمات للموظفين العاملين بالأمانة لتسهيل العمل وتحسين الأداء من خلال إدارة البيانات وتحليلها بطرق فعالة.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* خدمات للأفراد والقطاع الخاص - للعرض فقط */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0" style={{ opacity: "0.7" }}>
                            <div className="card-body text-end p-4">
                                <div className="d-flex justify-content-end mb-3">
                                    <div style={{ fontSize: "3rem" }}>
                                        <i className="bi bi-person-badge-fill text-success"></i>
                                    </div>
                                </div>
                                <h5 className="card-title fw-bold text-end">خدمات للأفراد والقطاع الخاص</h5>
                                <p className="text-muted small text-end">
                                    يقدم المكتب خدمات للأفراد والقطاع الخاص لتمكينهم من الوصول إلى البيانات الحكومية المفتوحة واستخدامها.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* خدمات للجهات الحكومية - للعرض فقط */}
                    <div className="col-md-4">
                        <div className="card h-100 shadow-sm border-0" style={{ opacity: "0.7" }}>
                            <div className="card-body text-end p-4">
                                <div className="d-flex justify-content-end mb-3">
                                    <div style={{ fontSize: "3rem" }}>
                                        <i className="bi bi-building text-success"></i>
                                    </div>
                                </div>
                                <h5 className="card-title fw-bold text-end">خدمات للجهات الحكومية</h5>
                                <p className="text-muted small text-end">
                                    يتم التبليغ عن حالة تسريب البيانات الحساسية أو البيانات الشخصية أو أي تطبيق حماية البيانات الشخصية.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* عرض الخدمات الفرعية */}
                {activeCategory && (
                    <div className="mt-5">
                        <h3 className="fw-bold mb-4 text-end">{servicesData[activeCategory].title}</h3>
                        <div className="row g-4">
                            {filterServices(servicesData[activeCategory].services).map((service) => (
                                <div key={service.id} className="col-md-6 col-lg-3">
                                    <div className="card h-100 shadow-sm border-0 hover-card" dir="rtl">
                                        <div className="card-body p-4 d-flex flex-column">
                                            <div className="d-flex justify-content-end mb-3">
                                                <img
                                                    src={service.icon}
                                                    alt={service.title}
                                                    style={{ width: "60px", height: "60px", objectFit: "contain" }}
                                                />
                                            </div>
                                            <h6 className="card-title fw-bold mb-3 text-end">{service.title}</h6>
                                            <p className="text-muted small mb-3 text-end flex-grow-1">{service.description}</p>
                                            <div className="mb-3 text-end">
                                                <span className="badge bg-light text-success small">
                                                    {service.badge}
                                                </span>
                                            </div>
                                            <div className="mb-3 text-end">
                                                <small className="text-muted">
                                                    <i className="bi bi-clock me-1"></i>
                                                    {service.responseTime}
                                                </small>
                                            </div>
                                            <div className="d-flex gap-2 justify-content-between">
                                                <a href="https://www.iam.gov.sa/authservice/userauthservice?lang=ar" target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm flex-fill">
                                                    ابدأ الخدمة
                                                </a>
                                                <Link to={service.link} className="btn btn-outline-secondary btn-sm flex-fill">
                                                    تفاصيل الخدمة
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
            

            <style jsx>{`
                .hover-card {
                    transition: transform 0.3s, box-shadow 0.3s;
                }
                .hover-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
                }
                .card:hover {
                    border-color: #198754 !important;
                }
            `}</style>



        </div>
    );
}
