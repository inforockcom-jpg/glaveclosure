import type { Prefecture } from './prefectures';

const metroByRegion: Record<string, string> = {
  北海道: '札幌市内',
  東北: '仙台市内',
  関東: '東京都内',
  中部: '名古屋市内',
  近畿: '大阪市内',
  中国: '広島市内',
  四国: '高松市内',
  九州: '福岡市内',
  沖縄: '那覇市内'
};

export function getMetroResidenceHint(prefecture: Prefecture): string {
  if (prefecture.slug === 'tokyo') return '東京都内';
  if (prefecture.slug === 'osaka') return '大阪市内';
  if (prefecture.slug === 'aichi') return '名古屋市内';
  if (prefecture.slug === 'fukuoka') return '福岡市内';
  if (prefecture.slug === 'okinawa') return '那覇市内';
  return metroByRegion[prefecture.region] ?? `${prefecture.primaryCity}内`;
}

export function getPrefectureExtraFaq(prefecture: Prefecture) {
  const metro = getMetroResidenceHint(prefecture);
  return {
    question: `${metro}に住みながら、${prefecture.name}内（${prefecture.localCaseCity}など）の実家墓地を整理できますか？`,
    answer: `はい。お住まいが全国どこでも、整理したいお墓が${prefecture.name}内にあればご相談いただけます。${prefecture.localCaseCity}など県内の遠方墓地も、現地確認・親族への説明・改葬許可証の段取りまで、立会い不要で進められる工程を事前にご説明します。${metro}から${prefecture.name}のお墓を見直したいご家族のご相談にも対応しています。`
  };
}
