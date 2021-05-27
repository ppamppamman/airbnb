import styled from 'styled-components';
import { Link } from '../util/MyRouter';
import { ResponsiveFluid } from '../components/Common/ResponsiveFluid';
import Map from '../components/Map/Map';

function SearchPage() {
  return (
    <SearchPageLayout>
      
      <Link to={'/'}> main test </Link> {/* for test*/}
      <SearchPageCardsSection />
      <Map />
      {/* for test */}

    </SearchPageLayout>
  );
}

const SearchPageLayout = styled(ResponsiveFluid)`
  margin: auto;
`;

const SearchPageCardsSection = styled.section`
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;

  display:flex;
  flex-direction: column;

  /* for test  */
  background-color: blue;
  height: 100vh;
`

export default SearchPage;