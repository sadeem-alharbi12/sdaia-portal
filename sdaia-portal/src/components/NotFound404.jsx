import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div className="text-center py-5" dir="rtl" lang="ar">
      <div className="position-relative d-inline-block">
        <img
          src="/images/not-found.png"
          height="324"
          className="mb-2"
          alt="لم يتم العثور على الصفحة"
        />
      </div>
      <h3 className="fw-bold mt-4">حدث خطأ</h3>
      <p className="text-muted">عذرًا، لم نستطع إيجاد الصفحة التي تبحث عنها</p>
      <Link to="/" className="btn btn-success px-4 py-2 mt-3">
        الرجوع للرئيسية
      </Link>
    </div>
  );
}
