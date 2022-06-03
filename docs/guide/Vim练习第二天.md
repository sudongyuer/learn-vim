# Vim练习第二天

## 移动命令

- `0`移动到行首
- `^`移动到当前行第一个不是`blank`字符的位置（空格 、tab，换行，回车符）
  - 推荐改建改为`shift+h`
- `$`移动到行尾
- `g_`移动到当前行最后一个不是black字符的位置
  - 推荐改建`shift+l`

上面提到的改建可以进入`vsode` 的`settings`更改(`command+shift+p`)即可进入，然后把以下圈中的代码填入`setting即可`

<img src="https://tva1.sinaimg.cn/large/e6c9d24egy1h2ve3hhc4kj21380u0wk5.jpg" alt="image-20220603213738356" style="zoom:33%;" />

## 插入命令

- `I`插入到行首的位置
- `A`插入到行尾的位置
- `O`插入当行前
- `o`插入到行后

## 复制粘贴以及删除

- `yy`复制当前行
- `p`粘贴
- `dd`删除当前行

