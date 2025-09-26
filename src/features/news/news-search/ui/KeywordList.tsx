interface KeywordListProps {
  keywords: string[]
  onRemove: (keyword: string) => void
}

export const KeywordList = ({ keywords, onRemove }: KeywordListProps) => {
  return (
    <div className="space-y-2">
      <p className="text-base text-gray-dark-active">
        {`검색할 키워드 목록 (${keywords.length} / 4)`}
      </p>
      <div className="flex flex-wrap gap-2">
        {keywords.length > 0 ? (
          keywords.map(keyword => (
            <div
              key={keyword}
              className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-green-light to-green-light-hover border border-green-light-active rounded-lg group">
              <span className="text-sm text-green-dark">{keyword}</span>
              <button
                type="button"
                aria-label={`Remove keyword ${keyword}`}
                onClick={() => onRemove(keyword)}
                className="p-1 text-green-normal hover:text-green-dark rounded-full hover:bg-green-light-active transition-colors">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="flex items-center gap-1 px-3 py-2 bg-gradient-to-r from-green-light to-green-light-hover border border-green-light-active rounded-lg group">
            <span className="text-sm text-green-dark">
              검색할 키워드가 없습니다.
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
