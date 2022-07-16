import Header from './Header'

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div className='container'>
				<div className='content'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default DefaultLayout