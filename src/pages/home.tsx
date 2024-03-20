import MainLogo from '@/assets/logo/main_logo_545x155.webp'
import { CenterBox, ShadowCard } from '@/components'
import { Spacer } from '@/components/common/spacer'
import {
	AlignCenter,
	BORDER_RADIUS,
	COLOR,
	DirectionColumn,
	FONT_SIZE,
	FONT_WEIGHT,
	FlexCenter,
} from '@/libs/styled-components'
import styled from 'styled-components'

/** HOME */
const Home = () => {
	const categories = ['감염병', '선청성 질환', '신생물']
	const healthInfoSummaries = [
		{
			title: '아토피에 좋은 음식',
			imgSrc: 'https://source.unsplash.com/random/300×300/?skin',
		},
		{
			title: '🥕 당근 먹어야함',
			imgSrc: 'https://source.unsplash.com/random/300×300/?carrot',
		},
		{
			title: '비타민 관련 정보',
			imgSrc: 'https://source.unsplash.com/random/300×300/?vitamin',
		},
	]
	return (
		<>
			<CenterBox>
				<S.CategoryList>
					{categories.map((category, idx) => {
						return (
							<ShadowCard width='fit-content' height='3rem' key={idx}>
								<S.CategoryText>{category}</S.CategoryText>
							</ShadowCard>
						)
					})}
				</S.CategoryList>
			</CenterBox>

			<CenterBox bgcolor={COLOR.primary[500]} height='12rem'>
				<S.ImageWrapper>
					<S.BrandImage src={MainLogo} alt='HearUR_Logo' height='100%' />
				</S.ImageWrapper>
			</CenterBox>

			<Spacer height='1rem' />

			<CenterBox>
				<S.HealthInfoList>
					{healthInfoSummaries.map((summary, idx) => {
						return (
							<ShadowCard key={idx}>
								<S.HealthInfoWrapper>
									<S.SummaryTitle>{summary.title}</S.SummaryTitle>
									<Thumbnail src={summary.imgSrc} />
								</S.HealthInfoWrapper>
							</ShadowCard>
						)
					})}
				</S.HealthInfoList>
			</CenterBox>
		</>
	)
}

export default Home

const CategoryList = styled.div`
	${AlignCenter}
	gap: 2rem;
	width: 95vw;
	height: 5rem;
	overflow-x: scroll;
`
const CategoryText = styled.p`
	${FlexCenter}
	text-align: center;
	font-size: ${FONT_SIZE.ti};
	font-weight: ${FONT_WEIGHT.light};
	white-space: nowrap;
`
const BrandImage = styled.img`
	height: '100%';
	object-fit: contain;
`
const ImageWrapper = styled.div`
	height: 100%;
	padding: 1rem;
	${FlexCenter}
`

const HealthInfoWrapper = styled.div`
	${AlignCenter}
	justify-content: space-between;
`

const HealthInfoList = styled.div`
	${DirectionColumn}
	width: 100%;
	gap: 2rem;
`
const SummaryTitle = styled.p`
	width: 60%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`

const Thumbnail = styled.img`
	height: 8rem;
	aspect-ratio: 1/1;
	border-radius: ${BORDER_RADIUS.middle};
`

const S = {
	CategoryList,
	CategoryText,
	BrandImage,
	ImageWrapper,
	HealthInfoWrapper,
	HealthInfoList,
	Thumbnail,
	SummaryTitle,
}
