// Skills data
const coreSkills = [
    "Product Management", "Business Analysis", "Mobile App Design", "Scrum Methodology",
    "Market Research", "Gap Analysis", "Market Sizing", "Needs Assessments",
    "Performance Tuning", "Wireframe Development", "Team Leadership & Development",
    "Cross-functional Coordination", "Client & Stakeholder Engagement"
];

const technicalSkills = [
    "Excel", "PowerPoint", "Canva", "HTML", "CSS", "Content writing", "SQL",
    "JIRA", "Confluence", "Figma", "AEM", "SiteStudio"
];

// Function to populate skills
function populateSkills(skillsArray, elementId) {
    const skillsList = document.getElementById(elementId);
    skillsArray.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Populate skills when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    populateSkills(coreSkills, 'core-skills');
    populateSkills(technicalSkills, 'technical-skills');
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sticky navigation
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
