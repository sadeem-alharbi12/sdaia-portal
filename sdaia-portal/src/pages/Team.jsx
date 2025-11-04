import React from "react";

export default function Team() {
    const members = [
        {
            name: "م. عبدالرحيم محمد الشريف",
            title: "اخصائي حوكمة بيانات",
            email: "Abalsharef@amana-md.gov.sa",
            gender: "male",
        },
        {
            name: "م. روعه حمزه محروس",
            title: "اخصائي حوكمة بيانات ومسؤول حماية بيانات شخصية",
            email: "R.Mahroos@amana-md.gov.sa",
            gender: "female",
        },
        {
            name: "م. زهره فهد عابد",
            title: "اخصائي حوكمة بيانات",
            email: "z.Abed@amana-md.gov.sa",
            gender: "female",
        },
        {
            name: "م. أحمد فاروق السلكاوي",
            title: "اخصائي ذكاء الأعمال",
            email: "AElsalakwey@amana-md.gov.sa",
            gender: "male",
        },
    ];

    return (
        <div className="team-page">
            <div className="team-header">
                <h1>فريق العمل</h1>
            </div>

            <div className="team-grid">
                {members.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="team-icon">
                            {member.gender === "female" ? (
                                <img src="/images/Female.png" height="15" alt="link" />
                            ) : (
                                <img src="/images/Male.png" height="15" alt="link" />
                            )}
                        </div>
                        <h3>{member.name}</h3>
                        <p className="team-title">{member.title}</p>
                        <a href={`mailto:${member.email}`} className="team-email">
                            {member.email}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}