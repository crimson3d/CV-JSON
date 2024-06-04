async function fetchData() {
    try {
        const response = await fetch("/data/cv.json");
        const cvData = await response.json();

        document.getElementById("top").innerHTML = `
        <div class="top__img">
            <img src="./assets/images/IMG_6106.jpeg" alt="avatar" class="img__pic"/>
        </div>
        <div class="top__text">
            <h1 class="text__title">${cvData.basics.name || ''}</h1>
            <h2 class="text__subtitle">${cvData.basics.label || ''}</h2>
        </div>`;

        document.getElementById("contact").innerHTML = `
        ${(cvData.basics.contact.phone || cvData.basics.contact.mail || cvData.basics.contact.web || cvData.basics.contact.address) && `
        <h3 class="section__title">CONTACTO</h3>
        ${cvData?.basics?.contact?.phone && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/mobile-svgrepo-com.svg" alt="mobile-icon" class="icon" />
            </div>
            <p class="section__text">${cvData?.basics?.contact?.phone}</p>
        </div>`}
        ${cvData?.basics?.contact?.mail && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/envelope-svgrepo-com.svg" alt="mail-icon" class="icon" />
            </div>
            <p class="section__text">${cvData?.basics?.contact?.mail}</p>
        </div>`}
        ${cvData?.basics?.contact?.web && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/web-svgrepo-com.svg" alt="web-icon" class="icon" />
            </div>
            <p class="section__text">${cvData?.basics?.contact?.web}</p>
        </div>`}
        ${cvData?.basics?.contact?.address && cvData?.basics?.contact?.city && cvData?.basics?.contact?.region && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/point-svgrepo-com.svg" alt="location-icon" class="icon" />
            </div>
            <p class="section__text">${cvData?.basics?.contact?.address} ${cvData?.basics?.contact?.city}, ${cvData?.basics?.contact?.region}</p>
        </div>`}`}`;

        if (cvData?.skills) {
            const skillsContainer = document.getElementById("skills");
            if (skillsContainer) {
                let skillsHTML = '<h3 class="section__title accordion">HABILIDADES</h3>';

                // Recorre cada conjunto de habilidades en el array skills
                cvData.skills.forEach((skillSet) => {
                    // Añade un bloque de habilidades sin tener en cuenta name ni level
                    skillsHTML += `<div class="section__set panel">`;

                    // Recorre el array de keywords y añade cada uno al HTML
                    skillSet.keywords.forEach(keyword => {
                        skillsHTML += `<h4 class="set__element">${keyword}</h4>`;
                    });

                    skillsHTML += "</div>";
                });

                skillsContainer.innerHTML = skillsHTML;
            }
        }

        if (cvData?.languages) {
            const languagesContainer = document.getElementById("languages");
            if (languagesContainer) {
                let languagesHTML = '<h3 class="section__title accordion">IDIOMAS</h3>';

                cvData.languages.forEach((languageSet) => {
                    languagesHTML += `<p class="section__text panel">${languageSet.language}: ${languageSet.fluency}</p>`;
                    languagesContainer.innerHTML = languagesHTML;
                });
            }
        }

        if (cvData?.interests) {
            const interestsContainer = document.getElementById("about");
            if (interestsContainer) {
                let interestsHTML = '<h3 class="section__title">SOBRE MI</h3>';

                cvData.interests.forEach((interestsSet) => {
                    interestsHTML += `<p class="section__text">${interestsSet.name}</p>`;
                    interestsContainer.innerHTML = interestsHTML;
                });
            }
        }

        if (cvData?.education) {
            const educationContainer = document.getElementById("study");
            if (educationContainer) {
                let educationHTML = '<div class="section__top"><div class="top__icon"><img src="./assets/images/education-svgrepo-com.svg" alt="certificates-icon" class="icon" /></div><h3 class="section__title accordion">FORMACIÓN</h3></div>';

                cvData.education.forEach((educationSet) => {
                    educationHTML += `<div class="section__text panel">
                    <div class="section__info">
                        <p class="text__education__area">${educationSet.area}</p>
                        <p class="info__years">${educationSet.year}</p>
                    </div>
                    <p class="text__education__study__Type">${educationSet.studyType}</p>
                    <p class="text__education__institution">${educationSet.institution}</p>
                    </div>`;

                    educationContainer.innerHTML = educationHTML;
                });
            }
        }

        if (cvData?.certificates) {
            const certificatesContainer = document.getElementById("certificates");
            if (certificatesContainer) {
                let certificatesHTML = '<div class="section__top"><div class="top__icon"> <img src="./assets/images/star-svgrepo-com.svg" alt="certificates-icon" class="icon" /></div><h3 class="section__title accordion">CERTIFICADOS</h3></div>';

                cvData.certificates.forEach((certificatesSet) => {
                    certificatesHTML += `
                    <div class="section__text panel">
                        <p class="text__certificates__name">${certificatesSet.name}</p>
                        <div class="text__bottom">
                            <p class="bottom__text">${certificatesSet.issuer}</p>
                            <a href="${certificatesSet.url}" target="_blank" class="bottom__btn">Ver Certificado</a>
                        </div>
                    </div>`;

                    certificatesContainer.innerHTML = certificatesHTML;
                });
            }
        }

        if (cvData?.work) {
            const workContainer = document.getElementById("work");
            if (workContainer) {
                let workHTML = '<div class="section__top"><div class="top__icon"> <img src="./assets/images/investigation-svgrepo-com.svg" alt="work-icon" class="icon" /></div><h3 class="section__title accordion">EXPERIENCIA LABORAL</h3></div>';

                cvData.work.forEach((workSet) => {
                    workHTML += `
                    <div class="section__work panel">
                        <div class="work__text">
                            <p class="text__position">${workSet.position}</p>
                            <p class="text__date">${workSet.startDate} - ${workSet.endDate}</p>
                        </div>
                        <p class="work__middle">${workSet.name}</p>
                        <p class="work__bottom">${workSet.summary}</p>
                    </div>`;

                    workContainer.innerHTML = workHTML;
                });
            }
        }

    } catch (error) {
        console.error("Error:", error);
    }
};

document.addEventListener("DOMContentLoaded", fetchData);