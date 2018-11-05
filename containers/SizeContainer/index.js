import React from 'react';
import PropTypes from 'prop-types';

import { breakpoint } from '../../constants';

class SizeContainer extends React.Component {
  state = {
    isSmall: false,
    isLarge: false,
  };

  componentDidMount() {
    if (window) {
      window.onresize = this.resetScreenSize;
    }
  }

  resetScreenSize = () => {
    if (window) {
      const size = window.innerWidth;

      if (size < breakpoint.large) {
        this.setState({ isSmall: true, isLarge: false });
      } else {
        this.setState({ isSmall: false, isLarge: true });
      }
    }
  };

  render() {
    const { children } = this.props;
    return children({ ...this.state });
  }
}

SizeContainer.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SizeContainer;
