import { default as styledThemeing } from 'styled-theming';
import styled from 'styled-components'
import {
  LIGHT_STYLE,
  DARK_STYLE,
  STYLE_MODE,
} from '../constants';

// todo add default theme right here in ui-kit module and will use it if there are no 'props.theme'.
const backgroundColor = styledThemeing.variants(STYLE_MODE, 'variant', {
  default: { 
    [LIGHT_STYLE]: props => props.theme.button.backgroundColor.default.light,
    [DARK_STYLE]: props => props.theme.button.backgroundColor.default.dark,
   },
  primary: { 
    [LIGHT_STYLE]: props => props.theme.button.backgroundColor.primary.light,
    [DARK_STYLE]: props => props.theme.button.backgroundColor.primary.dark, 
  },
  success: { 
    [LIGHT_STYLE]: props => props.theme.button.backgroundColor.success.light,
    [DARK_STYLE]: props => props.theme.button.backgroundColor.success.dark,
   },
  warning: { 
    [LIGHT_STYLE]: props => props.theme.button.backgroundColor.warning.light,
    [DARK_STYLE]: props => props.theme.button.backgroundColor.warning.dark,
   },
  error: { 
    [LIGHT_STYLE]: props => props.theme.button.backgroundColor.error.light,
    [DARK_STYLE]: props => props.theme.button.backgroundColor.error.dark,
   },
});

const borderColor = styledThemeing.variants(STYLE_MODE, 'variant', {
  default: { 
    [LIGHT_STYLE]: props => props.theme.button.borderColor.default.light,
    [DARK_STYLE]: props => props.theme.button.borderColor.default.dark,
   },
  primary: { 
    [LIGHT_STYLE]: props => props.theme.button.borderColor.primary.light,
    [DARK_STYLE]: props => props.theme.button.borderColor.primary.dark, 
  },
  success: { 
    [LIGHT_STYLE]: props => props.theme.button.borderColor.success.light,
    [DARK_STYLE]: props => props.theme.button.borderColor.success.dark,
   },
  warning: { 
    [LIGHT_STYLE]: props => props.theme.button.borderColor.warning.light,
    [DARK_STYLE]: props => props.theme.button.borderColor.warning.dark,
   },
  error: { 
    [LIGHT_STYLE]: props => props.theme.button.borderColor.error.light,
    [DARK_STYLE]: props => props.theme.button.borderColor.error.dark,
   },
});

const textColor = styledThemeing(STYLE_MODE, {
  [LIGHT_STYLE]: props => props.theme.button.textColor.light,
  [DARK_STYLE]: props => props.theme.button.textColor.dark,
});

export const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: ${backgroundColor};
  border: 1px solid ${borderColor};
  color: ${textColor};
  outline: none;
`