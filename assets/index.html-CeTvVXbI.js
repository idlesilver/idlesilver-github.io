import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as e,d as o,e as r,f as g,b as p,o as s,r as l}from"./app-Ca5ETXIW.js";const m={data(){return{sentences:['My name is <b>陈浩哲 (Chen Haozhe)</b> in Chinese, sounds like "chun how jer". <b>Gavin</b> is the English name I commonly use, but is not legally registered.',`I am a ACG fan and an amateur bedminton player. I love to DIY some little stuff and have built a <a href="https://vorondesign.com/voron0.2" target='_blank'>3D printer</a> for it.`,"The best food I've ever had was <a href='https://maps.app.goo.gl/MMCUov9r6CJxvJof7' target='_blank'>lamb noodle soup</a> I enjoyed with my friends at 2:30 AM on a winter night during my undergraduate years."],miscSentence:"",showPage:!1}},created(){this.miscIdx=Math.floor(Math.random()*this.sentences.length),this.changeMiscSentence()},methods:{togglePage(){this.showPage=!this.showPage},changeMiscSentence(){this.miscIdx=(this.miscIdx+1)%this.sentences.length,this.miscSentence=this.sentences[this.miscIdx]}}},b={class:"introContainer"},f={class:"introImage"},v={key:0},y=["innerHTML"];function w(I,t,C,z,a,n){const h=l("ColorModeSwitch"),d=l("PDF");return s(),i("div",null,[t[4]||(t[4]=e("h1",{id:"haozhe-chen",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#haozhe-chen"},[e("span",null,"Haozhe Chen")])],-1)),e("div",b,[t[3]||(t[3]=o('<div class="introDesc"><div> I am a second-year Master student in <a href="https://ece.illinois.edu/">Electrical &amp; Computer Engineering</a> at University of Illinois Urbana-Champaign (<b>UIUC</b>). Previously, I obtained my dual-Bachelors degree from <a href="https://www.zju.edu.cn/">Zhejiang University</a> and <a href="https://illinois.edu/">UIUC</a>. <br><br> I am working on the robot active exploration under the supervision of <a href="https://shenlong.web.illinois.edu/"> Prof. Shenlong Wang</a>. I was also fortunate to work under the supervision of <a href="https://yunzhuli.github.io/">Prof. Yunzhu Li</a> and <a href="https://person.zju.edu.cn/en/lzz"> Prof. Zuozhu Liu</a>. <p style="text-align:center;"> haozhe3 [at] illinois [dot] edu / <a href="https://github.com/idlesilver" target="_blank">github</a> / <a href="https://www.linkedin.com/in/haozhe-chen-53343a26a/" target="_blank">linkedin</a> / <a href="/cv.pdf" target="_blank">cv</a><!-- &lt;a href=&quot;https://raw.githubusercontent.com/idlesilver/fileHosting/main/documents/Haozhe Chen resume Robotics.pdf&quot; target=&quot;_blank&quot;&gt;cv&lt;/a&gt;  --><!-- &lt;a @click=&quot;togglePae&quot;&gt; {{showPage ? &quot;hide cv&quot;: &quot;show cv&quot;}} &lt;/a&gt;         --></p></div></div> ',2)),e("div",f,[t[1]||(t[1]=e("img",{src:"https://raw.githubusercontent.com/idlesilver/fileHosting/main/picgo/202411282153925.png",alt:"avatar"},null,-1)),r(h,{class:"colorModeSwitchWrapper"}),t[2]||(t[2]=e("div",{style:{"font-size":"0.8rem"}},[g("photo by "),e("a",{href:"https://yanzhiwen001.github.io/"},"Zhiwen Yan")],-1))])]),a.showPage?(s(),i("div",v,[r(d,{url:"docs/Haozhe Chen resume Robotics.pdf"})])):p("v-if",!0),t[5]||(t[5]=o('<h2 id="news" tabindex="-1"><a class="header-anchor" href="#news"><span>News</span></a></h2><ul><li><strong>[Aug. 2023]</strong> Started MSECE program at UIUC</li><li><strong>[Sept. 2022]</strong> Started research assistant at ZJU-UIUC institute</li><li><strong>[Aug. 2022]</strong> Graduated from ZJU-UIUC institute</li><li><strong>[Jul. 2022]</strong> Started my internship at <a href="https://www.alibaba.com/" target="_blank" rel="noopener noreferrer">Alibaba</a></li></ul><h2 id="research" tabindex="-1"><a class="header-anchor" href="#research"><span>Research</span></a></h2><p>I&#39;m interested in robotics, perception, manipulation, and robot learning. Currently, I focus on enabling robots to actively explore and understand their environments.</p><div class="projContainer highlight"><div class="projImage"><img src="https://robo-alex.github.io/images/dynamics-dp/teaser.png" alt="osd-teaser"></div><div class="projInfo"><b>Neural Dynamics Augmented Diffusion Policy</b><br><a href="https://warshallrho.github.io/">Ruihai Wu*</a>, <b>Haozhe Chen*</b>, <a href="https://robo-alex.github.io/">Mingtong Zhang*</a>, <a href="https://yunzhuli.github.io/">Yunzhu Li</a><br><i>In submission to International Conference on Robotics and Automation (<b>ICRA</b>), 2025</i><br><br> [<a href="https://dynamics-dp.github.io/" target="_blank">webpage</a>] <!-- / [&lt;a href=&quot;&quot;&gt;arxiv&lt;/a&gt;] / [&lt;a href=&quot;&quot;&gt;code&lt;/a&gt;] / [&lt;a href=&quot;&quot;&gt;pdf&lt;/a&gt;] / [&lt;a href=&quot;&quot;&gt;demo&lt;/a&gt;] --></div></div><h2 id="misc" tabindex="-1"><a class="header-anchor" href="#misc"><span>MISC</span></a></h2>',6)),e("p",{onClick:t[0]||(t[0]=(...c)=>n.changeMiscSentence&&n.changeMiscSentence(...c)),innerHTML:a.miscSentence},null,8,y),t[6]||(t[6]=e("p",null,[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")],-1)),t[7]||(t[7]=e("div",{style:{"text-align":"right"}},[e("a",{href:"/home"},"To blog ")],-1))])}const x=u(m,[["render",w],["__file","index.html.vue"]]),M=JSON.parse(`{"path":"/","title":"Haozhe Chen","lang":"en-US","frontmatter":{"navbar":false,"article":false,"sidebar":false,"breadcrumb":false,"pageInfo":false,"contributors":false,"editLink":false,"lastUpdated":false,"comment":false,"footer":false,"backtotop":true,"toc":false,"externalLinkIcon":false,"description":"Haozhe Chen I am a second-year Master student in Electrical & Computer Engineering at University of Illinois Urbana-Champaign (UIUC). Previously, I obtained my dual-Bachelors de...","head":[["meta",{"property":"og:url","content":"https://blog.chenhaozhe.top/"}],["meta",{"property":"og:site_name","content":"Gavin's Blog"}],["meta",{"property":"og:title","content":"Haozhe Chen"}],["meta",{"property":"og:description","content":"Haozhe Chen I am a second-year Master student in Electrical & Computer Engineering at University of Illinois Urbana-Champaign (UIUC). Previously, I obtained my dual-Bachelors de..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-30T09:22:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-30T09:22:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Haozhe Chen\\",\\"description\\":\\"Haozhe Chen I am a second-year Master student in Electrical & Computer Engineering at University of Illinois Urbana-Champaign (UIUC). Previously, I obtained my dual-Bachelors de...\\"}"]]},"headers":[{"level":2,"title":"News","slug":"news","link":"#news","children":[]},{"level":2,"title":"Research","slug":"research","link":"#research","children":[]},{"level":2,"title":"MISC","slug":"misc","link":"#misc","children":[]}],"git":{"createdTime":1672747062000,"updatedTime":1732958565000,"contributors":[{"name":"HaozheChen","email":"haozhe3@illinois.edu","commits":5},{"name":"idlesilver","email":"Haozhe.18@intl.zju.edu.cn","commits":1}]},"readingTime":{"minutes":2.21,"words":664},"filePathRelative":"README.md","localizedDate":"January 3, 2023","excerpt":"\\n<div class=\\"introContainer\\">\\n    <div class=\\"introDesc\\">\\n        <div>\\n        I am a second-year Master student in <a href=\\"https://ece.illinois.edu/\\">Electrical &amp; Computer Engineering</a> at University of Illinois Urbana-Champaign (<b>UIUC</b>). Previously, I obtained my dual-Bachelors degree from <a href=\\"https://www.zju.edu.cn/\\">Zhejiang University</a> and <a href=\\"https://illinois.edu/\\">UIUC</a>.\\n        <br>\\n        <br>\\n        I am working on the robot active exploration under the supervision of <a href=\\"https://shenlong.web.illinois.edu/\\"> Prof. Shenlong Wang</a>. I was also fortunate to work under the supervision of  <a href=\\"https://yunzhuli.github.io/\\">Prof. Yunzhu Li</a> and <a href=\\"https://person.zju.edu.cn/en/lzz\\"> Prof. Zuozhu Liu</a>.\\n        <p style=\\"text-align:center;\\">\\n        haozhe3 [at] illinois [dot] edu / \\n        <a href=\\"https://github.com/idlesilver\\" target=\\"_blank\\">github</a> / \\n        <a href=\\"https://www.linkedin.com/in/haozhe-chen-53343a26a/\\" target=\\"_blank\\">linkedin</a> / \\n        <a href=\\"/cv.pdf\\" target=\\"_blank\\">cv</a> \\n        <!-- <a href=\\"https://raw.githubusercontent.com/idlesilver/fileHosting/main/documents/Haozhe Chen resume Robotics.pdf\\" target=\\"_blank\\">cv</a>  -->\\n        <!-- <a @click=\\"togglePae\\"> {{showPage ? \\"hide cv\\": \\"show cv\\"}} </a>         -->\\n        </p>\\n        </div>\\n    </div>    <div class=\\"introImage\\">\\n        <img src=\\"https://raw.githubusercontent.com/idlesilver/fileHosting/main/picgo/202411282153925.png\\" alt=\\"avatar\\">\\n        </div>\\n</div>","autoDesc":true}`);export{x as comp,M as data};
