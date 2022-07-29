import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faPlus,
	faEllipsisVertical,
	faEarthAsia,
	faKeyboard,
	faGear,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion, faUser } from '@fortawesome/free-regular-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // optional
import { Link } from 'react-router-dom'

import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'
import routesConfig from '~/config/routes'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					code: 'en',
					title: 'English',
				},
				{
					code: 'vi',
					title: 'Tiếng Việt',
				}
			],
		},
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts',
	},
]

function Header() {
	const currentUser = true

	const handleMenuChange = (menuItem) => {
		console.log(menuItem)
	}

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
			to: '/@hoaa',
		},
		{
			icon: (
				<svg
					className='css-g0144v'
					width='1em'
					height='1em'
					viewBox='0 0 20 20'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999 10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 0.833496 9.99992Z'
					></path>
					<path
						fillRule='evenodd'
						clipRule='evenodd'
						d='M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335 11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016 11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 11.4961V4.99992H12.141Z'
					></path>
				</svg>
			),
			title: 'Get coins',
			to: '/coin',
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Settings',
			to: '/settings',
		},
		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: 'Log out',
			to: '/logout',
			separate: true,
		},
	]

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<Link className={cx('logo-btn')} to={routesConfig.home}>
					<img src={images.logo} alt='TikTok' />
				</Link>

				<Search />

				<div className={cx('actions')}>
					<Button upload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
						Upload
					</Button>
					{currentUser ? (
						<>
							<Tippy content='Messages' placement='bottom'>
								<button className={cx('message-btn')}>
									<MessageIcon />
								</button>
							</Tippy>
							<Tippy content='Inbox'>
								<button className={cx('inbox-btn')}>
									<InboxIcon />
								</button>
							</Tippy>
						</>
					) : (
						<Button primary>Log in</Button>
					)}
					<Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
						{currentUser ? (
							<Image
								className={cx('avatar')}
								src='https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ddcb57a7bcd8bf0fc01c18338b2caf59~c5_300x300.webp?x-expires=1658390400&x-signature=%2FF8uvaPZmmVxVjIYHuXWmPMRNSw%3D'
								alt='Hoaa'
								fallback='http://localhost:3000/static/media/logo.0b7073b19f84d4f3872f5207f54f4774.svg'
							/>
						) : (
							<button className={cx('more-btn')}>
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						)}
					</Menu>
				</div>
			</div>
		</header>
	)
}

export default Header
