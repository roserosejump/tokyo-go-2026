const DAY1 = {
  day: 1,
  date: '5/24',
  wd: '週日',
  cities: ['桃園', '東京', '熱海'],
  hotel: 'ロマンス座カド / 熱海',
  highlight: '日本我來了！熱海海上花火大會 🎆 今天有人生日！',
  items: [

    {
      id: '1-1',
      time: '06:35–11:00',
      icon: '✈️',
      title: 'TPE → NRT｜虎航 IT200',
      area: '桃園',
      trs: '台灣虎航 IT200',
      desc:
        "T2機場B1 JR售票機購買成田特快\n\n" +
        "前後班次\n" +
        "[N'EX 22] 12:23~13:14\n" +
        "[N'EX 24] 12:48~13:44\n" +
        "[N'EX 26] 13:17~14:14",
      tasks: [
        "購買/劃位 N'EX（機場→東京）",
        "購買/劃位 新幹線（東京→熱海）",
        '領取 富士回遊號預訂票（5/27）',
      ],
    },

    {
      id: '1-2',
      time: '12:20–13:20',
      icon: '🚇',
      title: 'NRT → 東京車站',
      area: '東京',
      trs: '成田特快 NEX [1hr]',
      desc: '🍱 午：鐵路便當',
    },

    {
      id: '1-3',
      time: '13:20–14:10',
      icon: '🚇',
      title: '東京車站 → 熱海站',
      area: '東京',
      trs: '東海道新幹線 Kodama [50min]',
      desc:
        "N'EX月台→14~19號月台（走路15min）\n\n" +
        "前後班次\n" +
        "[Kodama 731] 13:33~14:12\n" +
        "[Kodama 735] 14:33~15:12",
    },

    {
      id: '1-4',
      time: '14:30',
      icon: '🧳',
      title: 'Check In ＋ 寄放行李',
      area: '熱海',
      trs: '🚶 步行',
      desc:
        "入住開放 15:00–21:00\n" +
        "💰 住宿稅：200日圓現金/人",
      mapUrl: 'https://maps.app.goo.gl/XmnREjQLdJLxR7ucA',
    },

    {
      id: '1-5',
      time: '',
      icon: '🏖️',
      title: '海邊佔位',
      area: '熱海',
      trs: '🚶 步行',
      desc:
        "🚩 椰子樹下第一排\n" +
        "附近藥妝店可買簡易野餐墊",
      mapUrl: 'https://maps.app.goo.gl/fbFRAGoYsgzJMBg19',
    },

    {
      id: '1-6',
      time: '15:30',
      icon: '🍢',
      title: '商店街巡禮：平和通、仲見世通',
      area: '熱海',
      trs: '🚶 步行',
      mustEat: [
        'Isoage Maruten Atami [09-15:30] 海鮮串・章魚天婦羅',
        'Atami Butter An [10-18] 紅豆奶油麵包',
        'いいらまんじゅう 阿部商店 [10-17:30] 溫泉饅頭',
        'Atami Onsen Kameyama Shachu [10-17] 溫泉饅頭串',
      ],
      mapUrl: 'https://maps.app.goo.gl/hQDeNxnt6A92ry868',
    },

    {
      id: '1-7',
      time: '18:00',
      icon: '🍣',
      title: '🍱 晚：海鮮丼専門 五鉄熱海店',
      area: '熱海',
      trs: '🚶 步行',
      desc:
        "附近\n" +
        "熱海さとり本店 [10-18] 巨大抹茶可麗餅\n" +
        "Atami Pudding Cafe 2nd [10-18] 布丁",
      mapUrl: 'https://maps.app.goo.gl/UEZ5gf4ZpWd1zzhBA',
    },

    {
      id: '1-8',
      time: '20:20–20:40',
      icon: '🎆',
      title: '熱海海上花火大會 @熱海灣',
      area: '熱海',
      trs: '🚶 步行',
      desc: '壓軸：「大空中尼加拉瀑布」煙火',
      mapUrl: 'https://maps.app.goo.gl/LcxuHRhbQh6s2QgE8',
    },

    {
      id: '1-9',
      time: '宵夜',
      icon: '🏪',
      title: '宵夜：超商或居酒屋',
      area: '熱海',
      desc:
        "Sakaba Atami [18-02] 居酒屋\n" +
        "Atami Stand [18-00] 居酒屋\n" +
        "MaxValu Atami [07-23:30] 超市",
    },

  ],
};
