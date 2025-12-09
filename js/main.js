document.addEventListener('DOMContentLoaded', () => {
    
    const contactForm = document.getElementById('contactForm');

    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const service = document.getElementById('service').value;

            if (!name || !service) {
                alert("Por favor, preencha todos os campos.");
                return;
            }

            const whatsappNumber = "5512992005908"; 

            const message = `Olá, Emilly! Me chamo *${name}*. Tenho interesse em desenvolver um *${service}*. Poderia me passar um orçamento?`;

            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});