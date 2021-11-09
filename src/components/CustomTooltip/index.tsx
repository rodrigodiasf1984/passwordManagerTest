import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import theme from 'theme';
import { converterToRem } from 'utils/converterToRem';

const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: ${theme.palette.common.white};
    color: ${theme.palette.text.primary};
    box-shadow: 0px 8px 8px #00000029;
    padding: ${converterToRem(20)}rem;
    border: 1px solid ${theme.palette.primary.main};
    font-size: ${converterToRem(14)}rem;
    & .css-kudwh-MuiTooltip-arrow {
      color: ${theme.palette.primary.main} !important;
    }
  }
`;
const CustomTooltip: React.FC = () => {
  const { t } = useTranslation();
  return (
    <StyledTooltip placement="top" arrow title={`${t('form.passwordToolTip')}`}>
      <IconButton aria-label="info">
        <InfoOutlinedIcon />
      </IconButton>
    </StyledTooltip>
  );
};

export default CustomTooltip;
