import { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Awareness() {
  const [selectedYear, setSelectedYear] = useState("2025");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.bootstrap && window.bootstrap.ScrollSpy) {
        const scrollContent = document.querySelector("#scrollspyContent");
        const existing = window.bootstrap.ScrollSpy.getInstance(scrollContent);
        if (existing) existing.dispose();
        new window.bootstrap.ScrollSpy(document.body, {
          target: "#awareness-nav",
          offset: 100,
        });
      }
    }, 300);

    const handleResize = () => {
      if (window.bootstrap && window.bootstrap.ScrollSpy) {
        const spy = window.bootstrap.ScrollSpy.getInstance(document.body);
        if (spy) spy.refresh();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const items = {
    2024: [
      {
        title: "إطار إدارة البيانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 1- إطار إدارة البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 1- إطار إدارة البيانات.png",
      },
      {
        title: "تطبيقات تقنيات تعلم الالة",
        icon: "/images/النشرات التوعوية/2024/النشرة 2-تطبيقات تقنيات تعلم الالة.png",
        link: "/images/النشرات التوعوية/2024/النشرة 2-تطبيقات تقنيات تعلم الالة.png",
      },
      {
        title: "تحقيق القيمة من البيانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 3- تحقيق القيمة البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 3- تحقيق القيمة البيانات.png",
      },
      {
        title: "فريق الذكاء الاصطناعي",
        icon: "/images/النشرات التوعوية/2024/النشرة 4-فريق الذكاء الاصطناعي.png",
        link: "/images/النشرات التوعوية/2024/النشرة 4-فريق الذكاء الاصطناعي.png",
      },
      {
        title: "مستويات تحليل البيانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 5-مستويات تحليل البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 5-مستويات تحليل البيانات.png",
      },
      {
        title: "حرية المعلومات",
        icon: "/images/النشرات التوعوية/2024/النشرة 6- حرية المعلومات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 6- حرية المعلومات.png",
      },
      {
        title: "أنواع تحليلات البیانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 7-أنواع تحليلات البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 7-أنواع تحليلات البيانات.png",
      },
      {
        title: "مجالات تحليلات البيانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 8-مجالات تحليلات البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 8-مجالات تحليلات البيانات.png",
      },
      {
        title: "حوكمة البيانات",
        icon: "/images/النشرات التوعوية/2024/النشرة 9-حوكمة البيانات.png",
        link: "/images/النشرات التوعوية/2024/النشرة 9-حوكمة البيانات.png",
      },
      {
        title: "البيانات المفتوحة",
        icon: "/images/النشرات التوعوية/2024/النشرة 10-البيانات المفتوحة.png",
        link: "/images/النشرات التوعوية/2024/النشرة 10-البيانات المفتوحة.png",
      },
      {
        title: "تکامل البیانات ومشارکتہها",
        icon: "/images/النشرات التوعوية/2024/النشرة 11-تكامل البيانات ومشاركتها.png",
        link: "/images/النشرات التوعوية/2024/النشرة 11-تكامل البيانات ومشاركتها.png",
      },

    ],
    2025: [
      {
        title: "فيديو لا تشارك معلوماتك الشخصية",
        icon: "/images/النشرات التوعوية/2025/النشرة 4- لاتشارك معلوماتك الشخصية.mp4",
        link: "/images/النشرات التوعوية/2025/النشرة 4- لاتشارك معلوماتك الشخصية.mp4",
      },
      {
        title: "البيانات المفتوحة",
        icon: "/images/النشرات التوعوية/2025/النشرة 1-البيانات المفتوحة.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 1-البيانات المفتوحة.jpg",
      },
      {
        title: "تصنيف البيانات",
        icon: "/images/النشرات التوعوية/2025/النشرة 2-تصنيف البيانات.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 2-تصنيف البيانات.jpg",
      },
      {
        title: "معالجة البيانات الشخصية",
        icon: "/images/النشرات التوعوية/2025/النشرة 3-معالجة البيانات الشخصية.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 3-معالجة البيانات الشخصية.jpg",
      },
      {
        title: "البيانات الشخصية والبيانات الشخصية الحساسة",
        icon: "/images/النشرات التوعوية/2025/النشرة 5- البيانات الشخصية والبيانات الشخصية الحساسة.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 5- البيانات الشخصية والبيانات الشخصية الحساسة.jpg",
      },
      {
        title: "البيانات المفتوحة",
        icon: "/images/النشرات التوعوية/2025/النشرة 6- البيانات المفتوحة.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 7-حماية البيانات الشخصية .jpg",
      },
      {
        title: "حقوق كفالة النظام حماية البيانات الشخصية",
        icon: "/images/النشرات التوعوية/2025/النشرة 7-حماية البيانات الشخصية .jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 7-حماية البيانات الشخصية .jpg",
      },
      {
        title: "حماية البيانات الشخصية",
        icon: "/images/النشرات التوعوية/2025/النشرة 8-حماية البيانات الشخصية.jpg",
        link: "/images/النشرات التوعوية/2025/النشرة 8-حماية البيانات الشخصية.jpg",
      },
    ],
  };

  return (
    <section className="container py-5" dir="rtl" lang="ar">
      <style>
        {`
          html { scroll-behavior: smooth; }
          .sidebar .nav-link {
            color: #6c757d;
            border-left: 3px solid transparent;
            padding-left: 0.75rem;
            text-align: right;
          }
          .sidebar .nav-link.active {
            color: #000;
            border-right: 3px solid #1B8354;
            font-weight: bold;
          }
        `}
      </style>

      {/* Title */}
      <h2 className="fw-bold mb-4">نشرات توعوية</h2>
      <p className="fw-bold">نشرات توعوية لعام {selectedYear}</p>

      <hr />

      <div className="row">
        {/* Sidebar */}
        <nav className="col-md-3 mb-4 sidebar position-relative" id="sidebar-nav">
          <div className="bg-white shadow-sm rounded p-3 position-sticky top-0">
            <h5 className="fw-bold mb-3 text-dark">أبرز النشرات التوعوية</h5>
            <nav className="nav flex-column" id="awareness-nav">
              <a
                href="#"
                className={`nav-link ${selectedYear === "2025" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedYear("2025");
                }}
              >
                سنة النشر 2025
              </a>
              <a
                href="#"
                className={`nav-link ${selectedYear === "2024" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedYear("2024");
                }}
              >
                سنة النشر 2024
              </a>
            </nav>
          </div>
        </nav>

        {/* Main Content */}
        <div className="col-md-9" id="scrollspyContent">
          <div className="row g-4 justify-content-start">
            {items[selectedYear].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center">
                <div
                  className="card border-0 shadow-sm rounded-4 position-relative overflow-hidden"
                  style={{
                    width: "430px",
                    height: "435px",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <div className="card-body  d-flex flex-column  justify-content-between">
                    {/* Image */}
                    <div
                      style={{
                        height: "245px",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.icon.match(/\.(mp4|webm|ogg)$/i) ? (
                        <video
                          src={item.icon}
                          controls
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            borderRadius: "20px",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <img
                          src={item.icon}
                          alt={item.title}
                          style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            borderRadius: "20px",
                            objectFit: "contain",
                          }}
                        />
                      )}
                    </div>

                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="text-muted mb-0">سنة النشر : {selectedYear}</p>

                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-secondary mt-2"
                      title="عرض الملف"
                      style={{ width: "90px" }}
                    >
                      <i className="bi bi-eye"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
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
