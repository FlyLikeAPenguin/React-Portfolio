import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 1px;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);  padding: .5rem 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 7px auto;
  border: 0;
  background: #13ADC7;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0.75rem 0;
`;

export const ExternalLinks = styled.a`
color:#FFFFFF;
font-size: 1.6rem;
font-weight:800;
letter-spacing:2px;
padding-top: 1rem;
padding-bottom: 1rem;
padding-right: 2rem;
padding-left: 2rem;
margin-bottom 1rem;
border-radius: 10px;
transition: 0.5s;
&:hover{
}
grid-area: 1 / 5 / 2 / 6;
display: flex;
justify-content: space-around;
align-items: center;
@media ${(props) => props.theme.breakpoints.sm} {
  align-items: center;
  grid-area: 1 / 4 / 2 / 6;
}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-evenly;
padding-top: 2rem;
padding-bottom: 1rem;
`
export const Tag = styled.li`
color: #EEEEEE;
font-size: 1.5rem;
`

export const ObjectivesList = styled.ul`
  width: 100%;  
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  list-style-type: inside;
`

export const ObjectivesListItem = styled.li`
  list-style: inside;
`
export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`;