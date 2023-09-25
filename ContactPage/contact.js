
var map = L.map('map').setView([12.9791, 80.2212], 15);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


L.marker([12.9791, 80.2212]).addTo(map)
    .bindPopup('Velachery, Chennai, Tamil Nadu')
    .openPopup();


emailjs.init("4_F2T4A730nZ_xZKi");

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    emailjs.sendForm("service_ifn5l0p", "template_gr2tx2m",this)
        .then(function (response) {
            alert('Email sent successfully!');
            document.getElementById('contact-form').reset();
        }, function (error) {
            alert('Failed to send email. Please try again later.');
        });
});
