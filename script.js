/ MENU RESPONSIVO
document.querySelector('.menu-toggle').addEventListener('click', function() {
const navMenu = document.querySelector('.nav-menu');
navMenu.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
link.addEventListener('click', () => {
document.querySelector('.nav-menu').classList.remove('active');
});
});

// CALCULADORA DE IMPACTO
function calcularImpacto() {
const area = parseFloat(document.getElementById('area').value);
const irrigacao = document.getElementById('irrigacao').value;

if (!area || area <= 0) {
document.getElementById('resultado-calc').innerHTML = '<span style="color: #e74c3c;">❌ Digite um valor válido</span>';
return;
}

let economia = 0;
let emissoes = 100 - (area / 10);

if (irrigacao === 'Gotejamento') {
economia = area * 0.4; // 40% de economia
emissoes -= 30;
} else if (irrigacao === 'Pivô central') {
economia = area * 0.2; // 20% de economia
emissoes -= 15;
} else {
economia = area * 0.05; // 5% de economia
}

document.getElementById('resultado-calc').innerHTML = `
<strong>📊 Seu Impacto:</strong><br>
💧 Economia de água: ${economia.toFixed(1)} m³/safra<br>
🌍 Redução de emissões: ${Math.max(emissoes, 0).toFixed(1)}%<br>
<span style="color: var(--light-green);">✅ Sistema ${irrigacao} é uma ótima escolha!</span>
`;
}
