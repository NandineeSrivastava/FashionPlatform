// Navigation Code
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('visible');
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
            section.classList.remove('visible');
        }
    });
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
    } else {
        dropdown.classList.add('hidden');
    }
}

// Initial section visibility
document.getElementById('home-screen').classList.add('visible');
document.getElementById('zgames').classList.add('hidden');
