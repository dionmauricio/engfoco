document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      const icon = menuToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close menu when a non-dropdown nav link is clicked (mobile)
    mainNav.querySelectorAll("a:not(.nav-dropdown__toggle)").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // --- Dropdown Toggle (Mobile) ---
  const dropdownToggles = document.querySelectorAll(".nav-dropdown__toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      // On mobile, toggle dropdown open/close
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const parent = toggle.closest(".nav-dropdown");
        parent.classList.toggle("open");
      }
    });
  });

  // Close dropdown when clicking outside (desktop)
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-dropdown")) {
      document
        .querySelectorAll(".nav-dropdown")
        .forEach((d) => d.classList.remove("open"));
    }
  });

  // --- Dynamic Active Link Highlighting ---
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage && linkPage.split("?")[0] === currentPage.split("?")[0]) {
      link.classList.add("active");
    }
  });

  // --- NR Page Rendering ---
  const nrContainer = document.getElementById("nr-content");
  if (!nrContainer) return;

  const nrsData = {
    "01": {
      numero: "01",
      titulo: "Disposições Gerais e Gerenciamento de Riscos Ocupacionais",
      conteudo: `<p>A NR 01 trata das disposições gerais, ou seja, ela fala sobre o <strong>conjunto de normas como um todo</strong>. A empresa, além de cumprir as normas, também deve exigir que os colaboradores as cumpram no ambiente de trabalho.</p>
<p>Além disso, a empresa é obrigada a informar aos colaboradores sobre os métodos de segurança que devem ser seguidos, <strong>treiná-los, gerar certificados dos treinamentos e deixar claro os riscos aos quais eles estão expostos.</strong></p>
<p>A <strong>Secretaria de Trabalho- STRAB</strong>, por meio da Subsecretaria de Inspeção do Trabalho-SIT, <strong>é o órgão de âmbito nacional competente em matéria de segurança e saúde no trabalho para:</strong></p>
<ul>
<li><strong>Formular e propor as diretrizes, as normas de atuação e supervisionar</strong> as atividades da área de segurança e saúde do trabalhador;</li>
<li><strong>Promover</strong> a Campanha Nacional de Prevenção de Acidentes de Trabalho <strong>CANPAT</strong>;</li>
<li><strong>Coordenar e fiscalizar o Programa de Alimentação do Trabalhador- PAT</strong>;</li>
</ul>
<p>Trata dos direitos e deveres do empregador:</p>
<ul>
<li><strong>Cumprir e fazer cumprir as normas;</strong></li>
<li><strong>Informar aos trabalhadores:</strong> riscos, medidas de prevenção, resultados de exames e avaliações ambientais realizadas nos locais de trabalho;</li>
<li><strong>Determinar procedimentos que devem ser adotados em caso de acidente ou doença;</strong></li>
<li><strong>Disponibilizar à Inspeção do Trabalho todas as informações;</strong></li>
</ul>`,
    },
    "04": {
      numero: "04",
      titulo:
        "Serviços Especializados em Engenharia de Segurança e em Medicina do Trabalho (SESMT)",
      conteudo: `<p>A NR 4 define o <strong>SESMT (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho)</strong>. Ela determina que todas as empresas devem manter o SESMT conforme o grau de risco e número de empregados.</p>
<p>O SESMT é composto por profissionais especializados como engenheiros de segurança, médicos do trabalho, enfermeiros, técnicos de segurança e auxiliares de enfermagem do trabalho.</p>
<p>Sua principal finalidade é <strong>promover a saúde e proteger a integridade do trabalhador no local de trabalho</strong>, realizando ações preventivas e de controle dos riscos ambientais.</p>`,
    },
    "05": {
      numero: "05",
      titulo: "Comissão Interna de Prevenção de Acidentes (CIPA)",
      conteudo: `<p>A NR 5 trata da <strong>CIPA – Comissão Interna de Prevenção de Acidentes</strong>. Ela estabelece que as empresas devem constituir e manter uma CIPA, composta por representantes do empregador e dos empregados.</p>
<p>A CIPA tem como objetivo a <strong>prevenção de acidentes e doenças decorrentes do trabalho</strong>, tornando compatível permanentemente o trabalho com a preservação da vida e a promoção da saúde do trabalhador.</p>
<p>Atualização: A CIPA passou a ser chamada de <strong>Comissão Interna de Prevenção de Acidentes e de Assédio</strong>, ampliando seu escopo para incluir a prevenção do assédio no ambiente de trabalho.</p>`,
    },
    "06": {
      numero: "06",
      titulo: "Equipamentos de Proteção Individual (EPI)",
      conteudo: `<p>Esta NR estabelece as regras para uso, <strong>responsabilidades e requisitos dos Equipamentos de Proteção Individual</strong>. Ela é como um guia que explica quando utilizar os EPIs, pois eles são usados quando nenhuma outra medida de segurança resolve totalmente o risco no ambiente de trabalho.</p>
<p>Igualmente importante é a decisão de que a escolha do EPI deverá ser registrada. Ou seja, deverá integrar ou ser referenciada no PGR. Além disso, os equipamentos deverão ser escolhidos a partir da <strong>classificação dos riscos</strong>. E nunca de forma aleatória.</p>`,
    },
    "09": {
      numero: "09",
      titulo:
        "Avaliação e Controle das Exposições Ocupacionais a Agentes Físicos, Químicos e Biológicos",
      conteudo: `<p>Essa norma tratava da obrigatoriedade de as empresas terem um Programa de Prevenção de Riscos Ambientais.</p>
<p>Atualização: O programa foi excluído e substituído pela <strong>Avaliação das Exposições Ocupacionais a Agentes Físicos, Químicos e Biológicos</strong>. A NR tem diversos anexos para servirem de parâmetro para a avaliação dessas exposições.</p>`,
    },
    10: {
      numero: "10",
      titulo: "Segurança em Instalações e Serviços em Eletricidade",
      conteudo: `<p>Essa norma está relacionada a riscos de <strong>choques elétricos</strong> ou outros riscos relacionados à eletricidade. Ela também estabelece a necessidade de criação de <strong>medidas de proteção</strong> contra eles.</p>`,
    },
    11: {
      numero: "11",
      titulo: "Transporte, Armazenagem e Manuseio de Materiais",
      conteudo: `<p>Trata-se de uma das Normas Regulamentadoras mais relevantes para a construção civil, pois define diretrizes essenciais voltadas à <strong>proteção dos trabalhadores nos canteiros de obras</strong>.</p>
<p>Considerando que o ambiente de uma obra em andamento é dinâmico e repleto de riscos, essas normas funcionam como mecanismos de prevenção, garantindo que as atividades sejam executadas com elevados níveis de cuidado e segurança.</p>
<p>Ao estabelecer critérios objetivos para o transporte, a movimentação, a armazenagem e o manuseio de materiais, a NR 11 abrange práticas fundamentais presentes em todos os canteiros de obras do setor da construção civil.</p>
<p>Sua relevância é indiscutível, uma vez que a aplicação correta de suas diretrizes pode representar a diferença entre um local de trabalho seguro e a exposição a acidentes. Além disso, o não cumprimento da norma sujeita as construtoras a <strong>penalidades administrativas</strong> previstas em lei.</p>`,
    },
    12: {
      numero: "12",
      titulo: "Requisitos Mínimos de Segurança para Máquinas e Equipamentos",
      conteudo: `<p>Essa norma abrange desde o projeto, fabricação, importação até o uso, manutenção e desmonte, visando a <strong>saúde e integridade física dos trabalhadores</strong>, com medidas de proteção coletiva, organização e treinamento, sendo um dos pilares para a <strong>prevenção de acidentes no ambiente industrial</strong>.</p>`,
    },
    15: {
      numero: "15",
      titulo: "Atividades e Operações Insalubres",
      conteudo: `<p>A NR-15 lista as atividades e operações que são nocivas à saúde. Ela possui 14 anexos apontando tipos de atividades e operações que podem ser consideradas insalubres.</p>
<p>Quem trabalha sob essas condições, tem direito a receber um <strong>adicional de insalubridade</strong> no salário.</p>`,
    },
    16: {
      numero: "16",
      titulo: "Atividades e Operações Perigosas",
      conteudo: `<p>A CLT define quais atividades e operações podem ser consideradas perigosas, e a NR 16 detalha essas condições.</p>
<p>Quem trabalha com atividades e operações perigosas tem direito a <strong>adicional no salário</strong> por meio de um laudo.</p>`,
    },
    17: {
      numero: "17",
      titulo: "Ergonomia",
      conteudo: `<p>Essa norma estabelece parâmetros para adaptação das condições de trabalho às <strong>características psicofisiológicas dos trabalhadores</strong>, visando o máximo de conforto, segurança e desempenho eficiente.</p>
<p>Atualização: Surgimento da <strong>Avaliação Ergonômica Preliminar (AEP)</strong> obrigatória para todas as empresas, além de definir critérios para elaboração desse documento.</p>`,
    },
    18: {
      numero: "18",
      titulo: "Segurança e Saúde no Trabalho na Indústria da Construção",
      conteudo: `<p>Chamada anteriormente de Condições e Meio Ambiente de Trabalho na Indústria da Construção.</p>
<p>Essa NR estabelecia o documento "Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção Civil" (PCMAT), para garantir a <strong>segurança nos canteiros de obras</strong>.</p>
<p>Atualização: <strong>O PCMAT foi substituído pelo Programa de Gerenciamento de Riscos (PGR), instituída na NR-1.</strong></p>`,
    },
    19: {
      numero: "19",
      titulo: "Explosivos",
      conteudo: `<p>Essa NR estabelece parâmetros de segurança específicos para quem trabalha com <strong>fabricação, armazenamento e transporte de explosivos</strong>.</p>
<p>Atualização: Foi feita <strong>a integração com o GRO e o PGR</strong>, e com isso, a inclusão de riscos de incêndio e explosão e as medidas de prevenção.</p>`,
    },
    20: {
      numero: "20",
      titulo: "Segurança e Saúde no Trabalho com Inflamáveis e Combustíveis",
      conteudo: `<p>A NR 20 se aplica a atividades de extração, produção, armazenamento, transferência, manuseio e manipulação de <strong>materiais inflamáveis e líquidos combustíveis</strong>.</p>
<p>O trabalhador deve participar de cursos de capacitação para que saiba como proceder de forma segura com esses materiais.</p>
<p>Atualização: <strong>O Anexo IV estabeleceu novos requisitos de saúde e segurança relacionados com a exposição ao benzeno.</strong></p>`,
    },
    22: {
      numero: "22",
      titulo: "Mineração",
      conteudo: `<p>Estabelece medidas de segurança e saúde ocupacional voltadas às atividades de <strong>mineração</strong>, abrangendo desde a pesquisa mineral até o beneficiamento.</p>
<p>Seu objetivo é prevenir acidentes e doenças do trabalho, garantindo condições adequadas de ventilação, estabilidade das estruturas, uso correto de equipamentos, sinalização, capacitação dos trabalhadores e planos de emergência.</p>
<p>A norma também define responsabilidades do empregador e dos trabalhadores, sendo fundamental para a <strong>redução de riscos</strong> e a promoção de um ambiente de trabalho seguro no setor mineral.</p>`,
    },
    23: {
      numero: "23",
      titulo: "Proteção Contra Incêndios",
      conteudo: `<p>Essa norma estabelece as medidas de <strong>Proteção Contra Incêndios</strong> em ambientes de trabalho no Brasil, exigindo que empresas implementem prevenção, combate e proteção, incluindo:</p>
<ul>
<li>Saídas de emergência sinalizadas e desobstruídas;</li>
<li>Equipamentos de combate a incêndio adequados;</li>
<li>Treinamento para os trabalhadores sobre como agir em caso de emergência;</li>
</ul>
<p>Sempre em conformidade com legislações estaduais e normas técnicas.</p>`,
    },
    33: {
      numero: "33",
      titulo: "Segurança e Saúde em Espaços Confinados",
      conteudo: `<p>Esta Norma Regulamentadora tem como objetivo estabelecer os requisitos para a <strong>caracterização dos espaços confinados</strong>, os critérios para o gerenciamento de riscos ocupacionais em espaços confinados e as medidas de prevenção, de forma a garantir a segurança e a saúde dos trabalhadores que interagem direta ou indiretamente com estes espaços.</p>`,
    },
    35: {
      numero: "35",
      titulo: "Trabalho em Altura (acima de 2 metros)",
      conteudo: `<p>A NR-35 é a Norma Regulamentadora que estabelece requisitos mínimos e medidas de proteção para <strong>trabalho em altura acima de 2 metros</strong> com risco de queda.</p>
<p>Ela exige treinamentos específicos, <strong>EPIs obrigatórios</strong> como capacete com jugular e cinto de segurança, além de procedimentos operacionais detalhados.</p>
<p>A norma abrange atividades como manutenções prediais, trabalhos em telhados e torres de energia, sendo essencial para profissionais que operam plataformas elevatórias e equipamentos similares.</p>
<p>O cumprimento da NR-35 é fundamental para garantir a <strong>segurança e saúde dos trabalhadores</strong> envolvidos direta ou indiretamente em atividades em altura.</p>`,
    },
    38: {
      numero: "38",
      titulo:
        "Segurança e Saúde no Trabalho nas Atividades de Limpeza Urbana e Manejo de Resíduos Sólidos",
      conteudo: `<p>Essa norma estabelece medidas para contribuir com a <strong>saúde dos trabalhadores</strong> que realizam a limpeza urbana e estão em contato com resíduos sólidos.</p>`,
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const nrParam = urlParams.get("nr");

  if (nrParam && nrsData[nrParam]) {
    renderNrDetail(nrsData[nrParam]);
  } else {
    renderNrGrid(nrsData);
  }

  function renderNrDetail(nr) {
    const whatsappText = encodeURIComponent(
      `Olá, gostaria de mais informações sobre o treinamento da NR ${nr.numero} - ${nr.titulo}`,
    );
    const whatsappUrl = `https://wa.me/5594991189447?text=${whatsappText}`;

    nrContainer.innerHTML = `
            <section class="nr-page" style="padding: 40px 0 60px; min-height: calc(100vh - var(--header-height) - var(--topbar-height) - 140px); display: flex; align-items: center;">
                <div class="container" style="max-width: 1080px; width: 100%;">
                    <div class="nr-grid-item" style="max-width: 100%; height: 72vh; min-height: 576px; max-height: 780px; margin: 0 auto; display: flex; flex-direction: column;">
                        <a href="nrs.html" class="nr-grid-item__link" style="flex: 1; display: flex; flex-direction: column; overflow: hidden;" title="Voltar para a lista">
                            <div class="nr-grid-item__image-container" style="flex: 1; height: 100%; display: flex; align-items: center; justify-content: center; background-color: var(--primary-dark); aspect-ratio: unset;">
                                <img src="img/nrs/NR-${nr.numero}.webp" alt="NR ${nr.numero} - ${nr.titulo}" class="nr-grid-item__image" style="width: 100%; height: 100%; object-fit: contain;">
                            </div>
                        </a>
                        <div class="nr-grid-item__actions">
                            <a href="${whatsappUrl}" target="_blank" rel="noopener" class="nr-grid-item__contact-btn">
                                Entre em Contato <i class="fab fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 25px;">
                        <a href="nrs.html" style="color: var(--primary-light); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; transition: color 0.2s ease;">
                            <i class="fas fa-arrow-left"></i> Voltar para a lista de NR's
                        </a>
                    </div>
                </div>
            </section>
        `;
  }

  function renderNrGrid(data) {
    const nrOrder = [
      "01",
      "04",
      "05",
      "06",
      "09",
      "10",
      "11",
      "12",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "22",
      "23",
      "33",
      "35",
      "38",
    ];
    let gridItems = "";

    nrOrder.forEach((key) => {
      const nr = data[key];
      if (!nr) return;

      const whatsappText = encodeURIComponent(
        `Olá, gostaria de mais informações sobre o treinamento da NR ${nr.numero} - ${nr.titulo}`,
      );
      const whatsappUrl = `https://wa.me/5594991189447?text=${whatsappText}`;

      gridItems += `
                <div class="nr-grid-item">
                    <a href="nrs.html?nr=${nr.numero}" class="nr-grid-item__link">
                        <div class="nr-grid-item__image-container">
                            <img src="img/nrs/NR-${nr.numero}.webp" alt="NR ${nr.numero} - ${nr.titulo}" class="nr-grid-item__image" loading="lazy">
                        </div>
                    </a>
                    <div class="nr-grid-item__actions">
                        <a href="${whatsappUrl}" target="_blank" rel="noopener" class="nr-grid-item__contact-btn">
                            Entre em Contato <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            `;
    });

    nrContainer.innerHTML = `
            <section class="section" style="padding-top: 80px;">
                <div class="container">
                    <h1 class="section-title section-title--center">Normas Regulamentadoras</h1>
                    <p style="text-align: left; margin: -20px 0 25px; color: var(--text-light); font-size: 1.05rem; line-height: 1.7;">
                        A EngFoco oferece treinamentos completos sobre as principais Normas Regulamentadoras (NRs) de Segurança e Saúde no Trabalho, capacitando profissionais e empresas para atuarem em conformidade com a legislação vigente.
                    </p>
                    <p style="text-align: left; margin: -20px 0 25px; color: var(--text-light); font-size: 1.05rem; line-height: 1.7;">
                        Conheça as NRs aplicadas pela EngFoco e garanta qualificação, segurança e atendimento às exigências legais por meio de treinamentos especializados.
                    </p>
                    <div class="nr-grid">
                        ${gridItems}
                    </div>
                </div>
            </section>
        `;
  }
});
