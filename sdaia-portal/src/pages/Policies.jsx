import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Policies() {
    useEffect(() => {
        // Initialize ScrollSpy manually after render
        const scrollSpyEl = document.querySelector("#scrollspyContent");
        if (scrollSpyEl) {
            bootstrap.ScrollSpy.getInstance(scrollSpyEl)?.dispose();
            new bootstrap.ScrollSpy(scrollSpyEl, {
                target: "#policy-nav",
                offset: 100,
            });
        }
    }, []);

    return (
        <section className="container py-5" dir="rtl" lang="ar">
            <style>
                {`
          html {
            scroll-behavior: smooth;
          }

          .sidebar .nav-link {
            color: #6c757d;
            border-right: 3px solid transparent;
            padding-right: 0.75rem;
          }

          .sidebar .nav-link.active {
            color: #000;
            border-right: 3px solid #1B8354;
            font-weight: bold;
          }
        `}
            </style>

            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 mb-4 sidebar position-relative" id="sidebar-nav">
                    <div className="bg-white shadow-sm rounded p-3 position-sticky top-0">
                        <h5 className="fw-bold mb-3 text-dark">السياسات</h5>
                        <nav className="nav flex-column" id="policy-nav">
                            <a className="nav-link" href="#policy1">سياسات مشاركة البيانات</a>
                            <a className="nav-link" href="#policy2">سياسات حرية البيانات</a>
                            <a className="nav-link" href="#policy3">سياسات تصنيف و تعريف البيانات</a>
                            <a className="nav-link" href="#policy4">سياسات البيانات المفتوحة</a>
                            <a className="nav-link" href="#policy5">اللوائح التنفيذية لنظام حماية البيانات</a>
                        </nav>
                    </div>
                </nav>

                {/* Main Content */}
                <div
                    className="col-md-9 position-relative"
                    id="scrollspyContent"
                    data-bs-spy="scroll"
                    data-bs-target="#policy-nav"
                    data-bs-offset="100"
                    tabIndex="0"
                >
                    {/* Policy 1 */}
                    <section id="policy1" className="mb-5">
                        <h2 className="fw-bold mb-4">سياسات مشاركة البيانات</h2>
                        <p className="fs-5">
                            سياسات مشاركة البيانات هي إطار تنظيمي يحدد القواعد والإجراءات التي تنظم تبادل البيانات بين الجهات المختلفة،
                            بهدف تعظيم الاستفادة منها في صنع القرار والبحث والابتکار، مع ضمان حمایة الخصوصية وأمن المعلومات
                            والالتزام بالقوانين ذات الصلة. وتركز هذه السياسات على الشفافية في إتاحة البيانات، وضبط مستويات الوصول،
                            وضمان جودتها ودقتها، إضافة إلى تعزيز الاستخدام المسؤول الذي يخدم المصلحة العامة ويحقق التكامل بین المؤسسات.
                        </p>

                        <div className="d-flex justify-content-center my-4">
                            <div className="custom-card text-center">
                                <img src="/images/pdf-icon.png" height="30" alt="link" />
                                <p className="mt-3 mb-2 fw-semibold">سياسات مشاركة البيانات</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a
                                        href="/pdfs/سياسة مشاركة البيانات.pdf"
                                        download
                                        className="btn btn-success"
                                        title="تحميل الملف"
                                    >
                                        <i className="bi bi-download"></i>
                                    </a>
                                    <a
                                        href="/pdfs/سياسة مشاركة البيانات.pdf"
                                        target="_blank"
                                        className="btn btn-outline-secondary"
                                        title="عرض الملف"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>


                    </section>

                    {/* Policy 2 */}
                    <section id="policy2" className="mb-5">
                        <h2 className="fw-bold mb-4">سياسات حرية البيانات</h2>
                        <p className="fs-5">
                            سياسات حرية المعلومات هي أنظمة وتشريعات تضمن حق الأفراد والمؤسسات في الوصول إلى المعلومات والبيانات التي تحتفظ بها الجهات الحكومية،
                            بهدف تعزيز الشفافية والمساءلة وبناء الثقة بين الدولة والمجتمع. وتعتمد هذه السياسات على مبدأ أن المعلومات ملك عام،
                            ويجب أن تكون متاحة ما لم يكن هناك سبب قانوني مشروع لحجبها، مثل حمایة الأمن الوطني أو الخصوصية أو الأسرار التجارية.
                            كما تهدف إلى تمكين المواطنين من المشاركة الفاعلة في صنع القرار، وتحفيز البحث والابتكار، ودعم النزاهة والحوكمة الرشيدة من خلال
                            توفير قنوات رسمية للحصول على المعلومات بشكل عادل ومنظم.
                        </p>

                        <div className="d-flex justify-content-center my-4">
                            <div className="custom-card text-center">
                                <img src="/images/pdf-icon.png" height="30" alt="link" />
                                <p className="mt-3 mb-2 fw-semibold">سياسات حرية البيانات</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a
                                        href="/pdfs/سياسة حرية المعلومات.pdf"
                                        download
                                        className="btn btn-success"
                                        title="تحميل الملف"
                                    >
                                        <i className="bi bi-download"></i>
                                    </a>
                                    <a
                                        href="/pdfs/سياسة حرية المعلومات.pdf"
                                        target="_blank"
                                        className="btn btn-outline-secondary"
                                        title="عرض الملف"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Policy 3 */}
                    <section id="policy3" className="mb-5">
                        <h2 className="fw-bold mb-4">سياسات تصنيف و تعريف البيانات</h2>
                        <p className="fs-5">
                            سياسات تصنيف وتعريف البيانات هي مجموعة من المعايير والإجراءات التي تضعها المؤسسات لتنظيم التعامل مع البيانات وفقًّا لمستوى أهميتها وحساسيتها،
                            بما يضمن إدارتها بشكل آمن وفعال. وتقوم هذه السياسات على تحديد فئات واضحة للبيانات مثل: البيانات العامة، الداخلية، السرية، أو الحساسة،
                            مع وضع ضوابط خاصة لكل فئة من حيث التخزين، الوصول، المشاركة، والحماية. كما تشمل تعريف البيانات بشكل دقيق من خلال توصيف مصادرها، خصائصها،
                            وأصحاب العلاقة بها، مما يساعد على توحيد الفهم داخل المؤسسة وتسهيل تبادلها بين الأنظمة والجهات المختلفة.
                        </p>

                        <div className="d-flex justify-content-center my-4">
                            <div className="custom-card text-center">
                                <img src="/images/pdf-icon.png" height="30" alt="link" />
                                <p className="mt-3 mb-2 fw-semibold">سياسات تصنيف و تعريف البيانات</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a
                                        href="/pdfs/سياسة تصنيف وتعريف البيانات-.pdf"
                                        download
                                        className="btn btn-success"
                                        title="تحميل الملف"
                                    >
                                        <i className="bi bi-download"></i>
                                    </a>
                                    <a
                                        href="/pdfs/سياسة تصنيف وتعريف البيانات-.pdf"
                                        target="_blank"
                                        className="btn btn-outline-secondary"
                                        title="عرض الملف"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Policy 4 */}
                    <section id="policy4" className="mb-5">
                        <h2 className="fw-bold mb-4">سياسات البيانات المفتوحة</h2>
                        <p className="fs-5">
                            سياسات البيانات المفتوحة هي مجموعة من المبادئ والإجراءات التي تلتزم بها المؤسسات، خصوصًا الحكومية،
                            لإتاحة بياناتها للعامة بشكل شفاف ومجاني وقابل لإعادة الاستخدام.
                            وتهدف هذه السياسات إلى تعزيز الشفافية والمساءلة، ودعم الابتكار والبحث العلمي،
                            وتحفيز النمو الاقتصادي من خلال تمكين الأفراد والشركات والباحثين من الاستفادة من البيانات المتاحة.
                        </p>

                        <div className="d-flex justify-content-center my-4">
                            <div className="custom-card text-center">
                                <img src="/images/pdf-icon.png" height="30" alt="link" />
                                <p className="mt-3 mb-2 fw-semibold">سياسات البيانات المفتوحة</p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a
                                        href="/pdfs/سياسة البيانات المفتوحة.pdf"
                                        download
                                        className="btn btn-success"
                                        title="تحميل الملف"
                                    >
                                        <i className="bi bi-download"></i>
                                    </a>
                                    <a
                                        href="/pdfs/سياسة البيانات المفتوحة.pdf"
                                        target="_blank"
                                        className="btn btn-outline-secondary"
                                        title="عرض الملف"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>

                    {/* Policy 5 */}
                    <section id="policy5" className="mb-5">
                        <h2 className="fw-bold mb-4">اللوائح التنفيذية لنظام حماية البيانات</h2>
                        <p className="fs-5">
                            اللوائح التنفيذية لنظام حماية البيانات هي مجموعة من القواعد التفصيلية التي تصدر لتوضيح وتطبيق أحكام نظام حماية البيانات الشخصية،
                            حيث تحدد آليات جمع البيانات ومعالجتها وتخزینها ومشاركتها بما يضمن حماية خصوصية الأفراد وحقوقهم.
                        </p>

                        <div className="d-flex justify-content-center my-4">
                            <div className="custom-card text-center">
                                <img src="/images/pdf-icon.png" height="30" alt="link" />
                                <p className="mt-3 mb-2 fw-semibold">
                                    اللوائح التنفيذية لنظام حماية البيانات
                                </p>
                                <div className="d-flex justify-content-center gap-2">
                                    <a
                                        href="/pdfs/اللوائح التنفيذية لنظام حماية البيانات الشخصية.pdf"
                                        download
                                        className="btn btn-success"
                                        title="تحميل الملف"
                                    >
                                        <i className="bi bi-download"></i>
                                    </a>
                                    <a
                                        href="/pdfs/اللوائح التنفيذية لنظام حماية البيانات الشخصية.pdf"
                                        target="_blank"
                                        className="btn btn-outline-secondary"
                                        title="عرض الملف"
                                    >
                                        <i className="bi bi-eye"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </section>
    );
}
