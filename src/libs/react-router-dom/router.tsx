import { Header } from '@/components/common'
import { ExperienceNotice, HealthInformation, Home, ProductDetail, SelfDiagnosis } from '@/pages'
import { Outlet, createBrowserRouter } from 'react-router-dom'

const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/experience-notice',
				element: <ExperienceNotice />,
			},
			{
				path: '/health-information',
				element: <HealthInformation />,
			},
			{
				path: '/product-detail/:product-id',
				element: <ProductDetail />,
			},
			{
				path: '/self-diagnosis',
				element: <SelfDiagnosis />,
			},
		],
	},
])
