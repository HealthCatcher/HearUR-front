import { CenterBox } from '@/components'
import { COLOR } from '@/libs/styled-components'
import styled from 'styled-components'

export const Header = () => {
	return (
		<CenterBox bgColor={COLOR.primary[600]}>
			<S.LogoText>HearUR</S.LogoText>
		</CenterBox>
	)
}

const LogoText = styled.h4`
	color: ${COLOR.grayScale[1500]};
`
const S = {
	LogoText,
}
