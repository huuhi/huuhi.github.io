import React from 'react';

export default function AboutContent() {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <img src="/img/headimg.jpg" alt="User Avatar" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Because</h2>
          
          {/* 包含GitHub和WeChat图标的容器 */}
          <div className="mt-4 flex justify-center space-x-4">
            {/* GitHub图标 */}
            <a href="https://github.com/huuhi" target="_blank" rel="noopener noreferrer" className="group">
              <img src="/img/github.png" alt="GitHub" width={26} height={26} className="group-hover:opacity-75 transition-opacity" />
            </a>

            {/* WeChat图标和二维码 */}
            <div className="relative inline-block group">
            <img src="/img/wechat.png" alt="WeChat" width={26} height={26} className="group-hover:opacity-75 transition-opacity rounded-xl" />
              {/* 鼠标悬停时显示的二维码 */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* 使用内联样式来确保二维码图片的尺寸 */}
                <img 
                  src="/img/wechat_code.jpg" 
                  alt="WeChat QR Code" 
                  style={{ width: '150px', maxWidth: 'none' }} // 直接设置宽度为250px，并移除max-width限制
                  className="rounded border border-gray-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert mx-auto">
          <p>你好！我是来自广东职业技术学院24级学生，专业是移动应用开发，很高兴遇见你！</p>
          <p>
            这个网站主要写一些学习感想，分享技术，学习笔记的小网站，当然肯定不局限于这些，只要我想发，可能什么类型的文章都有
          </p>
          <p>
            理想是开一个小书店，书店里面全都是我喜欢的书，不过真是这样的话，那这个书店的书实在太少了。
          </p>
          <p>
            现在的目标就是踏踏实实学习，然后能去实习就去实习，为找工作作好准备🤩！
          </p>
          <p>
            平时的兴趣就是，看看历史，时政视频我🙋‍♂️，看看电影😊,跑跑步啊🏃‍♂️，听听歌去（￣︶￣）↗，如果可以还会去找小说看一下，不过最近时间不太充足
          </p>
          <a href="https://space.bilibili.com/23947287" target='_black'>
           <img src="/img/yh.avif" alt="" width={300} height={300}/>
          </a>
          <p
          color='#b8b8b8'
          >放一张鸽总的图💂‍♂️</p>

          <h4>使用的语言</h4>
          <hr/>
          <ul>
            <li>Java(主语言)</li>
            <li>HTML/CSS/JavaScript</li>
            <li>SQL</li>
          </ul>
          <h4>学习过的课程</h4>
          <hr />
          <ul>
            <li>CS50</li>
            <li>CS61B</li>
            <li>韩顺平Java</li>
            <li>黑马程序员 MySQL数据库</li>
            <li>黑马程序员Java+AI(更适合复习看)</li>
          </ul>

          <h4>未来规划</h4>
          <ul>
            <li>这学期一直在复习Java的基础，打算下学期开始学习JavaWeb</li>
            <li>学习完web之后，当然是做项目了！先跟着课程做项目，然后自己尝试写一个</li>
            <li>目前最大的目标实习，最终目标是工作</li>
            <li>希望在三年里可以有俩段实习经历</li>
          </ul>

        </div>
      </div>
    </section>
  );
}