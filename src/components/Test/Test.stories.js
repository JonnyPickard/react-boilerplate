import React from 'react';

import {
  storiesOf
} from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';


import { Test, testThemeDefault } from '.';

const props = {
  theme: testThemeDefault
}

storiesOf('Test', module).addDecorator(withKnobs).add('default', () => ( <Test { ...props} />));
