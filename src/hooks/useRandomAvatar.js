export function useRandomAvatar() {
  const nroRandom = Math.floor(Math.random() * 1000)
  const avatarRandom = `https://avatars.dicebear.com/api/avataaars/${nroRandom}.svg`
  return avatarRandom
}
