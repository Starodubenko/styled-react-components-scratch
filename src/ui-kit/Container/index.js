import { default as styledThemeing } from 'styled-theming';
import styled from 'styled-components'
import { LIGHT_STYLE, DARK_STYLE, STYLE_MODE } from '../constants';

// todo add default theme right here in ui-kit module and will use it if there are no 'props.theme'.
const backgroundColor = styledThemeing(STYLE_MODE, {
  [LIGHT_STYLE]: props => props.theme.container.backgroundColor.light,
  [DARK_STYLE]: props => props.theme.container.backgroundColor.dark,
});

const borderColor = styledThemeing(STYLE_MODE, {
  [LIGHT_STYLE]: props => props.theme.container.borderColor.light,
  [DARK_STYLE]: props => props.theme.container.borderColor.dark,
});

export const Container = styled.div`
    background-color: ${backgroundColor};
    border: 1px solid ${borderColor};
`