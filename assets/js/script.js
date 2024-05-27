let cvData = {};

async function fetchData() {
    try {
        const response = await fetch("/assets/js/cv.json");
        cvData = await response.json();
        document.getElementById("top").innerHTML = `
        <div class="top__img">
            <img src="./assets/images/IMG_6106.jpeg" alt="avatar" class="img__pic"/>
        </div>
        <div class="top__text">
            ${cvData?.basics?.name && `<h1 class="text__title">${cvData.basics.name}</h1>`}
            ${cvData?.basics?.label && `<h2 class="text__subtitle">${cvData.basics.label}</h2>`}
        </div>`;
        document.getElementById("contact").innerHTML = `
        ${cvData.basics.contact.phone || cvData.basics.contact.mail || cvData.basics.contact.web || cvData.basics.contact.address && `
        <h3 class="section__title">CONTACTO</h3>
        ${cvData?.basics?.contact?.phone && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/mobile-svgrepo-com.svg" alt="mobile-icon" />
            </div>
            <p>${cvData?.basics?.contact?.phone}</p>
        </div>`}
        ${cvData?.basics?.contact?.mail && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/envelope-svgrepo-com.svg" alt="mail-icon" />
            </div>
            <p>${cvData?.basics?.contact?.mail}</p>
        </div>`}
        ${cvData?.basics?.contact?.web && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/web-svgrepo-com.svg" alt="web-icon" />
            </div>
            <p>${cvData?.basics?.contact?.web}</p>
        </div>`}
        ${cvData?.basics?.contact?.address && cvData?.basics?.contact?.city && cvData?.basics?.contact?.region && `<div class="section__element">
            <div class="element__icon">
                <img src="./assets/images/point-svgrepo-com.svg" alt="location-icon" />
            </div>
            <p>${cvData?.basics?.contact?.address}</p>
            <p>${cvData?.basics?.contact?.city}, ${cvData?.basics?.contact?.region}</p>
        </div>`}`}`;
    } catch (error) {
        console.error("Error:", error);
    }
};

document.addEventListener("DOMContentLoaded", fetchData);


