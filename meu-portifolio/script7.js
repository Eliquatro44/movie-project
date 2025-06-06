
        // Rolagem suave
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const section = document.querySelector(this.getAttribute('href'));
                section.scrollIntoView({ behavior: 'smooth' });

                // Destaque aba ativa
                document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
                this.classList.add('active');
            });
        });