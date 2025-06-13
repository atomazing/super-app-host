import { Telegram } from '@atomazing-org/telegram-web-app'
import { MODULE_ENTRYPOINT } from '@atomazing-org/vite-config/constants'

import { DynamicModule } from '$utils'

const isDevRelease = import.meta.env.MODE === 'dev-release'
const path = isDevRelease ? MODULE_ENTRYPOINT : '/timesheet.js'

export const Layout = () => (
	<>
		<header>Header - Telegram - {Telegram?.WebApp?.version}</header>
		<DynamicModule path={path} />
	</>
)
