import{_ as c,W as r,X as d,$ as o,Y as e,Z as i,a0 as t,a1 as a,E as l}from"./framework-ec87c1bc.js";const g={},m=e("h1",{id:"blender建模",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blender建模","aria-hidden":"true"},"#"),i(" Blender建模")],-1),p=e("p",null,"很早以前就喜欢做点3D打印，搞点小发明啥的，大学里也为此特地选了3D建模的课。可惜上完课后就没什么机会碰3D打印机了。之前好朋友自己搭过3D打印机，但我的那台因为资金快递等等原因一直拖延到现在。最近芯片涨价，下位机开发板又涨价了，再观望一段时间吧。趁此机会，先把之前学的三脚猫建模功夫再完善一下。",-1),u={href:"https://www.bilibili.com/video/BV1US4y1N7xN?p=6",target:"_blank",rel:"noopener noreferrer"},h=e("h2",{id:"其他教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他教程","aria-hidden":"true"},"#"),i(" 其他教程")],-1),b=e("p",null,"老高的课程跟着做, 内容挺多的, 但主要是静态建模渲染, 像是商品宣传图那一类, 动画和其他方面的功能介绍的不多. 这些方面就在其他up主和油管上零碎的看看, 这里做一下总结和收集.",-1),f=e("h3",{id:"节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#节点","aria-hidden":"true"},"#"),i(" 节点")],-1),_={href:"https://www.bilibili.com/video/BV1U8411P7fm",target:"_blank",rel:"noopener noreferrer"},v=e("ul",null,[e("li",null,[i("系统性的讲了几何节点的哲学. 说白了就是可视化无代码编程, 让blender也可以用来参数化编程, 但是没有看到 "),e("strong",null,"草图sketch"),i(" 在那里, 相比soildwork这种专业软件应该还是有差距.")])],-1),x=e("h2",{id:"跟着-高有信-的课做的项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#跟着-高有信-的课做的项目","aria-hidden":"true"},"#"),i(" 跟着 高有信 的课做的项目")],-1),y=e("h3",{id:"锤子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#锤子","aria-hidden":"true"},"#"),i(" 锤子")],-1),k=a('<figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090206101.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>锤子的经验总结</summary><ul><li>最重要的失误是<strong>羊角和中间连接的地方不够圆滑</strong>，出现了锐利的边缘，还不知道怎么才能修掉，和视频的步骤应该是一样的啊<!-- ![](http://img.gavin-get-up.com/202301052145081.png) --><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090210177.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li><li>然后就是锤头的<strong>上下两个穿孔</strong>大小不一样，中间也没有连接起来，虽然看不出来但是逻辑上很怪</li><li>两个羊角尖尖上的环切位置也是毛估估的，没有数值对齐，下次记得学学看<strong>对称操作</strong></li><li><strong>渲染</strong>的步骤我的版本和视频不一样，感觉有点怪，多次采样感觉画质没有明显提升，降噪好像也没有太大效果</li></ul></details><h3 id="骰子" tabindex="-1"><a class="header-anchor" href="#骰子" aria-hidden="true">#</a> 骰子</h3>',3),w=a('<figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090206729.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>骰子的经验总结</summary><ol><li><code>alt+s</code> 法向缩放</li><li><code>shift+d</code> 复制物体</li><li>加一个平面作为物体的地面能让图片更好看</li></ol></details><h3 id="可乐瓶" tabindex="-1"><a class="header-anchor" href="#可乐瓶" aria-hidden="true">#</a> 可乐瓶</h3>',3),z=a('<figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090206654.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>瓶盖的经验总结</summary><ol><li>从圆环开始建模，用了<strong>阵列</strong>和<strong>实体化</strong></li><li>实体化 --&gt; 材质 --&gt; 偏移。这样能让瓶盖上下直接应用两种不同的颜色</li><li>加的底侧面平面如果太高的话, 会导致光线很差, 进而画面很暗不好看.</li></ol><!-- ![](http://img.gavin-get-up.com/20230107161346.png) --><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090211915.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details>',2),V=a('<figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090205684.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>瓶身的经验总结</summary><ol><li>瓶身建模也是<strong>阵列</strong>和<strong>实体化</strong>. 还特别讲了缩放平移后阵列错误的问题, 可以通过<code>ctrl+a</code>--&gt;<code>全部变换</code>来重设原点和缩放</li><li>标签的建模是把瓶子的中间一部分截出来再调大一点. 最后加上实体化的厚度. UV贴图本质就是把图片对齐网格, 视频给的方法有点繁琐, 也没看懂内部逻辑, 下次再看看细致的教程.</li><li>液体建模是把瓶子内表面截出来做封闭, 材质用了<code>体积</code>--<code>体积吸收</code>来模拟可乐, 和瓶子盖子用的<code>表面</code>不一样</li><li>内部的气泡用了粒子效果的气泡发生器, 额外加了一个<strong>棱状球</strong>作为渲染的<code>物体</code>对象, 这样修改球的材质和形状就能修改对应的气泡了. 气泡最高高度是通过调关键帧来的, 不超过液体就行.</li><li>外壁的水珠用了<code>毛发</code>的粒子效果, 做了两个大水滴组成集合来作为渲染的<code>集合</code>. 但是这样就不能通过调整单个水滴的位置来控制所有水珠的局部相对位置了. 还用了<code>权重绘制</code>来控制水珠生成位置. 水珠的方向则是<code>粒子效果</code>--<code>高级</code>--<code>旋转</code>--<code>全局Y</code></li><li>HDR的光环境也会很大程度影响出图的美观程度</li></ol><!-- ![](http://img.gavin-get-up.com/20230107161400.png) --><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090205783.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><h3 id="螺丝" tabindex="-1"><a class="header-anchor" href="#螺丝" aria-hidden="true">#</a> 螺丝</h3>',3),B=a('<figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301090203212.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>螺丝的经验总结</summary><ol><li>螺帽这里用的阵列生成的, 也可以用六边形挤压实现. 阵列应用后, 缩放侧边再用 <code>按距离合并点</code> 来实现曲面闭合</li><li>螺纹部分用了 <strong>Curves: Extra Objects</strong> 的插件, 生成了螺旋曲线. 然后通过螺旋曲线z轴挤压, 再 <code>按距离合并点</code> 来实现螺线管柱体.</li><li>螺纹的突起部分用了原地挤出并法向缩放 <code>e</code> -- <code>右键</code> -- <code>e</code> -- <code>alt+s</code>.</li><li>螺纹的起止部分挤出前后都有复杂的调整: <ol><li>做螺线管时, 先用了<code>s</code>--<code>z</code>--<code>0</code>来使得上下面水平</li><li>挤出前, 先设置吸铁石吸附顶点, 再用切割并对齐视角 <code>k</code>--<code>a</code>来使得边缘顶点在管面上</li><li>挤出后, 用了<code>合并顶点</code>--<code>到首/末选点</code>来让螺旋管变得更圆滑</li></ol></li><li>特意选择爱莉希雅的粉色做背景</li></ol></details><h3 id="垃圾桶" tabindex="-1"><a class="header-anchor" href="#垃圾桶" aria-hidden="true">#</a> 垃圾桶</h3><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301102355561.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>垃圾桶的经验总结</summary><ol><li>应用了 <strong>线框修改器</strong>, 把循环边(<code>ctrl+r</code>)做出的网格变成线框.</li><li>应用了 <strong>遮罩修改器</strong>, 能够把选中顶点组部分无视掉.</li></ol></details><h3 id="扳手" tabindex="-1"><a class="header-anchor" href="#扳手" aria-hidden="true">#</a> 扳手</h3><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301102344731.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>扳手的经验总结</summary><ol><li>主要应用了 <strong>拓扑</strong> 的功能, <code>编辑模式</code>-<code>多边形建形</code>, 然后选边拖拽就行. 可以把<code>顶点吸附</code>和<code>n</code>-<code>工具</code>-<code>合并顶点</code>打开, 这样改起来更方便</li><li>扳手的表面材质类似合金, 用了一些新的功能. <ol><li>加了<code>纹理坐标</code>-<code>映射</code>-<code>噪波纹理</code>, 来模拟淬火过程中应力不均产生的同心波纹纹理</li><li>添加了<code>渐变颜色</code>连接到<code>糙度</code>, 这个映射有点像根据 高光阴影 来调节 糙度.</li></ol></li><li>还加了点光源. HDR提供环境光, 点光源用来单独打光, 突出物体.</li></ol></details><h3 id="易拉罐" tabindex="-1"><a class="header-anchor" href="#易拉罐" aria-hidden="true">#</a> 易拉罐</h3><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301142045624.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>易拉罐的经验总结</summary><ol><li><strong>UV贴图</strong><ol><li>学了标记缝合边, 圆台的上下底的周长和母线都要标记, 多层的话, 可以有多个底面</li><li>移动的时候, 左上角选择UV选择工具, 可以直接选择整个UV选区</li></ol></li><li>上表面的盖子比较难做, 说白了就是照着参考图用拓扑工具</li><li><strong>吸附span</strong>工具很好用, 这里用来对齐到Y轴方便做镜像</li><li>最后打光, 瑞兴是锥形光, 百事是点光源. 调整光源位置的时候 <strong>三视图</strong> 很好用, 快捷键<code>ctrl+alt+Q</code></li><li>还做了一个百事的, 女朋友说罐子颜色太浅了, 贴图的问题嘿嘿 <img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301142046439.png" alt="" loading="lazy"></li></ol></details><h3 id="大马士革匕首" tabindex="-1"><a class="header-anchor" href="#大马士革匕首" aria-hidden="true">#</a> 大马士革匕首</h3><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301152328043.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',13),D={class:"custom-container details"},U=e("summary",null,"大马士革匕首的经验总结",-1),N={href:"https://www.bilibili.com/video/BV1Qm4y1D7gB",target:"_blank",rel:"noopener noreferrer"},E=a("<ol><li>简单来说, 倒角修改器可以实现无损建模, 把倒角作为后期的效果而不直接加线, 模型本体可以随时修改</li><li><strong>倒角权重</strong>对应<strong>倒角修改器</strong>, 修改器设置成<code>权重</code>后, 只有有权重的边会倒角</li><li><strong>折痕</strong>对应<strong>细分修改器</strong>, <code>折痕=1</code>的边细分时不会受到影响</li></ol>",1),Y=e("li",null,[i("大马士革钢的纹路是用"),e("code",null,"噪波纹理"),i("生成的, 材质节点用的不熟练, 有空再系统地学一下")],-1),q=e("li",null,[i("老高做错了, 我就自己试着做, 结果布线错的很离谱, 布线原理真的好好学一学 "),e("ol",null,[e("li",null,[i("误触"),e("code",null,"挤出(e)"),i("后, 直接取消会在原地挤出, 导致多一个边/面, 后续所有都会废掉")]),e("li",null,[i("立体线的倒角位置没搞明白, 特别是下图圈的两个地方, 边设置的不对会出现穿模的薄面, 很糟糕 "),e("img",{src:"https://raw.githubusercontent.com/idlesilver/blog-image/main/202301152328059.png",alt:"",loading:"lazy"})])])],-1),C=e("h2",{id:"自己的项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#自己的项目","aria-hidden":"true"},"#"),i(" 自己的项目")],-1),T=e("p",null,"除了跟着教程做的项目, 有时候也会做点自己的项目, 工作需要或者练练手. 自己做能学到不少, 还能发现实际应用的重点",-1),H=e("h3",{id:"骨折复位钳",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#骨折复位钳","aria-hidden":"true"},"#"),i(" 骨折复位钳")],-1),I=e("p",null,"学弟学妹打创业比赛, 要建模做段示意动画, 就帮着做了钳子. 学了一个礼拜第一次解决实际问题, 结果还算成功. Blender做这种示意图可真方便.",-1),L=a(`<details class="custom-container details"><summary>骨折复位钳的经验总结</summary><ol><li>关键帧k帧很累, 做动画还是得要学好骨骼绑定, 手动调整每个部分的姿势太累了</li><li>独立的部分做完 <strong>镜像</strong> 之后要记得及时分离, 不然动作很难调整</li><li>高有信提到的几个改线方法很有用, 开洞和凸起, 之后要去学一学布线技巧</li><li>摩擦轮的防滑纹理不太会做</li><li>渲染的技巧 <ol><li>加速渲染可以启动cuda: <code>编辑</code>-<code>首选项</code>-<code>系统</code></li><li>可以设置多个相机, 渲染的时候可以把分辨率调低</li><li>尽量保存png格式原图, 再手动ffmpeg合成, 这样不怕渲染中途休眠关机</li><li>ffmpeg合成的时候注意编码协议, 有点软件可能不支持默认协议</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 一些有用的命令</span>
<span class="token comment"># png合成视频</span>
ffmpeg <span class="token parameter variable">-r</span> <span class="token number">24</span> <span class="token parameter variable">-i</span> %4d.png <span class="token parameter variable">-pix_fmt</span> yuv420p <span class="token parameter variable">-c:v</span> libx264 output.mp4
<span class="token comment"># 视频合并</span>
<span class="token function">touch</span> video.txt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;file 1.mp4&quot;</span> <span class="token operator">&gt;</span> video.txt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;file 2.mp4&quot;</span> <span class="token operator">&gt;</span> video.txt
ffmpeg <span class="token parameter variable">-f</span> concat <span class="token parameter variable">-i</span> video.txt <span class="token parameter variable">-c</span> copy concat.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></details><h3 id="小兔子-❤" tabindex="-1"><a class="header-anchor" href="#小兔子-❤" aria-hidden="true">#</a> 小兔子 ❤</h3><p>过生日, 女朋友异地, 让她送我一个建模我好3D打印出来. 于是, 收到了可爱的小兔子!</p><figure><img src="https://raw.githubusercontent.com/idlesilver/blog-image/main/202301152357095.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>小兔子 ❤ 啵啵啵</summary><p>小兔子好像用了很多<strong>雕刻</strong>工具, 是没有接触过的领域, 女朋友真厉害! 而且胡萝卜是透明的, 真好看</p></details>`,5);function Q(R,S){const n=l("ExternalLinkIcon"),s=l("YouTube");return r(),d("div",null,[m,p,o(" more "),e("p",null,[i("之前课上学的建模软件是Creo，然后自学过一段时间的solidworks。工程软件操作起来一板一眼的，很严谨但也不是很方便，特别是曲面，真是太难画了。估计今后也就是给小发明做个外壳之类的，目前的水平感觉多少也够用。这两天接触了Blender，刚搞还在B站上找到了一个不错的教程"),e("a",u,[i("【blender】3.3新手0基础入门--高有信"),t(n)]),i("，跟着一个一个小项目做时间不长，也能学到不少东西，挺不错的。这里就稍微记录一下建模的练手项目和一些知识吧")]),h,b,f,e("p",null,[e("a",_,[i("【Blender】关于几何节点那些你不知道的基础知识！从原理说起！_哔哩哔哩_bilibili"),t(n)])]),v,x,y,o(" ![](http://img.gavin-get-up.com/202301052148780.png) "),k,o(" ![](http://img.gavin-get-up.com/20230107160843.png) "),w,o(" ![](http://img.gavin-get-up.com/20230107164715.png) "),z,o(" ![](http://img.gavin-get-up.com/20230107172254.png) "),V,o(" ![](http://img.gavin-get-up.com/202301090019186.png) "),B,e("details",D,[U,e("ol",null,[e("li",null,[i("主要学了倒角修改器. 老高这节课讲的稀碎, 他自己都没有建好, 后来看看"),e("a",N,[i("blender 边(倒角权重，无损建模)"),t(n)]),i("学的 "),E]),Y,q])]),C,T,H,I,t(s,{id:"9vkpKVsUUoA"}),L])}const A=c(g,[["render",Q],["__file","modeling.html.vue"]]);export{A as default};