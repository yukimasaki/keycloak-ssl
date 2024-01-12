import { PrismaClient } from "@prisma/client"
import { CreateBookDto } from "src/books/dto/create-book.dto";

const prisma = new PrismaClient();

export const createBooks = async () => {
  const createBookDto: CreateBookDto[] = [
    {
      "title": "ファラデーの伝 電気学の泰斗",
      "author": "愛知敬一",
    },
    {
      "title": "一片の石",
      "author": "会津八一",
    },
    {
      "title": "菊の根分をしながら",
      "author": "会津八一",
    },
    {
      "title": "拓本の話",
      "author": "会津八一",
    },
    {
      "title": "隅田の春",
      "author": "饗庭篁村",
    },
    {
      "title": "良夜",
      "author": "饗庭篁村",
    },
    {
      "title": "夢の如く出現した彼",
      "author": "青柳喜兵衛",
    },
    {
      "title": "愛読書の印象",
      "author": "芥川竜之介",
    },
    {
      "title": "秋",
      "author": "芥川竜之介",
    },
    {
      "title": "芥川竜之介歌集",
      "author": "芥川竜之介",
    },
    {
      "title": "アグニの神",
      "author": "芥川竜之介",
    },
    {
      "title": "悪魔",
      "author": "芥川竜之介",
    },
    {
      "title": "浅草公園",
      "author": "芥川竜之介",
    },
    {
      "title": "兄貴のような心持",
      "author": "芥川竜之介",
    },
    {
      "title": "あの頃の自分の事",
      "author": "芥川竜之介",
    },
    {
      "title": "あばばばば",
      "author": "芥川竜之介",
    },
    {
      "title": "鴉片",
      "author": "芥川竜之介",
    },
    {
      "title": "或阿呆の一生",
      "author": "芥川竜之介",
    },
    {
      "title": "或敵打の話",
      "author": "芥川竜之介",
    },
    {
      "title": "或旧友へ送る手記",
      "author": "芥川竜之介",
    },
    {
      "title": "或社会主義者",
      "author": "芥川竜之介",
    },
    {
      "title": "或日の大石内蔵助",
      "author": "芥川竜之介",
    },
    {
      "title": "或恋愛小説",
      "author": "芥川竜之介",
    },
    {
      "title": "闇中問答",
      "author": "芥川竜之介",
    },
    {
      "title": "飯田蛇笏",
      "author": "芥川竜之介",
    },
    {
      "title": "遺書",
      "author": "芥川竜之介",
    },
    {
      "title": "一夕話",
      "author": "芥川竜之介",
    },
    {
      "title": "芋粥",
      "author": "芥川竜之介",
    },
    {
      "title": "魚河岸",
      "author": "芥川竜之介",
    },
    {
      "title": "かちかち山",
      "author": "芥川竜之介",
    },
    {
      "title": "河童",
      "author": "芥川竜之介",
    },
    {
      "title": "南瓜",
      "author": "芥川竜之介",
    },
    {
      "title": "孔雀",
      "author": "芥川竜之介",
    },
    {
      "title": "蜘蛛の糸",
      "author": "芥川竜之介",
    },
    {
      "title": "結婚難並びに恋愛難",
      "author": "芥川竜之介",
    },
    {
      "title": "西郷隆盛",
      "author": "芥川竜之介",
    },
    {
      "title": "鷺と鴛鴦",
      "author": "芥川竜之介",
    },
    {
      "title": "地獄変",
      "author": "芥川竜之介",
    },
    {
      "title": "侏儒の言葉",
      "author": "芥川竜之介",
    },
    {
      "title": "出帆",
      "author": "芥川竜之介",
    },
    {
      "title": "早春",
      "author": "芥川竜之介",
    },
    {
      "title": "杜子春",
      "author": "芥川竜之介",
    },
    {
      "title": "トロッコ",
      "author": "芥川竜之介",
    },
    {
      "title": "歯車",
      "author": "芥川竜之介",
    },
    {
      "title": "鼻",
      "author": "芥川竜之介",
    },
    {
      "title": "蜜柑",
      "author": "芥川竜之介",
    },
    {
      "title": "桃太郎",
      "author": "芥川竜之介",
    },
    {
      "title": "藪の中",
      "author": "芥川竜之介",
    },
    {
      "title": "羅生門",
      "author": "芥川竜之介",
    },
    {
      "title": "羅生門の後に",
      "author": "芥川竜之介",
    },
    {
      "title": "臘梅",
      "author": "芥川竜之介",
    },
    {
      "title": "信濃国 明治三十二年",
      "author": "浅井洌",
    },
    {
      "title": "帰来",
      "author": "阿部次郎",
    },
    {
      "title": "美術曲芸しん粉細工",
      "author": "阿部徳蔵",
    },
    {
      "title": "或る女 （前編）",
      "author": "有島武郎",
    },
    {
      "title": "或る女 （後編）",
      "author": "有島武郎",
    },
    {
      "title": "生まれいずる悩み",
      "author": "有島武郎",
    },
    {
      "title": "運命と人",
      "author": "有島武郎",
    },
    {
      "title": "描かれた花",
      "author": "有島武郎",
    },
    {
      "title": "惜みなく愛は奪う",
      "author": "有島武郎",
    },
    {
      "title": "溺れかけた兄妹",
      "author": "有島武郎",
    },
    {
      "title": "親子",
      "author": "有島武郎",
    },
    {
      "title": "カインの末裔",
      "author": "有島武郎",
    },
    {
      "title": "狩太農場の解放",
      "author": "有島武郎",
    },
    {
      "title": "かんかん虫",
      "author": "有島武郎",
    },
    {
      "title": "潮霧",
      "author": "有島武郎",
    },
    {
      "title": "クララの出家",
      "author": "有島武郎",
    },
    {
      "title": "幻想",
      "author": "有島武郎",
    },
    {
      "title": "碁石を呑んだ八っちゃん",
      "author": "有島武郎",
    },
    {
      "title": "自然と人",
      "author": "有島武郎",
    },
    {
      "title": "星座",
      "author": "有島武郎",
    },
    {
      "title": "想片",
      "author": "有島武郎",
    },
    {
      "title": "小さき者へ",
      "author": "有島武郎",
    },
    {
      "title": "卑怯者",
      "author": "有島武郎",
    },
    {
      "title": "一房の葡萄",
      "author": "有島武郎",
    },
    {
      "title": "二つの道",
      "author": "有島武郎",
    },
    {
      "title": "片信",
      "author": "有島武郎",
    },
    {
      "title": "僕の帽子のお話",
      "author": "有島武郎",
    },
    {
      "title": "私の父と母",
      "author": "有島武郎",
    },
    {
      "title": "江戸か東京か",
      "author": "淡島寒月",
    },
    {
      "title": "江戸の玩具",
      "author": "淡島寒月",
    },
    {
      "title": "活動写真",
      "author": "淡島寒月",
    },
    {
      "title": "銀座は昔からハイカラな所",
      "author": "淡島寒月",
    },
    {
      "title": "寺内の奇人団",
      "author": "淡島寒月",
    },
    {
      "title": "諸国の玩具 浅草奥山の草分",
      "author": "淡島寒月",
    },
    {
      "title": "亡び行く江戸趣味",
      "author": "淡島寒月",
    },
    {
      "title": "明治十年前後",
      "author": "淡島寒月",
    },
    {
      "title": "「味の素」発明の動機",
      "author": "池田菊苗",
    },
    {
      "title": "「ああしんど」",
      "author": "池田蕉園",
    },
    {
      "title": "夜釣の怪",
      "author": "池田輝方",
    },
    {
      "title": "橋",
      "author": "池谷信三郎",
    },
    {
      "title": "奥間巡査",
      "author": "池宮城積宝",
    },
    {
      "title": "元日の釣",
      "author": "石井研堂",
    },
    {
      "title": "研堂釣規",
      "author": "石井研堂",
    },
    {
      "title": "釣好隠居の懺悔",
      "author": "石井研堂",
    },
    {
      "title": "東京市騒擾中の釣",
      "author": "石井研堂",
    },
    {
      "title": "大切な雰囲気",
      "author": "石井柏亭",
    },
    {
      "title": "可愛い山",
      "author": "石川欣一",
    },
    {
      "title": "社会的分業論",
      "author": "石川三四郎",
    },
    {
      "title": "土民生活",
      "author": "石川三四郎",
    },
    {
      "title": "浪",
      "author": "石川三四郎",
    },
    {
      "title": "馬鈴薯からトマト迄",
      "author": "石川三四郎",
    },
    {
      "title": "足跡",
      "author": "石川啄木",
    },
    {
      "title": "郁雨に与ふ",
      "author": "石川啄木",
    },
    {
      "title": "一握の砂",
      "author": "石川啄木",
    },
    {
      "title": "一利己主義者と友人との対話",
      "author": "石川啄木",
    },
    {
      "title": "火星の芝居",
      "author": "石川啄木",
    },
    {
      "title": "悲しき玩具",
      "author": "石川啄木",
    },
    {
      "title": "硝子窓",
      "author": "石川啄木",
    },
    {
      "title": "雲は天才である",
      "author": "石川啄木",
    },
    {
      "title": "刑余の叔父",
      "author": "石川啄木",
    },
    {
      "title": "氷屋の旗",
      "author": "石川啄木",
    },
    {
      "title": "心の姿の研究",
      "author": "石川啄木",
    },
    {
      "title": "札幌",
      "author": "石川啄木",
    },
    {
      "title": "時代閉塞の現状 強権、純粋自然主義の最後および明日の考察",
      "author": "石川啄木",
    },
    {
      "title": "雪中行 小樽より釧路まで",
      "author": "石川啄木",
    },
    {
      "title": "第十八号室より",
      "author": "石川啄木",
    },
    {
      "title": "田園の思慕",
      "author": "石川啄木",
    },
    {
      "title": "鳥影",
      "author": "石川啄木",
    },
    {
      "title": "葉書",
      "author": "石川啄木",
    },
    {
      "title": "初めて見たる小樽",
      "author": "石川啄木",
    },
    {
      "title": "病院の窓",
      "author": "石川啄木",
    },
    {
      "title": "漂泊",
      "author": "石川啄木",
    },
    {
      "title": "天鵞絨",
      "author": "石川啄木",
    },
    {
      "title": "二筋の血",
      "author": "石川啄木",
    },
    {
      "title": "道",
      "author": "石川啄木",
    },
    {
      "title": "弓町より",
      "author": "石川啄木",
    },
    {
      "title": "呼子と口笛",
      "author": "石川啄木",
    },
    {
      "title": "我が最近の興味",
      "author": "石川啄木",
    },
    {
      "title": "我等の一団と彼",
      "author": "石川啄木",
    },
    {
      "title": "瘠我慢の説 序",
      "author": "石河幹明",
    },
    {
      "title": "瘠我慢の説 瘠我慢の説に対する評論について",
      "author": "石河幹明",
    },
    {
      "title": "猫と色の嗜好",
      "author": "石田孫太郎",
    },
    {
      "title": "罪過論",
      "author": "石橋忍月",
    },
    {
      "title": "舞姫",
      "author": "石橋忍月",
    },
    {
      "title": "最終戦争論・戦争史大観",
      "author": "石原莞爾",
    },
    {
      "title": "新日本の進路",
      "author": "石原莞爾",
    },
    {
      "title": "愛と婚姻",
      "author": "泉鏡花",
    },
    {
      "title": "悪獣篇",
      "author": "泉鏡花",
    },
    {
      "title": "紫陽花",
      "author": "泉鏡花",
    },
    {
      "title": "雨ばけ",
      "author": "泉鏡花",
    },
    {
      "title": "伊勢之巻",
      "author": "泉鏡花",
    },
    {
      "title": "一景話題",
      "author": "泉鏡花",
    },
    {
      "title": "印度更紗",
      "author": "泉鏡花",
    },
    {
      "title": "薄紅梅",
      "author": "泉鏡花",
    },
    {
      "title": "歌行灯",
      "author": "泉鏡花",
    },
    {
      "title": "唄立山心中一曲",
      "author": "泉鏡花",
    },
    {
      "title": "海の使者",
      "author": "泉鏡花",
    },
    {
      "title": "瓜の涙",
      "author": "泉鏡花",
    },
    {
      "title": "絵本の春",
      "author": "泉鏡花",
    },
    {
      "title": "縁結び",
      "author": "泉鏡花",
    },
    {
      "title": "お花見雑感",
      "author": "泉鏡花",
    },
    {
      "title": "女客",
      "author": "泉鏡花",
    },
    {
      "title": "婦系図",
      "author": "泉鏡花",
    },
    {
      "title": "海異記",
      "author": "泉鏡花",
    },
    {
      "title": "外科室",
      "author": "泉鏡花",
    },
    {
      "title": "高野聖",
      "author": "泉鏡花",
    },
    {
      "title": "蠅を憎む記",
      "author": "泉鏡花",
    },
    {
      "title": "夜行巡査",
      "author": "泉鏡花",
    },
    {
      "title": "妖魔の辻占",
      "author": "泉鏡花",
    },
    {
      "title": "縷紅新草",
      "author": "泉鏡花",
    },
    {
      "title": "五色温泉スキー日記",
      "author": "板倉勝宣",
    },
    {
      "title": "春の上河内へ",
      "author": "板倉勝宣",
    },
    {
      "title": "春の槍から帰って",
      "author": "板倉勝宣",
    },
    {
      "title": "映画と音楽",
      "author": "伊丹万作",
    },
    {
      "title": "映画と民族性",
      "author": "伊丹万作",
    },
    {
      "title": "演技指導論草案",
      "author": "伊丹万作",
    },
    {
      "title": "顔の美について",
      "author": "伊丹万作",
    },
    {
      "title": "押しかけ女房",
      "author": "伊藤永之介",
    },
    {
      "title": "河口湖",
      "author": "伊藤左千夫",
    },
    {
      "title": "去年",
      "author": "伊藤左千夫",
    },
    {
      "title": "紅黄録",
      "author": "伊藤左千夫",
    },
    {
      "title": "隣の嫁",
      "author": "伊藤左千夫",
    },
    {
      "title": "野菊の墓",
      "author": "伊藤左千夫",
    },
    {
      "title": "春の潮",
      "author": "伊藤左千夫",
    },
    {
      "title": "建築の本義",
      "author": "伊東忠太",
    },
    {
      "title": "日本建築の発達と地震",
      "author": "伊東忠太",
    },
    {
      "title": "ある男の堕落",
      "author": "伊藤野枝",
    },
    {
      "title": "転機",
      "author": "伊藤野枝",
    },
    {
      "title": "米",
      "author": "犬田卯",
    },
    {
      "title": "妖怪研究",
      "author": "井上円了",
    },
    {
      "title": "塩原日記",
      "author": "岩野泡鳴",
    },
    {
      "title": "耽溺",
      "author": "岩野泡鳴",
    },
    {
      "title": "感応",
      "author": "岩村透",
    },
    {
      "title": "こがね丸",
      "author": "巌谷小波",
    },
    {
      "title": "海潮音",
      "author": "上田敏",
    },
    {
      "title": "月",
      "author": "上田敏",
    },
    {
      "title": "京のその頃",
      "author": "上村松園",
    },
    {
      "title": "山の湯の旅 発甫温泉のおもいで",
      "author": "上村松園",
    },
    {
      "title": "犬物語",
      "author": "内田魯庵",
    },
    {
      "title": "後世への最大遺物",
      "author": "内村鑑三",
    },
    {
      "title": "宇宙戦隊",
      "author": "海野十三",
    },
    {
      "title": "海底都市",
      "author": "海野十三",
    },
    {
      "title": "恐竜艇の冒険",
      "author": "海野十三",
    },
    {
      "title": "電気風呂の怪死事件",
      "author": "海野十三",
    },
    {
      "title": "備前天一坊",
      "author": "江見水蔭",
    },
    {
      "title": "気狂い機関車",
      "author": "大阪圭吉",
    },
    {
      "title": "死の快走船",
      "author": "大阪圭吉",
    },
    {
      "title": "デパートの絞刑吏",
      "author": "大阪圭吉",
    },
    {
      "title": "涸沢の岩小屋のある夜のこと",
      "author": "大島亮吉",
    },
    {
      "title": "新しき世界の為めの新しき芸術",
      "author": "大杉栄",
    },
    {
      "title": "藍色の蟇",
      "author": "大手拓次",
    },
    {
      "title": "旅客機事件",
      "author": "大庭武年",
    },
    {
      "title": "秋の筑波山",
      "author": "大町桂月",
    },
    {
      "title": "月の隅田川",
      "author": "大町桂月",
    },
    {
      "title": "障子のある家",
      "author": "尾形亀之助",
    },
    {
      "title": "白い蝶",
      "author": "岡田三郎助",
    },
    {
      "title": "金魚撩乱",
      "author": "岡本かの子",
    },
    {
      "title": "鶴は病みき",
      "author": "岡本かの子",
    },
    {
      "title": "母子叙情",
      "author": "岡本かの子",
    },
    {
      "title": "世界怪談名作集 序／目次",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 お文の魂",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 石灯籠",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 勘平の死",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 湯屋の二階",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 お化け師匠",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 半鐘の怪",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 奥女中",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 帯取りの池",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 春の雪解",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 広重と河獺",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 朝顔屋敷",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 猫騒動",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 弁天娘",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 山祝いの夜",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 鷹のゆくえ",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 津の国屋",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 三河万歳",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 槍突き",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 お照の父",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 向島の寮",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 蝶合戦",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 筆屋の娘",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 鬼娘",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 小女郎狐",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 狐と僧",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 女行者",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 化け銀杏",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 雪達磨",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 熊の死骸",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 あま酒売",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 張子の虎",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 海坊主",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 旅絵師",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 雷獣と蛇",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 半七先生",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 冬の金魚",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 松茸",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 人形使い",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 少年少女の死",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 異人の首",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 一つ目小僧",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 仮面",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 柳原堤の女",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 むらさき鯉",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 三つの声",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 十五夜御用心",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 金の蝋燭",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 ズウフラ怪談",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 大阪屋花鳥",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 正雪の絵馬",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 大森の鶏",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 妖狐伝",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 新カチカチ山",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 唐人飴",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 かむろ蛇",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 河豚太鼓",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 幽霊の観世物",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 菊人形の昔",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 蟹のお角",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 青山の仇討",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 吉良の脇指",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 歩兵の髪切り",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 川越次郎兵衛",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 廻り灯籠",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 夜叉神堂",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 地蔵は踊る",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 薄雲の碁盤",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 二人女房",
      "author": "岡本綺堂",
    },
    {
      "title": "半七捕物帳 白蝶怪",
      "author": "岡本綺堂",
    },
    {
      "title": "一週一夜物語",
      "author": "小栗虫太郎",
    },
    {
      "title": "黒死館殺人事件",
      "author": "小栗虫太郎",
    },
    {
      "title": "方子と末起",
      "author": "小栗虫太郎",
    },
    {
      "title": "金色夜叉",
      "author": "尾崎紅葉",
    },
    {
      "title": "今戸狐",
      "author": "小山内薫",
    },
    {
      "title": "梅龍の話",
      "author": "小山内薫",
    },
    {
      "title": "海島冒険奇譚　海底軍艦",
      "author": "押川春浪",
    },
    {
      "title": "月世界競争探検",
      "author": "押川春浪",
    },
    {
      "title": "南極の怪事",
      "author": "押川春浪",
    },
    {
      "title": "聴雨",
      "author": "織田作之助",
    },
    {
      "title": "夫婦善哉",
      "author": "織田作之助",
    },
    {
      "title": "河童の話",
      "author": "折口信夫",
    },
    {
      "title": "死者の書",
      "author": "折口信夫",
    },
    {
      "title": "椎の若葉",
      "author": "葛西善蔵",
    },
    {
      "title": "浮浪",
      "author": "葛西善蔵",
    },
    {
      "title": "愛撫",
      "author": "梶井基次郎",
    },
    {
      "title": "『亜』の回想",
      "author": "梶井基次郎",
    },
    {
      "title": "桜の樹の下には",
      "author": "梶井基次郎",
    },
    {
      "title": "檸檬",
      "author": "梶井基次郎",
    },
    {
      "title": "あけび",
      "author": "片山広子",
    },
    {
      "title": "或る国のこよみ",
      "author": "片山広子",
    },
    {
      "title": "燈火節",
      "author": "片山広子",
    },
    {
      "title": "大勢順応",
      "author": "勝海舟",
    },
    {
      "title": "旗本移転後の始末",
      "author": "勝海舟",
    },
    {
      "title": "黙々静観",
      "author": "勝海舟",
    },
    {
      "title": "猟官運動",
      "author": "勝海舟",
    },
    {
      "title": "方丈記",
      "author": "鴨長明",
    },
    {
      "title": "アラビヤンナイト 一、アラジンとふしぎなランプ",
      "author": "菊池寛",
    },
    {
      "title": "アラビヤンナイト 三、アリ・ババと四十人のどろぼう",
      "author": "菊池寛",
    },
    {
      "title": "アラビヤンナイト 四、船乗シンドバッド",
      "author": "菊池寛",
    },
    {
      "title": "恩讐の彼方に",
      "author": "菊池寛",
    },
    {
      "title": "真田幸村",
      "author": "菊池寛",
    },
    {
      "title": "賤ヶ岳合戦",
      "author": "菊池寛",
    },
    {
      "title": "真珠夫人",
      "author": "菊池寛",
    },
    {
      "title": "新劇のために",
      "author": "岸田国士",
    },
    {
      "title": "想像と装飾の美 それを持つ特殊の個性によって生かさるべし",
      "author": "岸田劉生",
    },
    {
      "title": "日本料理の基礎観念",
      "author": "北大路魯山人",
    },
    {
      "title": "料理と食器",
      "author": "北大路魯山人",
    },
    {
      "title": "お月さまいくつ",
      "author": "北原白秋",
    },
    {
      "title": "書斎と星",
      "author": "北原白秋",
    },
    {
      "title": "まざあ・ぐうす",
      "author": "北原白秋",
    },
    {
      "title": "山庵雑記",
      "author": "北村透谷",
    },
    {
      "title": "実行的道徳",
      "author": "北村透谷",
    },
    {
      "title": "罪と罰（内田不知庵訳）",
      "author": "北村透谷",
    },
    {
      "title": "北原白秋氏の肖像",
      "author": "木下杢太郎",
    },
    {
      "title": "南蛮寺門前",
      "author": "木下杢太郎",
    },
    {
      "title": "土佐日記",
      "author": "紀貫之",
    },
    {
      "title": "東京の風俗",
      "author": "木村荘八",
    },
    {
      "title": "浴衣",
      "author": "木村荘八",
    },
    {
      "title": "両国今昔",
      "author": "木村荘八",
    },
    {
      "title": "牛若と弁慶",
      "author": "楠山正雄",
    },
    {
      "title": "浦島太郎",
      "author": "楠山正雄",
    },
    {
      "title": "和尚さんと小僧",
      "author": "楠山正雄",
    },
    {
      "title": "ジャックと豆の木",
      "author": "楠山正雄",
    },
    {
      "title": "猫の草紙",
      "author": "楠山正雄",
    },
    {
      "title": "ねずみの嫁入り",
      "author": "楠山正雄",
    },
    {
      "title": "山姥の話",
      "author": "楠山正雄",
    },
    {
      "title": "赤坂城の謀略",
      "author": "国枝史郎",
    },
    {
      "title": "犬神娘",
      "author": "国枝史郎",
    },
    {
      "title": "五右衛門と新左",
      "author": "国枝史郎",
    },
    {
      "title": "レモンの花の咲く丘へ",
      "author": "国枝史郎",
    },
    {
      "title": "源おじ",
      "author": "国木田独歩",
    },
    {
      "title": "武蔵野",
      "author": "国木田独歩",
    },
    {
      "title": "忘れえぬ人々",
      "author": "国木田独歩",
    },
    {
      "title": "競漕",
      "author": "久米正雄",
    },
    {
      "title": "手品師",
      "author": "久米正雄",
    },
    {
      "title": "学生と読書 いかに書を読むべきか",
      "author": "倉田百三",
    },
    {
      "title": "出家とその弟子",
      "author": "倉田百三",
    },
    {
      "title": "外米と農民",
      "author": "黒島伝治",
    },
    {
      "title": "小豆島",
      "author": "黒島伝治",
    },
    {
      "title": "女の顔 私の好きな",
      "author": "黒田清輝",
    },
    {
      "title": "葬られたる秘密",
      "author": "小泉八雲",
    },
    {
      "title": "耳無芳一の話",
      "author": "小泉八雲",
    },
    {
      "title": "貉",
      "author": "小泉八雲",
    },
    {
      "title": "雪女",
      "author": "小泉八雲",
    },
    {
      "title": "計略二重戦",
      "author": "甲賀三郎",
    },
    {
      "title": "琥珀のパイプ",
      "author": "甲賀三郎",
    },
    {
      "title": "突貫紀行",
      "author": "幸田露伴",
    },
    {
      "title": "夜の隅田川",
      "author": "幸田露伴",
    },
    {
      "title": "誤った鑑定",
      "author": "小酒井不木",
    },
    {
      "title": "毒と迷信",
      "author": "小酒井不木",
    },
    {
      "title": "争われない事実",
      "author": "小林多喜二",
    },
    {
      "title": "蟹工船",
      "author": "小林多喜二",
    },
    {
      "title": "雪の夜",
      "author": "小林多喜二",
    },
    {
      "title": "遺教",
      "author": "西郷隆盛",
    },
    {
      "title": "遺訓",
      "author": "西郷隆盛",
    },
    {
      "title": "支流",
      "author": "斎藤茂吉",
    },
    {
      "title": "曼珠沙華",
      "author": "斎藤茂吉",
    },
    {
      "title": "最上川",
      "author": "斎藤茂吉",
    },
    {
      "title": "婦人の天職",
      "author": "堺利彦",
    },
    {
      "title": "私の父",
      "author": "堺利彦",
    },
    {
      "title": "阿部定という女 （浅田一博士へ）",
      "author": "坂口安吾",
    },
    {
      "title": "家康",
      "author": "坂口安吾",
    },
    {
      "title": "意識と時間との関係",
      "author": "坂口安吾",
    },
    {
      "title": "織田信長",
      "author": "坂口安吾",
    },
    {
      "title": "暗い青春",
      "author": "坂口安吾",
    },
    {
      "title": "傲慢な眼",
      "author": "坂口安吾",
    },
    {
      "title": "桜の森の満開の下",
      "author": "坂口安吾",
    },
    {
      "title": "宿命の CANDIDE",
      "author": "坂口安吾",
    },
    {
      "title": "人生三つの愉しみ",
      "author": "坂口安吾",
    },
    {
      "title": "スポーツ・文学・政治",
      "author": "坂口安吾",
    },
    {
      "title": "堕落論",
      "author": "坂口安吾",
    },
    {
      "title": "小さな山羊の記録",
      "author": "坂口安吾",
    },
    {
      "title": "釣り師の心境",
      "author": "坂口安吾",
    },
    {
      "title": "天才になりそこなつた男の話",
      "author": "坂口安吾",
    },
    {
      "title": "ドストエフスキーとバルザック",
      "author": "坂口安吾",
    },
    {
      "title": "白痴",
      "author": "坂口安吾",
    },
    {
      "title": "母",
      "author": "坂口安吾",
    },
    {
      "title": "破門",
      "author": "坂口安吾",
    },
    {
      "title": "パンパンガール",
      "author": "坂口安吾",
    },
    {
      "title": "ピエロ伝道者",
      "author": "坂口安吾",
    },
    {
      "title": "分裂的な感想",
      "author": "坂口安吾",
    },
    {
      "title": "無題",
      "author": "坂口安吾",
    },
    {
      "title": "恋愛論",
      "author": "坂口安吾",
    },
    {
      "title": "船中八策",
      "author": "坂本竜馬",
    },
    {
      "title": "仮装観桜会",
      "author": "佐左木俊郎",
    },
    {
      "title": "秘密の風景画",
      "author": "佐左木俊郎",
    },
    {
      "title": "旗本退屈男 第一話　旗本退屈男",
      "author": "佐々木味津三",
    },
    {
      "title": "旗本退屈男 第二話　続旗本退屈男",
      "author": "佐々木味津三",
    },
    {
      "title": "旗本退屈男 第三話　後の旗本退屈男",
      "author": "佐々木味津三",
    },
    {
      "title": "ああ玉杯に花うけて",
      "author": "佐藤紅緑",
    },
    {
      "title": "梅若七兵衞",
      "author": "三遊亭円朝",
    },
    {
      "title": "華族のお医者",
      "author": "三遊亭円朝",
    },
    {
      "title": "七福神詣",
      "author": "三遊亭円朝",
    },
    {
      "title": "嵐",
      "author": "島崎藤村",
    },
    {
      "title": "破戒",
      "author": "島崎藤村",
    },
    {
      "title": "夜明け前　第一部上",
      "author": "島崎藤村",
    },
    {
      "title": "夜明け前　第一部下",
      "author": "島崎藤村",
    },
    {
      "title": "夜明け前　第二部上",
      "author": "島崎藤村",
    },
    {
      "title": "夜明け前　第二部下",
      "author": "島崎藤村",
    },
    {
      "title": "路傍の雑草",
      "author": "島崎藤村",
    },
    {
      "title": "次郎物語 第一部",
      "author": "下村湖人",
    },
    {
      "title": "次郎物語 第二部",
      "author": "下村湖人",
    },
    {
      "title": "次郎物語 第三部",
      "author": "下村湖人",
    },
    {
      "title": "次郎物語 第四部",
      "author": "下村湖人",
    },
    {
      "title": "次郎物語 第五部",
      "author": "下村湖人",
    },
    {
      "title": "かたつむり",
      "author": "鈴木三重吉",
    },
    {
      "title": "小犬",
      "author": "鈴木三重吉",
    },
    {
      "title": "古事記物語",
      "author": "鈴木三重吉",
    },
    {
      "title": "丸の内",
      "author": "高浜虚子",
    },
    {
      "title": "幕末維新懐古談 私の父祖のはなし",
      "author": "高村光雲",
    },
    {
      "title": "幕末維新懐古談 私の子供の時のはなし",
      "author": "高村光雲",
    },
    {
      "title": "智恵子抄",
      "author": "高村光太郎",
    },
    {
      "title": "ア、秋",
      "author": "太宰治",
    },
    {
      "title": "I can speak",
      "author": "太宰治",
    },
    {
      "title": "愛と美について",
      "author": "太宰治",
    },
    {
      "title": "青森",
      "author": "太宰治",
    },
    {
      "title": "朝",
      "author": "太宰治",
    },
    {
      "title": "あさましきもの",
      "author": "太宰治",
    },
    {
      "title": "兄たち",
      "author": "太宰治",
    },
    {
      "title": "或る忠告",
      "author": "太宰治",
    },
    {
      "title": "老ハイデルベルヒ",
      "author": "太宰治",
    },
    {
      "title": "一日の労苦",
      "author": "太宰治",
    },
    {
      "title": "一問一答",
      "author": "太宰治",
    },
    {
      "title": "ヴィヨンの妻",
      "author": "太宰治",
    },
    {
      "title": "嘘",
      "author": "太宰治",
    },
    {
      "title": "右大臣実朝",
      "author": "太宰治",
    },
    {
      "title": "姥捨",
      "author": "太宰治",
    },
    {
      "title": "桜桃",
      "author": "太宰治",
    },
    {
      "title": "おしゃれ童子",
      "author": "太宰治",
    },
    {
      "title": "お伽草紙",
      "author": "太宰治",
    },
    {
      "title": "思ひ出",
      "author": "太宰治",
    },
    {
      "title": "女の決闘",
      "author": "太宰治",
    },
    {
      "title": "駈込み訴え",
      "author": "太宰治",
    },
    {
      "title": "家庭の幸福",
      "author": "太宰治",
    },
    {
      "title": "川端康成へ",
      "author": "太宰治",
    },
    {
      "title": "きりぎりす",
      "author": "太宰治",
    },
    {
      "title": "グッド・バイ",
      "author": "太宰治",
    },
    {
      "title": "斜陽",
      "author": "太宰治",
    },
    {
      "title": "女生徒",
      "author": "太宰治",
    },
    {
      "title": "新ハムレット",
      "author": "太宰治",
    },
    {
      "title": "津軽",
      "author": "太宰治",
    },
    {
      "title": "東京八景 （苦難の或人に贈る）",
      "author": "太宰治",
    },
    {
      "title": "道化の華",
      "author": "太宰治",
    },
    {
      "title": "トカトントン",
      "author": "太宰治",
    },
    {
      "title": "人間失格",
      "author": "太宰治",
    },
    {
      "title": "走れメロス",
      "author": "太宰治",
    },
    {
      "title": "パンドラの匣",
      "author": "太宰治",
    },
    {
      "title": "眉山",
      "author": "太宰治",
    },
    {
      "title": "美少女",
      "author": "太宰治",
    },
    {
      "title": "富嶽百景",
      "author": "太宰治",
    },
    {
      "title": "海神に祈る",
      "author": "田中貢太郎",
    },
    {
      "title": "村の怪談",
      "author": "田中貢太郎",
    },
    {
      "title": "片隅の幸福",
      "author": "種田山頭火",
    },
    {
      "title": "物を大切にする心",
      "author": "種田山頭火",
    },
    {
      "title": "少女病",
      "author": "田山花袋",
    },
    {
      "title": "蒲団",
      "author": "田山花袋",
    },
    {
      "title": "十歳以前に読んだ本",
      "author": "坪内逍遥",
    },
    {
      "title": "アインシュタイン",
      "author": "寺田寅彦",
    },
    {
      "title": "アインシュタインの教育観",
      "author": "寺田寅彦",
    },
    {
      "title": "浅草紙",
      "author": "寺田寅彦",
    },
    {
      "title": "思い出草",
      "author": "寺田寅彦",
    },
    {
      "title": "「雨の降る日は天気が悪い」序",
      "author": "土井晩翠",
    },
    {
      "title": "新詩発生時代の思ひ出",
      "author": "土井晩翠",
    },
    {
      "title": "科学論",
      "author": "戸坂潤",
    },
    {
      "title": "カントと現代の科学",
      "author": "戸坂潤",
    },
    {
      "title": "社会時評",
      "author": "戸坂潤",
    },
    {
      "title": "白い朝",
      "author": "豊島与志雄",
    },
    {
      "title": "生あらば",
      "author": "豊島与志雄",
    },
    {
      "title": "巌流島",
      "author": "直木三十五",
    },
    {
      "title": "南国太平記",
      "author": "直木三十五",
    },
    {
      "title": "すみだ川",
      "author": "永井荷風",
    },
    {
      "title": "日和下駄",
      "author": "永井荷風",
    },
    {
      "title": "雪の日",
      "author": "永井荷風",
    },
    {
      "title": "大阪といふところ",
      "author": "長岡半太郎",
    },
    {
      "title": "物理学革新の一つの尖端",
      "author": "長岡半太郎",
    },
    {
      "title": "プランク先生の憶い出",
      "author": "長岡半太郎",
    },
    {
      "title": "大菩薩峠 甲源一刀流の巻",
      "author": "中里介山",
    },
    {
      "title": "山月記",
      "author": "中島敦",
    },
    {
      "title": "光と風と夢",
      "author": "中島敦",
    },
    {
      "title": "名人伝",
      "author": "中島敦",
    },
    {
      "title": "在りし日の歌",
      "author": "中原中也",
    },
    {
      "title": "散歩生活",
      "author": "中原中也",
    },
    {
      "title": "詩と其の伝統",
      "author": "中原中也",
    },
    {
      "title": "生と歌",
      "author": "中原中也",
    },
    {
      "title": "山羊の歌",
      "author": "中原中也",
    },
    {
      "title": "我が生活",
      "author": "中原中也",
    },
    {
      "title": "硝子戸の中",
      "author": "夏目漱石",
    },
    {
      "title": "草枕",
      "author": "夏目漱石",
    },
    {
      "title": "虞美人草",
      "author": "夏目漱石",
    },
    {
      "title": "坑夫",
      "author": "夏目漱石",
    },
    {
      "title": "こころ",
      "author": "夏目漱石",
    },
    {
      "title": "三四郎",
      "author": "夏目漱石",
    },
    {
      "title": "それから",
      "author": "夏目漱石",
    },
    {
      "title": "手紙",
      "author": "夏目漱石",
    },
    {
      "title": "彼岸過迄",
      "author": "夏目漱石",
    },
    {
      "title": "文鳥",
      "author": "夏目漱石",
    },
    {
      "title": "坊っちゃん",
      "author": "夏目漱石",
    },
    {
      "title": "道草",
      "author": "夏目漱石",
    },
    {
      "title": "明暗",
      "author": "夏目漱石",
    },
    {
      "title": "門",
      "author": "夏目漱石",
    },
    {
      "title": "夢十夜",
      "author": "夏目漱石",
    },
    {
      "title": "倫敦塔",
      "author": "夏目漱石",
    },
    {
      "title": "吾輩は猫である",
      "author": "夏目漱石",
    },
    {
      "title": "私の個人主義",
      "author": "夏目漱石",
    },
    {
      "title": "将来の日本",
      "author": "新島襄",
    },
    {
      "title": "おじいさんのランプ",
      "author": "新美南吉",
    },
    {
      "title": "ごん狐",
      "author": "新美南吉",
    },
    {
      "title": "手袋を買いに",
      "author": "新美南吉",
    },
    {
      "title": "アブセンス・オブ・マインド",
      "author": "西田幾多郎",
    },
    {
      "title": "善の研究",
      "author": "西田幾多郎",
    },
    {
      "title": "教育の目的",
      "author": "新渡戸稲造",
    },
    {
      "title": "桂離宮",
      "author": "野上豊一郎",
    },
    {
      "title": "パリの地下牢",
      "author": "野上豊一郎",
    },
    {
      "title": "青い眼の人形",
      "author": "野口雨情",
    },
    {
      "title": "十五夜お月さん",
      "author": "野口雨情",
    },
    {
      "title": "純情小曲集",
      "author": "萩原朔太郎",
    },
    {
      "title": "月に吠える",
      "author": "萩原朔太郎",
    },
    {
      "title": "猫町",
      "author": "萩原朔太郎",
    },
    {
      "title": "冬の情緒",
      "author": "萩原朔太郎",
    },
    {
      "title": "家",
      "author": "長谷川時雨",
    },
    {
      "title": "おとづれ",
      "author": "長谷川時雨",
    },
    {
      "title": "殺人狂の話 （欧米犯罪実話）",
      "author": "浜尾四郎",
    },
    {
      "title": "博物館",
      "author": "浜田青陵",
    },
    {
      "title": "晩菊",
      "author": "林芙美子",
    },
    {
      "title": "摩周湖紀行 北海道の旅より",
      "author": "林芙美子",
    },
    {
      "title": "セメント樽の中の手紙",
      "author": "葉山嘉樹",
    },
    {
      "title": "大つごもり",
      "author": "樋口一葉",
    },
    {
      "title": "十三夜",
      "author": "樋口一葉",
    },
    {
      "title": "たけくらべ",
      "author": "樋口一葉",
    },
    {
      "title": "平賀源内捕物帳 山王祭の大像",
      "author": "久生十蘭",
    },
    {
      "title": "学問のすすめ",
      "author": "福沢諭吉",
    },
    {
      "title": "学問の独立",
      "author": "福沢諭吉",
    },
    {
      "title": "家庭習慣の教えを論ず",
      "author": "福沢諭吉",
    },
    {
      "title": "教育の目的",
      "author": "福沢諭吉",
    },
    {
      "title": "瘠我慢の説 瘠我慢の説",
      "author": "福沢諭吉",
    },
    {
      "title": "浮雲",
      "author": "二葉亭四迷",
    },
    {
      "title": "旅日記",
      "author": "二葉亭四迷",
    },
    {
      "title": "平凡",
      "author": "二葉亭四迷",
    },
    {
      "title": "風立ちぬ",
      "author": "堀辰雄",
    },
    {
      "title": "植物一日一題",
      "author": "牧野富太郎",
    },
    {
      "title": "植物知識",
      "author": "牧野富太郎",
    },
    {
      "title": "あきまろに答ふ",
      "author": "正岡子規",
    },
    {
      "title": "墨汁一滴",
      "author": "正岡子規",
    },
    {
      "title": "謎の街",
      "author": "松本泰",
    },
    {
      "title": "Ｐ丘の殺人事件",
      "author": "松本泰",
    },
    {
      "title": "宝石の序曲",
      "author": "松本泰",
    },
    {
      "title": "十二支考 　鶏に関する伝説",
      "author": "南方熊楠",
    },
    {
      "title": "神社合祀に関する意見",
      "author": "南方熊楠",
    },
    {
      "title": "雨ニモマケズ",
      "author": "宮沢賢治",
    },
    {
      "title": "オツベルと象",
      "author": "宮沢賢治",
    },
    {
      "title": "風の又三郎",
      "author": "宮沢賢治",
    },
    {
      "title": "銀河鉄道の夜",
      "author": "宮沢賢治",
    },
    {
      "title": "グスコーブドリの伝記",
      "author": "宮沢賢治",
    },
    {
      "title": "セロ弾きのゴーシュ",
      "author": "宮沢賢治",
    },
    {
      "title": "注文の多い料理店",
      "author": "宮沢賢治",
    },
    {
      "title": "ツェねずみ",
      "author": "宮沢賢治",
    },
    {
      "title": "二十六夜",
      "author": "宮沢賢治",
    },
    {
      "title": "春と修羅",
      "author": "宮沢賢治",
    },
    {
      "title": "やまなし",
      "author": "宮沢賢治",
    },
    {
      "title": "よだかの星",
      "author": "宮沢賢治",
    },
    {
      "title": "通り雨",
      "author": "宮本百合子",
    },
    {
      "title": "貧しき人々の群",
      "author": "宮本百合子",
    },
    {
      "title": "源氏物語 桐壺",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 帚木",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 空蝉",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 夕顔",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 若紫",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 末摘花",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 紅葉賀",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 花宴",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 葵",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 榊",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 花散里",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 須磨",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 明石",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 澪標",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 蓬生",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 関屋",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 絵合",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 松風",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 薄雲",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 朝顔",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 乙女",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 玉鬘",
      "author": "紫式部",
    },
    {
      "title": "源氏物語 野分",
      "author": "紫式部",
    },
    {
      "title": "阿部一族",
      "author": "森鴎外",
    },
    {
      "title": "ヰタ・セクスアリス",
      "author": "森鴎外",
    },
    {
      "title": "山椒大夫",
      "author": "森鴎外",
    },
    {
      "title": "高瀬舟",
      "author": "森鴎外",
    },
    {
      "title": "舞姫",
      "author": "森鴎外",
    },
    {
      "title": "あたらしい憲法のはなし",
      "author": "文部省",
    },
    {
      "title": "神楽坂",
      "author": "矢田津世子",
    },
    {
      "title": "父",
      "author": "矢田津世子",
    },
    {
      "title": "茶粥の記",
      "author": "矢田津世子",
    },
    {
      "title": "悪魔祈祷書",
      "author": "夢野久作",
    },
    {
      "title": "押絵の奇蹟",
      "author": "夢野久作",
    },
    {
      "title": "キチガイ地獄",
      "author": "夢野久作",
    },
    {
      "title": "少女地獄",
      "author": "夢野久作",
    },
    {
      "title": "ドグラ・マグラ",
      "author": "夢野久作",
    },
    {
      "title": "瓶詰地獄",
      "author": "夢野久作",
    },
    {
      "title": "月夜",
      "author": "与謝野晶子",
    },
    {
      "title": "みだれ髪（昭和8年）",
      "author": "与謝野晶子",
    },
    {
      "title": "執達吏",
      "author": "与謝野寛",
    },
    {
      "title": "失楽",
      "author": "与謝野寛",
    },
    {
      "title": "宇宙爆撃",
      "author": "蘭郁二郎",
    },
    {
      "title": "地図にない島",
      "author": "蘭郁二郎",
    },
    {
      "title": "鉄路",
      "author": "蘭郁二郎",
    },
    {
      "title": "阿Ｑ正伝",
      "author": "魯迅",
    },
    {
      "title": "狂人日記",
      "author": "魯迅",
    },
    {
      "title": "花二三",
      "author": "若山牧水",
    },
    {
      "title": "みなかみ紀行",
      "author": "若山牧水",
    },
    {
      "title": "ああ華族様だよ　と私は嘘を吐くのであった",
      "author": "渡辺温",
    },
    {
      "title": "或る母の話",
      "author": "渡辺温",
    },
    {
      "title": "風船美人",
      "author": "渡辺温",
    },
  ];

  await prisma.book.createMany({
    data: createBookDto,
  });
}
