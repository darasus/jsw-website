import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from 'react-minimalist-portal';
import Transition from 'react-transition-group/Transition';
import noScroll from 'no-scroll';
import screenfull from 'screenfull';
import { CloseArrow, PrevArrowButton, NextArrowButton } from './arrow';

const keycodes = {
  esc: 27,
  left: 37,
  right: 39,
};

class GooglePhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
      mouseIdle: false,
      showPortal: props.open,
    };
  }

  componentDidMount() {
    const { open } = this.props;
    if (open) {
      this.handleOpen();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { open } = this.props;
    if (!open && nextProps.open) {
      this.handleOpen();
      this.setState({ showPortal: true });
    }
    if (open && !nextProps.open) {
      this.handleClose();
    }
  }

  componentWillUnmount() {
    const { open } = this.props;
    if (open) {
      this.handleClose();
    }
  }

  handleOpen = () => {
    const { fullscreen } = this.props;
    document.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('resize', this.handleWindowResize);
    document.querySelector('*').addEventListener('mousemove', this.handleMousemove);
    noScroll.on();
    if (fullscreen && screenfull.enabled) {
      screenfull.request();
      screenfull.on('change', this.handleScreenfullChange);
    }
  };

  handleClose = () => {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleWindowResize);
    document.querySelector('*').removeEventListener('mousemove', this.handleMousemove);
    screenfull.off('change', this.handleScreenfullChange);
    noScroll.off();
  };

  handleWindowResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleKeydown = (e) => {
    const { keyboardNavigation, closeOnEsc, onClose } = this.props;
    if (e.keyCode === keycodes.left && keyboardNavigation) {
      this.handleClickPrev();
    } else if (e.keyCode === keycodes.right && keyboardNavigation) {
      this.handleClickNext();
    } else if (e.keyCode === keycodes.esc && closeOnEsc) {
      this.handleClose();
      onClose();
    }
  };

  handleMousemove = () => {
    const { mouseIdle } = this.state;
    const { mouseIdleTimeout } = this.props;
    // Hide the actions buttons when move do not move for x seconds
    clearTimeout(this.timeoutMouseIdle);
    if (mouseIdle === true) {
      this.setState({ mouseIdle: false });
    }
    this.timeoutMouseIdle = setTimeout(() => {
      this.setState({ mouseIdle: true });
    }, mouseIdleTimeout);
  };

  handleScreenfullChange = () => {
    const { open, onClose } = this.props;
    if (!screenfull.isFullscreen && open) {
      onClose();
    }
  };

  handleClickPrev = () => {
    const { srcIndex, onClickPrev } = this.props;
    if (srcIndex !== 0) {
      onClickPrev();
    }
  };

  handleClickNext = () => {
    const { srcIndex, src, onClickNext } = this.props;
    if (src[srcIndex + 1]) {
      onClickNext();
    }
  };

  handleClickCloseArrow = () => {
    const { onClose } = this.props;
    onClose();
  };

  handleExited = () => {
    this.setState({ showPortal: false });
  };

  render() {
    const {
      open, src, srcIndex, transitionDuration, transitionStyles,
    } = this.props;
    const {
      width, height, mouseIdle, showPortal,
    } = this.state;
    const image = src[srcIndex];
    const wrapperImageStyle = {
      position: 'absolute',
      overflow: 'hidden',
      userSelect: 'none',
    };
    let imageWidth = image.width;
    let imageHeight = image.height;
    // Adjust image ratio max with window size
    if (imageWidth > width) {
      const ratio = width / imageWidth;
      imageHeight *= ratio;
      imageWidth *= ratio;
    }
    if (imageHeight > height) {
      const ratio = height / imageHeight;
      imageHeight *= ratio;
      imageWidth *= ratio;
    }

    if (imageHeight > imageWidth || imageWidth < width) {
      wrapperImageStyle.left = (width - imageWidth) / 2;
      wrapperImageStyle.height = height;
      wrapperImageStyle.width = imageWidth;
    } else {
      wrapperImageStyle.top = (height - imageHeight) / 2;
      wrapperImageStyle.height = imageHeight;
      wrapperImageStyle.width = width;
    }
    if (height > imageHeight) {
      wrapperImageStyle.height = imageHeight;
      wrapperImageStyle.top = (height - imageHeight) / 2;
    } else if (width > imageWidth) {
      wrapperImageStyle.height = height;
      wrapperImageStyle.left = (width - imageWidth) / 2;
    }

    if (!showPortal) {
      return false;
    }

    return (
      <Portal>
        <Transition in={open} timeout={transitionDuration} appear onExited={this.handleExited}>
          {state => (
            <div
              className="overlay"
              style={{
                ...transitionStyles.default,
                ...transitionStyles[state],
              }}
            >
              <div style={wrapperImageStyle}>
                {src.map((source, index) => (
                  <img
                    key={index}
                    src={source.src}
                    alt={source.alt}
                    width={wrapperImageStyle.width}
                    height={wrapperImageStyle.height}
                    className={index === srcIndex ? 'image imageOpen' : 'image'}
                  />
                ))}
              </div>
              {srcIndex !== 0 && (
                <button type="button" className="column leftColumn" onClick={this.handleClickPrev}>
                  <PrevArrowButton
                    className={`arrowButton arrowButtonLeft ${mouseIdle && 'arrowButtonHide'}`}
                  />
                </button>
              )}
              {src[srcIndex + 1] && (
                <button type="button" className="column rightColumn" onClick={this.handleClickNext}>
                  <NextArrowButton
                    className={`arrowButton arrowButtonRight ${mouseIdle && 'arrowButtonHide'}`}
                  />
                </button>
              )}
              <CloseArrow
                className={`arrowButtonReturn ${mouseIdle && 'arrowButtonHide'}`}
                onClick={this.handleClickCloseArrow}
              />
            </div>
          )}
        </Transition>
      </Portal>
    );
  }
}

