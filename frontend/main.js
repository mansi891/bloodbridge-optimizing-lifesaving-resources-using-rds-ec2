// Navigation
const navEmergency = document.getElementById('navEmergency');
const navDonor = document.getElementById('navDonor');
const navInventory = document.getElementById('navInventory');

navEmergency.addEventListener('click', () => showSection('emergency'));
navDonor.addEventListener('click', () => showSection('donor'));
navInventory.addEventListener('click', () => showSection('inventory'));

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Emergency request
document.getElementById('submitEmergency').addEventListener('click', () => {
    const bloodType = document.getElementById('bloodType').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;
    console.log('Emergency Request:', { bloodType, quantity, location });
    alert(`Emergency request for ${bloodType} (${quantity} units) at ${location} submitted.`);
});

// Schedule donation
document.getElementById('scheduleDonation').addEventListener('click', () => {
    console.log('Donation scheduled');
    alert('Donation scheduled successfully.');
});

// Inventory update
document.getElementById('updateInventory').addEventListener('click', () => {
    const bloodType = document.getElementById('bloodTypeInventory').value;
    const stockLevel = document.getElementById('stockLevel').value;
    console.log('Inventory Update:', { bloodType, stockLevel });
    alert(`Inventory updated: ${bloodType} - ${stockLevel} units.`);
});
