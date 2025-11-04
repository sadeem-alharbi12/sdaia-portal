import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Alsection() {
    return (
        <div className="data-community-container">
            <div className="data-community-page">
                {/* Header */}
                <header className="data-header">
                    <h1 className="data-title">مجتمع البيانات</h1>
                    <p className="data-subtitle">
                        منصة تجمع خبراء البيانات ومهتميها للتواصل والمشاركة والتطوير
                    </p>
                </header>

                {/* Tabs */}
                <nav className="data-tabs">
                    <ul>
                        <li>
                            <NavLink
                                to="/Commity"
                                className={({ isActive }) =>
                                    `data-tab-link ${isActive ? "active-tab" : ""}`
                                }
                            >
                                منتدى النقاش
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Practitioners"
                                className={({ isActive }) =>
                                    `data-tab-link ${isActive ? "active-tab" : ""}`
                                }
                            >
                                الممارسون
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/ArticlesCompetitions"
                                className={({ isActive }) =>
                                    `data-tab-link ${isActive ? "active-tab" : ""}`
                                }
                            >
                                المقالات والمساهمات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/DataCommity"
                                className={({ isActive }) =>
                                    `data-tab-link ${isActive ? "active-tab" : ""}`
                                }
                            >
                                التحديات والمسابقات
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/Alsection"
                                className={({ isActive }) =>
                                    `data-tab-link ${isActive ? "active-tab" : ""}`
                                }
                            >
                                الذكاء الاصطناعي
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <hr className="data-divider" />

                <div className="ai-section-content">
                    <p className="ai-section-intro">
                        تعريف شامل بالذكاء الاصطناعي وتطبيقاته في القطاع الحكومي، مع التركيز على التجارب المحلية والعالمية.
                    </p>

                    <ul className="ai-section-points">
                        <li>
                            <strong>مقدمة:</strong> الذكاء الاصطناعي هو أحد أدوات التحول الرقمي الفعالة في تحسين الخدمات وتوقع السيناريوهات المستقبلية.
                        </li>
                        <li>
                            <strong>تجربة محلية:</strong> استخدام الذكاء الاصطناعي في تحسين توزيع الخدمات الصحية في الرياض عبر تحليل أنماط الاستخدام.
                        </li>
                        <li>
                            <strong>تجربة عالمية:</strong> مبادرة مدينة سنغافورة في تحليل حركة المرور والتخطيط الحضري باستخدام الذكاء الاصطناعي.
                        </li>
                    </ul>

                    <div className="ai-section-subtitle">توصيات:</div>
                    <ul className="ai-section-recommendations">
                        <li>إطلاق التحديات المستقبلية القابلة للتنفيذ أو التبني.</li>
                        <li>البدء بمشروعات تجريبية قصيرة (Proof of Concept).</li>
                        <li>تكوين فريق داخلي مختص بين التقنية وإدارة البيانات.</li>
                    </ul>
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
