import {
  keepPreviousData,
  useMutation,
  UseMutationOptions,
  useQuery
} from '@tanstack/react-query'
import {
  deleteSpaceClient,
  fetchSpaceListClient,
  leaveSpaceClient,
  postSpaceClient,
  updateSpaceNameClient
} from '../api/space.client'
import { SpacePagination, SpaceStatus } from './type'
import { spaceQueryKeys } from './queryKey'

interface SpaceQuery {
  pagination: {
    currentPage: number
    currentState?: SpaceStatus
    size?: number
    sort?: string[]
  }
}
// 스페이스 목록 조회
export const useSpaceQuery = ({ pagination }: SpaceQuery) => {
  const { data, isPending, isFetching } = useQuery<
    SpacePagination | null,
    Error
  >({
    queryKey: spaceQueryKeys.state(
      pagination.currentPage,
      pagination.currentState
    ),
    queryFn: () =>
      fetchSpaceListClient({
        page: pagination.currentPage,
        size: pagination.size,
        sort: pagination.sort,
        state: pagination.currentState
      }),
    placeholderData: keepPreviousData
  })

  return {
    spaces: data,
    isPending,
    isFetching
  }
}

type CreateSpaceResponse = {
  name: string
} | null

// 스페이스 생성
export const useCreateSpaceMutation = (
  options: Omit<
    UseMutationOptions<CreateSpaceResponse, Error, string>,
    'mutationFn' | 'mutationKey'
  >
) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['create-space'],
    mutationFn: (payload: string) => postSpaceClient(payload),
    ...options
  })

  return {
    mutateCreateSpace: mutate,
    isCreating: isPending
  }
}

// 스페이스 삭제
export const useDeleteSpaceMutation = (
  options: Omit<
    UseMutationOptions<void, Error, number>,
    'mutationFn' | 'mutationKey'
  >
) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['delete-space'],
    mutationFn: (spaceId: number) => deleteSpaceClient(spaceId),
    ...options
  })

  return {
    mutateDeleteSpace: mutate,
    isDeleting: isPending
  }
}

type EditSpaceResponse = {
  name: string
}

// 스페이스 이름 수정
export const useEditSpaceNameMutation = (
  options: Omit<
    UseMutationOptions<
      EditSpaceResponse,
      Error,
      {
        spaceId: number
        name: string
      }
    >,
    'mutationFn' | 'mutationKey'
  >
) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['edit-space'],
    mutationFn: ({ name, spaceId }: { spaceId: number; name: string }) =>
      updateSpaceNameClient(spaceId, name),
    ...options
  })

  return {
    mutateEditSpaceName: mutate,
    isUpdating: isPending
  }
}

// 스페이스 나가기
export const useLeaveSpaceMutation = (
  options: Omit<
    UseMutationOptions<void, Error, number>,
    'mutationFn' | 'mutationKey'
  >
) => {
  const { mutate, isPending } = useMutation({
    mutationKey: ['leave-member'],
    mutationFn: payload => leaveSpaceClient(payload),
    ...options
  })

  return {
    mutateLeaveSpace: mutate,
    isLeaving: isPending
  }
}
