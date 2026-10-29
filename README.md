<p align="center">
  <img src="assets/hero.png" alt="闪投 FlashCast：把屏幕投到会议室大屏上" width="100%">
</p>

<p align="center">
  <a href="https://github.com/wuha-like-sleep/flashcast-download/releases/latest"><b>下载最新版</b></a>
  &nbsp;·&nbsp; <a href="INSTALL-WINDOWS.md">Windows 接收端安装</a>
  &nbsp;·&nbsp; <a href="INSTALL-BOX.md">工控机安装和硬件要求</a>
  &nbsp;·&nbsp; <a href="#常见问题">常见问题</a>
</p>

闪投把电脑和手机的屏幕投到电视、投影和会议室大屏上。画面只在局域网里点对点传输，不需要服务器、外网或账号。

## 特点

| | |
|:--|:--|
| **低延迟，最高 4K** | 自研传输协议配合显卡硬件编码，前向纠错抵抗 Wi-Fi 丢包。根据网络、屏幕和解码能力自动选择 4K / 2K / 1080p，网络变差时自动降、恢复后再升。 |
| **只有在场的人能投** | 每块屏幕显示 6 位投屏码，每次投屏结束都换一个新的，而且不在网络上公开。隔壁会议室或会场外的人投不进来；屏幕正在使用时，别人也投不进来。 |
| **完全本地** | 不经过任何服务器，断开外网照常使用。投屏设备可以放在单独的网段，输入投屏码就能跨网段连接。 |
| **工控机开箱即用** | 系统镜像写进 U 盘，插到工控机上开机就装好，不用先装系统；J1900 级别的老机器也能投 1080p。待机画面防烧屏，OLED 屏也能长时间开着。 |

界面支持简体中文、繁體中文、English、日本語和한국어。

## 下载

