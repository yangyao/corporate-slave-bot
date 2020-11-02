(async () => {
  const dotenv = require('dotenv');
  dotenv.config();
  const { Telegram } = require('telegraf');
  const tg = new Telegram(process.env.BOT_TOKEN);

  const messges = [
    '只要我够努力，老板很快就能过上他想要的生活！该起床奋斗了！早安，打工人！',
    '天气变冷不像夏天的砖那么烫手了，就是总下雨滑不溜丢的。加油，打工人！',
    '靠别人是公主，靠你叽哇是日本人，靠北啦是台湾人，靠恁娘是河南人，靠自己是光荣的打工人。早安，打工人！',
    '不打工没钱，打工也没钱，只不过打工一时饿不死而已，不打工很快就饿死。早安，打工人！',
    '过安检时检测仪一直响，安检的姐姐让我把所有的东西，都掏出来检查过了还是一直响，然后她问我干什么的，我说我打工的，她说好家伙，难怪检测出了钢铁般的意志！早安，打工人！',
    '奶茶好喝吗？好喝就对了！奶茶是奖励给打工人心灵慰籍的一剂良药！早安，打工人！',
    '我要悄悄打工，然后惊艳所有人！早安，打工人！',
    '累吗？累就对了，舒服是留给有钱人的。早安，打工人！',
    '不干活，就没饭吃。早安，打工人！',
    '认认真真上班，这根本不叫赚钱，这是劳动换取报酬，只有偷懒，在上班的时候划水摸鱼，你才从你老板那赚到了钱。早安，打工人！',
    '我带上了头盔，就无法吻你；摘下了头盔，被交警罚款50。早安！打工人！',
    '进厂苦吗？苦。但是我不能哭，因为怕眼泪掉进电子板里烧坏了还要我赔，早安！打工人',
    '16岁的我心情不好可以翘课，20岁的我再难过也得五点起床当保安。早安，打工人。',
    '你好像只会说一句话，我看了一下聊天记录，我们的聊天记录里，无论我说什么，你都只回一句：早安，打工人！',
    '打工可能会少活十年但不打工你一天也活不下去。早上好，打工人！',
    '不是工作需要我，而是我需要工作，我打工，我快乐！早安，打工人！',
    '打工不仅能致富没还能交友娶媳妇！早安，打工人！',
    '大鱼大肉山珍海味是留给有钱人的。早安，打工人！',
  ];

  const messge = messges[Math.floor(Math.random() * messges.length)];
  await tg.sendMessage(process.env.GROUP_ID, messge);
})();
