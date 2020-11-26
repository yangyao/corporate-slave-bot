# 早安打工人 Telegram bot

## bot 的配置

- 登陆 TG, 找到 bot father 创建一个 bot 得到 Token
- 将 Bot 添加到你的 Group 中
- 访问这个 URL(注意替换URL中的Token) 得到你的 Group ID (chat_id) https://api.telegram.org/bot'YourBotToken'/getUpdates

## 脚本的配置

- Fork 代码到你的 github 账号
- 启动 Github Actions
- 找到项目的 Settings => Secrets 添加 BOT_TOKEN=YourBotToken, GROUP_ID=YourChatId

## 修改定时任务的时间

- 文件位于 .github/bot.yml 修改 cron 即可，默认是 UTC时间，注意进行转换
