 import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* Top Bar */}
            <header className="top-bar">
                <img src="/images/sadad.png" alt="علامة التوثيق" height="20" className="me-2" />
                <span>موقع حكومي مسجل لدى هيئة الحكومة الرقمية</span>
                <a href="#" className="text-success text-decoration-none primary-color ms-2">
                    كيف تتحقق؟
                </a>
            </header>

            {/* Main Navigation */}
            <nav className="navbar navbar-expand-lg px-3">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/images/logo-amana.png" alt="أمانة منطقة المدينة" height="45" />
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#mainNavbar"
                        aria-controls="mainNavbar"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-start" id="mainNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    الرئيسية
                                </NavLink>
                            </li>

                            {/* Dropdown: عن المكتب */}
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="aboutDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    عن المكتب
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                                    <li>
                                        <NavLink className="dropdown-item" to="/MainContent">
                                            النبذه
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="dropdown-item" to="/organization">
                                            الهيكل التنظيمي
                                        </NavLink>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/Team">
                                            فريق العمل
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/policies">
                                    السياسات واللوائح التنظيمية
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Services">
                                    الخدمات
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Commity">
                                    مجتمع البيانات
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    إصدارات سدايا
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/notfound">
                                    الذكاء الإصطناعي
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/platforms">
                                    منصات مكتب البيانات
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Statistics">
                                    احصائيات
                                </a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/awareness">
                                    التوعية
                                </NavLink>
                            </li>

                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-search"></i> البحث
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    );
}
