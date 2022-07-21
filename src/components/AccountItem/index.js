import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<img className={cx('avatar')} src='https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658390400&x-signature=%2FF8uvaPZmmVxVjIYHuXWmPMRNSw%3D' alt='Hoaa' />
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>Nguyen Van A</span>
					<FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
				</h4>
				<span className={cx('username')}>nguyenvana</span>
			</div>
		</div>
	)
}

export default AccountItem