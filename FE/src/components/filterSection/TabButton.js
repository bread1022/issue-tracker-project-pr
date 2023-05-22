import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../styles/color';
import { Button } from '../button/Button';

export const TabButton = ({
  type,
  buttonColor,
  hoverColor,
  backgroundColor,
  leftext,
  rightText,
  leftIconType,
  rightIconType,
  isIcon,
  isLeftPosition
}) => {
  const navigate = useNavigate();
  return (
    <MyTabButton>
      <MyLeftTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          buttonText={leftext}
          iconType={leftIconType}
          isIcon={isIcon}
          isLeftPosition={isLeftPosition}
          onClick={() => navigate('/LabelList')}
        />
      </MyLeftTabButton>
      <MyRightTabButton>
        <Button
          type={type}
          buttonColor={buttonColor}
          hoverColor={hoverColor}
          backgroundColor={backgroundColor}
          buttonText={rightText}
          iconType={rightIconType}
          isIcon={isIcon}
          isLeftPosition={isLeftPosition}
          onClick={() => navigate('/MilestoneList')}
        />
      </MyRightTabButton>
    </MyTabButton>
  );
};

const MyTabButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 320px;
  background: ${colors.gray100};
  border: 1px solid ${colors.gray300};
  border-radius: 11px;

  button {
    margin: 0 auto;
  }

  div {
    width: 100%;

    &: hover {
      background: ${colors.gray200};
    }
  }
`;

const MyLeftTabButton = styled.div`
  border-radius: 11px 0px 0px 11px;
`;

const MyRightTabButton = styled.div`
  border-left: 1px solid ${colors.gray300};
  border-radius: 0px 11px 11px 0px;
`;
