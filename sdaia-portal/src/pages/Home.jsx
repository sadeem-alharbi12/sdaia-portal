export default function Home() {
    const items = [
        { title: "النبذة", icon: "/images/image1.png", link: "/MainContent" },
        { title: "الهيكل التنظيمي", icon: "/images/image2.png", link: "/organization" },
        { title: "فريق العمل", icon: "/images/image3.png", link: "/team" },
        { title: "السياسات واللوائح التنظيمية", icon: "/images/image4.png", link: "/policies" },
        { title: "الخدمات", icon: "/images/image5.png", link: "#" },
        { title: "مجتمع البيانات", icon: "/images/image6.png", link: "/Commity" },
        { title: "إصدارات سدايا", icon: "/images/image9.png", link: "/about" },
        { title: "الذكاء الإصطناعي", icon: "/images/image8.png", link: "/notfound" },
        { title: "منصات مكتب البيانات", icon: "/images/image7.png", link: "/platforms" },
        { title: "احصائيات", icon: "/images/image11.png", link: "/Statistics" },
        { title: "التوعية", icon: "/images/image10.png", link: "/Awareness" },

    ];

    return (
        <section className="container py-5 text-center" dir="rtl" lang="ar">
            <div className="row g-4 ">
                {items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center">
                        <a
                            href={item.link}
                            className="text-decoration-none text-dark"
                            style={{ display: "block", width: "410px" }}
                        >
                            <div
                                className="card border-0 shadow-sm rounded-4 position-relative overflow-hidden"
                                style={{
                                    height: "200px",
                                    transition: "transform 0.2s ease",
                                }}
                            >
                                {/* Card Content */}
                                <div
                                    className="card-body d-flex flex-column "
                                    style={{ padding: "1.2rem", height: "100%" }}
                                >
                                    {/* Top-right icon and text */}
                                    <div
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            background: "#F3FCF6",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "0.8rem",
                                        }}
                                    >
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            style={{
                                                maxWidth: "70%",
                                                maxHeight: "70%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </div>

                                    <h6 className="fw-bold text-start mb-0">{item.title}</h6>
                                </div>

                                {/* Bottom-left Arrow Button (stuck position) */}
                                <button
                                    className="btn border-0 position-absolute"
                                    style={{
                                        backgroundColor: "#F3F4F6",
                                        color: "#7b8681ff",
                                        borderRadius: "10px",
                                        width: "40px",
                                        height: "40px",
                                        bottom: "10px",
                                        left: "10px",
                                    }}
                                >
                                    <i className="bi bi-arrow-left"></i>
                                </button>
                            </div>
                        </a>
                    </div>
                ))}
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
