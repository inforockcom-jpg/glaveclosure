export type RegionalPrimaryInfo = {
  slug: string;
  prefectureName: string;
  totalCostRange: string;
  applicationOffice: string;
  feeNote: string;
  subsidyNote: string;
  publicCemeteryNote: string;
  localTips: string[];
  sourcesNote: string;
};

/**
 * Primary local info for priority prefecture LPs (AIO / local SEO).
 * Fees and subsidies vary by municipality — always confirm with the city office.
 */
export const regionalPrimaryInfoBySlug: Record<string, RegionalPrimaryInfo> = {
  tokyo: {
    slug: 'tokyo',
    prefectureName: '東京都',
    totalCostRange: '総額目安 35万〜150万円（改葬先により変動）',
    applicationOffice:
      '改葬許可申請は「現在のお墓がある市区町村」の役所（衛生・環境・生活衛生等の担当窓口）。お住まいの区役所ではありません。',
    feeNote: '改葬許可の手数料は多くの自治体で無料〜数百円。埋蔵証明書は墓地管理者（寺院・霊園）が発行。',
    subsidyNote:
      '都内の民営・寺院墓地向けの一律補助金は一般的ではありません。都立霊園は「施設変更」（合葬墓等への改葬）制度があり、離檀料が発生しないケースが多いのが特徴です。',
    publicCemeteryNote:
      '都立霊園（青山・谷中・染井・雑司ヶ谷・八柱・多磨・小平・八王子など）は管理者が東京都。施設変更・改葬の手続きは霊園ルールに沿って進めます。',
    localTips: [
      '都市部は搬入経路が狭く、クレーン・人力搬出で撤去費が上がりやすい',
      '寺院墓地は離檀・埋蔵証明の段取りを先に確認する',
      '遠方（地方）の実家墓を東京在住で整理する相談も多い'
    ],
    sourcesNote: '申請先・手数料・制度の詳細は、お墓所在地の市区町村および東京都公園協会等の最新案内でご確認ください。'
  },
  osaka: {
    slug: 'osaka',
    prefectureName: '大阪府',
    totalCostRange: '総額目安 30万〜140万円（府営・民営・寺院で差あり）',
    applicationOffice:
      '改葬許可申請はお墓がある市区町村の役所。大阪市内のお墓なら大阪市の担当窓口、府内他市ならその市役所です。',
    feeNote: '改葬許可手数料は自治体により無料〜数百円程度。受入証明書は新しい供養先から取得します。',
    subsidyNote:
      '府内でも撤去補助がある自治体は限られます。公営墓地の返還ルール・還付の有無は各市の墓地条例で異なります。',
    publicCemeteryNote:
      '服部霊園などの府営・市営墓地は、管理者への返還届と改葬許可の順序が重要です。指定石材店の有無を事前確認してください。',
    localTips: [
      '関西圏は寺院との関係・離檀の慣習が残る地域もあるため、初回連絡の言い回しが重要',
      '大阪市内在住×府外・県外の実家墓、という遠方整理の相談が多い',
      '改葬先（永代供養・納骨堂）を先に決めると書類が止まりにくい'
    ],
    sourcesNote: '各市町村の「改葬許可」「墓地返還」ページ、府営霊園の利用案内を一次情報として確認してください。'
  },
  kanagawa: {
    slug: 'kanagawa',
    prefectureName: '神奈川県',
    totalCostRange: '総額目安 35万〜150万円（横浜・川崎は搬入条件で増減しやすい）',
    applicationOffice:
      '改葬許可はお墓所在地の市役所・町村役場。横浜市・川崎市・相模原市など、政令市は区役所ではなく市の担当窓口案内に従ってください。',
    feeNote: '手数料は無料〜数百円が中心。埋蔵（埋葬）証明書は霊園・寺院の管理者発行が一般的です。',
    subsidyNote:
      '県下一律の墓じまい補助金はありません。一部の公営墓地で返還時の取扱いが異なるため、契約している霊園に確認が必要です。',
    publicCemeteryNote:
      '横浜市営・川崎市営など公営霊園は、管理者指定の手続き様式があります。民営霊園は管理規約の「返還条件」を確認してください。',
    localTips: [
      '首都圏ベッドタウンから地方の実家墓を整理するケースが多い',
      '丘陵地・急傾斜の墓地は重機不可で追加費用になりやすい',
      'お布施・離檀料はパック外。総額シミュレーションで先に把握する'
    ],
    sourcesNote: 'お墓所在地の市公式サイト「改葬」「墓地」ページを確認のうえ、不明点は当サービスでも整理をお手伝いします。'
  },
  hyogo: {
    slug: 'hyogo',
    prefectureName: '兵庫県',
    totalCostRange: '総額目安 30万〜140万円',
    applicationOffice:
      '改葬許可申請はお墓がある市町の役所。神戸市・姫路市・西宮市など、市ごとに担当課名が異なります。',
    feeNote: '改葬許可の手数料は多くの市町で無料〜数百円。埋葬証明書・受入証明書のセットが必要です。',
    subsidyNote:
      '県全体の共通補助金は基本的にありません。公営墓地の返還に伴う取扱いは各市町の条例・要綱を確認してください。',
    publicCemeteryNote:
      '神戸市など公営霊園は返還届と改葬許可の順序が決まっています。寺院墓地は離檀・閉眼供養の日程を先に調整します。',
    localTips: [
      '改葬件数・伸び率が高く、相談需要が大きいエリア',
      '阪神間は都市部の搬入制約、播磨・但馬側は遠方立会い不要の需要が強い',
      '親族合意→改葬先決定→管理者相談の順がトラブル予防になる'
    ],
    sourcesNote: '各市町の「改葬許可申請」案内を一次情報としてご確認ください。'
  },
  chiba: {
    slug: 'chiba',
    prefectureName: '千葉県',
    totalCostRange: '総額目安 30万〜140万円（補助金適用時は自己負担を圧縮できる場合あり）',
    applicationOffice:
      '改葬許可はお墓所在地の市役所・町村役場。千葉市は区ではなく市の案内に従って申請します。',
    feeNote: '手数料は無料〜数百円が中心。埋蔵証明書は管理者発行、受入証明書は新しい納骨先から取得します。',
    subsidyNote:
      '千葉県内は市区町村によって墓石撤去等の補助・協力金がある場合があります（例：市川市・浦安市などで公営墓地関連の制度が話題になることがあります）。対象は公営墓地に限られることが多く、民営・寺院墓地は対象外のケースが一般的です。申請期限・領収書要件があるため、撤去前に必ず該当市の最新要綱を確認してください。',
    publicCemeteryNote:
      '市営霊園の返還と民間霊園の解約では書類が異なります。補助金を使う場合は「指定業者」「完工写真」などの条件に注意します。',
    localTips: [
      '補助金の有無は「お墓の種別（公営か）」で大きく変わる',
      '東京通勤圏からの遠方実家墓整理と、県内公営霊園返還の両パターンがある',
      '補助申請と改葬許可のスケジュールを同時に組むと手戻りが減る'
    ],
    sourcesNote: '補助金・改葬の詳細は、お墓所在地の市公式サイトまたは窓口で最新情報を確認してください。'
  }
};

export function getRegionalPrimaryInfo(slug: string): RegionalPrimaryInfo | null {
  return regionalPrimaryInfoBySlug[slug] ?? null;
}
