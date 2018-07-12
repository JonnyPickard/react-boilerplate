// @flow

import React, { PureComponent } from 'react';
import type { Element } from 'react';

import classNames from 'classnames';

type Props = {
  /** CSS modules style object */
  theme: {
    [css_modules_class: string]: string
  },
  extendStyle?: string
};

/**
 * Test Component
 */
class Test extends PureComponent<Props> {
  /**
   * Render
   * @return {Element<*>} JSX
   */
  render() {
    const { theme, extendStyle } = this.props;
    return (
      <div className={classNames(theme.test, extendStyle)}>
        <h1>Hello from Test</h1>
      </div>
    );
  }
}

export default Test;
