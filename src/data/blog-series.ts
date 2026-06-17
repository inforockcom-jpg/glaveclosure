export type BlogSeriesPart = {
  slug: string;
  label: string;
  title: string;
};

export const hakajimaiTimingSeries = {
  id: '墓じまいを考える時期',
  description: '札幌在住・坂井進さん夫妻を例に、墓じまいを考え始めたときの相談・業者選び・供養の決め方を三回にわたって解説します。',
  parts: [
    {
      slug: 'obon-kazoku-sodan-01',
      label: '第1弾',
      title: 'お盆にみんなが揃う日、墓じまいは相談から始めよう'
    },
    {
      slug: 'mitsumori-gyosha-02',
      label: '第2弾',
      title: '遠方の墓ほど、見積もりは三社そろえて比べよう'
    },
    {
      slug: 'temoto-kuyo-kazoku-03',
      label: '第3弾',
      title: '手元供養か永代供養か、家族で決める前の話し合い'
    }
  ] satisfies BlogSeriesPart[]
} as const;

export function getSeriesPartBySlug(slug: string) {
  const index = hakajimaiTimingSeries.parts.findIndex((part) => part.slug === slug);
  if (index === -1) return null;
  return {
    series: hakajimaiTimingSeries,
    current: hakajimaiTimingSeries.parts[index],
    index,
    prev: index > 0 ? hakajimaiTimingSeries.parts[index - 1] : null,
    next: index < hakajimaiTimingSeries.parts.length - 1 ? hakajimaiTimingSeries.parts[index + 1] : null
  };
}

export const seriesCtaCopy: Record<number, { heading: string; lead: string }> = {
  1: {
    heading: 'お盆の前に、家族への話し方を整理しませんか',
    lead: '遠方のお墓や認知症の不安がある方へ。相談の切り出し方から、無料でお話を伺います。'
  },
  2: {
    heading: '見積もり比較や業者選びでお困りの方へ',
    lead: '根室など遠方の墓地でも、立会い不要の段取りを含めてご案内。追加料金のない見積もりを目指します。'
  },
  3: {
    heading: '手元供養・永代供養の選び方を一緒に整理',
    lead: '墓じまい後の供養先選びや分骨のご相談も承ります。24時間受付、見積もり無料です。'
  }
};
