/* eslint-disable react/prop-types */
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Image from '~/components/Image'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
	return (
		<Link to={`/@${data.nickname}`} className={cx('wrapper')}>
			<Image
				className={cx('avatar')}
				src={data.avatar}
				alt={data.full_name}
			/>
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>{data.full_name}</span>
					{data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
				</h4>
				<span className={cx('username')}>{data.nickname}</span>
			</div>
		</Link>
	)
}

export default AccountItem
