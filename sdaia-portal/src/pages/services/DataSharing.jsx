import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function DataSharing() {
    const [feedbackValue, setFeedbackValue] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        agency: "",
        requestedFrom: "",
        mobile: "",
        email: "",
        requestedData: "",
        hasGovernmentSource: "",
        hasSensitiveData: ""
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
                                    <h4 className="fw-bold mb-0">مشاركة البيانات &gt; تعبئة النموذج</h4>
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

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                المطلوب من الطلب <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="requestedFrom"
                                                placeholder="نص تلقائي"
                                                value={formData.requestedFrom}
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

                                        <div className="col-12">
                                            <label className="form-label fw-bold">
                                                وصف البيانات المطلوبة <span className="text-danger">*</span>
                                            </label>
                                            <textarea
                                                className="form-control"
                                                name="requestedData"
                                                rows="4"
                                                placeholder="ادخل الوصف"
                                                value={formData.requestedData}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                هل يوجد لدى الجهة مصدر قانوني لطلب البيانات؟ <span className="text-danger">*</span>
                                            </label>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="hasGovernmentSource"
                                                        id="sourceYes"
                                                        value="نعم"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="sourceYes">
                                                        نعم
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="hasGovernmentSource"
                                                        id="sourceNo"
                                                        value="لا"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="sourceNo">
                                                        لا
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-bold">
                                                هل تحتوي البيانات المطلوبة في الطلب على بيانات حساسة؟ <span className="text-danger">*</span>
                                            </label>
                                            <div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="hasSensitiveData"
                                                        id="sensitiveYes"
                                                        value="نعم"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="sensitiveYes">
                                                        نعم
                                                    </label>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="hasSensitiveData"
                                                        id="sensitiveNo"
                                                        value="لا"
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                    <label className="form-check-label" htmlFor="sensitiveNo">
                                                        لا
                                                    </label>
                                                </div>
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
