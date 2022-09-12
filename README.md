# digitalTwins-short- 数字孪生demo
## 此处为all的缩减版，采用同步渲染的方式将unity生成的WEBGL文件渲染到web界面，需要通过更改数据库的数据来看灯光的变化，此处是实时监控，间隔为2秒钟。

## 一. 采用技术点

### 1. 服务端NodeJS

+ 原因：nodeJs在可以非常快以比较低的代码量搭建服务端

### 2. 数据库-mySQL

### 3. 建模unity+C#

### 4. 硬件：

+ 开发板：NodeMCU集成开发板
  + 优点：集成了esp8266芯片
+ 语言：C语言

## 二. 搭建环境

### 1. 必须安装Node环境

+ [node下载网址](https://nodejs.org/en/)

### 2. 安装mySQL

+ **记得导入mySQL文件哦！！！**
+ 这里推荐小皮面板
  + [小皮面板下载网址](https://www.xp.cn/download.html)

### 3. 硬件

+ 软件下载
  + [arduino软件下载网址](https://www.arduino.cc/en/software)
  + **在arduino安装esp8266对应的库**
  + 现在就可以将硬件程序烧录到开发板了
  + **使用的小灯是开发板自带的唯一一个发光二极管**

**到现在了，环境基本就没问题了**

## 三. 软件启动

### 1. 服务端

+ 打开服务端的代码
  + 在代码目录下执行 
  + `npm install`
  + `npm run start`
  + 然后在浏览器输入`127.0.0.1:3000`即可。

### 
