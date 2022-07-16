import Header from './Header'
import Sidebar from './Sidebar'

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div className='container'>
				<Sidebar />
				<div className='content'>
					{children}
				</div>
			</div>
		</div>
	)
}

export default DefaultLayout