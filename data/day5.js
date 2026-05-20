const DAY5 = {
  day: 5,
  date: '5/28',
  wd: '週四',
  cities: ['新宿', '原宿', '澀谷', '赤羽橋', '六本木'],
  hotel: 'Ueno Touganeya Hotel / 上野',
  highlight: '東京經典時尚大縱走！原宿貓街散步 ➡️ 澀谷漢堡排 ➡️ 下午黃金光線拍鐵塔 🗼 ➡️ 權八居酒屋',
  items: [

    {
      id: '5-1',
      time: '8:30',
      icon: '🌆',
      title: '出門啦小朋友！',
      area: '上野',
      desc: '・今天行程相當精彩，記得穿上最神、最舒服的走路鞋！',
    },

    {
      id: '5-2',
      time: '8:45',
      icon: '🚃',
      title: '上野 → 新宿',
      area: '上野',
      trs: '🚃 JR山手線 (內回) [30min]',
      desc:
        "★ 預計搭乘 08:45 班次 (預計 09:15 抵達新宿站)\n" +
        "・前3班備案：08:30、08:35、08:40\n" +
        "・後3班備案：08:50、08:55、09:00",
      mapUrl: 'https://maps.google.com/?cid=12097640293349809904&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-3',
      time: '9:15',
      icon: '☕',
      title: 'coffee swamp',
      hours: '07:00-10:45 / 12:15-16:00',
      area: '新宿',
      trs: '🚶 步行 [5min]',

      desc: '👾 Bruce 在日咖啡巡禮\n'+
            '・一早先來杯香醇咖啡，開啟悠閒的東京早晨。',
      mapUrl: 'https://maps.google.com/?cid=12097640293349809904&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-4',
      time: '10:15',
      icon: '🚃',
      title: '新宿 → 原宿',
      area: '新宿',
      trs: '🚃 JR山手線 (內回) [5min]',
      desc:
        "★ 預計搭乘 10:15 班次 (預計 10:20 抵達原宿站)\n" +
        "・前3班備案：10:00、10:05、10:10\n" +
        "・後3班備案：10:20、10:25、10:30",
    },

    {
      id: '5-5',
      time: '10:20',
      icon: '🛍️',
      title: '原宿、表參道踏踏',
      area: '原宿',
      trs: '🚶 步行',
      desc:
        "・預計停留 1.5hr。早上店家剛開人最少，最適合空手輕鬆逛！\n\n" +
        "🛍️ 【原宿/表參道逛街備忘】：\n" +
        "・竹下通 / Kiddy Land (買熱門玩具)\n" +
        "・3 Coins (高質感百元店)\n" +
        "・Niko and... (日系服飾生活雜貨)\n" +
        "・retaW (極致香氛) / shiro香水 (質感香氛)",
    },

    {
      id: '5-6',
      time: '11:50',
      icon: '🚶',
      title: '潮流貓街散步 ➔ 澀谷',
      area: '原宿',
      trs: '🚶 沿裏原宿貓街散步 [20min]',
      desc:
        "・💡 【最順動線】順著貓街一路向南散步到澀谷，此時手上東西最少，走起來最輕鬆！\n" +
        "🛍️ 【貓街逛街備忘】：\n" +
        "・Stussy (經典美式街頭潮流店)",
    },

    {
      id: '5-7',
      time: '12:10',
      icon: '🍱',
      title: '午餐：極味屋 澀谷PARCO B1',
      area: '澀谷',
      trs: '🚶 步行 [5min]',
      desc: '・超人氣自助鐵板漢堡排！自己決定熟度，鮮嫩多汁！吃飽後順便逛時尚潮流指標百貨【澀谷 PARCO】。',
      mapUrl: 'https://maps.google.com/?cid=5819734270803457688&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-8',
      time: '13:40',
      icon: '🦦',
      title: '若林之家 WAKABAYASHI カワウソ',
      area: '澀谷',
      trs: '🚶 步行 [5min]',
      desc: '・親自探訪超療癒的水獺與小動物，與牠們近距離互動，超級治癒！',
      mapUrl: 'https://maps.google.com/?cid=14289640301639458973&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-9',
      time: '14:25',
      icon: '🛍️',
      title: '澀谷踏踏 / 十字路口',
      area: '澀谷',
      trs: '🚶 步行',
      desc: '・朝聖繁忙的澀谷十字路口\n'+
      '・Supreme\n'+
            '・澀谷Loft\n'+
            '・Beams',
    },

    {
      id: '5-10',
      time: '15:20',
      icon: '🚇',
      title: '澀谷 → 赤羽橋',
      area: '澀谷',
      trs: '🚇 東京Metro半藏門線 ➔ 青山一丁目轉乘 🚇 都營大江戶線 [16min]',
      desc:
        "★ 預計搭乘 15:20 班次 (預計 15:36 抵達赤羽橋站)\n" +
        "・前3班備案：15:05、15:10、15:15\n" +
        "・後3班備案：15:25、15:30、15:35",
    },

    {
      id: '5-11',
      time: '15:40',
      icon: '📸',
      title: '拍拍白天東京鐵塔 (斜射黃金光)',
      area: '赤羽橋',
      trs: '🚶 出站即達拍攝點',
      desc: '・💡 【最佳拍照時間】下午溫柔的陽光灑在紅色鐵塔上，能拍出層次最棒、最飽和的白天鐵塔與周邊街景！\n' +
        "📷 推薦拍攝點\n" +
        "・Don Quijote Roppongi\n" +
        "・Tower Front Kamiyacho\n" +
        "・Prince Shiba Park",
      mapUrl: 'https://maps.google.com/?cid=12484555743163845786&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-12',
      time: '16:30',
      icon: '🚇',
      title: '赤羽橋 → 六本木',
      area: '赤羽橋',
      trs: '🚇 都營大江戶線 [3min]',
      desc:
        "★ 預計搭乘 16:30 班次，一站直達六本木站。\n" +
        "・前3班備案：16:15、16:20、16:25\n" +
        "・後3班備案：16:35、16:40、16:45",
    },

    {
      id: '5-13',
      time: '17:00',
      icon: '🗼',
      title: '六本木新城展望台 52F',
      area: '六本木',
      trs: '🚶 出站步行 [5min] 抵達大樓',
      desc: '・時間 17:00-19:00。💡登頂觀賞夕陽西下到華燈初上、亮起金黃色光芒的東京鐵塔無敵夜景。兩種晴空塔與鐵塔美景一次滿足！',
      reservation: {
        id: 'Klook 已購票',
        time: '',
        menu: '',
      },
      isTicket: true,
      mapUrl: 'https://maps.google.com/?cid=7384412932969796183&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-14',
      time: '19:15',
      icon: '🚶',
      title: '六本木 → 西麻布 (權八居酒屋)',
      area: '六本木',
      trs: '🚶 順坡度散步下山 [10min]',
      desc: '・從六本木之丘散步下來就是西麻布街區，吃晚餐的動線順暢無比。',
    },

    {
      id: '5-15',
      time: '19:30',
      icon: '🏮',
      title: '晚餐：權八 西麻布 Gonpachi',
      area: '西麻布',
      desc: '・電影《追殺比爾》經典拍攝場景！在充滿大正浪漫與江戶風情的木造空間裡，享受精緻串燒與日式料理。',
      reservation: {
        id: '已訂位',
        time: '19:45',
        menu: '',
        tcUrl: 'https://www.google.com/maps/reserve/bookings',
      },
      isReserved: true,
      mapUrl: 'https://maps.google.com/?cid=1337614840498094983&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ',
    },

    {
      id: '5-16',
      time: '21:30',
      icon: '🚇',
      title: '西麻布 (六本木站) → 上野 (回飯店)',
      area: '六本木',
      trs: '🚇 東京Metro日比谷線 [25min] (自六本木站搭乘)',
      desc:
        "★ 預計 21:30 從六本木站搭乘日比谷線一車直達上野站。\n" +
        "・前3班備案：21:15、21:20、21:25\n" +
        "・後3班備案：21:35、21:40、21:45",
    },

    {
      id: '5-17',
      time: '',
      icon: '🏨',
      title: '回家睡覺！',
      area: '上野',
    },

  ],
};
