export default function OrganizationStructure() {
  return (
    <section className="container py-5 text-center" dir="rtl" lang="ar">
      {/* Title */}
      <h2 className="fw-bold mb-5 primary-color">الهيكل التنظيمي</h2>

      {/* Organizational Chart */}
      <div className="mb-5">
        <img
          src="/images/structre.png"
          alt="الهيكل التنظيمي"
          className="img-fluid"
        />
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
