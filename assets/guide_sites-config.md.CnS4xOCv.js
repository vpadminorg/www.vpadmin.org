import{_ as s}from"./chunks/AddNewSite-Steps.Bp5BBomj.js";import{_ as l,c as r,j as e,I as o,w as n,a as t,a6 as a,E as d,o as c}from"./chunks/framework.CKsuSmGd.js";const u="/www.vpadmin.org/vpadmin/edit-site.png",g="/www.vpadmin.org/vpadmin/Site-details.png",h="/www.vpadmin.org/vpadmin/delete-site.png",J=JSON.parse('{"title":"Sites Configuration Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/sites-config.md","filePath":"en/guide/sites-config.md","lastUpdated":1736823002000}'),_={name:"guide/sites-config.md"},f=e("h1",{id:"sites-configuration-overview",tabindex:"-1"},[t("Sites Configuration Overview "),e("a",{class:"header-anchor",href:"#sites-configuration-overview","aria-label":'Permalink to "Sites Configuration Overview"'},"​")],-1),p=e("p",null,[t("The "),e("strong",null,"Sites Config"),t(" page in VpAdmin allows you to manage all your websites in one place. Here, you can add new websites, edit existing site configurations, view site details, and even delete websites. It provides a centralized interface to control and customize your online presence.")],-1),m=e("h2",{id:"adding-a-new-site",tabindex:"-1"},[t("Adding a New Site "),e("a",{class:"header-anchor",href:"#adding-a-new-site","aria-label":'Permalink to "Adding a New Site"'},"​")],-1),w=e("p",null,"To add a new website:",-1),b=a('<li><p><strong>Click &quot;Add New Site&quot;:</strong> Click the &quot;+ Add New Site&quot; button. A dialog box will appear.</p></li><li><p><strong>Connect to Git:</strong> Click either &quot;Connect GitHub&quot; or &quot;Connect GitLab&quot; to authorize VpAdmin to access your repository.</p></li><li><p><strong>Configure Site Settings:</strong> Fill in the required information for your new site, including:</p><ul><li><strong>Site Name:</strong> Enter a descriptive name for your site.</li><li><strong>Theme:</strong> Choose a free theme for your website (e.g., VitePress).</li><li><strong>Username:</strong> Auto filled by system.</li><li><strong>Repo Address:</strong> Auto filled by system.</li><li><strong>Admin Backend:</strong> Select &quot;Yes&quot; or &quot;No&quot; to enable or disable the admin panel.</li><li><strong>Domain:</strong> (Optional) Enter a custom domain, or leave the domain as default if you don&#39;t have your own. This URL will be used as the callback domain for OAuth configurations. If you need to add third-party OAuth login to your website, please configure the correct URL for your website. Please refer to the <a href="./oauths">OAuths</a> section for details.</li></ul></li>',3),S=e("p",null,[e("strong",null,'Click "Confirm"'),t(" Save the new site configurations, which will trigger the initial website deployment.")],-1),C=e("p",null,[e("strong",null,"(See the annotated screenshot below for guidance)")],-1),y=e("a",{href:"/vpadmin/AddNewSite-Steps.png",class:"zoomable-image"},[e("img",{src:s,alt:"Annotated New Site Configuration Screen"})],-1),v=e("h2",{id:"editing-a-site-configuration",tabindex:"-1"},[t("Editing a Site Configuration: "),e("a",{class:"header-anchor",href:"#editing-a-site-configuration","aria-label":'Permalink to "Editing a Site Configuration:"'},"​")],-1),k=e("li",null,[e("p",null,[e("strong",null,'Click "Edit":'),t(" Click the edit icon next to the site you want to modify.")])],-1),A=e("li",null,[e("p",null,[e("strong",null,"Modify Settings:"),t(" In the Edit Site Configuration dialog box, you can reconnect to GitHub or GitLab and adjust the domain setting.")])],-1),q=e("p",null,[e("strong",null,'Click "Confirm":'),t(' Click the "Confirm" button to save your changes, or "Cancel" to discard them.')],-1),P=e("a",{href:"/vpadmin/edit-site.png",class:"zoomable-image"},[e("img",{src:u,alt:"Edit Site Configuration",style:{width:"60%"}})],-1),T=e("h2",{id:"viewing-site-details",tabindex:"-1"},[t("Viewing Site Details: "),e("a",{class:"header-anchor",href:"#viewing-site-details","aria-label":'Permalink to "Viewing Site Details:"'},"​")],-1),x=e("p",null,[e("strong",null,'Click "Details":'),t(" Click the details icon to view the details about the site.")],-1),D=e("a",{href:"/vpadmin/Site-details.png",class:"zoomable-image"},[e("img",{src:g,alt:"Site Details Dialog",style:{width:"60%"}})],-1),N=e("h2",{id:"deleting-a-site",tabindex:"-1"},[t("Deleting a Site: "),e("a",{class:"header-anchor",href:"#deleting-a-site","aria-label":'Permalink to "Deleting a Site:"'},"​")],-1),V=e("li",null,[e("strong",null,'Click "Delete":'),t(" Click the trash icon next to the site you want to delete.")],-1),E=e("strong",null,"Confirm Deletion:",-1),I=e("ul",null,[e("li",null,"Option to delete the related remote repository and website.")],-1),O=e("div",{class:"danger custom-block"},[e("p",{class:"custom-block-title"},"DANGER"),e("p",null,"This will take your online website offline and delete it.")],-1),z=e("a",{href:"/vpadmin/delete-site.png",class:"zoomable-image"},[e("img",{src:h,alt:"Confirm Delete Dialog",style:{width:"50%"}})],-1),G=a('<h2 id="searching-for-a-site" tabindex="-1">Searching for a Site <a class="header-anchor" href="#searching-for-a-site" aria-label="Permalink to &quot;Searching for a Site&quot;">​</a></h2><p>Use the filter at the top of the site list to search for a specific site.</p><h2 id="paging-sites" tabindex="-1">Paging Sites <a class="header-anchor" href="#paging-sites" aria-label="Permalink to &quot;Paging Sites&quot;">​</a></h2><p>Use the paging feature to find a specific site if there are too many sites.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The <strong>Sites Config</strong> page in VpAdmin gives you full control over your websites, enabling you to quickly add, edit, view, and manage your online presence efficiently.</p>',6);function R(U,B,L,$,H,M){const i=d("MagnificPopup");return c(),r("div",null,[f,p,m,w,e("ol",null,[b,e("li",null,[S,C,o(i,null,{default:n(()=>[y]),_:1})])]),v,e("ol",null,[k,A,e("li",null,[q,o(i,null,{default:n(()=>[P]),_:1})])]),T,e("ol",null,[e("li",null,[x,o(i,null,{default:n(()=>[D]),_:1})])]),N,e("ol",null,[V,e("li",null,[E,t(" In the confirmation dialog, confirm you want to delete the site configuration. "),I,O,o(i,null,{default:n(()=>[z]),_:1})])]),G])}const Y=l(_,[["render",R]]);export{J as __pageData,Y as default};
