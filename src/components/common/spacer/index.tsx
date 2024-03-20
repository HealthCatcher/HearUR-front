import styled from 'styled-components'
import type { SpacerProps } from './spacer.type'

export const Spacer = ({ width = '0', height = '0' }: Partial<SpacerProps>) => {
	return <S.SpacerBase {...{ width }} {...{ height }} />
}
const SpacerBase = styled.div<Partial<SpacerProps>>`
	display: inline-block;
	min-height: 0.0000001rem;
	height: ${({ height }) => height};
	min-width: 0.000001rem;
	width: ${({ width }) => width};
`
const S = {
	SpacerBase,
}
