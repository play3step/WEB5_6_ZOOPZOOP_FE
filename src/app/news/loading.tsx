export default function NewsLoading() {
  return (
    <div>
      <div className="w-full flex flex-col p-10 min-h-[calc(100vh-72px)]">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">뉴스</h1>
          <div className="flex flex-wrap gap-4">
            {[...Array(8)].map((_, index) => (
              <NewsCardSkeleton key={index} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <div className="h-10 w-80 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

const NewsCardSkeleton = () => {
  return (
    <div className="w-[320px] h-[371px] rounded-lg shadow-md bg-white overflow-hidden">
      <div className="w-full h-[200px] bg-gray-200 animate-pulse"></div>

      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
