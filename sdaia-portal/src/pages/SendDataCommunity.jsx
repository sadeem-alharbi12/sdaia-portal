import { useState } from "react";

export default function SendDataCommunity() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        content: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    // دالة لتحديث البيانات مع كل كتابة
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // التحقق من الحقول
    const validate = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = "الاسم الأول مطلوب";
        if (!formData.lastName.trim()) newErrors.lastName = "الاسم الأخير مطلوب";
        if (!formData.email.trim()) newErrors.email = "البريد الإلكتروني مطلوب";
        if (!formData.subject.trim()) newErrors.subject = "الموضوع مطلوب";
        if (!formData.content.trim()) newErrors.content = "المحتوى مطلوب";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        // إذا ما فيه أخطاء
        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                subject: "",
                content: "",
            });

            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <div className="send-page">
            {/* ===== العنوان الرئيسي ===== */}
            <div className="send-header">
                <h2 className="send-title">مجتمع البيانات &lt; المشاركة الإلكترونية</h2>
                <p className="send-subtitle">شارك وطوّر مجتمع البيانات</p>
            </div>

            {/* ===== نموذج المشاركة ===== */}
            <form className="send-form" onSubmit={handleSubmit}>
                {/* نوع المشاركة (مثبتة) */}
                <div className="form-group">
                    <label htmlFor="type" className="form-label">
                        نوع المشاركة <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="type"
                        className="form-input"
                        value="منتدى النقاش"
                        readOnly
                    />
                </div>

                {/* الاسم */}
                <div className="form-row">
                    <div className="form-group half">
                        <label htmlFor="firstName" className="form-label">
                            الاسم الأول <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="form-input"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="ادخل الاسم الأول"
                        />
                        {errors.firstName && (
                            <p className="error-text">{errors.firstName}</p>
                        )}
                    </div>

                    <div className="form-group half">
                        <label htmlFor="lastName" className="form-label">
                            الاسم الأخير <span className="required">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="form-input"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="ادخل الاسم الأخير"
                        />
                        {errors.lastName && (
                            <p className="error-text">{errors.lastName}</p>
                        )}
                    </div>
                </div>

                {/* البريد الإلكتروني */}
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        البريد الإلكتروني <span className="required">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ادخل البريد الإلكتروني"
                    />
                    {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                {/* رقم الجوال */}
                <div className="form-group phone-group">
                    <label htmlFor="phone" className="form-label">
                        رقم الجوال
                    </label>
                    <div className="phone-row">
                        <input
                            type="text"
                            className="form-phone-code"
                            value="+966"
                            readOnly
                        />
                        <input
                            type="text"
                            id="phone"
                            className="form-phone-input"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="00 000 0000"
                        />
                    </div>
                </div>

                {/* الموضوع */}
                <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                        الموضوع <span className="required">*</span>
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="form-input"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="اكتب موضوعك"
                    />
                    {errors.subject && <p className="error-text">{errors.subject}</p>}
                </div>

                {/* المحتوى */}
                <div className="form-group">
                    <label htmlFor="content" className="form-label">
                        المحتوى <span className="required">*</span>
                    </label>
                    <textarea
                        id="content"
                        className="form-textarea"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="محتوى"
                    ></textarea>
                    {errors.content && <p className="error-text">{errors.content}</p>}
                </div>

                {/* زر الإرسال */}
                <div className="form-actions" style={{ textAlign: "left" }}>
                    <button type="submit" className="form-button">
                        شارك
                    </button>
                </div>

                {/* رسالة النجاح */}
                {submitted && <p className="success-text">تم إرسال النموذج بنجاح ✅</p>}
            </form>
        </div>
    );
}