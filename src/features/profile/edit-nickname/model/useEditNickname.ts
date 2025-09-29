import { useUserStore } from '@/entities/user'
import { updateNickname } from '@/entities/user'
import { useMutation } from '@tanstack/react-query'

const useUpdateNickname = () => {
  // 이 훅에서 바로 전역 상태 관리 훅을 호출하면 결합도가 올라가서 재사용성이 떨어진다.
  // 그렇다고 tanstack query와 zustand 함수를 분리하고 또 조합 훅을 만들어서 또 다시 합친다?
  // 컴포넌트 단위에서 둘다 호출한다?
  // 뭐가 맞는건지 잘 모르겠음
  const updateUser = useUserStore(state => state.updateUser)
  return useMutation({
    mutationFn: (nickname: string) => updateNickname(nickname),
    onSuccess: ({ name }) => {
      // 성공 로직
      updateUser({ name })
    },
    onError: () => {
      // 실패 로직
    }
  })
}
export default useUpdateNickname
