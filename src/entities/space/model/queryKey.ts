export const spaceQueryKeys = {
  space: (spaceId: string) => ['space', spaceId],
  page: (spaceId: string, currentPage: number) => [
    'space',
    spaceId,
    'page',
    currentPage
  ],
  state: (currentPage: number, currentState?: string) => [
    'space',
    'page',
    currentPage,
    'state',
    currentState
  ]
}
