import { MainNewsCard } from '@/shared/ui/card/newsCard/MainNewsCard'
import { SubNewsCard } from '@/shared/ui/card/newsCard/SubNewsCard'

export const MajorNews = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold text-gray-800">주요 뉴스</h2>

      <div className="flex gap-6">
        <MainNewsCard
          title="삼성전자, 3분기 실적 발표...반도체 부문 회복세"
          content="삼성전자가 3분기 연결기준 매출 79조원, 영업이익 9.18조원을 기록했다고 발표했습니다. 메모리 반도체 가격 상승과 수요 회복이 주요 원인으로 분석됩니다."
          imageUrl="/image.png"
          category="경제"
          createdAt="2025.01.01"
        />

        <div className="flex flex-col gap-4">
          <SubNewsCard
            title="코스피 3400선 돌파, 외국인 순매수 지속"
            content="국내 증시가 외국인 투자자들의 꾸준한 매수에 힘입어 상승세를 이어가고 있습니다."
            imageUrl="/image.png"
            category="경제"
            createdAt="2025.01.01"
          />
          <SubNewsCard
            title="정부, 부동산 정책 개편안 발표"
            content="정부가 주택시장 안정화를 위한 새로운 부동산 정책을 발표했습니다.1241412412412412414141414124k12kbkjbk"
            imageUrl="/image.png"
            category="정치"
            createdAt="2025.01.01"
          />
          <SubNewsCard
            title="AI 기술 발전으로 일자리 변화 가속화"
            content="인공지능 기술의 급속한 발전으로 다양한 산업 분야에서 일자리 구조 변화가 일어나고 있습니다."
            imageUrl="/image.png"
            createdAt="2025.01.01"
          />
        </div>
      </div>
    </div>
  )
}
