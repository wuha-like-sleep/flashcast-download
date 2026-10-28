# 闪投 FlashCast

局域网低延迟投屏。电脑、手机投到电视或另一台电脑，1080P 60 帧，不需要服务器，也不需要外网。

## 下载

到 [Releases](../../releases/latest) 页面下载对应系统的安装包：

| 系统 | 文件 | 说明 |
|---|---|---|
| Windows 10/11（64 位） | `FlashCast-*-windows-x64.zip` | 解压即可使用 |
| macOS 12.3 及以上（Apple 芯片） | `FlashCast-*-macos-arm64.dmg` | 拖进"应用程序" |
| macOS 12.3 及以上（Intel 芯片） | `FlashCast-*-macos-x86_64.dmg` | 拖进"应用程序" |
| Ubuntu / Debian | `flashcast_*_amd64.deb` | `sudo apt install ./flashcast_*.deb` |
| 其他 Linux | `flashcast-*-linux-amd64.tar.gz` | 解压即可使用 |

Android、iOS 和 Android TV 版本正在开发中。

## 怎么用

**接收端**（显示画面的那台设备）

打开 FlashCast 接收端，屏幕上会显示设备名和 6 位**投屏码**。

**发送端**（要投出去的那台电脑）

运行 `flashcast-send`，从列表里选择设备，或者直接输入投屏码：

```
flashcast-send --code 482913
```

两台设备只需要在同一个局域网（同一个 Wi-Fi 或同一台路由器）里。

## 会议室里有多块屏幕？

每块屏幕显示的投屏码都不一样，输入哪块屏幕的投屏码，就投到哪块，多台电脑可以同时各投各的、互不干扰。屏幕正在被使用时，别人再投会收到"正在使用中"的提示。

## 常见问题

**macOS 提示"无法验证开发者"**
右键点击 FlashCast → 打开 → 再点一次"打开"。

**macOS 投屏是黑屏**
系统设置 → 隐私与安全性 → 屏幕录制，允许 FlashCast（从终端运行时，要允许"终端"），然后重新打开。

**找不到接收端**
- 确认两台设备连的是同一个网络。
- Windows 第一次运行时如果防火墙询问，请允许"专用网络"访问。
- 有些公共 Wi-Fi 开启了"客户端隔离"，设备之间无法直接通信，换个网络试试。

**延迟高或卡顿**
尽量让接收端走有线网络，或者使用 5GHz Wi-Fi。

---

FlashCast 为闭源软件。安装包内附带的第三方组件及其许可证见安装包中的 `THIRD_PARTY_NOTICES.md` 和 `licenses` 目录。
