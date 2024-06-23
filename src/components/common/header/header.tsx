"use client";
import { AlignCenter, COLOR } from '@/libs/styled-components'
import styled from 'styled-components'

export const Header = () => {
	return (
		<S.HeaderWrapper>
			<S.LogoText>HearUR</S.LogoText>
		</S.HeaderWrapper>
	)
}

const HeaderWrapper = styled.div`
	height: 6rem;
	border-bottom: 0.5px solid ${COLOR.grayScale[1200]};
	${AlignCenter}
	padding: 1rem;
`
const LogoText = styled.p`
	color: ${COLOR.grayScale[0]};
`
const S = {
	HeaderWrapper,
	LogoText,
}