**接收端**装在显示画面的设备上，**发送端**装在要把画面投出去的设备上。点文件名直接下载，所有文件见 [Releases 页面](https://github.com/wuha-like-sleep/flashcast-download/releases/latest)。

Windows 最新修复版为 **0.4.2**；其他平台仍使用下方的 **0.4.0** 下载。Windows 更新改善双屏接收，设置入口为右下角小齿轮（F2），诊断数据默认隐藏（F1 查看）。

### 接收端：装在电视、会议室大屏、展厅屏幕上

| 设备 | 下载 | 说明 |
|:--|:--|:--|
| <img src="https://cdn.simpleicons.org/windows11/0078D4" width="14"> **Windows 电脑** | [安装程序](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.2/FlashCast-Receiver-Setup-0.4.2-windows-x64.exe) · [免安装版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.2/FlashCast-Receiver-0.4.2-windows-x64.zip) | 会议室、展厅的显示电脑；可选开机自动启动，自动设置防火墙 · [安装说明](INSTALL-WINDOWS.md) |
| <img src="https://cdn.simpleicons.org/androidtv/3DDC84" width="14"> **Android 电视 / 盒子** | [电视版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/FlashCast-TV-0.4.0-androidtv.apk) | 用 U 盘或电视助手安装 |
| <img src="https://cdn.simpleicons.org/intel/0071C5" width="14"> **工控机 / 迷你主机** | [系统镜像](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/FlashCast-Box-0.4.0-amd64.img.xz) | 写进 U 盘，插到工控机上开机即可安装 · [安装说明和硬件要求](INSTALL-BOX.md) |
| **Mac / Linux 电脑** | 用下方的电脑版 | 打开后点右上角“作为接收端” |

### 发送端：装在要投屏的电脑和手机上

| 设备 | 下载 | 说明 |
|:--|:--|:--|
| <img src="https://cdn.simpleicons.org/windows11/0078D4" width="14"> **Windows 10 / 11** | [安装程序](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.2/FlashCast-Setup-0.4.2-windows-x64.exe) · [免安装版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.2/FlashCast-0.4.2-windows-x64.zip) | 投屏和接收都可以；安装时可选语言 |
| <img src="https://cdn.simpleicons.org/apple/999999" width="14"> **Mac**（Apple 芯片） | [电脑版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/FlashCast-0.4.0-macos-arm64.dmg) | M1 / M2 / M3 / M4；已通过苹果公证，拖进“应用程序”即可打开 |
| <img src="https://cdn.simpleicons.org/apple/999999" width="14"> **Mac**（Intel 芯片） | [电脑版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/FlashCast-0.4.0-macos-x86_64.dmg) | 同上 |
| <img src="https://cdn.simpleicons.org/ubuntu/E95420" width="14"> **Ubuntu / Debian** | [安装包](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/flashcast_0.4.0_amd64.deb) | `sudo apt install ./flashcast_0.4.0_amd64.deb` |
| <img src="https://cdn.simpleicons.org/linux/999999" width="14"> **其他 Linux** | [压缩包](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/flashcast-0.4.0-linux-amd64.tar.gz) | 解压后运行 `bin/flashcast` |
| <img src="https://cdn.simpleicons.org/android/3DDC84" width="14"> **Android 手机** | [手机版](https://github.com/wuha-like-sleep/flashcast-download/releases/download/v0.4.0/FlashCast-0.4.0-android.apk) | Android 8.0 及以上 |
| <img src="https://cdn.simpleicons.org/apple/999999" width="14"> **iPhone / iPad** | [TestFlight 测试版](https://testflight.apple.com/join/yDJJBePw) | 先安装 TestFlight，再打开链接加入；可用版本以 TestFlight 页面为准 |

> 不知道 Mac 是哪种芯片：点屏幕左上角苹果菜单 → 关于本机，“芯片”一栏写 Apple M… 是 Apple 芯片，写 Intel 是 Intel 芯片。
>
> 0.4 与 0.3 可以互相投画面；发送端和接收端都升级到 0.4 才能传声音。iOS 0.4.0 工程已准备完成，TestFlight 上线时间以实际上传和处理结果为准。
>
> 从 0.3 升级请手动下载新版覆盖安装；Windows 沿用原目录并保留设置，Mac 退出应用后替换“应用程序”中的 FlashCast，Android 可直接覆盖安装。普通版 0.4 在空闲时用小三角提示后续更新，定制版由供应方提供更新。

## 怎么用

<table>
  <tr>
    <td width="50%" valign="top"><img src="assets/receiver.png" alt="接收端待机画面"></td>
    <td width="50%" valign="top"><img src="assets/app.png" alt="在发送端输入投屏码"></td>
  </tr>
  <tr>
    <td valign="top"><b>1. 打开接收端</b><br>大屏上显示设备名和 6 位投屏码。投屏码每次投屏后都会换新的。</td>
    <td valign="top"><b>2. 输入投屏码</b><br>在你的电脑或手机上打开闪投，输入大屏上的投屏码；也可以在“附近的设备”里点这块屏幕，再输入投屏码。</td>
  </tr>
</table>

<p align="center">
  <img src="assets/casting.png" alt="投屏中" width="55%"><br>
  <b>3. 开始投屏</b>：画面马上出现在大屏上。可以随时暂停（大屏停在当前画面）或停止。
</p>

## 常见问题

<details>
<summary><b>投屏码为什么每次都不一样？</b></summary>
<br>

为了只让在会议室里、看得到屏幕的人投屏：每次投屏结束，接收端都会换一个新的随机投屏码，而且投屏码不会在网络上公开。连续输错多次的设备会被暂时忽略一分钟。投屏中途网络断了，原来的电脑一分钟内会自动重连，不用重新输入。

需要固定投屏码（例如打印贴在会议室）的，见 [Windows 接收端安装说明](INSTALL-WINDOWS.md) 里的“投屏码”一行。
</details>

<details>
<summary><b>找不到接收端</b></summary>
<br>

- 确认两台设备在同一个网络（同一个 Wi-Fi 或同一台路由器）。
- Windows 第一次运行时如果防火墙询问，请允许访问。
- 部分公共 Wi-Fi 开启了“客户端隔离”，设备之间不能直接通信，可以换个网络。
- 接收端在另一个网段时（例如电脑 192.168.3.x、大屏 192.168.4.x），设备列表里看不到它，直接输入投屏码即可；也可以点“搜索其他网段”把大屏所在的网段加进去。
</details>

<details>
<summary><b>投屏设备能和办公网络分开吗？</b></summary>
<br>

可以。把大屏、会议室电脑放到单独的网段或 VLAN（例如 192.168.4.x），办公电脑和手机留在原来的网段（例如 192.168.3.x）：

- 输入大屏上的 **6 位投屏码** 就能直接连上，不需要服务器；
- 两个网段差别较大时（例如 192.168.3.x 和 10.10.4.x），输入大屏左下角显示的 **IP 地址**，再输入投屏码；或者在“搜索其他网段”里填上 `10.10.4.0/24`；
- 防火墙只需要放行办公网到投屏网的 **TCP/UDP 47800–47809** 端口。

画面只在发送端和那块屏幕之间点对点传输，不会广播到网络里的其他电脑。
</details>

<details>
<summary><b>怎么暂停或断开投屏？</b></summary>
<br>

- **暂停**：发送端点“暂停”，大屏停在当前画面（这时可以切换窗口、查资料，大屏上看不到），点“继续”恢复。
- **在发送端结束**：点“停止投屏”。
- **在大屏这边断开**：按键盘 **Esc**，或移动鼠标后点右上角的“断开投屏”；Android 电视上连按两次遥控器 **返回键**。
</details>

<details>
<summary><b>大屏一直开着会烧屏吗？</b></summary>
<br>

不会。待机画面会每隔几分钟轻微移动位置；10 分钟没人投屏就变成黑屏，只留一小块设备名和投屏码慢慢移动（照样能投）；投屏暂停超过 3 分钟画面自动变暗。有人投屏或按键就恢复。
</details>

<details>
<summary><b>Mac 投屏时提示没有屏幕录制权限</b></summary>
<br>
打开 系统设置 → 隐私与安全性 → 屏幕录制，允许 FlashCast，然后重新打开闪投。
</details>

<details>
<summary><b>画面卡顿或延迟高</b></summary>
<br>

- 接收端尽量用有线网络；发送端用 5 GHz Wi-Fi，离路由器近一些。
- 投屏时电脑版会显示网络状态（良好 / 一般 / 较差），网络较差时会自动降低分辨率。
- 发送端电脑有独立显卡或较新的核显时，会自动用硬件编码，延迟更低。
</details>

<details>
<summary><b>需要联网或注册账号吗？</b></summary>
<br>
投屏不需要外网或账号，画面和声音只在局域网内传输。普通桌面版和 Android 版会在空闲时通过 HTTPS 向 GitHub 检查新版本，不上传投屏内容、投屏码或设备名称；定制版关闭在线更新检查。
</details>

## 系统要求

| | 最低要求 |
|:--|:--|
| Windows | Windows 10 64 位 |
| macOS | macOS 12.3 |
| Linux | glibc 2.35 以上（Ubuntu 22.04、Debian 12 及更新版本），X11 桌面 |
| Android 手机 / 电视 | Android 8.0 及以上 |
| iPhone / iPad | iOS 15 及以上 |
| 工控机 | 见 [安装说明和硬件要求](INSTALL-BOX.md)（最低 J1900 级别赛扬、2 GB 内存、8 GB 存储） |
| 网络 | 同一局域网，或放行端口的相邻网段；推荐有线或 5 GHz Wi-Fi |

## 帮助与隐私

- 联系我们：[info@by-wave.com](mailto:info@by-wave.com)，也可以[提交 Issue](https://github.com/wuha-like-sleep/flashcast-download/issues)
- [隐私政策](PRIVACY.md)：投屏内容留在局域网，说明本地设置与版本检查的处理方式

---

<p align="center">
  <img src="assets/logo.svg" width="32"><br>
  <sub>闪投 FlashCast · 可免费下载使用 · 第三方组件许可见安装包内的 <code>THIRD_PARTY_NOTICES.md</code></sub>
</p>