GooglePhoto.propTypes = {
  /**
   * Control if GooglePhoto is open or not
   */
  open: PropTypes.bool.isRequired,
  /**
   * An array containing valid images
   */
  src: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Url of the media
       */
      src: PropTypes.string.isRequired,
      /**
       * Height of the media
       */
      height: PropTypes.number.isRequired,
      /**
       * Width of the media
       */
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  /**
   * Index of source to display
   */
  srcIndex: PropTypes.number.isRequired,
  /**
   * Is closable when user press esc key
   */
  closeOnEsc: PropTypes.bool,
  /**
   * Enable left and right arrow navigation
   */
  keyboardNavigation: PropTypes.bool,
  /**
   * The duration of the transition, in milliseconds see [react-transition-group docs](https://reactcommunity.org/react-transition-group/#Transition-prop-timeout)
   */
  transitionDuration: PropTypes.number,
  /**
   * The animation object see [react-transition-group docs](https://reactcommunity.org/react-transition-group/#Transition)
   */
  // eslint-disable-next-line
  transitionStyles: PropTypes.object,
  /**
   * Should open on fullscreen mode
   */
  fullscreen: PropTypes.bool,
  /**
   * Timeout before hidding the actions buttons when mouse do not move (milliseconds)
   */
  mouseIdleTimeout: PropTypes.number,
  /**
   * Function called when the previous image is requested
   */
  onClickPrev: PropTypes.func.isRequired,
  /**
   * Function called when the next image is requested
   */
  onClickNext: PropTypes.func.isRequired,
  /**
   * Function called when GooglePhoto is requested to be closed
   */
  onClose: PropTypes.func.isRequired,
};

GooglePhoto.defaultProps = {
  closeOnEsc: true,
  keyboardNavigation: true,
  fullscreen: false,
  mouseIdleTimeout: 5000,
  transitionDuration: 200,
  transitionStyles: {
    default: {
      transition: 'opacity 200ms ease-in-out',
      opacity: 0,
    },
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
  },
};

export default GooglePhoto;
