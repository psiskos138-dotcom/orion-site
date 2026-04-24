export function isAdmin(userId: string | null | undefined): boolean {
  return !!userId && userId === process.env.ADMIN_USER_ID
}
