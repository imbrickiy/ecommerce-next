import Header from '@/components/Header'
import NotificationBar from '@/components/NotificationBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NotificationBar/>
			<Header/>
      <main className='flex-auto'>{children}</main>
    </>
  )
}
