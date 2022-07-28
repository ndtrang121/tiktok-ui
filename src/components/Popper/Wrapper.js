import className from 'classnames/bind'
import styles from './Popper.module.scss'

const cx = className.bind(styles)

// eslint-disable-next-line react/prop-types
function Wrapper({ children, className }) {
	return <div className={cx('wrapper', { [className]: className })}>{children}</div>
}

export default Wrapper
