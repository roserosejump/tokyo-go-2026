const DAY2 = {
  day: 2,
  date: '5/25',
  wd: '週一',
  cities: ['熱海', '箱根'],
  hotel: 'lake side inn mirahakone / 箱根',
  highlight: '海盜船大涌谷黑雞蛋＋慶生壽喜燒 🚢',
  items: [

    {
      id: '2-1',
      time: '8:30',
      icon: '🍳',
      title: '吃早餐：飯店早餐',
      area: '熱海',
    },

    {
      id: '2-2',
      time: '9:00',
      icon: '🏨',
      title: '退房！出門啦小朋友！',
      area: '熱海',
      desc:
        "・退房期限 11:00\n" +
        "・再見熱海！前往箱根 🚌",
    },

    {
      id: '2-3',
      time: '',
      icon: '🧳',
      title: '行李寄放：熱海車站置物櫃',
      area: '熱海',
      trs: '🚶 步行',
    },

    {
      id: '2-4',
      time: '9:30',
      icon: '⛩️',
      title: '來宮神社 Kinomiya',
      area: '熱海',
      trs:
        "方案A：🚌 巴士「西山/梅園」方向\n" +
        "方案B：🚇 JR伊東線-來宮站[3min] 步行5min",
      desc:
        "・繞大楠樹走一圈、森林浴\n" +
        "・買御守",
      mapUrl: 'https://maps.app.goo.gl/ykDeUwFn5zi1ALXV8',
    },

    {
      id: '2-5',
      time: '11:30',
      icon: '🧳',
      title: '回熱海車站 領行李',
      area: '熱海',
      trs: '🚌 巴士 或 🚇 JR伊東線',
      desc: '⚠️ 11:30前回熱海車站準備',
      mapUrl: 'https://maps.app.goo.gl/ZJ2tUG4cxd762cB6A',
    },

    {
      id: '2-6',
      time: '11:48',
      icon: '🚌',
      title: '熱海站 → 元箱根港',
      area: '熱海',
      trs: '🚌 伊豆箱根巴士 2號站牌 [60min]',
      desc:
        "・車身藍紅白三色橫線的伊豆箱根バス\n" +
        "・用Suica上下車各刷一次\n" +
        "・靠右窗可看富士山與箱根山景\n" +
        "車資：約1,200日圓\n\n" +
        "💴 元箱根港購買【箱根周遊券 2日券】",
    },

    {
      id: '2-7',
      time: '12:50',
      icon: '🧳',
      title: '行李寄放：元箱根港巴士總站',
      area: '箱根',
      trs: '🚶 步行 [2min]',
      mapUrl: 'https://maps.app.goo.gl/titaRghUcDG3p9Vz6',
    },

    {
      id: '2-8',
      time: '13:00',
      icon: '🎨',
      title: '成川美術館 Narukawa',
      area: '箱根',
      trs: '🚶 步行 [3min]',
      desc:
        "・展望咖啡廳對著「畫框富士山、蘆之湖」發呆\n" +
        "・13:00–14:00 最佳拍攝光線\n" +
        "・💰 門票：約1,500日圓（箱根周遊券折200日圓）",
      mapUrl: 'https://maps.app.goo.gl/Cc9PiRXcutDio6x26',
    },

    {
      id: '2-9',
      time: '14:15–14:50',
      icon: '🚢',
      title: '搭乘海盜船！元箱根港 → 桃源台',
      area: '箱根',
      trs: '🚢 箱根海盜船 [30-40min]',
      desc:
        "・航行蘆之湖，尋找富士山蹤影\n" +
        "⚠️ 海盜船40分鐘一班，錯過麻煩",
      mapUrl: 'https://maps.app.goo.gl/AjizAjpUtABu1F9o7',
    },

    {
      id: '2-10',
      time: '15:00',
      icon: '🚠',
      title: '桃源台 → 大涌谷',
      area: '箱根',
      trs: '🚠 箱根空中纜車 [20min]',
      desc:
        "・高空絕景：俯瞰硫磺噴煙\n" +
        "🍘 必吃黑雞蛋（延壽7年）！5顆500日圓\n" +
        "⚠️ 在大湧谷停留40分鐘內最保險",
    },

    {
      id: '2-11',
      time: '15:50',
      icon: '🚠',
      title: '大涌谷 → 早雲山 → 強羅',
      area: '箱根',
      trs: '🚠 空中纜車[10min] → 🚃 斜面電車[10min]',
      desc: '・極陡坡度體驗，班次密集',
    },

    {
      id: '2-12',
      time: '16:45',
      icon: '🚃',
      title: '強羅 → 箱根湯本',
      area: '箱根',
      trs: '🚃 箱根登山鐵道 [40min]（16:20/16:40班次）',
      desc: '【重點】體驗 Switchback 之字型爬坡',
    },

    {
      id: '2-13',
      time: '17:20',
      icon: '🛍️',
      title: '箱根湯本車站晃晃',
      area: '箱根',
      desc: '🎁 伴手禮：箱根饅頭',
    },

    {
      id: '2-14',
      time: '17:40',
      icon: '🍱',
      title: '晚餐：牛鍋右近 Gyunabe Ukon',
      area: '箱根',
      trs: '🚕 計程車 [5-10min]',
      desc:
        "・【慶生晚餐】川床（河畔平台）＋ 牛肉壽喜燒\n" +
        "・18:45 才日落\n" +
        "💰 計程車：約1,000–1,200日圓",
      reservation: {
        id: 'RV2WCU',
        time: '17:30 川戶座',
        menu: '特別課程',
        tcUrl: 'https://www.tablecheck.com/zh-TW/reservations/RV2WCU?utm_source=tablecheck_portal',
      },
      isReserved: true,
    },

    {
      id: '2-15',
      time: '',
      icon: '🏨',
      title: '回家睡覺！',
      area: '箱根',
      tasks: [
        "收拾行李！明天不住這！",
      ],
    },

  ],
};
