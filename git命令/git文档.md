# GIT

## 集中式和分布式的区别

集中式只有一个版本库在远程服务器端，如果服务器端出现问题，则本地无法回退代码
分布式每台本地电脑都有一个版本库，可以任意回退代码

## 配置作者信息

git config --global user.email "xxxx@email.com"
git config --global user.name "xxx"

查询用户信息配置
git config -l

## 建立新仓库与维护旧仓库

1. 建立新仓库
   建立一个本地版本库
   git init

2. 维护旧仓库
   注意点：git clone 版本库的时候，一定要在没有使用过 git init 的文件夹中克隆

ls -a 可以查看当前目录下所有文件

## 使用命令完成 git 流水线操作
