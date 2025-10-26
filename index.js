import { Desenvolvedor, Jogo, Usuario } from './models.js';

const d = new Desenvolvedor('Thais', "JdB ind.");
const g = new Jogo("Jogo do Bolo", "Português", "I3 5400F, Wind. 10, 4Gb Ram, 1.5Gb Livre", "Puzzle");
const u = new Usuario("lucas456","Bolo de Morango, Chocolate e 24 outros itens","É os guri",9,"Lucas","1000 Pontos, 500 Pontos, Bem-Vindo",
    "Mestre Cuca","Jogo do Bolo, Jogo da Memória e outros 12 jogos");

console.log(`Dev: ${d.nome}, tem o ${g.jogo}, e sua publicadora é ${d.publicadora}`);
console.log(`Jogo: ${g.nome} tem tag de ${g.tag}, suas especificações são: ${g.especificacoes} e seu idioma é: ${g.idioma}`);
console.log(`Inventário do usuário: ${u.nome} é: ${u.inventario}, ele está na comunidade: ${u.comunidade}, ele tem ${u.reviews}
reviews. Seu perfil é: ${u.perfil}, ele tem as conquistas de ${u.conquista}, suas insignias são: ${u.insignia}, e ele tem ${u.jogos}`);
