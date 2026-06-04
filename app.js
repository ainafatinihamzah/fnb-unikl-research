const content = window.SITE_CONTENT;

const journeyIcons = ["▤", "⌘", "☷", "◔", "♧", "▦", "⌬", "◌", "✓", "□"];
const navItems = [
  ["HOME", "#home"],
  ["ABOUT", "#about"],
  ["JOURNEY", "#journey"],
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
setText("copyright", `© ${content.year} ${content.brandName}. ALL RIGHTS RESERVED.`);

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

document.getElementById("lecturer").innerHTML = `
  <img class="lecturer-image" src="${content.lecturer.image}" alt="Lecturer portrait placeholder" />
  <div>
    <div class="section-heading"><span></span><h2>LECTURER PROFILE</h2></div>
    <p>${content.lecturer.bio}</p>
    <dl class="lecturer-meta">
      <div><dt>LECTURER NAME</dt><dd>${content.lecturer.name}</dd></div>
      <div><dt>DEPARTMENT</dt><dd>${content.lecturer.department}</dd></div>
      <div><dt>EMAIL</dt><dd>${content.lecturer.email}</dd></div>
    </dl>
  </div>
`;

document.getElementById("memberGrid").innerHTML = content.members
  .map(
    (member) => `
      <article class="member-card">
        <img src="${member.image}" alt="${member.name} portrait placeholder" />
        <div><h3>${member.name}</h3><p>${member.id}</p></div>
      </article>
    `,
  )
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

document.getElementById("journeyGrid").innerHTML = content.journey
  .map(
    (item, index) => `
      <article class="journey-card">
        <strong>${String(index + 1).padStart(2, "0")}</strong>
        <h3>${item}</h3>
        <span aria-hidden="true">${journeyIcons[index]}</span>
      </article>
    `,
  )
  .join("");

document.getElementById("researchSectionList").innerHTML = content.researchSections
  .map(
    (section, index) => `
      <article class="research-block">
        <div class="research-block-copy">
          <strong>${String(index + 1).padStart(2, "0")}</strong>
          <h3>${section.title}</h3>
          <h4>${section.subtitle}</h4>
          ${section.text ? `<p>${section.text}</p>` : ""}
        </div>
        <div class="research-placeholder ${section.media ? "has-media" : ""}">
          ${section.media
            ? `<img src="${section.media}" alt="${section.title} supporting visual" />`
            : `<span>${section.visual}</span>`}
        </div>
      </article>
    `,
  )
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
