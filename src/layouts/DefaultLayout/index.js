import classNames from 'classnames/bind'
import Header from '../components/Header'
import styles from './DefaultLayout.module.scss'
import Sidebar from './Sidebar'

const cx = classNames.bind(styles)

// eslint-disable-next-line react/prop-types
function DefaultLayout({ children }) {
	return (
		<div className={cx('wrapper')}>
			<Header />
			<div className={cx('container')}>
				<Sidebar />
				<div className={cx('content')}>{children}</div>
			</div>
		</div>
	)
}

export default DefaultLayout
