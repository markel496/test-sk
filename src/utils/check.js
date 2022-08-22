export const checkingForApplyBtn = (arr1, arr2) => {
  const str1 = arr1.map((obj) => obj.id).join('')
  const str2 = arr2.map((obj) => obj.id).join('')
  return str1 !== str2 ? true : false
}
