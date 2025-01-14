import{_ as n,c as r,I as a,w as t,j as e,a6 as s,a as i,E as l,o as d}from"./chunks/framework.CKsuSmGd.js";const c="/www.vpadmin.org/vpadmin/ClientID.png",m="/www.vpadmin.org/vpadmin/KofiWebhook.png",p="/www.vpadmin.org/vpadmin/Orders.png",D=JSON.parse('{"title":"Orders Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/orders.md","filePath":"en/guide/orders.md","lastUpdated":1736823002000}'),h={name:"guide/orders.md"},u=s('<h1 id="orders-overview" tabindex="-1">Orders Overview <a class="header-anchor" href="#orders-overview" aria-label="Permalink to &quot;Orders Overview&quot;">​</a></h1><p>The <strong>Orders</strong> page in VpAdmin provides a comprehensive interface for managing payment orders associated with your websites. Here, you can view order details, track payment status, and manually resend emails for failed deliveries. This module helps you efficiently manage and monitor your sales and subscriptions.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><p>The Orders page allows you to:</p><ul><li><strong>View Order List:</strong> View all orders with key details such as project name, order number, creation time, amount, customer email, and email sending status.</li><li><strong>Filter Orders:</strong> Filter orders based on project name, order number, creation time, and customer email.</li><li><strong>View Order Details:</strong> View the complete details for each order, including raw data and associated settings.</li><li><strong>Resend Emails:</strong> Manually resend order confirmation emails if the initial delivery failed.</li></ul><h2 id="set-up-ko-fi-webhook-url" tabindex="-1">Set Up Ko-fi Webhook URL <a class="header-anchor" href="#set-up-ko-fi-webhook-url" aria-label="Permalink to &quot;Set Up Ko-fi Webhook URL&quot;">​</a></h2><p>To manage your website&#39;s orders within VpAdmin, you need to set up a webhook URL. In your Ko-fi account, configure the webhook URL to the following address. Please ensure you replace <code>VpadminClientID</code> with the <strong>Client ID</strong> found in your site&#39;s detail view within VpAdmin.</p><div class="danger custom-block"><p class="custom-block-title">Webhook URL</p><div class="language- vp-adaptive-theme"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>https://api.vpadmin.org/prod-api/vpadmin/orders/callback/VpadminClientID</span></span></code></pre></div></div><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>Only websites with the admin function enabled will have a Client ID.</p></div>',9),g=e("a",{href:"/vpadmin/ClientID.png",class:"zoomable-image"},[e("img",{src:c,alt:"Client ID"})],-1),f={class:"info custom-block"},_=e("p",{class:"custom-block-title"},"Ko-fi webhook setting",-1),b=e("a",{href:"/vpadmin/KofiWebhook.png",class:"zoomable-image"},[e("img",{src:m,alt:"Kofi Webhook"})],-1),v=e("div",{class:"tip custom-block",style:{"padding-top":"8px"}},[e("p",null,[i("To learn more about order management and the principles behind automatic/manual replies, please refer to "),e("a",{href:"./orders-management"},"Orders Management"),i(".")])],-1),w=e("h2",{id:"order-list",tabindex:"-1"},[i("Order List "),e("a",{class:"header-anchor",href:"#order-list","aria-label":'Permalink to "Order List"'},"​")],-1),y=e("p",null,"The main table displays all your existing orders with the following columns:",-1),k=e("a",{href:"/vpadmin/Orders.png",class:"zoomable-image"},[e("img",{src:p,alt:"Orders"})],-1),T=s('<ul><li><strong>Project Name:</strong> The name of the project associated with the order.</li><li><strong>Order No:</strong> The unique identifier for the order.</li><li><strong>Order Creation Time:</strong> The date and time the order was created.</li><li><strong>Type:</strong> The type of payment, options are <code>Donation</code>, <code>Subscribtion</code>, based on ko-fi order types.</li><li><strong>Order Amount:</strong> The total amount of the order, including the currency.</li><li><strong>Customer Email:</strong> The email address of the customer who placed the order.</li><li><strong>Email Send Status:</strong> The status of the order confirmation email. The options are: <ul><li><strong>0: NoMatch:</strong> No matching payment configuration found.<div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>To resend the email, please first navigate to the Payments page and add the necessary payment configuration. Please read the <a href="./payments">Payments</a> for more detail.</p></div></li><li><strong>1: Success:</strong> Email was sent successfully.</li><li><strong>2: Failed:</strong> Email failed to send.</li><li><strong>3: MatchNoSend:</strong> Matching payment configuration found, but auto send not enabled.</li></ul></li><li><strong>Order Additional Message:</strong> Additional message included in the payment order.</li><li><strong>Operations:</strong> Provides options to manage each order.</li></ul><h3 id="available-operations" tabindex="-1">Available Operations: <a class="header-anchor" href="#available-operations" aria-label="Permalink to &quot;Available Operations:&quot;">​</a></h3><ul><li><strong>Details:</strong> Click the document icon to view the raw data associated with the order.</li><li><strong>Resend Email:</strong> Click the resend email icon to manually resend the email if it failed to send automatically.</li></ul><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>The email content and subject is configured in the <code>Payments</code> page. Please read the <a href="./payments">Payments</a> for more detail.</p></div><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>The <strong>Orders</strong> page in VpAdmin provides a complete solution for managing your payment orders, ensuring that you can track all transactions and manage all orders effectively. By combining order management with email resending functionalities, this module helps maintain a professional and seamless purchase experience for your users.</p>',6);function O(P,C,V,x,A,N){const o=l("MagnificPopup");return d(),r("div",null,[u,a(o,null,{default:t(()=>[g]),_:1}),e("div",f,[_,a(o,null,{default:t(()=>[b]),_:1})]),v,w,y,a(o,null,{default:t(()=>[k]),_:1}),T])}const E=n(h,[["render",O]]);export{D as __pageData,E as default};
