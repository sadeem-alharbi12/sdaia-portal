import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import Footer from "./components/Footer";
import AboutSdaia from "./pages/AboutSdaia";
import OrganizationStructure from "./pages/OrganizationStructure";
import Platforms from "./pages/Platforms";
import Policies from "./pages/Policies";
import DataCommity from "./pages/DataCommity";
import Home from "./pages/Home";
import Awareness from "./pages/Awareness";
import ArticlesCompetitions from "./pages/ArticlesCompetitions";
import Commity from "./pages/Commity";
import Practitioners from "./pages/Practitioners";
import Alsection from "./pages/Alsection";
import Send from "./pages/Send";
import Statistics from "./pages/Statistics";
import Team from "./pages/Team";
import MainContent from "./pages/MainContent";
import Services from "./pages/Services";
// صفحات الخدمات الفرعية (النماذج)
import DataSharing from "./pages/services/DataSharing";
import OpenDataPublishing from "./pages/services/OpenDataPublishing";
import DataBreachNotification from "./pages/services/DataBreachNotification";
import PerformanceIndicator from "./pages/services/PerformanceIndicator";

// صفحات تفاصيل الخدمات
import DataSharingDetails from "./pages/services/DataSharingDetails";
import OpenDataPublishingDetails from "./pages/services/OpenDataPublishingDetails";
import DataBreachNotificationDetails from "./pages/services/DataBreachNotificationDetails";
import PerformanceIndicatorDetails from "./pages/services/PerformanceIndicatorDetails"; 
import SendDataCommunity from "./pages/SendDataCommunity";

import NotFound404 from "./components/NotFound404";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import "./style/rtl-fix.css";



// Dynamically update page title like @ViewData["Title"]
function ScrollToTopAndTitle() {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            "/": "الرئيسية",
            "/about": "إصدارات سدايا",
            "/awareness": "التوعية",
            "/organization": "الهيكل التنظيمي",
            "/Team": "فريق العمل",
            "/platforms": "منصات مكتب البيانات",
            "/policies": "السياسات واللوائح التنظيمية",
            "/Statistics": "الاحصائيات",
            "*": "404 - لم يتم العثور على الصفحة",
        };


        document.title = (titles[location.pathname] || "الصفحة") + " - DMO";
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export default function App() {
    return (
        <div dir="rtl" lang="ar">
            <Router>
                <ScrollToTopAndTitle />
                <Navbar />
                <HeaderSection />
                <main className="container-fluid p-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutSdaia />} />
                        <Route path="/awareness" element={<Awareness />} />
                        <Route path="/organization" element={<OrganizationStructure />} />
                        <Route path="/commity" element={<Commity />} />
                        <Route path="/dataCommity" element={<DataCommity />} />
                        <Route path="/Alsection" element={<Alsection />} />
                        <Route path="/MainContent" element={<MainContent />} />
                        <Route path="/Team" element={<Team />} />
                        <Route path="/SendDataCommunity" element={<SendDataCommunity />} />
                        <Route path="/Send" element={<Send />} />
                        <Route path="/articlesCompetitions" element={<ArticlesCompetitions />} />
                        <Route path="/practitioners" element={<Practitioners />} />
                        <Route path="/platforms" element={<Platforms />} />
                        <Route path="/policies" element={<Policies />} />
                        <Route path="/Statistics" element={<Statistics />} />
                        <Route path="/Services" element={<Services />} />
                        <Route path="*" element={<NotFound404 />} />

                        {/* مسارات صفحات تفاصيل الخدمات */}
                        <Route path="/services/details/data-sharing" element={<DataSharingDetails />} />
                        <Route path="/services/details/open-data-publishing" element={<OpenDataPublishingDetails />} />
                        <Route path="/services/details/data-breach-notification" element={<DataBreachNotificationDetails />} />
                        <Route path="/services/details/performance-indicator" element={<PerformanceIndicatorDetails />} />

                        {/* مسارات صفحات النماذج */}
                        <Route path="/services/data-sharing" element={<DataSharing />} />
                        <Route path="/services/open-data-publishing" element={<OpenDataPublishing />} />
                        <Route path="/services/data-breach-notification" element={<DataBreachNotification />} />
                        <Route path="/services/performance-indicator" element={<PerformanceIndicator />} />
                        
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
} 
