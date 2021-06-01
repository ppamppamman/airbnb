import styled from 'styled-components';
import Modal from '../../../../../Common/Modal';
import FeeGraphSlider from './FeeGraphSlider';
import FeeInfo from './FeeInfo';

export type FeeDataType = {
  from: number, // 시작
  to: number,   // 끝
  unit: number, // 단위
  data: number[],
}

export interface IFeeGraph {
  resData: FeeDataType
}

const FEE_DATA: FeeDataType = {
  from: 10000,
  to: 1000000,
  unit: 1000,
  data :[...Array(100)].map((_) => Math.floor(Math.random() * 1000000)).sort((a, b)=> a - b),
};

const FeeModal = ({ ...props }) => {
  const resData : FeeDataType = FEE_DATA;

  return (
    <FeeModalLayout {...props}>
      <FeeModalRow>
        <FeeInfo resData={resData} />
      </FeeModalRow>
      <FeeModalRow>
        <FeeGraphSlider resData={resData} />
      </FeeModalRow>
    </FeeModalLayout>
  );
};

export default FeeModal;

// --- Styled Components ---
const FeeModalLayout = styled(Modal)`
  width: 40%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 48px;
  border-radius: 40px;

  flex-direction: column;
`;

const FeeModalRow = styled.div`
  & + & {
    margin-top: 8px;
  }
  width: 100%;
`;