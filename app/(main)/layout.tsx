import Footer from '@/components/Footer'
import Header from '@/components/Header'
import NotificationBar from '@/components/NotificationBar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NotificationBar />
      <Header />
      <div className='relative flex w-full flex-col'>
        <main className='flex-auto'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
