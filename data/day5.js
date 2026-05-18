const DAY5 = {
  day: 5,
  date: '5/28',
  wd: '週四',
  cities: ['新宿', '澀谷', '原宿', '六本木'],
  hotel: 'Ueno Touganeya Hotel',
  highlight: '澀谷原宿掃街＋六本木展望台夜景 🗼',
  items: [

    {
      id: '5-1',
      time: '8:30',
      icon: '🌆',
      title: '出門！',
      area: '上野',
    },

    {
      id: '5-2',
      time: '8:45–9:15',
      icon: '🚇',
      title: '上野 → 新宿',
      area: '上野',
      trs: '🚇 JR山手線 [30min]',
    },

    {
      id: '5-3',
      time: '9:15–10:00',
      icon: '☕',
      title: 'coffee swamp',
      area: '新宿',
      trs: '🚶 步行',
      desc:
        "👾 Bruce's 在日咖啡巡禮\n" +
        "營業 07:00–10:45 / 12:15–16:00",
      mapUrl: 'https://maps.app.goo.gl/h4gFVtinwSNdRwRL6',
    },

    {
      id: '5-4',
      time: '10:30',
      icon: '🛍️',
      title: '澀谷踏踏',
      area: '澀谷',
      trs: '🚇 JR山手線 [5min]',
      desc: 'Supreme、澀谷Loft、澀谷十字路口、Beams',
    },

    {
      id: '5-5',
      time: '12:00',
      icon: '🍔',
      title: '🍱 午：極味屋 澀谷PARCO B1',
      area: '澀谷',
      trs: '🚶 步行',
      desc: '漢堡排！',
      mapUrl: 'https://maps.app.goo.gl/5D4fktYzP5V2hVav6',
    },

    {
      id: '5-6',
      time: '13:00',
      icon: '🦦',
      title: '若林之家 WAKABAYASHI カワウソ',
      area: '原宿',
      trs: '🚶 步行',
      desc: '抱抱海獺！',
      mapUrl: 'https://maps.app.goo.gl/Ss4QufRRhinUdTSG9',
    },

    {
      id: '5-7',
      time: '13:15',
      icon: '🚇',
      title: '澀谷 → 明治神宮前（原宿）',
      area: '澀谷',
      trs: '🚶 步行[15min] 或 東京Metro千代田/副都心線[2min]',
    },

    {
      id: '5-8',
      time: '1.5hr',
      icon: '🛍️',
      title: '原宿、表參道踏踏',
      area: '原宿',
      trs: '🚶 步行',
      desc: 'retaW、shiro香水、Stussy、Kiddy Land、3 Coins、Niko And&',
    },

    {
      id: '5-9',
      time: '',
      icon: '🚇',
      title: '表參道 → 赤羽橋',
      area: '表參道',
      trs: '🚇 銀座線/大江戶線 [20min]',
      desc: '東京Metro銀座線 表參道→都營大江戶線 赤羽橋（大門站換乘）',
    },

    {
      id: '5-10',
      time: '16:10',
      icon: '🗼',
      title: '散步＋拍拍東京鐵塔',
      area: '赤羽橋',
      trs: '🚶 步行 [40min]',
      desc:
        "📷 推薦拍攝點\n" +
        "・Don Quijote Roppongi\n" +
        "・Tower Front Kamiyacho\n" +
        "・Prince Shiba Park",
    },

    {
      id: '5-11',
      time: '17:00–19:00',
      icon: '🌆',
      title: '六本木新城展望台 52F',
      area: '六本木',
      trs: '🚶 步行 [10min]',
      desc: '停留約2小時',
      mapUrl: 'https://maps.app.goo.gl/q3kwdfAcDEV8ztfg9',
      reservation: {
        id: 'Klook 已購票',
        time: '',
        menu: '',
      },
      isTicket: true,
    },

    {
      id: '5-12',
      time: '19:45–21:30',
      icon: '🍶',
      title: '🍱 晚：權八 西麻布 Gonpachi',
      area: '西麻布',
      trs: '🚶 步行 [10min]',
      mapUrl: 'https://maps.app.goo.gl/mUku371d3HRSrWUZ7',
      reservation: {
        id: '已訂位',
        time: '19:45',
        menu: '',
      },
      isReserved: true,
    },

    {
      id: '5-13',
      time: '',
      icon: '🚇',
      title: '西麻布 → 上野',
      area: '六本木',
      trs: '🚇 都營大江戶線 六本木→上野御徒町 [20min]',
    },

  ],
};
