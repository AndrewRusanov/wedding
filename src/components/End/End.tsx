import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { FC, useEffect, useState } from 'react'
import end from '../../assets/end.svg'
import styles from './End.module.css'

dayjs.extend(duration)

const End: FC = () => {
	const targetTime = dayjs('2025-09-13T15:30:00')

	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	const [isCountDownFinished, setIsCountDownFinished] = useState(false)

	useEffect(() => {
		const timer = setInterval(() => {
			const now = dayjs()
			const diff = targetTime.diff(now)

			if (diff <= 0) {
				setIsCountDownFinished(true)
				clearInterval(timer)
				return
			}

			const durationObj = dayjs.duration(diff)

			setTimeLeft({
				days: Math.floor(durationObj.asDays()),
				hours: durationObj.hours(),
				minutes: durationObj.minutes(),
				seconds: durationObj.seconds(),
			})
		}, 1000)

		return () => clearInterval(timer)
	}, [targetTime])

	return (
		<div className={styles.container}>
			<img src={end} />
			{!isCountDownFinished && <div className={styles.time}>
				<h5 className={styles.time_title}>до свадьбы</h5>
				<div className={styles.time_container}>
					<div className={styles.time_item}>
						<span>{timeLeft.days.toString().padStart(2, '0')}</span>
						<span>дней</span>
					</div>
					<div className={styles.time_item}>
						<span>{timeLeft.hours.toString().padStart(2, '0')}</span>
						<span>часов</span>
					</div>
					<div className={styles.time_item}>
						<span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
						<span>минут</span>
					</div>
					<div className={styles.time_item}>
						<span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
						<span>секунд</span>
					</div>
				</div>
			</div>}
		</div>
	)
}

export default End
