import React, { memo } from 'react';
import { injectIntl } from 'react-intl';

import { Wrapper, Input } from './styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchInput = memo((props) => {
  const {
    handleIcon,
    placeholderId,
    intl: { formatMessage }
  } = props;

  return (
    <Wrapper>
      <Input
        placeholder={ placeholderId
          ? formatMessage({ id: placeholderId })
          : null}
      />
      <SearchIcon onClick={handleIcon}/>
    </Wrapper>
  )
})

SearchInput.defaultProps = {
  handleIcon: () => {},
  placeholderId: null,
};

export default injectIntl(SearchInput);
