import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Statistics() {
    return (

        <div className="statistics-page">
            <section className="statistics-section">
                <h2 className="statistics-title">
                    الامتثال للائحة حماية البيانات الشخصية :
                </h2>
                <img
                    src="/images/Pie Chart.png"
                    alt="نسبة الامتثال للائحة التنفيذية"
                    className="statistics-image"
                />

            </section>


            {/* القسم الثاني */}
            <section className="statistics-section">
                <h2 className="statistics-title">
                    طلبات توفير البيانات:
                </h2>
                <img
                    src="/images/Pie Chart2.png"
                    alt="طلبات توفير البيانات"
                    className="statistics-image"
                />
            </section>
        </div >

    );
}