export const validateKeyword = (
  keyword: string,
  existingKeywords: string[]
) => {
  if (keyword.trim() === '') {
    return { isValid: false, message: '검색 키워드를 입력해주세요.' }
  }

  if (existingKeywords.length >= 4) {
    return {
      isValid: false,
      message: '최대 4개의 키워드만 입력할 수 있습니다.'
    }
  }

  if (existingKeywords.includes(keyword)) {
    return { isValid: false, message: '이미 검색된 키워드입니다.' }
  }

  return { isValid: true, message: '' }
}
