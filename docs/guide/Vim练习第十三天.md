# Vim练习第十三天

> 替换字符串

## 替换命令 :substitue

- 公式 :`[range]s[ubstitue]/[pattern]/{string}/[flags]`
	- rang 范围
		- s 到尾部
		- % 全文
		- number,numbser 行到行
	- flag
		- g 全部匹配
		- c 弹框确认
- 可视化模式下 全部替换

## 多选操作

 - gb 选中当前的单词 添加一个cursor到下一个匹配的单词，用于多选操作
