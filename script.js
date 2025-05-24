const button = document.querySelectorAll('.btn');

button.forEach(button => {
    button.addEventListener('click', () => {
        // Cria ou seleciona um parágrafo existente
        let desc = button.nextElementSibling;

        // Se não existe, cria e adiciona
        if (!desc || !desc.classList.contains('desc')) {
            desc = document.createElement('p');
            desc.classList.add('desc');
            button.parentNode.appendChild(desc);
        }

        desc.innerHTML = "Obrigado por comprar conosco!";

         alert("Obrigado por comprar conosco!");
    });
});