import{_ as r,a as n,b as l,c as d}from"./chunks/ClientKeySecret.DxtZ03a9.js";import{_ as u,c,I as a,w as i,a6 as s,j as o,a as t,E as p,o as g}from"./chunks/framework.dp3vP9A2.js";const D=JSON.parse('{"title":"OAuths - Configurando logins de terceiros para o seu site","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/oauths.md","filePath":"pt/guide/oauths.md","lastUpdated":1737127002000}'),m={name:"pt/guide/oauths.md"},h=s('<h1 id="oauths-configurando-logins-de-terceiros-para-o-seu-site" tabindex="-1">OAuths - Configurando logins de terceiros para o seu site <a class="header-anchor" href="#oauths-configurando-logins-de-terceiros-para-o-seu-site" aria-label="Permalink to &quot;OAuths - Configurando logins de terceiros para o seu site&quot;">​</a></h1><p>A página <strong>OAuths</strong> no VpAdmin permite que você configure integrações de login de terceiros para seus sites publicados, permitindo que os usuários façam login usando suas contas existentes de plataformas populares. Isso simplifica a experiência do usuário e pode aumentar o engajamento no seu site.</p><h2 id="visao-geral" tabindex="-1">Visão Geral <a class="header-anchor" href="#visao-geral" aria-label="Permalink to &quot;Visão Geral&quot;">​</a></h2><p>A página OAuths fornece um local centralizado para gerenciar as configurações de login de terceiros para seus sites. Aqui, você pode:</p><ul><li><strong>Adicionar Novas Configurações:</strong> Crie integrações com plataformas como GitHub, GitLab, Google e Facebook.</li><li><strong>Gerenciar Configurações Existentes:</strong> Edite, exclua ou alterne o status de suas configurações OAuth.</li><li><strong>Pesquisar e Filtrar:</strong> Localize rapidamente configurações específicas usando filtros.</li></ul><h2 id="plataformas-suportadas" tabindex="-1">Plataformas Suportadas <a class="header-anchor" href="#plataformas-suportadas" aria-label="Permalink to &quot;Plataformas Suportadas&quot;">​</a></h2><p>Atualmente, o VpAdmin oferece suporte a integrações OAuth com as seguintes plataformas:</p><ul><li><strong>GitHub</strong></li><li><strong>GitLab</strong></li><li><strong>Google</strong></li><li><strong>Facebook</strong></li></ul><p>O suporte para outras plataformas será adicionado em versões futuras.</p><h2 id="adicionar-configuracao-oauth" tabindex="-1">Adicionar Configuração OAuth <a class="header-anchor" href="#adicionar-configuracao-oauth" aria-label="Permalink to &quot;Adicionar Configuração OAuth&quot;">​</a></h2>',10),f=o("a",{href:"/vpadmin/AddOAuthSetting.png",class:"zoomable-image"},[o("img",{src:r,alt:"Adicionar Configuração OAuth",style:{width:"50%"}})],-1),_=s('<ol><li><p><strong>Selecione um Site:</strong> Escolha o site para o qual deseja configurar a integração OAuth. Observe que apenas sites com a funcionalidade de administração habilitada estarão disponíveis.</p></li><li><p><strong>Selecione uma Plataforma:</strong> Escolha a plataforma com a qual deseja integrar (por exemplo, GitHub, GitLab, Google, Facebook).</p></li><li><p><strong>Insira o ID do Cliente e o Segredo do Cliente:</strong> Obtenha o <strong>ID do Cliente</strong> e o <strong>Segredo do Cliente</strong> no console do desenvolvedor da plataforma escolhida. Essas credenciais são necessárias para autenticar seu site com a plataforma. Para exemplos de como obtê-los, consulte a seção <a href="./oauths#github-example">Exemplo do GitHub</a> abaixo.</p></li><li><p><strong>Configurar URI de Redirecionamento:</strong> O URI de Redirecionamento é gerado automaticamente com base no site que você selecionou.</p><div class="warning custom-block"><p class="custom-block-title">NOTA</p><p>Certifique-se de ter definido corretamente seu domínio real no campo &#39;Domínio&#39; ao criar ou editar seu site em &#39;Configurações de Sites&#39;.</p></div></li><li><p><strong>Definir Status:</strong> Habilite ou desabilite a configuração usando a alternância de status.</p></li></ol><p>Uma vez configurado, os recursos de login de terceiros na janela de login do seu site serão ativados, conforme mostrado abaixo:</p>',2),b=o("a",{href:"/vpadmin/UserSideOAuthEnabled.png",class:"zoomable-image"},[o("img",{src:n,alt:"OAuth Habilitado do Lado do Usuário",style:{width:"50%"}})],-1),A=s('<h2 id="exemplo-do-github" tabindex="-1">Exemplo do GitHub <a class="header-anchor" href="#exemplo-do-github" aria-label="Permalink to &quot;Exemplo do GitHub&quot;">​</a></h2><p>Aqui está um exemplo detalhado de como configurar a integração OAuth do GitHub:</p><ol><li><strong>Crie um Aplicativo OAuth no GitHub:</strong><ul><li>Vá para as configurações da sua conta do GitHub e navegue até <code>Configurações de desenvolvedor</code> -&gt; <code>Aplicativos OAuth</code>.</li><li>Clique em &quot;Novo Aplicativo OAuth&quot;.</li><li>Preencha os seguintes campos: <ul><li><p><strong>Nome do aplicativo:</strong> Insira um nome para o seu aplicativo (por exemplo, SeuNomeDeWebsite).</p></li><li><p><strong>URL da página inicial:</strong> Insira o URL da página inicial do seu site (por exemplo, <code>https://seu.dominio.nome</code>).</p></li><li><p><strong>URL de retorno de chamada de autorização:</strong> Insira o URI de Redirecionamento que você configurou no VpAdmin.</p><p>Ele segue este padrão:</p><div class="language- vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://seu.dominio.nome/social-callback?source=plataforma</span></span></code></pre></div><ul><li>Substitua <code>seu.dominio.nome</code> pelo nome de domínio do seu site.</li><li>Substitua <code>plataforma</code> pela plataforma que você está configurando (por exemplo, <code>github</code>, <code>gitlab</code>, <code>google</code>, <code>facebook</code>).</li></ul><p><strong>Exemplo para GitHub:</strong></p><div class="language- vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://seu.dominio.nome/social-callback?source=github</span></span></code></pre></div></li></ul></li></ul></li></ol>',3),v=o("a",{href:"/vpadmin/GithubOAuthCreation.png",class:"zoomable-image"},[o("img",{src:l,alt:"Criação de Aplicativo Github OAuth"})],-1),C=o("ol",{start:"2"},[o("li",null,[o("strong",null,"Obtenha o ID do Cliente e o Segredo do Cliente:"),o("ul",null,[o("li",null,"Após criar o Aplicativo OAuth, você será redirecionado para a página de configurações do aplicativo."),o("li",null,[t("Copie o "),o("strong",null,"ID do Cliente"),t(" e gere um novo "),o("strong",null,"Segredo do Cliente"),t(".")])])])],-1),x=o("a",{href:"/vpadmin/ClientKeySecret.png",class:"zoomable-image"},[o("img",{src:d,alt:"ID do Cliente e Segredo"})],-1),S=s('<ol start="3"><li><strong>Insira as Credenciais no VpAdmin:</strong><ul><li>Volte para a página OAuths do VpAdmin.</li><li>Cole o <strong>ID do Cliente</strong> e o <strong>Segredo do Cliente</strong> copiados nos campos correspondentes para a configuração do GitHub.</li></ul></li></ol><h2 id="conclusao" tabindex="-1">Conclusão <a class="header-anchor" href="#conclusao" aria-label="Permalink to &quot;Conclusão&quot;">​</a></h2><p>Ao configurar integrações OAuth, você pode aprimorar a experiência do usuário do seu site, fornecendo uma maneira conveniente e segura para os usuários fazerem login. O VpAdmin simplifica esse processo, fornecendo uma plataforma centralizada para gerenciar todas as suas configurações de login de terceiros. Com suporte para plataformas populares como GitHub, GitLab, Google e Facebook, você pode facilmente integrar essas opções de login em seu site e simplificar o processo de registro do usuário.</p>',3);function O(q,T,G,I,P,k){const e=p("MagnificPopup");return g(),c("div",null,[h,a(e,null,{default:i(()=>[f]),_:1}),_,a(e,null,{default:i(()=>[b]),_:1}),A,a(e,null,{default:i(()=>[v]),_:1}),C,a(e,null,{default:i(()=>[x]),_:1}),S])}const H=u(m,[["render",O]]);export{D as __pageData,H as default};
