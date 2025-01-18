import{_ as l,a as d}from"./chunks/KofiToken.U_qBzWGM.js";import{_ as r,c,j as e,I as s,w as i,a6 as o,a,E as t,o as u}from"./chunks/framework.dp3vP9A2.js";const K=JSON.parse('{"title":"Resumen de Pagos","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/payments.md","filePath":"es/guide/payments.md","lastUpdated":1737164379000}'),m={name:"es/guide/payments.md"},g=o('<h1 id="resumen-de-pagos" tabindex="-1">Resumen de Pagos <a class="header-anchor" href="#resumen-de-pagos" aria-label="Permalink to &quot;Resumen de Pagos&quot;">​</a></h1><p>El módulo de gestión de pagos de VpAdmin le permite integrarse sin problemas con plataformas amigables para creadores como Ko-fi, lo que le permite gestionar los pagos y mejorar la experiencia del usuario en su sitio web. Este módulo proporciona herramientas para configurar los ajustes de pago, gestionar los pedidos y agilizar el proceso de venta de contenido digital o suscripciones.</p><h2 id="plataformas-compatibles" tabindex="-1">Plataformas Compatibles <a class="header-anchor" href="#plataformas-compatibles" aria-label="Permalink to &quot;Plataformas Compatibles&quot;">​</a></h2><p>Actualmente, el módulo de gestión de pagos es compatible principalmente con Ko-fi, una plataforma popular entre los creadores para recibir donaciones y vender productos digitales. La compatibilidad con otras plataformas puede añadirse en futuras versiones.</p><h2 id="caracteristicas-principales" tabindex="-1">Características Principales <a class="header-anchor" href="#caracteristicas-principales" aria-label="Permalink to &quot;Características Principales&quot;">​</a></h2><ol><li><strong>Configuración de Pagos:</strong> Añada y gestione configuraciones de pago para su sitio web, permitiendo que su sitio se integre con las capacidades de pago de Ko-fi, complete la gestión de pedidos y gestione las respuestas automáticas/manuales.</li><li><strong>Botones de Soporte Mejorados:</strong> Añada botones de pago a su sitio web que activen los flujos de pago de Ko-fi. Puede colocar cualquier número de botones de pago en cualquier lugar dentro del contenido de su sitio web.</li><li><strong>Respuestas Automáticas por Correo Electrónico:</strong> Configure respuestas automáticas por correo electrónico a los usuarios tras un pago exitoso.</li><li><strong>Gestión de Pedidos:</strong> Consulte y gestione los pedidos de pago asociados a su sitio web. Para más detalles, consulte <a href="./orders">Pedidos</a>.</li></ol><h2 id="configuracion-de-las-opciones-de-pago" tabindex="-1">Configuración de las Opciones de Pago <a class="header-anchor" href="#configuracion-de-las-opciones-de-pago" aria-label="Permalink to &quot;Configuración de las Opciones de Pago&quot;">​</a></h2><p>Siga estos pasos para configurar las opciones de pago de su sitio web:</p>',8),f=e("p",null,[e("strong",null,"Introduzca los Datos de Configuración:"),a(" Rellene la información necesaria, incluyendo:")],-1),h=e("a",{href:"/vpadmin/PaymentConfig.png",class:"zoomable-image"},[e("img",{src:l,alt:"Configuración de Pago",style:{width:"50%"}})],-1),b=e("li",null,[e("p",null,[e("strong",null,"Nombre del Sitio:"),a(" Seleccione el sitio para el que se aplicará esta configuración de pago.")])],-1),q=e("li",null,[e("p",null,[e("strong",null,"Nombre de Pago:"),a(" Introduzca un nombre descriptivo para esta configuración de pago. Los nombres de pago deben ser únicos dentro del mismo sitio.")])],-1),_=e("li",null,[e("p",null,[e("strong",null,"Plataforma de Pago:"),a(' Seleccione "ko-fi" como plataforma de pago.')])],-1),v=e("p",null,[e("strong",null,"Token de Verificación:"),a(" Este token se utilizará para la verificación de webhooks de Ko-fi. Obtenga el "),e("code",null,"Token de Verificación"),a(" de su cuenta de Ko-fi en "),e("code",null,"API -> Avanzado"),a(" como se muestra en la siguiente captura de pantalla.")],-1),P={class:"info custom-block"},k=e("p",{class:"custom-block-title"},"Token de verificación de Ko-fi",-1),y=e("a",{href:"/vpadmin/KofiToken.png",class:"zoomable-image"},[e("img",{src:d,alt:"Configuración de Pago"})],-1),T=o('<li><p><strong>Tipo de Pago:</strong> Seleccione el tipo de pago. Las opciones son <code>Onetime</code>, <code>Membership</code>, <code>MembershipWithTier</code> y <code>shop</code> (que actualmente corresponden a los tipos de pago disponibles en Ko-fi).</p></li><li><p><strong>Nivel de Usuario:</strong> Si el tipo de pago es <code>MembershipWithTier</code>, establezca el nombre del Nivel para que coincida con el configurado en Ko-fi.</p></li><li><p><strong>Respuesta Automática:</strong> Active o desactive las respuestas automáticas por correo electrónico tras un pago exitoso. La información de su respuesta también se mostrará en los detalles del pedido para los usuarios de su sitio.</p></li><li><p><strong>Asunto:</strong> La línea de asunto para el correo electrónico automático.</p></li><li><p><strong>Contenido:</strong> El contenido del correo electrónico automático. Puede proporcionar un enlace de acceso público al contenido que está vendiendo, por ejemplo, un documento PDF.</p><div class="warning custom-block"><p class="custom-block-title">NOTA</p><p>VpAdmin no se hace responsable del almacenamiento de ninguno de sus contenidos protegidos. Por favor, no coloque ningún contenido digital protegido, claves de licencia, etc., directamente en el contenido del correo electrónico.</p></div></li>',5),S=e("li",null,[e("p",null,[e("strong",null,"Guardar Configuración:"),a(' Una vez que haya introducido toda la información necesaria, haga clic en "Confirmar" para guardar la nueva configuración de pago.')])],-1),A=o(`<div class="tip custom-block" style="padding-top:8px;"><p>Para obtener más información sobre la gestión de pedidos y los principios que rigen las respuestas automáticas/manuales, consulte <a href="./orders-management">Gestión de Pedidos</a>.</p></div><h2 id="adicion-de-botones-de-soporte-mejorados" tabindex="-1">Adición de Botones de Soporte Mejorados <a class="header-anchor" href="#adicion-de-botones-de-soporte-mejorados" aria-label="Permalink to &quot;Adición de Botones de Soporte Mejorados&quot;">​</a></h2><p>Después de configurar las opciones de pago, puede añadir botones de soporte mejorados al contenido de su sitio web. Siga los ejemplos de código siguientes según el framework del Generador de Sitios Estáticos (SSG) que haya elegido:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jqBop" id="tab-OdhbHOD" checked><label data-title="VitePress Theme" for="tab-OdhbHOD">VitePress Theme</label><input type="radio" name="group-jqBop" id="tab-YsjPiN1"><label data-title="Hugo Theme" for="tab-YsjPiN1">Hugo Theme</label><input type="radio" name="group-jqBop" id="tab-zq31Yj9"><label data-title="Jekyll Theme" for="tab-zq31Yj9">Jekyll Theme</label></div><div class="blocks"><div class="language- vp-adaptive-theme active"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SupportButton</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Apóyame&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Suscripción Premium&quot;</span></span>
<span class="line"><span>:needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot;/&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{{&lt; support-button</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Botón de Demostración de Apoyo&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Suscripción Premium&quot;</span></span>
<span class="line"><span>needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot; &gt;}}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% include support-button.html</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Botón de Demostración de Apoyo&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Suscripción Premium&quot;</span></span>
<span class="line"><span>needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot; %}</span></span></code></pre></div></div></div><p><strong>Explicación de los Parámetros del Código:</strong></p><ul><li><code>platform</code>: La plataforma de pago, actualmente solo admite &quot;ko-fi&quot;.</li><li><code>paymentType</code>: El tipo de pago, actualmente solo admite &quot;donation&quot; (que corresponde a &quot;Onetime&quot; en la configuración) o &quot;subscription&quot; (que corresponde a &quot;Membership&quot; y &quot;MembershipWithTier&quot; en la configuración).</li><li><code>text</code>: El texto que se muestra en el botón de soporte.</li><li><code>url</code>: La URL de su perfil de Ko-fi. Simplemente sustituya <code>&quot;https://ko-fi.com/vpadmin/&quot;</code> en la URL por la dirección de su página de Ko-fi.</li><li><code>name</code>: El nombre de la configuración de pago.</li><li><code>needLogin</code>: Si un usuario necesita iniciar sesión antes de realizar un pago.<div class="warning custom-block"><p class="custom-block-title">NOTA</p><p>Para asociar automáticamente los pedidos de Ko-fi con los usuarios de su sitio web, configúrelo en <code>true</code>.</p></div></li><li><code>size</code>: El tamaño del botón (&quot;small&quot;, &quot;default&quot;).</li></ul><p><strong>Vea la demostración del botón de pago a continuación:</strong></p><div class="language- vp-adaptive-theme"><button title="Copiar código" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SupportButton</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Apóyame&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Suscripción Premium&quot;</span></span>
<span class="line"><span>:needLogin=&quot;false&quot;</span></span>
<span class="line"><span>size=&quot;default&quot;/&gt;</span></span></code></pre></div>`,8),C=o('<h2 id="gestion-de-pedidos-de-pago" tabindex="-1">Gestión de Pedidos de Pago <a class="header-anchor" href="#gestion-de-pedidos-de-pago" aria-label="Permalink to &quot;Gestión de Pedidos de Pago&quot;">​</a></h2><p>VpAdmin proporciona un panel de control para ver y gestionar los pedidos de pago. Puede ver todos los pedidos asociados a su sitio web, ver los detalles de los pedidos y realizar un seguimiento de los pagos. Además de esto, VpAdmin también admite respuestas automáticas/manuales según su configuración. Para más detalles, consulte <a href="./orders">Pedidos</a>.</p><h2 id="conclusion" tabindex="-1">Conclusión <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusión&quot;">​</a></h2><p>Con el módulo de gestión de pagos de VpAdmin, puede integrar fácilmente la funcionalidad de pago en su sitio web, lo que le permite monetizar su contenido y aumentar su presencia en línea. Al aprovechar el poder de Ko-fi y nuestros botones de apoyo mejorados, puede proporcionar una experiencia de pago fluida y profesional a sus usuarios.</p>',4);function x(w,V,j,z,E,N){const n=t("MagnificPopup"),p=t("SupportButton");return u(),c("div",null,[g,e("ol",null,[e("li",null,[f,s(n,null,{default:i(()=>[h]),_:1}),e("ul",null,[b,q,_,e("li",null,[v,e("div",P,[k,s(n,null,{default:i(()=>[y]),_:1})])]),T])]),S]),A,s(p,{platform:"ko-fi",paymentType:"donation",text:"Apóyame",url:"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true",name:"Suscripción Premium",needLogin:!1,size:"default"}),C])}const D=r(m,[["render",x]]);export{K as __pageData,D as default};
