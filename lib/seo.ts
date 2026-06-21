export const siteUrl = "https://sokcho.vercel.app";

export const targetKeywords = ['속초강아지파양', '속초강아지파양 보호소', '속초강아지파양 파양', '속초강아지파양'] as const;

export const siteTitle = "속초강아지파양 | 속초강아지파양 전문 안내";

export const siteDescription =
  "속초강아지파양·속초강아지파양 전문 상담센터입니다. 보호소 연계, 입양·파양 안내. 전화 0505-707-0401";

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "속초강아지파양",
        description: siteDescription,
        inLanguage: "ko-KR",
      },
      {
        "@type": "AnimalShelter",
        "@id": `${siteUrl}/#organization`,
        name: "속초강아지파양",
        url: siteUrl,
        description: siteDescription,
        telephone: "0505-707-0401",
        knowsAbout: [...targetKeywords],
      },
    ],
  };
}
