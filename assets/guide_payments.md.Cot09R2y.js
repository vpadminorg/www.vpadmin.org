import{_ as l,c as r,j as e,I as a,w as s,a6 as n,a as t,E as i,o as u}from"./chunks/framework.CKsuSmGd.js";const d="/www.vpadmin.org/vpadmin/PaymentConfig.png",c="/www.vpadmin.org/vpadmin/KofiToken.png",B=JSON.parse('{"title":"Payments Overview","description":"","frontmatter":{},"headers":[],"relativePath":"guide/payments.md","filePath":"en/guide/payments.md","lastUpdated":1736823002000}'),m={name:"guide/payments.md"},h=n('<h1 id="payments-overview" tabindex="-1">Payments Overview <a class="header-anchor" href="#payments-overview" aria-label="Permalink to &quot;Payments Overview&quot;">​</a></h1><p>VpAdmin&#39;s payment management module allows you to seamlessly integrate with creator-friendly platforms like Ko-fi, enabling you to manage payments and enhance the user experience on your website. This module provides tools to configure payment settings, manage orders, and streamline the process of selling digital content or subscriptions.</p><h2 id="supported-platforms" tabindex="-1">Supported Platforms <a class="header-anchor" href="#supported-platforms" aria-label="Permalink to &quot;Supported Platforms&quot;">​</a></h2><p>Currently, the payment management module primarily supports Ko-fi, a platform popular among creators for receiving donations and selling digital products. Support for other platforms may be added in future releases.</p><h2 id="key-features" tabindex="-1">Key Features <a class="header-anchor" href="#key-features" aria-label="Permalink to &quot;Key Features&quot;">​</a></h2><ol><li><strong>Payment Configuration:</strong> Add and manage payment configurations for your website, enabling your site to integrate with Ko-fi&#39;s payment capabilities, complete order management, and handle automatic/manual replies.</li><li><strong>Enhanced Support Buttons:</strong> Add payment buttons to your website that trigger Ko-fi payment flows. You can place any number of payment buttons in any location within your website content.</li><li><strong>Automatic Email Replies:</strong> Configure automatic email replies to users upon successful payment.</li><li><strong>Order Management:</strong> View and manage payment orders associated with your website. For more details, please see <a href="./orders">Orders</a>.</li></ol><h2 id="setting-up-payment-configurations" tabindex="-1">Setting up Payment Configurations <a class="header-anchor" href="#setting-up-payment-configurations" aria-label="Permalink to &quot;Setting up Payment Configurations&quot;">​</a></h2><p>Follow these steps to configure payment options for your website:</p>',8),g=e("p",null,[e("strong",null,"Enter Configuration Details:"),t(" Fill in the required information, including:")],-1),f=e("a",{href:"/vpadmin/PaymentConfig.png",class:"zoomable-image"},[e("img",{src:d,alt:"Payment Configuration",style:{width:"50%"}})],-1),y=e("li",null,[e("p",null,[e("strong",null,"Site Name:"),t(" Select the site for which this payment configuration will apply.")])],-1),b=e("li",null,[e("p",null,[e("strong",null,"Payment Name:"),t(" Enter a descriptive name for this payment configuration. Payment names must be unique within the same site.")])],-1),_=e("li",null,[e("p",null,[e("strong",null,"Payment Platform:"),t(' Select "ko-fi" as the payment platform.')])],-1),q=e("p",null,[e("strong",null,"Verification Token:"),t(" This token will be used for Ko-fi webhook verification. Get the "),e("code",null,"Verification Token"),t(" from your Ko-fi account under "),e("code",null,"API -> Advanced"),t(" as shown in the screenshot below.")],-1),v={class:"info custom-block"},w=e("p",{class:"custom-block-title"},"Ko-fi verification token",-1),k=e("a",{href:"/vpadmin/KofiToken.png",class:"zoomable-image"},[e("img",{src:c,alt:"Payment Configuration"})],-1),T=n('<li><p><strong>Payment Type:</strong> Select the payment type. Options are <code>Onetime</code>, <code>Membership</code>, <code>MembershipWithTier</code>, and <code>shop</code> (currently corresponding to the payment types available on Ko-fi).</p></li><li><p><strong>User Level:</strong> If the payment type is <code>MembershipWithTier</code>, set the Tier name to match the one configured in Ko-fi.</p></li><li><p><strong>Auto Reply:</strong> Enable or disable automatic email replies upon successful payment. Your reply information will also be displayed in the order details for users on your site.</p></li><li><p><strong>Subject:</strong> The subject line for the automatic email.</p></li><li><p><strong>Content:</strong> The content of the automatic email. You can provide a publicly available link to the content you are selling, e.g., a PDF document.</p><div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>VpAdmin is not responsible for storing any of your protected content. Please do not put any protected digital content, license keys, etc., directly in the email content.</p></div></li>',5),P=e("li",null,[e("p",null,[e("strong",null,"Save Configuration:"),t(' Once you have entered all the necessary information, click "Confirm" to save the new payment configuration.')])],-1),S=n(`<div class="tip custom-block" style="padding-top:8px;"><p>To learn more about order management and the principles behind automatic/manual replies, please refer to <a href="./orders-management">Orders Management</a>.</p></div><h2 id="adding-enhanced-support-buttons" tabindex="-1">Adding Enhanced Support Buttons <a class="header-anchor" href="#adding-enhanced-support-buttons" aria-label="Permalink to &quot;Adding Enhanced Support Buttons&quot;">​</a></h2><p>After setting up payment configurations, you can add enhanced support buttons to your website content. Follow the code examples below based on your chosen Static Site Generator (SSG) framework:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-v3-zG" id="tab-arCkcny" checked><label data-title="VitePress Theme" for="tab-arCkcny">VitePress Theme</label><input type="radio" name="group-v3-zG" id="tab-jUO0sJN"><label data-title="Hugo Theme" for="tab-jUO0sJN">Hugo Theme</label><input type="radio" name="group-v3-zG" id="tab-rovznfO"><label data-title="Jekyll Theme" for="tab-rovznfO">Jekyll Theme</label></div><div class="blocks"><div class="language- vp-adaptive-theme active"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SupportButton</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Support me&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Premium Subscription&quot;</span></span>
<span class="line"><span>:needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot;/&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{{&lt; support-button</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Support Me Demo Button&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Premium Subscription&quot;</span></span>
<span class="line"><span>needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot; &gt;}}</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>{% include support-button.html</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Support Me Demo Button&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Premium Subscription&quot;</span></span>
<span class="line"><span>needLogin=&quot;true&quot;</span></span>
<span class="line"><span>size=&quot;default&quot; %}</span></span></code></pre></div></div></div><p><strong>Code Parameter Explanation:</strong></p><ul><li><code>platform</code>: The payment platform, currently only supports &quot;ko-fi&quot;.</li><li><code>paymentType</code>: The payment type, currently only supports &quot;donation&quot; (corresponding to &quot;Onetime&quot; in the configuration) or &quot;subscription&quot; (corresponding to &quot;Membership&quot; and &quot;MembershipWithTier&quot; in the configuration).</li><li><code>text</code>: The text displayed on the support button.</li><li><code>url</code>: The URL of your Ko-fi profile. Simply replace <code>&quot;https://ko-fi.com/vpadmin/&quot;</code> in the URL with your Ko-fi page address.</li><li><code>name</code>: The name of the payment configuration.</li><li><code>needLogin</code>: Whether a user needs to log in before making a payment.<div class="warning custom-block"><p class="custom-block-title">NOTE</p><p>To automatically associate Ko-fi orders with users on your website, please set this to <code>true</code>.</p></div></li><li><code>size</code>: The size of the button (&quot;small&quot;, &quot;default&quot;).</li></ul><p><strong>See the payment button demo below:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&lt;SupportButton</span></span>
<span class="line"><span>platform=&quot;ko-fi&quot;</span></span>
<span class="line"><span>paymentType=&quot;donation&quot;</span></span>
<span class="line"><span>text=&quot;Support me&quot;</span></span>
<span class="line"><span>url=&quot;https://ko-fi.com/vpadmin/?hidefeed=true&amp;widget=true&amp;embed=true&amp;preview=true&quot;</span></span>
<span class="line"><span>name=&quot;Premium Subscription&quot;</span></span>
<span class="line"><span>:needLogin=&quot;false&quot;</span></span>
<span class="line"><span>size=&quot;default&quot;/&gt;</span></span></code></pre></div>`,8),C=n('<h2 id="managing-payment-orders" tabindex="-1">Managing Payment Orders <a class="header-anchor" href="#managing-payment-orders" aria-label="Permalink to &quot;Managing Payment Orders&quot;">​</a></h2><p>VpAdmin provides a dashboard to view and manage payment orders. You can see all orders associated with your website, view order details, and track payments. In addition to this, VpAdmin also supports automatic/manual replies according to your configuration. For more details, please see <a href="./orders">Orders</a>.</p><h2 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h2><p>With VpAdmin&#39;s payment management module, you can easily integrate payment functionality into your website, enabling you to monetize your content and grow your online presence. By leveraging the power of Ko-fi and our enhanced support buttons, you can provide a seamless and professional payment experience for your users.</p>',4);function x(A,V,O,K,E,z){const o=i("MagnificPopup"),p=i("SupportButton");return u(),r("div",null,[h,e("ol",null,[e("li",null,[g,a(o,null,{default:s(()=>[f]),_:1}),e("ul",null,[y,b,_,e("li",null,[q,e("div",v,[w,a(o,null,{default:s(()=>[k]),_:1})])]),T])]),P]),S,a(p,{platform:"ko-fi",paymentType:"donation",text:"Support me",url:"https://ko-fi.com/vpadmin/?hidefeed=true&widget=true&embed=true&preview=true",name:"Premium Subscription",needLogin:!1,size:"default"}),C])}const M=l(m,[["render",x]]);export{B as __pageData,M as default};
