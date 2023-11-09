# nodeStudy
nodeStudy


# 使用教程

## 1. 安装
进入nodeStudy\server 终端

安装依赖
```
npm i
```
进入nodeStudy\admin 终端
安装依赖
```
npm i
```

## 2. 启动

先启动数据库

进入MongoDB\bin 目录
C:\Users\wusan\Desktop\mongodb-win32-x86_64-2012plus-4.1.7 (1)\bin

右键进入命令行输入，`./mongod.exe    --dbpath= 指定数据库路径`
```
./mongod.exe    --dbpath= 指定数据库路径
./mongod.exe   --dbpath=D:\code\nodeStudy\db
```

启动服务端
进入nodeStudy\server 终端
``` 
npm stat
```

启动前端
nodeStudy\admin 终端
``` 
npm run dev
```



