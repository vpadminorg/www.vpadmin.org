import{_ as e,a as n,b as r,c as u}from"./chunks/ClientKeySecret.DxtZ03a9.js";import{_ as c,c as h,I as a,w as s,a6 as i,j as t,a as l,E as d,o as p}from"./chunks/framework.dp3vP9A2.js";const R=JSON.parse('{"title":"OAuths - Настройка сторонних входов для вашего веб-сайта","description":"","frontmatter":{},"headers":[],"relativePath":"ru/guide/oauths.md","filePath":"ru/guide/oauths.md","lastUpdated":1737127002000}'),g={name:"ru/guide/oauths.md"},_=i('<h1 id="oauths-настроика-сторонних-входов-для-вашего-веб-саита" tabindex="-1">OAuths - Настройка сторонних входов для вашего веб-сайта <a class="header-anchor" href="#oauths-настроика-сторонних-входов-для-вашего-веб-саита" aria-label="Permalink to &quot;OAuths - Настройка сторонних входов для вашего веб-сайта&quot;">​</a></h1><p>Страница <strong>OAuths</strong> в VpAdmin позволяет вам настраивать интеграции стороннего входа для ваших опубликованных веб-сайтов, позволяя пользователям входить в систему, используя свои существующие учетные записи с популярных платформ. Это упрощает пользовательский опыт и может повысить вовлеченность на вашем сайте.</p><h2 id="обзор" tabindex="-1">Обзор <a class="header-anchor" href="#обзор" aria-label="Permalink to &quot;Обзор&quot;">​</a></h2><p>Страница OAuths предоставляет централизованное место для управления сторонними конфигурациями входа для ваших веб-сайтов. Здесь вы можете:</p><ul><li><strong>Добавлять новые конфигурации:</strong> Создавайте интеграции с такими платформами, как GitHub, GitLab, Google и Facebook.</li><li><strong>Управлять существующими конфигурациями:</strong> Редактируйте, удаляйте или переключайте статус ваших настроек OAuth.</li><li><strong>Поиск и фильтрация:</strong> Быстро находите конкретные конфигурации с помощью фильтров.</li></ul><h2 id="поддерживаемые-платформы" tabindex="-1">Поддерживаемые платформы <a class="header-anchor" href="#поддерживаемые-платформы" aria-label="Permalink to &quot;Поддерживаемые платформы&quot;">​</a></h2><p>В настоящее время VpAdmin поддерживает интеграцию OAuth со следующими платформами:</p><ul><li><strong>GitHub</strong></li><li><strong>GitLab</strong></li><li><strong>Google</strong></li><li><strong>Facebook</strong></li></ul><p>Поддержка других платформ будет добавлена в будущих выпусках.</p><h2 id="добавить-конфигурацию-oauth" tabindex="-1">Добавить конфигурацию OAuth <a class="header-anchor" href="#добавить-конфигурацию-oauth" aria-label="Permalink to &quot;Добавить конфигурацию OAuth&quot;">​</a></h2>',10),m=t("a",{href:"/vpadmin/AddOAuthSetting.png",class:"zoomable-image"},[t("img",{src:e,alt:"Добавить настройку OAuth",style:{width:"50%"}})],-1),b=i('<ol><li><p><strong>Выберите веб-сайт:</strong> Выберите веб-сайт, для которого вы хотите настроить интеграцию OAuth. Обратите внимание, что будут доступны только веб-сайты с включенной функцией администратора.</p></li><li><p><strong>Выберите платформу:</strong> Выберите платформу, с которой вы хотите интегрироваться (например, GitHub, GitLab, Google, Facebook).</p></li><li><p><strong>Введите идентификатор клиента и секрет клиента:</strong> Получите <strong>идентификатор клиента</strong> и <strong>секрет клиента</strong> из консоли разработчика выбранной платформы. Эти учетные данные необходимы для аутентификации вашего веб-сайта на платформе. Примеры того, как их получить, см. в разделе <a href="./oauths#github-example">Пример GitHub</a> ниже.</p></li><li><p><strong>Настройте URI перенаправления:</strong> URI перенаправления генерируется автоматически на основе выбранного вами веб-сайта.</p><div class="warning custom-block"><p class="custom-block-title">ПРИМЕЧАНИЕ</p><p>Пожалуйста, убедитесь, что вы правильно установили свой фактический домен в поле «Домен» при создании или редактировании своего веб-сайта в разделе «Конфигурация сайтов».</p></div></li><li><p><strong>Установите статус:</strong> Включите или отключите конфигурацию с помощью переключателя статуса.</p></li></ol><p>После настройки функции стороннего входа в окне входа на ваш веб-сайт будут активированы, как показано ниже:</p>',2),A=t("a",{href:"/vpadmin/UserSideOAuthEnabled.png",class:"zoomable-image"},[t("img",{src:n,alt:"OAuth включен на стороне пользователя",style:{width:"50%"}})],-1),f=i('<h2 id="пример-github" tabindex="-1">Пример GitHub <a class="header-anchor" href="#пример-github" aria-label="Permalink to &quot;Пример GitHub&quot;">​</a></h2><p>Вот подробный пример того, как настроить интеграцию GitHub OAuth:</p><ol><li><strong>Создайте OAuth-приложение на GitHub:</strong><ul><li>Перейдите в настройки своей учетной записи GitHub и перейдите к <code>Настройки разработчика</code> -&gt; <code>OAuth-приложения</code>.</li><li>Нажмите «Новое OAuth-приложение».</li><li>Заполните следующие поля: <ul><li><p><strong>Имя приложения:</strong> Введите имя для своего приложения (например, НазваниеВашегоВебсайта).</p></li><li><p><strong>URL домашней страницы:</strong> Введите URL домашней страницы вашего веб-сайта (например, <code>https://your.domain.name</code>).</p></li><li><p><strong>URL обратного вызова авторизации:</strong> Введите URI перенаправления, который вы настроили в VpAdmin.</p><p>Он соответствует следующему шаблону:</p><div class="language- vp-adaptive-theme"><button title="Скопировать код" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://your.domain.name/social-callback?source=platform</span></span></code></pre></div><ul><li>Замените <code>your.domain.name</code> на доменное имя вашего веб-сайта.</li><li>Замените <code>platform</code> на платформу, которую вы настраиваете (например, <code>github</code>, <code>gitlab</code>, <code>google</code>, <code>facebook</code>).</li></ul><p><strong>Пример для GitHub:</strong></p><div class="language- vp-adaptive-theme"><button title="Скопировать код" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://your.domain.name/social-callback?source=github</span></span></code></pre></div></li></ul></li></ul></li></ol>',3),T=t("a",{href:"/vpadmin/GithubOAuthCreation.png",class:"zoomable-image"},[t("img",{src:r,alt:"Создание OAuth-приложения Github"})],-1),O=t("ol",{start:"2"},[t("li",null,[t("strong",null,"Получите идентификатор клиента и секрет клиента:"),t("ul",null,[t("li",null,"После создания OAuth-приложения вы будете перенаправлены на страницу настроек приложения."),t("li",null,[l("Скопируйте "),t("strong",null,"идентификатор клиента"),l(" и сгенерируйте новый "),t("strong",null,"секрет клиента"),l(".")])])])],-1),k=t("a",{href:"/vpadmin/ClientKeySecret.png",class:"zoomable-image"},[t("img",{src:u,alt:"Идентификатор клиента и секрет"})],-1),G=i('<ol start="3"><li><strong>Введите учетные данные в VpAdmin:</strong><ul><li>Вернитесь на страницу OAuths VpAdmin.</li><li>Вставьте скопированные <strong>идентификатор клиента</strong> и <strong>секрет клиента</strong> в соответствующие поля для конфигурации GitHub.</li></ul></li></ol><h2 id="заключение" tabindex="-1">Заключение <a class="header-anchor" href="#заключение" aria-label="Permalink to &quot;Заключение&quot;">​</a></h2><p>Настроив интеграцию OAuth, вы можете улучшить пользовательский опыт вашего веб-сайта, предоставив пользователям удобный и безопасный способ входа в систему. VpAdmin упрощает этот процесс, предоставляя централизованную платформу для управления всеми вашими конфигурациями стороннего входа. Благодаря поддержке популярных платформ, таких как GitHub, GitLab, Google и Facebook, вы можете легко интегрировать эти параметры входа на свой веб-сайт и упростить процесс регистрации пользователей.</p>',3);function v(P,V,S,x,q,C){const o=d("MagnificPopup");return p(),h("div",null,[_,a(o,null,{default:s(()=>[m]),_:1}),b,a(o,null,{default:s(()=>[A]),_:1}),f,a(o,null,{default:s(()=>[T]),_:1}),O,a(o,null,{default:s(()=>[k]),_:1}),G])}const y=c(g,[["render",v]]);export{R as __pageData,y as default};
