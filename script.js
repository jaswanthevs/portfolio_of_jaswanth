// Initialize EmailJS securely
emailjs.init("service_t85ues1");

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// EmailJS Submission
const sendEmail = (templateParams) => {
  return emailjs.send("service_t85ues1", "template_ft12hsh", templateParams);
};

contactForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formStatus.textContent = "Please fill out all fields.";
    formStatus.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formStatus.textContent = "Invalid email address.";
    formStatus.style.color = "red";
    return;
  }

  formStatus.textContent = "Sending message...";
  formStatus.style.color = "blue";

  const templateParams = { from_name: name, from_email: email, message: message };

  sendEmail(templateParams)
    .then(() => {
      formStatus.textContent = "Message sent successfully!";
      formStatus.style.color = "green";
      contactForm.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      formStatus.textContent = `Failed to send message: ${error.text || "Unknown error"}`;
      formStatus.style.color = "red";
    });
});


document.getElementById('dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Highlight active link dynamically
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").includes(currentSection)) {
      item.classList.add("active");
    }
  });
});




const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let currentSection = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    if (pageYOffset >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navItems.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").includes(currentSection)) {
      item.classList.add("active");
    }
  });
});

// Add a 'scrolled' class to the header when scrolling
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Highlight the active link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60; // Adjust for header height
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});


// Show Popup Function
function showPopup(imagePath) {
    const popupOverlay = document.getElementById('cert-popup');
    const popupImage = document.getElementById('popup-image');
    popupOverlay.style.display = 'flex';
    popupImage.src = imagePath;
  }
  
  // Hide Popup Function
  function hidePopup() {
    const popupOverlay = document.getElementById('cert-popup');
    popupOverlay.style.display = 'none';
  }
  


