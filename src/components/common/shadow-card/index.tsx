import { BORDER_RADIUS } from '../../../../temp222/src/libs/styled-components'
import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type ShadowCardProps = PropsWithChildren & {
	width: string
	height: string
	radius: string
}

export const ShadowCard = ({
	width = '100%',
	height = 'fit-content',
	radius = BORDER_RADIUS.middle,
	children,
}: Partial<ShadowCardProps>) => {
	return (
		<S.Container {...{ width }} {...{ height }} {...{ radius }}>
			{children}
		</S.Container>
	)
}

const Container = styled.div<Partial<ShadowCardProps>>`
	width: ${({ width }) => width};
	min-width: fit-content;
	max-width: 100%;
	height: ${({ height }) => height};
	min-height: 3rem;
	border-radius: ${({ radius }) => radius};
	box-shadow: 0.3rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
	padding: 0.5rem 1rem;
`

const S = {
	Container,
}
