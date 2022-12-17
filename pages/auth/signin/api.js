export const getUserData = () => {
  return new Promise((resolve, reject) => {
    const getRemember = localStorage.getItem(`Remember`);
    const getRememberVal = JSON.parse(getRemember);
    const data = {
      email: getRememberVal?.email,
      password: getRememberVal?.password
    }
    setTimeout(() => resolve(data), 1000)
  })
}