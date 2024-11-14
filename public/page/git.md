:::danger
Git是一个开源的分布式版本控制系统,用于有效、高速地处理从小到大的项目版本管理。它已经成为现代软件开发中不可或缺的工具之一。以下是一些常用的Git命令，帮助你更好地管理和维护你的代码库。
:::
## git命令集合


```git
git init                                                  # 初始化本地git仓库（创建新仓库）
git config --global user.name "xxx"                       # 配置用户名
git config --global user.email "xxx@xxx.com"              # 配置邮件
git clone git+ssh://git@/www.git                          # clone远程仓库,加上远程仓库地址
git status                                                # 查看当前版本状态（是否修改）
git add .                                                 # 增加当前子目录下所有更改过的文件至暂存区
git commit -m 'xxx'                                       # 提交
git rm xxx                                                # 删除暂存区中的文件
git log                                                   # 显示提交日志
git branch -a                                             # 显示所有分支
git branch -r                                             # 显示所有原创分支
git branch --merged                                       # 显示所有已合并到当前分支的分支
git branch --no-merged                                    # 显示所有未合并到当前分支的分支
git branch -m master master_copy                          # 本地分支改名
git fetch                                                 # 获取所有远程分支（不更新本地分支，另需merge）
git fetch --prune                                         # 获取所有原创分支并清除服务器上已删掉的分支
git push origin master                                    # 将当前分支push到远程master分支
git merge origin/master                                   # 合并远程master分支至当前分支
```


::: tip
首次提交需要配置用户名和邮箱
:::







## More

⚠️项目持续施工
