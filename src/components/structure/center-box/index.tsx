import { FlexCenter } from '@/libs/styled-components/utils'
import type { ReactNode } from 'react'
import styled from 'styled-components'

type CenterBoxProps = {
	width: string
	height: string
	bgcolor: string
	children: ReactNode
}

export const CenterBox = ({
	width = '100%',
	height = 'fit-content',
	bgcolor = 'transparent',
	children,
}: Partial<CenterBoxProps>) => {
	return (
		<S.Wrapper {...{ width }} {...{ height }} {...{ bgcolor }}>
			<S.Container>{children}</S.Container>
		</S.Wrapper>
	)
}

const Wrapper = styled.div<Partial<CenterBoxProps>>`
	${FlexCenter}
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	background-color: ${({ bgcolor }) => bgcolor};
	padding: 0.5rem 1rem;
`
const Container = styled.div`
	width: 100%;
	height: 100%;
	max-width: 100rem;
`
const S = {
	Wrapper,
	Container,
}
