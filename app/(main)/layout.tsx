export default function Layout({ children }: { children: React.ReactNode }) {
  return (
		<>
			<div className="header">Header</div>
      <main className='flex-auto'>{children}</main>
    </>
  )
}
