// Funções do modal

const goalsList = [
  {
    title: "Meta 2.1",
    goalNumber: "2.1",
    subTitle: "Acabar com a fome e com a insegurança alimentar",
    description:
      "Até 2030, acabar com a fome e garantir o acesso de todas as pessoas, em particular os pobres e pessoas em situações vulneráveis, incluindo crianças, a alimentos seguros, nutritivos e suficientes durante todo o ano",
    img: "goal-1.png",
  },
  {
    title: "Meta 2.2",
    goalNumber: "2.2",
    subTitle: "Acabar com a desnutrição e deficiências nutricionais",
    description:
      "Até 2030, acabar com todas as formas de desnutrição, incluindo atingir, até 2025, as metas acordadas internacionalmente sobre nanismo e caquexia em crianças menores de cinco anos de idade, e atender às necessidades nutricionais dos adolescentes, mulheres grávidas e lactantes e pessoas idosas",
    img: "goal-2.png",
  },
  {
    title: "Meta 2.3",
    goalNumber: "2.3",
    subTitle: "Dobrar a produção agrícola e a renda dos pequenos produtores",
    description:
      "Até 2030, dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos, particularmente das mulheres, povos indígenas, agricultores familiares, pastores e pescadores, inclusive por meio de acesso seguro e igual à terra, outros recursos produtivos e insumos, conhecimento, serviços financeiros, mercados e oportunidades de agregação de valor e de emprego não agrícola",
    img: "goal-3.png",
  },
  {
    title: "Meta 2.4",
    goalNumber: "2.4",
    subTitle:
      "Garantir sistemas sustentáveis e implementar uma melhor produção agrícola",
    description:
      "2.4. Até 2030, garantir sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes, que aumentem a produtividade e a produção, que ajudem a manter os ecossistemas, que fortaleçam a capacidade de adaptação às mudanças climáticas, às condições meteorológicas extremas, secas, inundações e outros desastres, e que melhorem progressivamente a qualidade da terra e do solo",
    img: "goal-4.png",
  },
  {
    title: "Meta 2.5",
    goalNumber: "2.5",
    subTitle: "Manter a diversidade genética de sementes",
    description:
      "Até 2020, manter a diversidade genética de sementes, plantas cultivadas, animais de criação e domesticados e suas respectivas espécies selvagens, inclusive por meio de bancos de sementes e plantas diversificados e bem geridos em nível nacional, regional e internacional, além de garantir o acesso e a repartição justa e equitativa dos benefícios decorrentes da utilização dos recursos genéticos e conhecimentos tradicionais associados, como acordado internacionalmente",
    img: "goal-5.png",
  },
  {
    title: "Meta 2.6",
    goalNumber: "2.6",
    subTitle: "Aumentar a alocação de recursos monetários para o meio rural",
    description:
      "2.a. Aumentar o investimento, inclusive via o reforço da cooperação internacional, em infraestrutura rural, pesquisa e extensão de serviços agrícolas, desenvolvimento de tecnologia, e os bancos de genes de plantas e animais, para aumentar a capacidade de produção agrícola nos países em desenvolvimento, em particular nos países menos desenvolvidos",
    img: "goal-6.png",
  },
  {
    title: "Meta 2.7",
    goalNumber: "2.7",
    subTitle:
      "Corrigir e prevenir as restrições ao comércio e distorções nos mercados agrícolas mundiais",
    description:
      "Corrigir e prevenir as restrições ao comércio e distorções nos mercados agrícolas mundiais, incluindo a eliminação paralela de todas as formas de subsídios à exportação e todas as medidas de exportação com efeito equivalente, de acordo com o mandato da Rodada de Desenvolvimento de Doha",
    img: "goal-7.png",
  },
  {
    title: "Meta 2.8",
    goalNumber: "2.8",
    subTitle:
      "Garantir o funcionamento correto dos mercados de commodities de alimentos",
    description:
      "Adotar medidas para garantir o funcionamento adequado dos mercados de commodities de alimentos e seus derivados, e facilitar o acesso oportuno à informação de mercado, inclusive sobre as reservas de alimentos, a fim de ajudar a limitar a volatilidade extrema dos preços dos alimentos.",
    img: "goal-8.png",
  },
];

function modalDataOnHtml(data) {
  const interpolatedHtmlData = ` 
  <div class="modal-close" onclick="closeGoalsOdsModal()">
    <i class="fas fa-times"></i>
  </div>
  <div class="bg-white shadow d-flex flex-column rounded-bottom">
    <img src="img/${data.img}" alt="${data.title} img" class="rounded-top w-100" />
    <span class="d-flex flex-column align-items-center justify-content-center pt-3">
      <h4>${data.title}</h4>
      <p class="text-center">
        ${data.subTitle}
      </p>
    </span>
  </div>
  <div class="modal-bg-purple rounded py-5 px-3">
    <p class="text-white">
      ${data.description}
    </p>
  </div>
  `;

  const divToPutContent = document.querySelector(".modal-content");

  divToPutContent.innerHTML = interpolatedHtmlData;
}

function openGoalsOdsModal(modalIndex) {
  document.querySelector(".modal").classList.add("active");

  modalDataOnHtml(goalsList[modalIndex]);

  document.querySelector("body").style.overflowY = "hidden";
}

function closeGoalsOdsModal() {
  document.querySelector(".modal").classList.remove("active");

  document.querySelector("body").style.overflowY = "scroll";
}

const modalCard = document.querySelectorAll(".see-infos-hover");
const modalCardText = document.querySelectorAll(".see-text-hover");

function mouseOverModalCard(cardIndex) {

  modalCard[cardIndex].style.opacity = "0.4";
  modalCard[cardIndex].style.transition = "all .1s";

  modalCardText[cardIndex].innerHTML =  'CLIQUE PARA <br/> SABER MAIS'
  modalCardText[cardIndex].style.color = '#000'
}

function mouseOutModalCard(cardIndex) {

  modalCard[cardIndex].style.opacity = "1";
  modalCardText[cardIndex].innerHTML = `Meta<br />${goalsList[cardIndex].goalNumber}`;
  modalCardText[cardIndex].style.color = '#fff'
}
