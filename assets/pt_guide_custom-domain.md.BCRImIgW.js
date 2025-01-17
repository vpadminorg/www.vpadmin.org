import{_ as r,a as t}from"./chunks/CustomDomain.02Mix-6a.js";import{_ as n,c as d,I as s,w as i,a6 as e,E as l,o as u,j as a}from"./chunks/framework.dp3vP9A2.js";const D=JSON.parse('{"title":"Configuração de Domínio Personalizado para Seu Site","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/custom-domain.md","filePath":"pt/guide/custom-domain.md","lastUpdated":1737127002000}'),c={name:"pt/guide/custom-domain.md"},p=e('<h1 id="configuracao-de-dominio-personalizado-para-seu-site" tabindex="-1">Configuração de Domínio Personalizado para Seu Site <a class="header-anchor" href="#configuracao-de-dominio-personalizado-para-seu-site" aria-label="Permalink to &quot;Configuração de Domínio Personalizado para Seu Site&quot;">​</a></h1><p>A capacidade de usar um domínio personalizado é crucial para o branding e para criar uma presença online profissional para o seu site. Cada plataforma de hospedagem de sites estáticos tem seu método de configuração específico. Este documento usará o GitHub Pages como exemplo para fornecer uma visão geral básica de como configurar seu domínio personalizado. Para informações mais detalhadas, consulte a documentação oficial do GitHub Pages: <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank" rel="noreferrer">https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site</a>.</p><h2 id="visao-geral" tabindex="-1">Visão Geral <a class="header-anchor" href="#visao-geral" aria-label="Permalink to &quot;Visão Geral&quot;">​</a></h2><p>Este guia explica como:</p><ul><li><strong>Configurar um Domínio Personalizado</strong> usando o GitHub Pages</li><li><strong>Configurar registros DNS</strong> em seu registrador de domínio</li></ul><h2 id="etapas-de-configuracao-exemplo-do-github-pages" tabindex="-1">Etapas de Configuração (Exemplo do GitHub Pages) <a class="header-anchor" href="#etapas-de-configuracao-exemplo-do-github-pages" aria-label="Permalink to &quot;Etapas de Configuração (Exemplo do GitHub Pages)&quot;">​</a></h2><h3 id="etapa-1-configurar-registros-dns-em-seu-provedor-de-dominio" tabindex="-1">Etapa 1: Configurar Registros DNS em Seu Provedor de Domínio <a class="header-anchor" href="#etapa-1-configurar-registros-dns-em-seu-provedor-de-dominio" aria-label="Permalink to &quot;Etapa 1: Configurar Registros DNS em Seu Provedor de Domínio&quot;">​</a></h3><p>Você precisa configurar os seguintes registros DNS em seu provedor de domínio para apontar seu domínio personalizado para o GitHub Pages:</p><ol><li><strong>Registros A:</strong> Aponte seu domínio raiz (por exemplo, <code>seusite.org</code>) para os endereços IP dos servidores do GitHub Pages, que são: <ul><li><code>185.199.108.153</code></li><li><code>185.199.109.153</code></li><li><code>185.199.110.153</code></li><li><code>185.199.111.153</code></li></ul></li><li><strong>Registro CNAME:</strong> Aponte seu subdomínio <code>www</code> (por exemplo, <code>www.seusite.org</code>) para seu domínio do GitHub Pages (por exemplo, <code>seunome.github.io</code>).</li></ol>',9),m=a("a",{href:"/vpadmin/CustomDomainDNSRecordSetting.png",class:"zoomable-image"},[a("img",{src:r,alt:"Configurações de Registro DNS de Domínio Personalizado",style:{width:"50%"}})],-1),g=e('<h3 id="etapa-2-definir-dominio-personalizado-no-github-pages" tabindex="-1">Etapa 2: Definir Domínio Personalizado no GitHub Pages <a class="header-anchor" href="#etapa-2-definir-dominio-personalizado-no-github-pages" aria-label="Permalink to &quot;Etapa 2: Definir Domínio Personalizado no GitHub Pages&quot;">​</a></h3><ol><li><strong>Navegue até as configurações do seu repositório:</strong> Vá para o seu repositório do GitHub onde o código do seu site está hospedado.</li><li><strong>Abra as configurações do GitHub Pages:</strong> Clique em &quot;Settings&quot; e depois navegue até a seção &quot;Pages&quot; na barra lateral.</li><li><strong>Insira seu domínio personalizado:</strong> Na seção &quot;Custom domain&quot;, insira o nome de domínio personalizado desejado (por exemplo, <code>www.seusite.org</code>).</li><li><strong>Salvar e Verificar:</strong> Clique em &quot;Save&quot;. O GitHub Pages tentará verificar suas configurações de domínio personalizado.</li></ol>',2),h=a("a",{href:"/vpadmin/CustomDomain.png",class:"zoomable-image"},[a("img",{src:t,alt:"Domínio Personalizado"})],-1),f=e(`<h3 id="etapa-3-habilitar-https-recomendado" tabindex="-1">Etapa 3: Habilitar HTTPS (Recomendado) <a class="header-anchor" href="#etapa-3-habilitar-https-recomendado" aria-label="Permalink to &quot;Etapa 3: Habilitar HTTPS (Recomendado)&quot;">​</a></h3><p>Nas configurações do GitHub Pages, marque a opção &quot;Enforce HTTPS&quot; para habilitar a criptografia em seu site. Isso é essencial para a segurança e para o bom funcionamento de alguns recursos.</p><h3 id="etapa-4-alterar-a-url-base" tabindex="-1">Etapa 4: Alterar a URL BASE <a class="header-anchor" href="#etapa-4-alterar-a-url-base" aria-label="Permalink to &quot;Etapa 4: Alterar a URL BASE&quot;">​</a></h3><ul><li><strong>Configuração do Tema:</strong> Dependendo do seu tema, você pode precisar configurar a URL BASE ou configurações similares para garantir que seu site funcione corretamente com seu domínio personalizado, especialmente se os recursos da página forem carregados incorretamente.</li><li><strong>Encontrando a Configuração:</strong> A localização exata dessa configuração varia dependendo do tema ou do framework SSG. <ul><li>Se estiver usando temas <code>vitepress</code>, a configuração geralmente está no arquivo <code>config.mts</code>, procure por configurações como <code>base: &#39;/&#39;</code></li><li>Se estiver usando temas <code>hugo</code>, a configuração geralmente está no arquivo <code>config.toml</code>, procure por configurações como <code>baseURL = &quot;your-domain.org&quot;</code></li><li>Se estiver usando temas <code>jekyll</code>, a configuração geralmente está no arquivo <code>_config.yml</code>, procure por configurações como <code>baseurl: &quot;&quot;</code></li></ul></li><li><strong>Definindo uma URL Base Padrão</strong>: Se o seu tema não tiver uma configuração dedicada para a <code>URL BASE</code> ou uma configuração semelhante, você deverá alterá-la para um formato como <code>BASE_URL = &#39;/&#39;</code>, <code>baseurl: &quot;&quot;</code> ou <code>base: &#39;/&#39;</code> para evitar quaisquer conflitos.</li><li><strong>Exemplo para VitePress</strong><div class="language-javascript vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul><h2 id="consideracoes-importantes" tabindex="-1">Considerações Importantes <a class="header-anchor" href="#consideracoes-importantes" aria-label="Permalink to &quot;Considerações Importantes&quot;">​</a></h2><ul><li><strong>Tempo de Propagação:</strong> As alterações de DNS podem levar algum tempo para se propagarem pela internet. Pode levar alguns minutos ou horas para que suas alterações entrem em vigor.</li><li><strong>Requisitos Específicos:</strong> Plataformas diferentes terão requisitos e layouts de interface do usuário diferentes, sempre verifique suas documentações específicas.</li><li><strong>Provedor de Domínio:</strong> Você precisará de acesso às configurações de DNS do seu provedor de domínio para criar ou alterar esses registros.</li><li><strong>Configurações VpAdmin</strong>: Depois de configurar as configurações de DNS com seu registrador de domínio, você também precisa definir o mesmo domínio na &quot;Configuração de Sites&quot; no VpAdmin.</li></ul><h2 id="conclusao" tabindex="-1">Conclusão <a class="header-anchor" href="#conclusao" aria-label="Permalink to &quot;Conclusão&quot;">​</a></h2><p>Seguindo estas etapas, você pode configurar com sucesso um domínio personalizado para seu site hospedado no GitHub Pages. Lembre-se de consultar a documentação oficial da sua plataforma de hospedagem para obter instruções mais detalhadas, especialmente se você estiver usando uma plataforma diferente.</p>`,8);function b(_,P,k,E,q,v){const o=l("MagnificPopup");return u(),d("div",null,[p,s(o,null,{default:i(()=>[m]),_:1}),g,s(o,null,{default:i(()=>[h]),_:1}),f])}const A=n(c,[["render",b]]);export{D as __pageData,A as default};
