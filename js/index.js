
    // Texto a ser digitado
    var text = "Designer Gráfico";
    var speed = 100; // Velocidade da digitação em milissegundos

    var i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-animation").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    // Inicia a animação quando a janela é carregada
    window.onload = function() {
        typeWriter();
    };

