export { fetchUser, updateUserNickname } from './api/user.controller'
export { getUser, updateNickname } from './api/clientApi'
export { useUserStore, useUserQuery } from './model'
export type {
  User,
  Nickname,
  UserResponse,
  UpdateNicknameResponse
} from './model'
