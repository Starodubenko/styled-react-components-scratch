import { default as styledThemeing } from 'styled-theming';
import styled from 'styled-components'
import { LIGHT_STYLE, DARK_STYLE, STYLE_MODE } from '../constants';

const labelColor = styledThemeing(STYLE_MODE, {
  [LIGHT_STYLE]: props => props.theme.label.color.light,
  [DARK_STYLE]: props => props.theme.label.color.dark,
});

export const Label = styled.label`
    color: ${labelColor};
`