import{_ as i,a as e}from"./chunks/publication-fail-log.BIBnHHzC.js";import{_ as r,c as _,I as s,w as a,j as t,a as o,a6 as n,E as u,o as c}from"./chunks/framework.dp3vP9A2.js";const B=JSON.parse('{"title":"게시 기록 개요","description":"","frontmatter":{},"headers":[],"relativePath":"ko/guide/publish-history.md","filePath":"ko/guide/publish-history.md","lastUpdated":1737127002000}'),d={name:"ko/guide/publish-history.md"},h=n('<h1 id="게시-기록-개요" tabindex="-1">게시 기록 개요 <a class="header-anchor" href="#게시-기록-개요" aria-label="Permalink to &quot;게시 기록 개요&quot;">​</a></h1><p>VpAdmin의 <strong>게시 기록</strong> 페이지는 웹사이트 게시 기록의 포괄적인 보기를 제공합니다. 이 페이지를 통해 웹사이트가 게시된 시점, 각 게시의 상태 및 관련 오류 메시지를 추적하여 투명성을 보장하고 게시 문제를 진단하고 해결하는 데 도움을 받을 수 있습니다.</p><h2 id="개요" tabindex="-1">개요 <a class="header-anchor" href="#개요" aria-label="Permalink to &quot;개요&quot;">​</a></h2><p>게시 기록 페이지를 통해 다음을 수행할 수 있습니다.</p><ul><li><strong>게시 기록 추적:</strong> 모든 웹사이트 게시의 연대순 목록을 봅니다.</li><li><strong>게시 필터링:</strong> 프로젝트 이름, 게시 설명, 게시 상태 및 시작 시간을 기준으로 게시를 필터링합니다.</li><li><strong>게시 세부 정보 보기:</strong> 게시가 실패한 경우 &quot;세부 정보 보기&quot; 버튼을 클릭하여 실패 로그를 볼 수 있습니다.</li><li><strong>라이브 사이트 액세스:</strong> 게시가 성공한 경우 라이브 사이트에 액세스할 수 있는 링크가 제공됩니다.</li></ul><h2 id="게시-기록-목록" tabindex="-1">게시 기록 목록 <a class="header-anchor" href="#게시-기록-목록" aria-label="Permalink to &quot;게시 기록 목록&quot;">​</a></h2><p>기본 테이블에는 다음 열과 함께 모든 게시 시도 목록이 표시됩니다.</p>',7),g=t("a",{href:"/vpadmin/publication-list.png",class:"zoomable-image"},[t("img",{src:i,alt:"게시 목록"})],-1),p=n('<ul><li><strong>사이트 이름:</strong> 게시 중인 사이트의 이름입니다.</li><li><strong>게시 설명:</strong> 게시 프로세스 중에 입력된 설명입니다.</li><li><strong>게시 상태:</strong> 게시 상태(예: 성공, 실패)</li><li><strong>시작 시간:</strong> 게시가 시작된 날짜 및 시간입니다.</li><li><strong>게시 기간:</strong> 사이트를 게시하는 데 걸린 총 시간입니다.</li><li><strong>작업:</strong> 게시 상태에 따라 게시 세부 정보를 보거나 라이브 사이트에 액세스하는 옵션을 제공합니다.</li></ul><h3 id="사용-가능한-작업" tabindex="-1">사용 가능한 작업 <a class="header-anchor" href="#사용-가능한-작업" aria-label="Permalink to &quot;사용 가능한 작업&quot;">​</a></h3>',2),m=t("li",null,[t("strong",null,"라이브 사이트 액세스:"),o(" 게시가 "),t("strong",null,"성공"),o('하면 "작업" 열에 '),t("strong",null,'"링크" 버튼'),o("이 표시되어 새 탭에서 라이브 웹사이트를 열 수 있습니다.")],-1),f=t("strong",null,"세부 정보 보기:",-1),b=t("strong",null,"실패",-1),P=t("strong",null,'"세부 정보 보기" 버튼',-1),T=t("li",null,[t("p",null,"이 버튼을 클릭하면 사이트 이름, 게시 설명, 시작 시간 및 자세한 오류 로그를 포함한 자세한 게시 정보가 표시된 대화 상자가 열립니다.")],-1),k=t("p",null,[t("strong",null,"오류 로그는 디버깅에 중요한 오류 정보가 포함된 줄을 빨간색으로 강조 표시합니다.")],-1),q=t("a",{href:"/vpadmin/publication-fail-log.png",class:"zoomable-image"},[t("img",{src:e,alt:"오류 로그"})],-1),x=t("h2",{id:"결론",tabindex:"-1"},[o("결론 "),t("a",{class:"header-anchor",href:"#결론","aria-label":'Permalink to "결론"'},"​")],-1),V=t("p",null,[t("strong",null,"게시 기록"),o(" 페이지는 웹사이트 게시를 추적하고 관리하는 데 필수적인 도구입니다. 원활하고 성공적인 웹사이트 업데이트를 보장하는 데 필요한 가시성과 제어 기능을 제공합니다. 이 페이지를 모니터링하여 게시 프로세스 중에 발생할 수 있는 문제를 신속하게 진단하고 해결하여 웹사이트를 최신 상태로 유지하고 원활하게 실행할 수 있습니다.")],-1);function S(A,N,C,v,I,y){const l=u("MagnificPopup");return c(),_("div",null,[h,s(l,null,{default:a(()=>[g]),_:1}),p,t("ul",null,[m,t("li",null,[f,o(" 게시가 "),b,o('하면 "작업" 열에 '),P,o("이 표시됩니다. "),t("ul",null,[T,t("li",null,[k,s(l,null,{default:a(()=>[q]),_:1})])])])]),x,V])}const D=r(d,[["render",S]]);export{B as __pageData,D as default};
