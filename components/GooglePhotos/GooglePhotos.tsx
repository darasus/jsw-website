import React, { Component, CSSProperties } from 'react';
import Portal from 'react-minimalist-portal';
import Transition from 'react-transition-group/Transition';
import noScroll from 'no-scroll';

import { CLOUDINARY_URL } from '../../constants';
import { CloseArrow, PrevArrowButton, NextArrowButton } from './arrow';
import { Overlay, Button, Image } from './styles';

const keycodes = {
  esc: 27,
  left: 37,
  right: 39,
};

export class GooglePhotos extends Component<any, any> {
  timeoutMouseIdle: any;

  constructor(props: any) {
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

  componentWillReceiveProps(nextProps: any) {
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
    document.addEventListener('keydown', this.handleKeydown);
    window.addEventListener('resize', this.handleWindowResize);
    (document.querySelector('*') as any).addEventListener(
      'mousemove',
      this.handleMousemove,
    );
    noScroll.on();
  };

  handleClose = () => {
    document.removeEventListener('keydown', this.handleKeydown);
    window.removeEventListener('resize', this.handleWindowResize);
    (document.querySelector('*') as any).removeEventListener(
      'mousemove',
      this.handleMousemove,
    );
    noScroll.off();
  };

  handleWindowResize = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  handleKeydown = (e: any) => {
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
      open,
      src,
      srcIndex,
      transitionDuration,
      transitionStyles,
    } = this.props;
    const { width, height, mouseIdle, showPortal } = this.state;
    const image = src[srcIndex];
    const wrapperImageStyle = {
      position: 'absolute',
      overflow: 'hidden',
      userSelect: 'none',
      left: 0,
      height: 0,
      width: 0,
      top: 0,
    } as Pick<
      CSSProperties,
      | 'position'
      | 'overflow'
      | 'userSelect'
      | 'left'
      | 'height'
      | 'width'
      | 'top'
    >;
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
        <Transition
          in={open}
          timeout={transitionDuration}
          appear
          onExited={this.handleExited}>
          {(state: any) => (
            <Overlay
              style={{
                ...transitionStyles.default,
                ...transitionStyles[state],
              }}>
              <div style={wrapperImageStyle}>
                {src.map((source: any, index: number) => (
                  <Image
                    isOpen={index === srcIndex}
                    key={source.src}
                    src={`${CLOUDINARY_URL}w_2000,f_auto/${source.src}`}
                    alt={source.alt}
                    width={wrapperImageStyle.width}
                    height={wrapperImageStyle.height}
                  />
                ))}
              </div>
              {srcIndex !== 0 && (
                <Button leftColumn type="button" onClick={this.handleClickPrev}>
                  <PrevArrowButton mouseIdle={mouseIdle} />
                </Button>
              )}
              {src[srcIndex + 1] && (
                <Button
                  rightColumn
                  type="button"
                  onClick={this.handleClickNext}>
                  <NextArrowButton mouseIdle={mouseIdle} />
                </Button>
              )}
              <CloseArrow
                mouseIdle={mouseIdle}
                onClick={this.handleClickCloseArrow}
              />
            </Overlay>
          )}
        </Transition>
      </Portal>
    );
  }
}
