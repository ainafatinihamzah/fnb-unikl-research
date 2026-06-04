const content = window.SITE_CONTENT;

const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["RESEARCH", "#research-content"],
  ["QUESTIONNAIRE", "#questionnaire"],
  ["REFERENCES", "#references"],
];

const setText = (id, value) => {
  document.getElementById(id).textContent = value;
};

const renderNav = (id) => {
  document.getElementById(id).innerHTML = navItems
    .map(([label, href]) => `<a href="${href}">${label}</a>`)
    .join("");
};

setText("announcement", content.announcement);
setText("universityLogo", content.universityLogoText);
setText("brandName", content.brandName);
setText("brandSubline", content.brandSubline);
setText("universityName", content.universityName);
setText("universityNote", content.universityNote);
setText("researchTitle", content.researchTitle);
setText("researchSummary", content.researchSummary);
setText("aboutText", content.about);
setText("questionnaireText", content.questionnaire);
setText("referencesText", content.references);
setText("footerBrandName", content.brandName);
setText("footerNote", content.footerNote);
setText("contactDetails", content.contact);
setText("copyright", `Created by Aina F. | © ${content.year} ALL RIGHTS RESERVED`);

if (content.universityLogoImage) {
  document.querySelectorAll(".logo-placeholder").forEach((logo) => {
    logo.innerHTML = `<img src="${content.universityLogoImage}" alt="${content.universityLogoText} logo" />`;
  });
}

document.getElementById("heroImage").src = content.heroImage;
document.getElementById("universityImage").src = content.universityImage;
document.getElementById("universityImage").addEventListener("error", (event) => {
  event.currentTarget.closest(".university-band").classList.add("image-unavailable");
  event.currentTarget.remove();
});
document.getElementById("aboutImage").src = content.aboutImage;
document.getElementById("questionnaireImage").src = content.questionnaireImage;
document.getElementById("questionnaireLink").href = content.questionnaireUrl;
document.getElementById("heroQuestionnaire").href = content.questionnaireUrl;

renderNav("mainNav");
renderNav("footerNav");

document.getElementById("footerSocials").innerHTML = content.uniklLinks
  .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
  .join("");

document.getElementById("lecturer").innerHTML = `
  <img class="lecturer-image" src="${content.lecturer.image}" alt="${content.lecturer.name} portrait" />
  <div>
    <div class="section-heading"><span></span><h2>LECTURER PROFILE</h2></div>
    ${content.lecturer.role ? `<p class="lecturer-role">${content.lecturer.role}</p>` : ""}
    <p class="lecturer-name">${content.lecturer.name}</p>
    ${content.lecturer.qualifications && content.lecturer.qualifications.length
      ? `<ul class="lecturer-quals">${content.lecturer.qualifications
          .map((q) => `<li>${q}</li>`)
          .join("")}</ul>`
      : ""}
    <p class="lecturer-bio">${content.lecturer.bio}</p>
    <dl class="lecturer-meta">
      <div><dt>DEPARTMENT</dt><dd>${content.lecturer.department}</dd></div>
      <div><dt>PHONE</dt><dd>${content.lecturer.phone}</dd></div>
      <div><dt>EMAIL</dt><dd>${content.lecturer.email}</dd></div>
    </dl>
  </div>
`;

const renderMemberName = (member) => {
  const match = member.keepNameInline ? null : member.name.match(/\s(BIN|BINTI)\s/i);
  if (!match) return `<h3>${member.name}</h3>`;
  const given = member.name.slice(0, match.index);
  const patronymic = member.name.slice(match.index + 1);
  return `<h3>${given}<span class="member-patronymic">${patronymic}</span></h3>`;
};

document.getElementById("memberGrid").innerHTML = content.members
  .map((member) => {
    const pos = member.pos || "50% 50%";
    const zoom = member.zoom || 1;
    const imgStyle = `object-position:${pos};transform:scale(${zoom});transform-origin:${pos};`;
    return `
      <article class="member-card">
        <div class="member-photo">
          <img src="${member.image}" alt="${member.name} portrait" style="${imgStyle}" />
        </div>
        <div class="member-info">${renderMemberName(member)}<p>${member.id}</p></div>
      </article>
    `;
  })
  .join("");

document.getElementById("aboutPoints").innerHTML = content.aboutPoints
  .map(
    (point, index) => `
      <article>
        <strong>0${index + 1}</strong>
        <h3>${point.title}</h3>
        <p>${point.text}</p>
      </article>
    `,
  )
  .join("");

document.getElementById("researchSectionList").innerHTML = content.researchSections
  .map((section, index) => {
    const points =
      section.points && section.points.length
        ? `<ul class="research-points">${section.points
            .map((point) => `<li>${point}</li>`)
            .join("")}</ul>`
        : "";
    const charts =
      section.charts && section.charts.length
        ? `<div class="research-gallery">${section.charts
            .map(
              (chart) => `
                <figure class="research-chart">
                  <img src="${chart.src}" alt="${chart.caption || section.title}" loading="lazy" />
                  ${chart.caption ? `<figcaption>${chart.caption}</figcaption>` : ""}
                </figure>`,
            )
            .join("")}</div>`
        : `<div class="research-placeholder"><span>${section.visual || ""}</span></div>`;
    return `
      <article class="research-block">
        <div class="research-block-copy">
          <h3>
            <span class="research-num">${String(index + 1).padStart(2, "0")}</span>
            <span class="research-title">${section.title}</span>
          </h3>
          <h4>${section.subtitle}</h4>
          ${section.text ? `<p>${section.text}</p>` : ""}
          ${points}
        </div>
        ${charts}
      </article>
    `;
  })
  .join("");

const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
menuButton.addEventListener("click", () => {
  const open = mainNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

mainNav.addEventListener("click", () => {
  mainNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
});
