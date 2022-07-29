import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import * as searchServices from '~/apiServices/searchServices'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountItem from '~/components/AccountItem'
import styles from './Search.module.scss'
import { SearchIcon } from '~/components/Icons'
import { useDebounce } from '~/hooks'

const cx = classNames.bind(styles)

function Search() {
	const [searchValue, setSearchValue] = useState('')
	const [searchResult, setSearchResult] = useState([])
	const [showResult, setShowResult] = useState(true)
	const [loading, setLoading] = useState(false)

	const inputRef = useRef()

	const debounced = useDebounce(searchValue, 500)
	useEffect(() => {

		if (!debounced.trim()) {
			setSearchResult([])
			return
		}

		const fetchApi = async () => {
			setLoading(true)
			try {
				const result = await searchServices.search(debounced)
				setSearchResult(result)
				setLoading(false)
			} catch (error) {
				setLoading(false)
			}
		}

		fetchApi()
	}, [debounced])

	const handleClear = () => {
		setSearchValue('')
		setSearchResult([])
		inputRef.current.focus()
	}

	const handleHideResult = () => {
		setShowResult(false)
	}

	const handleChange = (e) => {
		const searchValue = e.target.value
		// setSearchValue(searchValue.replace(/^\s+/g, ''))
		if (!searchValue.startsWith(' ')) {
			setSearchValue(searchValue)
		}
	}

	const handleSubmit = () => {

	}

	return (
		// Using a wrapper <div> or <span> tag around the reference element solves 
		// this by creating a new parentNode context. 
		<div>
			<HeadlessTippy
				interactive={true}
				visible={showResult && searchResult.length > 0}
				render={(attrs) => (
					<div className={cx('search-result')} tabIndex='-1' {...attrs}>
						<PopperWrapper>
							<h4 className={cx('search-title')}>Accounts</h4>
							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} onClick={handleHideResult} />
							))}
						</PopperWrapper>
					</div>
				)}
				onClickOutside={handleHideResult}
			>
				<div className={cx('search')}>
					<input
						ref={inputRef}
						value={searchValue}
						placeholder='Search accounts and videos'
						spellCheck={false}
						onChange={handleChange}
						onFocus={() => setShowResult(true)}
					/>
					{!!searchValue && !loading &&
						<button className={cx('clear')} onClick={handleClear}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					}

					{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
					<button className={cx('search-btn')} onClick={handleSubmit} onMouseDown={(e) => e.preventDefault()}>
						<SearchIcon />
					</button>
				</div>
			</HeadlessTippy>
		</div>
	)
}

export default Search
