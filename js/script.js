document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Atualizar Ano no Rodapé (Mantido) --- */
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    /* --- 2. Fechar Menu Mobile ao Clicar (Mantido) --- */
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.getElementById('navbarNav');
    
    if (navLinks && navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: true
                    });
                    bsCollapse.hide();
                }
            });
        });
    }

    /* --- 3. Efeito de Sombra na Navbar ao Rolar (Mantido) --- */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg'); 
            } else {
                navbar.classList.remove('shadow-lg'); 
            }
        });
    }

    /* --- 4. Envio do Formulário para WhatsApp (NOVO) --- */
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede a página de recarregar

            // Captura os dados preenchidos
            const name = document.getElementById('name').value;
            const brand = document.getElementById('brand').value; // Novo campo
            const segment = document.getElementById('segment').value; // Novo campo
            const service = document.getElementById('service').value;

            // Seu número (apenas dígitos)
            const phoneNumber = "5512992005908"; 

            // Formatação da mensagem (usando %0a para pular linha)
            const message = `*Olá, Emilly! Vim pelo site.*%0a%0a` +
                            `*Nome:* ${name}%0a` +
                            `*Marca:* ${brand}%0a` +
                            `*Segmento:* ${segment}%0a` +
                            `*Interesse:* ${service}`;

            // Cria o link e abre em nova aba
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});