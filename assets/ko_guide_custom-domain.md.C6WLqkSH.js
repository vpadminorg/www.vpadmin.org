import{_ as t,a as n}from"./chunks/CustomDomain.02Mix-6a.js";import{_ as l,c as r,I as e,w as o,a6 as i,E as d,o as c,j as a}from"./chunks/framework.dp3vP9A2.js";const A=JSON.parse('{"title":"웹사이트 사용자 지정 도메인 설정","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/custom-domain.md","filePath":"ko/guide/custom-domain.md","lastUpdated":1737127002000}'),h={name:"ko/guide/custom-domain.md"},u=i('<h1 id="웹사이트-사용자-지정-도메인-설정" tabindex="-1">웹사이트 사용자 지정 도메인 설정 <a class="header-anchor" href="#웹사이트-사용자-지정-도메인-설정" aria-label="Permalink to &quot;웹사이트 사용자 지정 도메인 설정&quot;">​</a></h1><p>사용자 지정 도메인을 사용하는 능력은 브랜드 구축 및 웹사이트의 전문적인 온라인 입지를 만드는 데 매우 중요합니다. 각 정적 사이트 호스팅 플랫폼은 특정 구성 방법을 가지고 있습니다. 이 문서는 GitHub Pages를 예시로 사용하여 사용자 지정 도메인을 설정하는 방법에 대한 기본 개요를 제공합니다. 자세한 내용은 공식 GitHub Pages 문서를 참조하십시오: <a href="https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site" target="_blank" rel="noreferrer">https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site</a>.</p><h2 id="개요" tabindex="-1">개요 <a class="header-anchor" href="#개요" aria-label="Permalink to &quot;개요&quot;">​</a></h2><p>이 가이드에서는 다음 방법을 설명합니다:</p><ul><li>GitHub Pages를 사용하여 <strong>사용자 지정 도메인 구성</strong></li><li>도메인 등록 기관에서 <strong>DNS 레코드 설정</strong></li></ul><h2 id="구성-단계-github-pages-예시" tabindex="-1">구성 단계 (GitHub Pages 예시) <a class="header-anchor" href="#구성-단계-github-pages-예시" aria-label="Permalink to &quot;구성 단계 (GitHub Pages 예시)&quot;">​</a></h2><h3 id="_1단계-도메인-제공자에서-dns-레코드-구성" tabindex="-1">1단계: 도메인 제공자에서 DNS 레코드 구성 <a class="header-anchor" href="#_1단계-도메인-제공자에서-dns-레코드-구성" aria-label="Permalink to &quot;1단계: 도메인 제공자에서 DNS 레코드 구성&quot;">​</a></h3><p>사용자 지정 도메인을 GitHub Pages로 연결하려면 도메인 제공자에서 다음 DNS 레코드를 구성해야 합니다:</p><ol><li><strong>A 레코드:</strong> 루트 도메인(예: <code>yourdomain.org</code>)을 GitHub Pages 서버의 IP 주소로 연결합니다. IP 주소는 다음과 같습니다: <ul><li><code>185.199.108.153</code></li><li><code>185.199.109.153</code></li><li><code>185.199.110.153</code></li><li><code>185.199.111.153</code></li></ul></li><li><strong>CNAME 레코드:</strong> <code>www</code> 서브도메인(예: <code>www.yourdomain.org</code>)을 GitHub Pages 도메인(예: <code>yourusername.github.io</code>)으로 연결합니다.</li></ol>',9),g=a("a",{href:"/vpadmin/CustomDomainDNSRecordSetting.png",class:"zoomable-image"},[a("img",{src:t,alt:"사용자 지정 도메인 DNS 레코드 설정",style:{width:"50%"}})],-1),p=i('<h3 id="_2단계-github-pages에서-사용자-지정-도메인-설정" tabindex="-1">2단계: GitHub Pages에서 사용자 지정 도메인 설정 <a class="header-anchor" href="#_2단계-github-pages에서-사용자-지정-도메인-설정" aria-label="Permalink to &quot;2단계: GitHub Pages에서 사용자 지정 도메인 설정&quot;">​</a></h3><ol><li><strong>저장소 설정으로 이동:</strong> 웹사이트 코드가 호스팅된 GitHub 저장소로 이동합니다.</li><li><strong>GitHub Pages 설정 열기:</strong> &quot;Settings&quot;를 클릭한 다음 사이드바에서 &quot;Pages&quot; 섹션으로 이동합니다.</li><li><strong>사용자 지정 도메인 입력:</strong> &quot;Custom domain&quot; 섹션에 원하는 사용자 지정 도메인 이름(예: <code>www.yourdomain.org</code>)을 입력합니다.</li><li><strong>저장 및 확인:</strong> &quot;Save&quot;를 클릭합니다. GitHub Pages가 사용자 지정 도메인 설정을 확인하려고 시도합니다.</li></ol>',2),_=a("a",{href:"/vpadmin/CustomDomain.png",class:"zoomable-image"},[a("img",{src:n,alt:"사용자 지정 도메인"})],-1),m=i(`<h3 id="_3단계-https-활성화-권장" tabindex="-1">3단계: HTTPS 활성화 (권장) <a class="header-anchor" href="#_3단계-https-활성화-권장" aria-label="Permalink to &quot;3단계: HTTPS 활성화 (권장)&quot;">​</a></h3><p>GitHub Pages 설정에서 &quot;Enforce HTTPS&quot; 옵션을 선택하여 웹사이트에서 암호화를 활성화합니다. 이는 보안 및 일부 기능의 원활한 작동에 필수적입니다.</p><h3 id="_4단계-base-url-변경" tabindex="-1">4단계: BASE URL 변경 <a class="header-anchor" href="#_4단계-base-url-변경" aria-label="Permalink to &quot;4단계: BASE URL 변경&quot;">​</a></h3><ul><li><strong>테마 구성:</strong> 테마에 따라 페이지 리소스가 올바르게 로드되지 않는 경우를 비롯하여 웹사이트가 사용자 지정 도메인에서 제대로 작동하도록 하려면 BASE URL 또는 유사한 설정을 구성해야 할 수 있습니다.</li><li><strong>설정 찾기:</strong> 이 설정의 정확한 위치는 테마 또는 SSG 프레임워크에 따라 다릅니다. <ul><li><code>vitepress</code> 테마를 사용하는 경우, 구성은 일반적으로 <code>config.mts</code> 파일에 있으며, <code>base: &#39;/&#39;</code>와 같은 설정을 찾습니다.</li><li><code>hugo</code> 테마를 사용하는 경우, 구성은 일반적으로 <code>config.toml</code> 파일에 있으며, <code>baseURL = &quot;your-domain.org&quot;</code>와 같은 설정을 찾습니다.</li><li><code>jekyll</code> 테마를 사용하는 경우, 구성은 일반적으로 <code>_config.yml</code> 파일에 있으며, <code>baseurl: &quot;&quot;</code>와 같은 설정을 찾습니다.</li></ul></li><li><strong>기본 Base URL 설정</strong>: 테마에 <code>BASE URL</code> 또는 유사한 설정에 대한 전용 설정이 없는 경우, 충돌을 피하기 위해 <code>BASE_URL = &#39;/&#39;</code>, <code>baseurl: &quot;&quot;</code> 또는 <code>base: &#39;/&#39;</code>와 같은 형식으로 변경해야 합니다.</li><li><strong>VitePress 예시</strong><div class="language-javascript vp-adaptive-theme"><button title="코드 복사" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  base: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></li></ul><h2 id="중요-고려-사항" tabindex="-1">중요 고려 사항 <a class="header-anchor" href="#중요-고려-사항" aria-label="Permalink to &quot;중요 고려 사항&quot;">​</a></h2><ul><li><strong>전파 시간:</strong> DNS 변경 사항이 인터넷 전체에 전파되는 데 시간이 걸릴 수 있습니다. 변경 사항이 적용되는 데 몇 분 또는 몇 시간이 걸릴 수 있습니다.</li><li><strong>특정 요구 사항:</strong> 플랫폼마다 요구 사항과 UI 레이아웃이 다르므로 항상 해당 특정 문서를 확인하십시오.</li><li><strong>도메인 제공자:</strong> 이러한 레코드를 생성하거나 변경하려면 도메인 제공자의 DNS 설정에 액세스해야 합니다.</li><li><strong>VpAdmin 설정</strong>: 도메인 등록 기관에서 DNS 설정을 구성한 후에는 VpAdmin의 &quot;사이트 구성&quot;에서 동일한 도메인을 설정해야 합니다.</li></ul><h2 id="결론" tabindex="-1">결론 <a class="header-anchor" href="#결론" aria-label="Permalink to &quot;결론&quot;">​</a></h2><p>이러한 단계를 따르면 GitHub Pages에서 호스팅되는 웹사이트에 대한 사용자 지정 도메인을 성공적으로 구성할 수 있습니다. 특히 다른 플랫폼을 사용하는 경우 더 자세한 지침은 호스팅 플랫폼의 공식 문서를 참조하십시오.</p>`,8);function b(k,f,P,q,E,S){const s=d("MagnificPopup");return c(),r("div",null,[u,e(s,null,{default:o(()=>[g]),_:1}),p,e(s,null,{default:o(()=>[_]),_:1}),m])}const D=l(h,[["render",b]]);export{A as __pageData,D as default};
