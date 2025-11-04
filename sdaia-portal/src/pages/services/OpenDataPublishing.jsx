import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function OpenDataPublishing() {
    const [feedbackValue, setFeedbackValue] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        agency: "",
        dataDescription: "",
        mobile: "",
        email: "",
        dataType: "",
        targetAudience: "",
        dataCategory: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("تم إرسال الطلب بنجاح!");
    };

    return (
        <div dir="rtl">

            <div className="container my-5">
                <div className="row">
                    {/* النموذج */}
                    <div className="col-12">
                        <div className="card border-0 shadow-sm mb-4">
                            <div className="card-body p-4">
                                <div className="mb-4" style={{
                                    backgroundColor: 'rgba(25, 135, 84, 0.08)',
                                    padding: '1rem',
                                    borderRadius: '8px'
                                }}>
                                    <h4 className="fw-bold mb-0">نشر البيانات المفتوحة &gt; تعبئة النموذج</h4>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                الاسم <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                placeholder="ادخل الاسم"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                الجهة <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="agency"
                                                placeholder="ادخل الجهة"
                                                value={formData.agency}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-bold">
                                                وصف البيانات المطلوبة <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dataDescription"
                                                placeholder="ادخل الوصف"
                                                value={formData.dataDescription}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                تحديد نوعية البيانات <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dataType"
                                                placeholder="ادخل النوع"
                                                value={formData.dataType}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                تحديد مصدرها <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="targetAudience"
                                                placeholder="ادخل المصدر"
                                                value={formData.targetAudience}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                البريد الإلكتروني <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="ادخل البريد الإلكتروني"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                رقم الجوال <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <span className="input-group-text">+966</span>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="mobile"
                                                    placeholder="00 000 0000"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-bold">
                                                عنوان البيانات المفتوحة <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="dataCategory"
                                                placeholder="ادخل العنوان"
                                                value={formData.dataCategory}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-12">
                                            <div className="alert alert-warning" role="alert">
                                                <i className="bi bi-exclamation-triangle me-2"></i>
                                                ملاحظة: يجب أن تكون البيانات المفتوحة متوافقة مع نموذج البيانات المفتوحة ومتوافقة مع معايير حماية البيانات الشخصية.
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" className="btn btn-success px-5">
                                                إرسال
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* قسم التقييم */}
                <div className="mt-5 pt-5 border-top">
                    <div className="row align-items-center">
                        <div className="col-md-8 text-end">
                            <h5 className="fw-bold mb-0">هل كانت هذه الصفحة مفيدة؟</h5>
                        </div>
                        <div className="col-md-4 text-start">
                            <div className="btn-group" role="group">
                                <button 
                                    type="button" 
                                    className={`btn ${feedbackValue === 'yes' ? 'btn-success' : 'btn-outline-success'}`}
                                    onClick={() => setFeedbackValue('yes')}
                                >
                                    نعم
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${feedbackValue === 'no' ? 'btn-danger' : 'btn-outline-danger'}`}
                                    onClick={() => setFeedbackValue('no')}
                                >
                                    لا
                                </button>
                            </div>
                        </div>
                    </div>
                    {feedbackValue && (
                        <div className="alert alert-success mt-3 text-end" role="alert">
                            شكراً لك على تقييمك! رأيك يهمنا.
                        </div>
                    )}
                </div>
            </div>

            
        </div>
    );
}
