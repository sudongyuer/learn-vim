<h1 >Vim Cheat Sheet</h1>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2v6r4hrerj20u00u2dhw.jpg" alt="精通 VIM ，此文就够了" style="zoom:33%;" /></p>
<main><div class="container"><div class="commands-container"><div class="grid-block"><div class="grid-lg-1-3"><h2>全局</h2>
        <ul>
          <li>
            <kbd>:h[elp] 关键字</kbd> - 打开关键字帮助
          </li>
          <li>
            <kbd>:sav[eas] 文件名</kbd> - 另存为
          </li>
          <li>
            <kbd>:clo[se]</kbd> - 关闭当前窗口
          </li>
          <li>
            <kbd>:ter[minal]</kbd> - 打开一个shell窗口
          </li>
          <li>
            <kbd>K</kbd> - 打开光标所在单词的man页面
          </li>
        </ul>
        <div class="well">
          <strong>Tip</strong> Run <kbd>vimtutor</kbd> in a terminal to learn the first Vim commands.
        </div>
        <h2>移动光标</h2>
        <ul>
          <li>
            <kbd>h</kbd> - 左移光标
          </li>
          <li>
            <kbd>j</kbd> - 下移光标
          </li>
          <li>
            <kbd>k</kbd> - 上移光标
          </li>
          <li>
            <kbd>l</kbd> - 右移光标
          </li>
          <li>
            <kbd>gj</kbd> - move cursor down (multi-line text)
          </li>
          <li>
            <kbd>gk</kbd> - move cursor up (multi-line text)
          </li>
          <li>
            <kbd>H</kbd> - 移动到当前页面顶部
          </li>
          <li>
            <kbd>M</kbd> - 移动到当前页面中间
          </li>
          <li>
            <kbd>L</kbd> - 移动到当前页面底部
          </li>
          <li>
            <kbd>w</kbd> - 移动到下个单词开头
          </li>
          <li>
            <kbd>W</kbd> - 移动到下个单词开头(单词含标点)
          </li>
          <li>
            <kbd>e</kbd> - 移动到下个单词结尾
          </li>
          <li>
            <kbd>E</kbd> - 移动到下个单词结尾(单词含标点)
          </li>
          <li>
            <kbd>b</kbd> - 移动到上个单词开头
          </li>
          <li>
            <kbd>B</kbd> - 移动到上个单词开头(单词含标点)
          </li>
          <li>
            <kbd>ge</kbd> - 移动到上个单词结尾
          </li>
          <li>
            <kbd>gE</kbd> - 移动到上个单词结尾(单词含标点)
          </li>
          <li>
            <kbd>%</kbd> - 跳转到配对的符号(默认支持的配对符号组:: '()', '{}', '[]' - 在vim中使用 <code>:h matchpairs</code> 获得更多信息)
          </li>
          <li>
            <kbd>0</kbd> - 移动到行首
          </li>
          <li>
            <kbd>^</kbd> - 移动到行首的非空白符
          </li>
          <li>
            <kbd>$</kbd> - 移动到行尾
          </li>
          <li>
            <kbd>g_</kbd> - 移动到行内最后一个非空白符
          </li>
          <li>
            <kbd>gg</kbd> - 移动到文件第一行
          </li>
          <li>
            <kbd>G</kbd> - 移动到文件最后一行
          </li>
          <li>
            <kbd>5gg</kbd> or <kbd>5G</kbd> - 移动到第五行
          </li>
          <li>
            <kbd>gd</kbd> - 跳转到局部定义
          </li>
          <li>
            <kbd>gD</kbd> - 跳转到全局定义
          </li>
          <li>
            <kbd>fx</kbd> - 移动到字符 x 下次出现的位置
          </li>
          <li>
            <kbd>tx</kbd> - 移动到字符 x 下次出现的位置的前一个字符
          </li>
          <li>
            <kbd>Fx</kbd> - 移动到字符 x 上次出现的位置
          </li>
          <li>
            <kbd>Tx</kbd> - 移动到字符 x 上次出现的位置的后一个字符
          </li>
          <li>
            <kbd>;</kbd> - 重复之前的f、t、F、T操作
          </li>
          <li>
            <kbd>,</kbd> - 反向重复之前的f、t、F、T操作
          </li>
          <li>
            <kbd>}</kbd> - 移动到下一个段落 (当编辑代码时则为函数／代码块)
          </li>
          <li>
            <kbd>{</kbd> - 移动到上一个段落 (当编辑代码时则为函数／代码块)
          </li>
          <li>
            <kbd>zz</kbd> - 移动屏幕使光标居中
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>e</kbd> - 向下移动屏幕一行(保持光标不动)
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>y</kbd> - 向上移动屏幕一行(保持光标不动)
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>b</kbd> - 向上滚动一屏
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>f</kbd> - 向下滚动一屏
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>d</kbd> - 向下滚动半屏
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>u</kbd> - 向上滚动半屏
          </li>
        </ul>
        <div class="well">
          <strong>Tip</strong>
          命令前追加数字表示命令的重复次数, 比如 <kbd>4j</kbd> 表示向下移动四行
        </div>
        <h2>插入模式 - 插入/追加文本</h2>
        <ul>
          <li>
            <kbd>i</kbd> - 从光标前开始插入字符
          </li>
          <li>
            <kbd>I</kbd> - 从行首开始插入字符
          </li>
          <li>
            <kbd>a</kbd> - 从光标后开始插入字符
          </li>
          <li>
            <kbd>A</kbd> - 从行尾开始插入字符
          </li>
          <li>
            <kbd>o</kbd> - 在当前行之下另起一行, 开始插入字符
          </li>
          <li>
            <kbd>O</kbd> - 在当前行之上另起一行, 开始插入字符
          </li>
          <li>
            <kbd>ea</kbd> - 从当前单词末尾开始插入
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>h</kbd> - 在插入模式下，删除光标前的字符
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>w</kbd> - 在插入模式下，删除光标前的单词
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>j</kbd> - 在插入模式下，另起一行
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>t</kbd> - 在插入模式下，向右缩进，宽度由 shiftwidth 控制
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>d</kbd> - 在插入模式下，向左缩进，宽度由 shiftwidth 控制
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>n</kbd> - 在插入模式下，在光标之前插入自动补全的下一个匹配项
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>p</kbd> - 在插入模式下，在光标之前插入自动补全的上一个匹配项
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>rx</kbd> - 插入寄存器 x 的内容
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>ox</kbd> - 暂时进入正常模式以发出一个正常模式命令 x。
          </li>
          <li>
            <kbd>Esc</kbd> - 退出插入模式
          </li>
        </ul>
      </div>
      <div class="grid-lg-1-3">
        <h2>编辑文本</h2>
        <ul>
          <li>
            <kbd>r</kbd> - 替换当前字符
          </li>
          <li>
            <kbd>R</kbd> - 在 <kbd>ESC</kbd> 按下之前，替换多个字符
          </li>
          <li>
            <kbd>J</kbd> - 将下一行合并到当前行, 并在两部分文本之间插入一个空格
          </li>
          <li>
            <kbd>gJ</kbd> - 将下一行合并到当前行, 两部分文本之间不含空格
          </li>
          <li>
            <kbd>gwip</kbd> - 重新调整段落
          </li>
          <li>
            <kbd>g~</kbd> - switch case up to motion
          </li>
          <li>
            <kbd>gu</kbd> - 小写操作修饰符
          </li>
          <li>
            <kbd>gU</kbd> - 大写操作修饰符
          </li>
          <li>
            <kbd>cc</kbd> - 将光标所在的行删除, 然后进入插入模式
          </li>
          <li>
            <kbd>c$</kbd> or <kbd>C</kbd> - 将光标处到行尾删除, 然后进入插入模式
          </li>
          <li>
            <kbd>ciw</kbd> - 将光标所在的单词删除, 然后进入插入模式
          </li>
          <li>
            <kbd>cw</kbd> or <kbd>ce</kbd> - 从光标位置开始, 修改单词
          </li>
          <li>
            <kbd>s</kbd> - 删除当前字符, 然后进入插入模式
          </li>
          <li>
            <kbd>S</kbd> - 清空当前行, 然后进入插入模式 (同<kbd>cc</kbd>)
          </li>
          <li>
            <kbd>xp</kbd> - 当前字符后移
          </li>
          <li>
            <kbd>u</kbd> - 撤销
          </li>
          <li>
            <kbd>U</kbd> - 撤销上一次的改动行的操作
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>r</kbd> - 重做（取消撤销）
          </li>
          <li>
            <kbd>.</kbd> - 再次执行上个命令
          </li>
        </ul>
        <h2>选择文本（可视化模式）</h2>
        <ul>
          <li>
            <kbd>v</kbd> - 进入可视化模式, 移动光标高亮选择, 然后可以对选择的文本执行命令(比如&lt;kbd&gt;y&lt;/kbd&gt;-复制)
          </li>
          <li>
            <kbd>V</kbd> - 进入可视化模式(行粒度选择)
          </li>
          <li>
            <kbd>o</kbd> - 切换光标到选择区开头/结尾
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>v</kbd> - 进入可视化模式(矩阵选择)
          </li>
          <li>
            <kbd>O</kbd> - 切换光标到选择区的角
          </li>
          <li>
            <kbd>aw</kbd> - 选择当前单词
          </li>
          <li>
            <kbd>ab</kbd> - 选择被 () 包裹的区域(含括号)
          </li>
          <li>
            <kbd>aB</kbd> - 选择被 {} 包裹的区域(含花括号)
          </li>
          <li>
            <kbd>at</kbd> - 选择被 &lt;&gt; 标签包裹的区域(含&lt;&gt;标签)
          </li>
          <li>
            <kbd>ib</kbd> - 选择被 () 包裹的区域(不含括号)
          </li>
          <li>
            <kbd>iB</kbd> - 选择被 {} 包裹的区域(不含花括号)
          </li>
          <li>
            <kbd>it</kbd> - 选择被 &lt;&gt; 标签包裹的区域(不含&lt;&gt;标签)
          </li>
          <li>
            <kbd>Esc</kbd> - 退出可视化模式
          </li>
        </ul>
        <div class="well">
          <strong>Tip</strong> 也可以使用 <kbd>(</kbd> 和 <kbd>{</kbd> 分别代替 <kbd>b</kbd> 和 <kbd>B</kbd> 
        </div>
        <h2>可视化模式命令</h2>
        <ul>
          <li>
            <kbd>&gt;</kbd> - 向右缩进
          </li>
          <li>
            <kbd>&lt;</kbd> - 向左缩进
          </li>
          <li>
            <kbd>y</kbd> - 复制
          </li>
          <li>
            <kbd>d</kbd> - 剪切
          </li>
          <li>
            <kbd>~</kbd> - 大小写切换
          </li>
          <li>
            <kbd>u</kbd> - 将选中文本转换为小写
          </li>
          <li>
            <kbd>U</kbd> - 将选中文本转换为大写
          </li>
        </ul>
        <h2>寄存器</h2>
        <ul>
          <li>
            <kbd>:reg[isters]</kbd> - 显示寄存器内容
          </li>
          <li>
            <kbd>"xy</kbd> - 复制内容到寄存器 x
          </li>
          <li>
            <kbd>"xp</kbd> - 粘贴寄存器 x 中的内容
          </li>
          <li>
            <kbd>"+y</kbd> - 复制内容到系统剪贴板寄存器
          </li>
          <li>
            <kbd>"+p</kbd> - 粘贴系统剪贴板寄存器的内容
          </li>
        </ul>
        <div class="well">
          <strong>Tip</strong> 寄存器被存储在 ~/.viminfo 中, 在下次重启vim时仍会加载
        </div>
        <div class="well">
          <strong>Tip</strong> 特殊寄存器：
          <p>
             <kbd>0</kbd> - 上次复制<br>
             <kbd>"</kbd> - 未命名寄存器，上次复制或删除<br>
             <kbd>%</kbd> - 当前文件名<br>
             <kbd>#</kbd> - 轮换文件名<br>
             <kbd>*</kbd> - 剪贴板内容 (X11 primary)<br>
             <kbd>+</kbd> - 剪贴板内容 (X11 clipboard)<br>
             <kbd>/</kbd> - 上次搜索的pattern<br>
             <kbd>:</kbd> - 上次执行的命令<br>
             <kbd>.</kbd> - 上次插入的文本<br>
             <kbd>-</kbd> - 上次剪切的短于一行的文本<br>
             <kbd>=</kbd> - 表达式寄存器<br>
             <kbd>_</kbd> - 黑洞寄存器<br>
          </p>
        </div>
        <h2>标记</h2>
        <ul>
          <li>
            <kbd>:marks</kbd> - 标记列表
          </li>
          <li>
            <kbd>ma</kbd> - 设置当前位置为标记 a
          </li>
          <li>
            <kbd>`a</kbd> - 跳转到标记 a 的位置
          </li>
          <li>
            <kbd>y`a</kbd> - 复制当前位置到标记 a 的内容
          </li>
          <li>
            <kbd>`0</kbd> - go to the position where Vim was previously exited
          </li>
          <li>
            <kbd>`"</kbd> - go to the position when last editing this file
          </li>
          <li>
            <kbd>`.</kbd> - go to the position of the last change in this file
          </li>
          <li>
            <kbd>``</kbd> - go to the position before the last jump
          </li>
          <li>
            <kbd>:ju[mps]</kbd> - list of jumps
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>i</kbd> - go to newer position in jump list
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>o</kbd> - go to older position in jump list
          </li>
          <li>
            <kbd>:changes</kbd> - list of changes
          </li>
          <li>
            <kbd>g,</kbd> - go to newer position in change list
          </li>
          <li>
            <kbd>g;</kbd> - go to older position in change list
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>]</kbd> - jump to the tag under cursor
          </li>
        </ul>
        <div class="well">
          <strong>Tip</strong> To jump to a mark you can either use a backtick (<kbd>`</kbd>) or an apostrophe (<kbd>'</kbd>). Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.
        </div>
      </div>
      <div class="grid-lg-1-3">
        <h2>宏</h2>
        <ul>
          <li>
            <kbd>qa</kbd> - 录制宏 a
          </li>
          <li>
            <kbd>q</kbd> - 停止录制宏
          </li>
          <li>
            <kbd>@a</kbd> - 执行宏 a
          </li>
          <li>
            <kbd>@@</kbd> - 重新执行上次执行的宏
          </li>
        </ul>
        <h2>剪切, 复制, 粘贴</h2>
        <ul>
          <li>
            <kbd>yy</kbd> - 复制当前行
          </li>
          <li>
            <kbd>2yy</kbd> - 复制 2 行
          </li>
          <li>
            <kbd>yw</kbd> - 复制当前单词
          </li>
          <li>
            <kbd>yiw</kbd> - 复制光标处的单词
          </li>
          <li>
            <kbd>yaw</kbd> - 复制光标处的单词及其前后的空格
          </li>
          <li>
            <kbd>y$</kbd> or <kbd>Y</kbd> - 复制, 从光标位置到行末
          </li>
          <li>
            <kbd>p</kbd> - 在光标后粘贴
          </li>
          <li>
            <kbd>P</kbd> - 在光标前粘贴
          </li>
          <li>
            <kbd>gp</kbd> - put (paste) the clipboard after cursor and leave cursor after the new text
          </li>
          <li>
            <kbd>gP</kbd> - put (paste) before cursor and leave cursor after the new text
          </li>
          <li>
            <kbd>dd</kbd> - 剪切当前行
          </li>
          <li>
            <kbd>2dd</kbd> - 剪切 2 行
          </li>
          <li>
            <kbd>dw</kbd> - 剪切当前单词
          </li>
          <li>
            <kbd>diw</kbd> - 删除光标处的单词
          </li>
          <li>
            <kbd>daw</kbd> - 删除光标处的单词及其前后的空格
          </li>
          <li>
            <kbd>d$</kbd> or <kbd>D</kbd> - 剪切, 从光标位置到行末 (同&lt;kbd&gt;D&lt;/kbd&gt;)
          </li>
          <li>
            <kbd>x</kbd> - 剪切当前字符
          </li>
        </ul>
        <h2>文字缩进</h2>
        <ul>
          <li>
            <kbd>&gt;&gt;</kbd> - 将当前行向右缩进，宽度由 shiftwidth 控制
          </li>
          <li>
            <kbd>&lt;&lt;</kbd> - 将当前行向左缩进，宽度由 shiftwidth 控制
          </li>
          <li>
            <kbd>&gt;%</kbd> - 向右缩进 () 或 {} 内的区域 (光标需置于括号上)
          </li>
          <li>
            <kbd>&gt;ib</kbd> - 向右缩进 () 内的区域
          </li>
          <li>
            <kbd>&gt;at</kbd> - 向右缩进 &lt;&gt; 标签内的区域
          </li>
          <li>
            <kbd>3==</kbd> - 自动缩进 3 行
          </li>
          <li>
            <kbd>=%</kbd> - 自动缩进 () 或 {} 内的区域 (光标需置于括号上)
          </li>
          <li>
            <kbd>=iB</kbd> - 自动缩进 {} 内的区域 (光标需置于括号上)
          </li>
          <li>
            <kbd>gg=G</kbd> - 自动缩进整个缓冲区
          </li>
          <li>
            <kbd>]p</kbd> - 粘贴并调整缩进至当前行
          </li>
        </ul>
        <h2>退出</h2>
        <ul>
          <li>
            <kbd>:w</kbd> - 保存
          </li>
          <li>
            <kbd>:w !sudo tee %</kbd> - 使用 sudo 保存当前文件
          </li>
          <li>
            <kbd>:wq</kbd> or <kbd>:x</kbd> or <kbd>ZZ</kbd> - 保存并退出
          </li>
          <li>
            <kbd>:q</kbd> - 退出(修改未保存时警告)
          </li>
          <li>
            <kbd>:q!</kbd> or <kbd>ZQ</kbd> - 不保存强制退出
          </li>
          <li>
            <kbd>:wqa</kbd> - 保存所有标签页并全部退出
          </li>
        </ul>
        <h2>查找/替换</h2>
        <ul>
          <li>
            <kbd>/pattern</kbd> - 查找&lt;kbd&gt;pattern&lt;/kbd&gt;
          </li>
          <li>
            <kbd>?pattern</kbd> - 向上查找&lt;kbd&gt;pattern&lt;/kbd&gt;
          </li>
          <li>
            <kbd>\vpattern</kbd> - &lt;kbd&gt;pattern&lt;/kbd&gt; 中的非字母数字字符被视为正则表达式特殊字符 (不需转义字符)
          </li>
          <li>
            <kbd>n</kbd> - 查找下一个
          </li>
          <li>
            <kbd>N</kbd> - 查找上一个
          </li>
          <li>
            <kbd>:%s/old/new/g</kbd> -
            替换全部
          </li>
          <li>
            <kbd>:%s/old/new/gc</kbd> -
            (逐个)替换
          </li>
          <li>
            <kbd>:noh[lsearch]</kbd> - 移除搜索结果的高亮显示
          </li>
        </ul>
        <h2>多文件搜索</h2>
        <ul>
          <li>
            <kbd>:vim[grep] /pattern/ {`{file}`}</kbd> -
            在多个文件中搜索 &lt;kbd&gt;pattern&lt;/kbd&gt;
          </li>
        </ul>
        <div class="well">
          e.g.
          <kbd>:vim[grep] /foo/ **/*</kbd>
        </div>
        <ul>
          <li>
            <kbd>:cn[ext]</kbd> - 移动至下一个
          </li>
          <li>
            <kbd>:cp[revious]</kbd> - 移动至上一个
          </li>
          <li>
            <kbd>:cope[n]</kbd> - 打开搜索结果列表
          </li>
          <li>
            <kbd>:ccl[ose]</kbd> - close the quickfix window
          </li>
        </ul>
        <h2>标签</h2>
        <ul>
          <li>
            <kbd>:tabnew</kbd> or <kbd>:tabnew {page.words.file}</kbd> -
            在新标签中打开文件
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wT</kbd> - 将窗口变成标签
          </li>
          <li>
            <kbd>gt</kbd> or <kbd>:tabn[ext]</kbd> - 切换到下一个标签
          </li>
          <li>
            <kbd>gT</kbd> or <kbd>:tabp[revious]</kbd> - 切换到上一个标签
          </li>
          <li>
            <kbd>#gt</kbd> - 切换到第 &lt;kbd&gt;#&lt;/kbd&gt; 个标签
          </li>
          <li>
            <kbd>:tabm[ove] #</kbd> - 移动标签到第 &lt;kbd&gt;#&lt;/kbd&gt; 位(下标从 0 开始)
          </li>
          <li>
            <kbd>:tabc[lose]</kbd> - 关闭当前标签
          </li>
          <li>
            <kbd>:tabo[nly]</kbd> - 关闭其他标签
          </li>
          <li>
            <kbd>:tabdo</kbd> command - 在所有标签中执行命令 (例如 <kbd>:tabdo q</kbd> 关闭所有标签)
          </li>
        </ul>
      </div>
    </div>
    <div class="grid-block">
      <div class="grid-lg-1-2">
        <h2>多文件编辑</h2>
        <ul>
          <li>
            <kbd>:e[dit] 文件名</kbd> - 新建缓冲区打开 filename
          </li>
          <li>
            <kbd>:bn[ext]</kbd> -
            切换到下个缓冲区
          </li>
          <li>
            <kbd>:bp[revious]</kbd> -
            切换到上个缓冲区
          </li>
          <li>
            <kbd>:bd[elete]</kbd> - 关闭缓冲区
          </li>
          <li>
            <kbd>:b[uffer]#</kbd> - go to a buffer by #
          </li>
          <li>
            <kbd>:b[uffer] file</kbd> - go to a buffer by file
          </li>
          <li>
            <kbd>:ls</kbd> or <kbd>:buffers</kbd> - 列出所有打开的缓冲区
          </li>
          <li>
            <kbd>:sp[lit] 文件名</kbd> - 新建缓冲区打开 filename 并水平分割窗口
          </li>
          <li>
            <kbd>:vs[plit] 文件名</kbd> - 新缓冲区打开 filename 并垂直分割窗口
          </li>
          <li>
            <kbd>:vert[ical] ba[ll]</kbd> - edit all buffers as vertical windows
          </li>
          <li>
            <kbd>:tab ba[ll]</kbd> - edit all buffers as tabs
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>ws</kbd> - 水平分割窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wv</kbd> - 垂直分割窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>ww</kbd> - 在窗口间切换
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wq</kbd> - 关闭窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wx</kbd> - exchange current window with next one
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>w=</kbd> - make all windows equal height &amp; width
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wh</kbd> - 切换到左侧窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wl</kbd> - 切换到右侧窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wj</kbd> - 切换到下侧窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wk</kbd> - 切换到上侧窗口
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wH</kbd> - 使游标所在视窗全高并移至最左 (最左垂直视窗)
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wL</kbd> - 使游标所在视窗全高并移至最右 (最右垂直视窗)
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wJ</kbd> - 使游标所在视窗全宽并移至最下 (最下水平视窗)
          </li>
          <li>
            <kbd>Ctrl</kbd> + <kbd>wK</kbd> - 使游标所在视窗全宽并移至最上 (最上水平视窗)
          </li>
        </ul></div></div></div></div></main>
<h2 >Diff</h2>
<ul>
<li><p><kbd>zf</kbd> - manually define a fold up to motion</p>
</li>
<li><p><kbd>zd</kbd> - delete fold under the cursor</p>
</li>
<li><p><kbd>za</kbd> - toggle fold under the cursor</p>
</li>
<li><p><kbd>zo</kbd> - open fold under the cursor</p>
</li>
<li><p><kbd>zc</kbd> - close fold under the cursor</p>
</li>
<li><p><kbd>zr</kbd> - reduce (open) all folds by one level</p>
</li>
<li><p><kbd>zm</kbd> - fold more (close) all folds by one level</p>
</li>
<li><p><kbd>zi</kbd> - toggle folding functionality</p>
</li>
<li><p><kbd>]c</kbd> - jump to start of next change</p>
</li>
<li><p><kbd>[c</kbd> - jump to start of previous change</p>
</li>
<li><p><kbd>do</kbd> or </p>
<p><kbd>:diffg[et]</kbd> - obtain (get) difference (from other buffer)</p>
</li>
<li><p><kbd>dp</kbd> or </p>
<p><kbd>:diffpu[t]</kbd> - put difference (to other buffer)</p>
</li>
<li><p><kbd>:diffthis</kbd> - make current window part of diff</p>
</li>
<li><p><kbd>:dif[fupdate]</kbd> - update differences</p>
</li>
<li><p><kbd>:diffo[ff]</kbd> - switch off diff mode for current window</p>
</li>

</ul>
<p><strong>Tip</strong> The commands for folding (e.g. </p>
<p><kbd>za</kbd>) operate on one level. To operate on all levels, use uppercase letters (e.g. </p>
<p><kbd>zA</kbd>).</p>
<p><strong>Tip</strong> To view the differences of files, one can directly start Vim in diff mode by running </p>
<p><kbd>vimdiff</kbd> in a terminal. One can even set this as </p>
<p><kbd>git difftool</kbd>.</p>
