import{_ as t,V as o,W as n,Z as l,X as e,Y as i,$ as r,a0 as c,D as d}from"./framework-d9ea58ab.js";const s={},g=e("h1",{id:"blender建模",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#blender建模","aria-hidden":"true"},"#"),i(" Blender建模")],-1),m=e("p",null,"很早以前就喜欢做点3D打印，搞点小发明啥的，大学里也为此特地选了3D建模的课。可惜上完课后就没什么机会碰3D打印机了。之前好朋友自己搭过3D打印机，但我的那台因为资金快递等等原因一直拖延到现在。最近芯片涨价，下位机开发板又涨价了，再观望一段时间吧。趁此机会，先把之前学的三脚猫建模功夫再完善一下。",-1),h={href:"https://www.bilibili.com/video/BV1US4y1N7xN?p=6",target:"_blank",rel:"noopener noreferrer"},u=c('<h2 id="跟着-高有信-的课做的项目" tabindex="-1"><a class="header-anchor" href="#跟着-高有信-的课做的项目" aria-hidden="true">#</a> 跟着 高有信 的课做的项目</h2><h3 id="锤子" tabindex="-1"><a class="header-anchor" href="#锤子" aria-hidden="true">#</a> 锤子</h3><figure><img src="http://img.gavin-get-up.com/202301052148780.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>锤子的经验总结</summary><ul><li>最重要的失误是<strong>羊角和中间连接的地方不够圆滑</strong>，出现了锐利的边缘，还不知道怎么才能修掉，和视频的步骤应该是一样的啊 <img src="http://img.gavin-get-up.com/202301052145081.png" alt="" loading="lazy"></li><li>然后就是锤头的<strong>上下两个穿孔</strong>大小不一样，中间也没有连接起来，虽然看不出来但是逻辑上很怪</li><li>两个羊角尖尖上的环切位置也是毛估估的，没有数值对齐，下次记得学学看<strong>对称操作</strong></li><li><strong>渲染</strong>的步骤我的版本和视频不一样，感觉有点怪，多次采样感觉画质没有明显提升，降噪好像也没有太大效果</li></ul></details><h3 id="骰子" tabindex="-1"><a class="header-anchor" href="#骰子" aria-hidden="true">#</a> 骰子</h3><figure><img src="http://img.gavin-get-up.com/20230107160843.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>骰子的经验总结</summary><ol><li><code>alt+s</code> 法向缩放</li><li><code>shift+d</code> 复制物体</li><li>加一个平面作为物体的地面能让图片更好看</li></ol></details><h3 id="可乐瓶" tabindex="-1"><a class="header-anchor" href="#可乐瓶" aria-hidden="true">#</a> 可乐瓶</h3><figure><img src="http://img.gavin-get-up.com/20230107164715.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>瓶盖的经验总结</summary><ol><li>从圆环开始建模，用了<strong>阵列</strong>和<strong>实体化</strong></li><li>实体化 --&gt; 材质 --&gt; 偏移。这样能让瓶盖上下直接应用两种不同的颜色</li><li>加的底侧面平面如果太高的话, 会导致光线很差, 进而画面很暗不好看. <img src="http://img.gavin-get-up.com/20230107161346.png" alt="" loading="lazy"></li></ol></details><figure><img src="http://img.gavin-get-up.com/20230107172254.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><details class="custom-container details"><summary>瓶身的经验总结</summary><ol><li>瓶身建模也是<strong>阵列</strong>和<strong>实体化</strong>. 还特别讲了缩放平移后阵列错误的问题, 可以通过<code>ctrl+a</code>--&gt;<code>全部变换</code>来重设原点和缩放</li><li>标签的建模是把瓶子的中间一部分截出来再调大一点. 最后加上实体化的厚度. UV贴图本质就是把图片对齐网格, 视频给的方法有点繁琐, 也没看懂内部逻辑, 下次再看看细致的教程.</li><li>液体建模是把瓶子内表面截出来做封闭, 材质用了<code>体积</code>--<code>体积吸收</code>来模拟可乐, 和瓶子盖子用的<code>表面</code>不一样</li><li>内部的气泡用了粒子效果的气泡发生器, 额外加了一个<strong>棱状球</strong>作为渲染的<code>物体</code>对象, 这样修改球的材质和形状就能修改对应的气泡了. 气泡最高高度是通过调关键帧来的, 不超过液体就行.</li><li>外壁的水珠用了<code>毛发</code>的粒子效果, 做了两个大水滴组成集合来作为渲染的<code>集合</code>. 但是这样就不能通过调整单个水滴的位置来控制所有水珠的局部相对位置了. 还用了<code>权重绘制</code>来控制水珠生成位置. 水珠的方向则是<code>粒子效果</code>--<code>高级</code>--<code>旋转</code>--<code>全局Y</code></li><li>HDR的光环境也会很大程度影响出图的美观程度 <img src="http://img.gavin-get-up.com/20230107161400.png" alt="" loading="lazy"></li></ol></details>',12);function p(f,_){const a=d("ExternalLinkIcon");return o(),n("div",null,[g,m,l(" more "),e("p",null,[i("之前课上学的建模软件是Creo，然后自学过一段时间的solidworks。工程软件操作起来一板一眼的，很严谨但也不是很方便，特别是曲面，真是太难画了。估计今后也就是给小发明做个外壳之类的，目前的水平感觉多少也够用。这两天接触了Blender，刚搞还在B站上找到了一个不错的教程"),e("a",h,[i("【blender】3.3新手0基础入门--高有信"),r(a)]),i("，跟着一个一个小项目做时间不长，也能学到不少东西，挺不错的。这里就稍微记录一下建模的练手项目和一些知识吧")]),u])}const y=t(s,[["render",p],["__file","modeling.html.vue"]]);export{y as default};
