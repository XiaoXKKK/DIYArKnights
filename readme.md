# DIYArKnights
## 明日方舟干员Template
[PRTS](prts.wiki)
### 之前从来没写过web，大部分用AI写的，记一些prompt
技能设置区
技能0~3个
每个技能有技能名称、技能描述
且技能有三种类型：被动、手动开启、自动开启。
设计技能时需要先选择技能类型
被动技能只有持续时间参数
手动开启和自动开启的技能有初始技力、技力需求、持续时间、技力恢复方式三个参数。
技力恢复方式分为受击恢复、自动恢复、攻击恢复，做成选择框

每个h2标题一栏，横向排版

保存成数组形式，每个其中每个元素包含id、th、td三个属性，id从0开始编号

TODO:
bugfix:
- 攻击范围 √
- 技能类型选择 √
new:
- 分支：爬取图片和文本 √
- 根据选择的分支填入基础数据