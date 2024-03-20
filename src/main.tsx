import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './libs/react-router-dom/router.tsx'
import { GlobalStyles } from './libs/styled-components/global-styles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalStyles />
		<RouterProvider {...{ router }} />
	</React.StrictMode>,
)
