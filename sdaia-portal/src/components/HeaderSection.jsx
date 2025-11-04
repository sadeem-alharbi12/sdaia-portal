import { useLocation } from "react-router-dom";

export default function HeaderSection() {
    const location = useLocation();

    const titles = {
        "/": "الرئيسية",
        "/Commity": "منتدى النقاش ",
        "/Practitioners": "الممارسون ",
        "/ArticlesCompetitions": "المقالات والمساهمات ",
        "/DataCommity": "التحديات والمسابقات ",
        "/AIsection": "الذكاء الاصطناعي  ",
        "/Team": "فريق العمل",
        "/about": "إصدارات سدايا",
        "/awareness": "التوعية",
        "/organization": "الهيكل التنظيمي",
        "/MainContent": "النبذه",
        "/platforms": "منصات مكتب البيانات",
        "/policies": "السياسات واللوائح التنظيمية",
        "/SendDataCommunity": "مشاركة منتدى النقاش ",
        "/Send": "تقديم المسابقات والتحديات",
        "/Statistics": "الاحصائيات",
        "/Services": "الخدمات",
        "*": "404 - لم يتم العثور على الصفحة",
    };


    const title = titles[location.pathname] || "صفحة";

    return (
        <section
            className="bg-dark text-white py-4"
            style={{
                background: "url('/images/header-bg.png') center/cover no-repeat",
            }}
        >
            <div className="container">
                <div className="mb-2 small">
                    <a href="/" className="text-white text-decoration-none">
                        الرئيسية
                    </a>
                    <span className="mx-2">›</span>
                    <span>{title}</span>
                </div>
                <h2 className="fw-bold">{title}</h2>
            </div>
        </section>
    );
}