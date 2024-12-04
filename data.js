const serie = {
    descricao: [
        "Sintonia é uma série brasileira que explora a vida de jovens da periferia e suas conexões com a música, crime e fé.",
        "A trama segue três personagens principais: Doni, Rita e Nando, que tentam alcançar seus sonhos enquanto enfrentam desafios e escolhas difíceis.",
        "A série aborda temas como desigualdade social, amizades, rivalidades e a luta por uma vida melhor."
    ],
    motivosParaGostar: [
        "A série mostra de forma realista a vida nas periferias brasileiras e os desafios enfrentados pelos jovens.",
        "A conexão entre música, crime e religião cria uma narrativa intensa e cheia de emoção.",
        "Cada episódio deixa uma reflexão profunda sobre a sociedade e os valores pessoais."
    ]
};

// Preenchendo a descrição na página
const descricaoList = document.getElementById("descricao");
serie.descricao.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    descricaoList.appendChild(li);
});

// Preenchendo os motivos para gostar na página
const motivosList = document.getElementById("motivos");
serie.motivosParaGostar.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    motivosList.appendChild(li);
});
