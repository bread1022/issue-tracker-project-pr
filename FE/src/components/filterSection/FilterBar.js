import React, { useState, useContext } from 'react';

import styled from 'styled-components';

import { Icon } from '../../assets/Icon';
import { FilterStateContext } from '../../pages/IssueList';
import { initialFilterState } from '../../stores/filterStateReducer';
import { colors } from '../../styles/color';
import { fontSize, fontType } from '../../styles/font';
import { Button } from '../button/Button';
import { Dropdown } from '../dropdown/Dropdown';

const filterTabOptions = [
  { id: 'isOpen', option: '열린 이슈' },
  { id: 'isWrittenByMe', option: '내가 작성한 이슈' },
  { id: 'isAssignedToMe', option: '나에게 할당된 이슈' },
  { id: 'commentedByMe', option: '내가 댓글을 남긴 이슈' },
  { id: '!isOpen', option: '닫힌 이슈' }
];

const filterBtnOptions = {
  dropdown: {
    tabId: 'filter',
    tabName: '필터',
    tabOptions: filterTabOptions,
    buttonOption: { size: 's' },
    isLeft: true
  },
  searchIcon: {
    iconType: 'search',
    fill: colors.gray600,
    width: 11
  },
  textInput: {
    type: 'text',
    placeholder: 'Search all issues'
  },
  removeFilter: {
    color: 'ghostGray',
    iconType: 'xSquare',
    isIcon: true,
    buttonText: '현재의 검색 필터 및 정렬 지우기',
    isLeftPosition: true
  }
};

// TODO : uncontrolled component, forwardRef
export const FilterBar = (handleIsOpenTabClick) => {
  const { filterState, filterStateDispatch } = useContext(FilterStateContext);
  const [isFilterTextFocus, setIsFilterTextFocus] = useState(false);
  const [value, setValue] = useState('is:issue is:open');
  const isFiltered = filterState !== initialFilterState;

  return (
    <MyfilterBarBox>
      <MyfilterBar>
        <Dropdown
          {...filterBtnOptions.dropdown}
          handleIsOpenTabClick={handleIsOpenTabClick}
        />
        <MyTextInput
          isFocus={isFilterTextFocus}
          onFocus={() => setIsFilterTextFocus(true)}
          onBlur={() => setIsFilterTextFocus(false)}
        >
          <Icon {...filterBtnOptions.searchIcon} />
          <input
            value={value}
            {...filterBtnOptions.textInput}
            onChange={(e) => setValue(e.target.value)}
          />
        </MyTextInput>
      </MyfilterBar>
      {isFiltered && (
        <Button
          {...filterBtnOptions.removeFilter}
          onClick={() => filterStateDispatch({ type: 'RESET-FILTER' })}
        />
      )}
    </MyfilterBarBox>
  );
};

const MyfilterBarBox = styled.div`
  > button {
    padding: 5px 10px;
    ${fontSize.S}
  }
`;

const MyfilterBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 11px;
  border: 1px solid ${colors.gray300};
  > div:first-child {
    border-radius: 11px 0px 0px 11px;
    border-right: 1px solid ${colors.gray300};
    &:hover {
      background: ${colors.gray200};
    }
    > button {
      font-size: 14px;
    }
  }

  > div:last-child {
    height: 100%;
    padding: 0 24px;
  }

  button {
    ${fontType.BOLD}
  }
`;

const MyTextInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 0px 11px 11px 0px;
  width: 472px;
  gap: 10px;
  ${fontType.LIGHT}
  background: ${({ isFocus }) =>
    isFocus ? `${colors.gray50}` : `${colors.gray200}`};
  box-shadow: ${({ isFocus }) => (isFocus ? `0 0 0 1px #79b1ff` : null)};

  & input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 15px;
    ${fontType.REGULAR}
    color: ${colors.gray600};
    transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    &::placeholder {
      color: ${colors.gray700};
    }
  }
`;
