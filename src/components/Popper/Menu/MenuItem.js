/* eslint-disable react/prop-types */
import Button from '~/components/Button'
import classNames from 'classnames/bind'
import styles from './Menu.module.scss'

const cx = classNames.bind(styles)

function MenuItem({ data, onClick, onChange }) {
	const classes = cx('menu-item', {
		separate: data.separate,
	})

	return (
		<Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick} onChange={onChange}>
			{data.title}
		</Button>
	)
}

export default MenuItem
