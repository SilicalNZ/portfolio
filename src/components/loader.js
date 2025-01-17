import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { IconLoader } from '@components/icons';
import { metadata } from "@config";

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = useCallback(() => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 100,
        duration: 350,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 150,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 150,
        duration: 150,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 150,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }, [finishLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true));
    animate();
    return () => clearTimeout(timeout);
  }, [animate]);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <Head bodyAttributes={{ class: `hidden` }} >
        <title>{metadata.name}</title>
      </Head>

      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
