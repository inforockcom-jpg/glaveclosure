export type PrefectureCategory = 'snow' | 'metro' | 'standard';

export interface Prefecture {
  slug: string;
  name: string;
  region: string;
  primaryCity: string;
  localCaseCity: string;
  category: PrefectureCategory;
}

export const prefectures: Prefecture[] = [
  { slug: 'hokkaido', name: '北海道', region: '北海道', primaryCity: '札幌市', localCaseCity: '旭川市', category: 'snow' },
  { slug: 'aomori', name: '青森県', region: '東北', primaryCity: '青森市', localCaseCity: '弘前市', category: 'snow' },
  { slug: 'iwate', name: '岩手県', region: '東北', primaryCity: '盛岡市', localCaseCity: '一関市', category: 'snow' },
  { slug: 'miyagi', name: '宮城県', region: '東北', primaryCity: '仙台市', localCaseCity: '栗原市', category: 'standard' },
  { slug: 'akita', name: '秋田県', region: '東北', primaryCity: '秋田市', localCaseCity: '横手市', category: 'snow' },
  { slug: 'yamagata', name: '山形県', region: '東北', primaryCity: '山形市', localCaseCity: '鶴岡市', category: 'snow' },
  { slug: 'fukushima', name: '福島県', region: '東北', primaryCity: '福島市', localCaseCity: '会津若松市', category: 'standard' },
  { slug: 'ibaraki', name: '茨城県', region: '関東', primaryCity: '水戸市', localCaseCity: '常陸太田市', category: 'standard' },
  { slug: 'tochigi', name: '栃木県', region: '関東', primaryCity: '宇都宮市', localCaseCity: '那須塩原市', category: 'standard' },
  { slug: 'gunma', name: '群馬県', region: '関東', primaryCity: '前橋市', localCaseCity: '沼田市', category: 'standard' },
  { slug: 'saitama', name: '埼玉県', region: '関東', primaryCity: 'さいたま市', localCaseCity: '秩父市', category: 'metro' },
  { slug: 'chiba', name: '千葉県', region: '関東', primaryCity: '千葉市', localCaseCity: '館山市', category: 'metro' },
  { slug: 'tokyo', name: '東京都', region: '関東', primaryCity: '新宿区', localCaseCity: '青梅市', category: 'metro' },
  { slug: 'kanagawa', name: '神奈川県', region: '関東', primaryCity: '横浜市', localCaseCity: '小田原市', category: 'metro' },
  { slug: 'niigata', name: '新潟県', region: '中部', primaryCity: '新潟市', localCaseCity: '上越市', category: 'snow' },
  { slug: 'toyama', name: '富山県', region: '中部', primaryCity: '富山市', localCaseCity: '南砺市', category: 'snow' },
  { slug: 'ishikawa', name: '石川県', region: '中部', primaryCity: '金沢市', localCaseCity: '七尾市', category: 'snow' },
  { slug: 'fukui', name: '福井県', region: '中部', primaryCity: '福井市', localCaseCity: '小浜市', category: 'snow' },
  { slug: 'yamanashi', name: '山梨県', region: '中部', primaryCity: '甲府市', localCaseCity: '北杜市', category: 'standard' },
  { slug: 'nagano', name: '長野県', region: '中部', primaryCity: '長野市', localCaseCity: '飯田市', category: 'snow' },
  { slug: 'gifu', name: '岐阜県', region: '中部', primaryCity: '岐阜市', localCaseCity: '高山市', category: 'standard' },
  { slug: 'shizuoka', name: '静岡県', region: '中部', primaryCity: '静岡市', localCaseCity: '下田市', category: 'standard' },
  { slug: 'aichi', name: '愛知県', region: '中部', primaryCity: '名古屋市', localCaseCity: '豊田市', category: 'metro' },
  { slug: 'mie', name: '三重県', region: '近畿', primaryCity: '津市', localCaseCity: '伊勢市', category: 'standard' },
  { slug: 'shiga', name: '滋賀県', region: '近畿', primaryCity: '大津市', localCaseCity: '長浜市', category: 'standard' },
  { slug: 'kyoto', name: '京都府', region: '近畿', primaryCity: '京都市', localCaseCity: '舞鶴市', category: 'metro' },
  { slug: 'osaka', name: '大阪府', region: '近畿', primaryCity: '大阪市', localCaseCity: '河内長野市', category: 'metro' },
  { slug: 'hyogo', name: '兵庫県', region: '近畿', primaryCity: '神戸市', localCaseCity: '豊岡市', category: 'metro' },
  { slug: 'nara', name: '奈良県', region: '近畿', primaryCity: '奈良市', localCaseCity: '五條市', category: 'standard' },
  { slug: 'wakayama', name: '和歌山県', region: '近畿', primaryCity: '和歌山市', localCaseCity: '田辺市', category: 'standard' },
  { slug: 'tottori', name: '鳥取県', region: '中国', primaryCity: '鳥取市', localCaseCity: '倉吉市', category: 'standard' },
  { slug: 'shimane', name: '島根県', region: '中国', primaryCity: '松江市', localCaseCity: '益田市', category: 'standard' },
  { slug: 'okayama', name: '岡山県', region: '中国', primaryCity: '岡山市', localCaseCity: '津山市', category: 'standard' },
  { slug: 'hiroshima', name: '広島県', region: '中国', primaryCity: '広島市', localCaseCity: '三次市', category: 'metro' },
  { slug: 'yamaguchi', name: '山口県', region: '中国', primaryCity: '山口市', localCaseCity: '萩市', category: 'standard' },
  { slug: 'tokushima', name: '徳島県', region: '四国', primaryCity: '徳島市', localCaseCity: '三好市', category: 'standard' },
  { slug: 'kagawa', name: '香川県', region: '四国', primaryCity: '高松市', localCaseCity: '観音寺市', category: 'standard' },
  { slug: 'ehime', name: '愛媛県', region: '四国', primaryCity: '松山市', localCaseCity: '宇和島市', category: 'standard' },
  { slug: 'kochi', name: '高知県', region: '四国', primaryCity: '高知市', localCaseCity: '四万十市', category: 'standard' },
  { slug: 'fukuoka', name: '福岡県', region: '九州', primaryCity: '福岡市', localCaseCity: '八女市', category: 'metro' },
  { slug: 'saga', name: '佐賀県', region: '九州', primaryCity: '佐賀市', localCaseCity: '唐津市', category: 'standard' },
  { slug: 'nagasaki', name: '長崎県', region: '九州', primaryCity: '長崎市', localCaseCity: '平戸市', category: 'standard' },
  { slug: 'kumamoto', name: '熊本県', region: '九州', primaryCity: '熊本市', localCaseCity: '人吉市', category: 'standard' },
  { slug: 'oita', name: '大分県', region: '九州', primaryCity: '大分市', localCaseCity: '佐伯市', category: 'standard' },
  { slug: 'miyazaki', name: '宮崎県', region: '九州', primaryCity: '宮崎市', localCaseCity: '都城市', category: 'standard' },
  { slug: 'kagoshima', name: '鹿児島県', region: '九州', primaryCity: '鹿児島市', localCaseCity: '霧島市', category: 'standard' },
  { slug: 'okinawa', name: '沖縄県', region: '沖縄', primaryCity: '那覇市', localCaseCity: '名護市', category: 'metro' }
];
