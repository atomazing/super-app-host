import { useEffect, useState } from 'react'
import { loadTelegram } from '@atomazing-org/telegram-web-app'

import { DynamicModule } from '$utils'

const modulePath = '/timesheet.js'

export const Layout = () => {
	const [telegramVersion, setTelegramVersion] = useState<string | null>(null)

	useEffect(() => {
		loadTelegram()
			.then((Telegram) => {
				Telegram?.WebApp?.ready()
				setTelegramVersion(Telegram?.WebApp?.version ?? null)
			})
			.catch(console.error)
	}, [])

	return (
		<>
			<header>Header – Telegram – {telegramVersion ?? 'loading...'}</header>
			<DynamicModule path={modulePath} />
		</>
	)
}
