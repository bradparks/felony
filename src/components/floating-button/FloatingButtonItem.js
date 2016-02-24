'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ReactCSS from 'reactcss'
import dynamics from 'dynamics.js'

import colors from '../../styles/variables/colors'
import { spacing, sizing } from '../../styles/variables/utils'
import FloatingButtonItemLabel from './FloatingButtonItemLabel'

class FloatingButtonItem extends Component {
  classes() {
    const floatingButtonSize = 40

    return {
      'default': {
        wrap: {
          display: 'inline-flex',
          alignItems: 'center',
          position: 'relative',
          transform: 'scale(0.5)', // for animation
        },
        label: {
          position: 'absolute',
          right: '60px',
          top: '0',
          bottom: '0',
        },
        button: {
          backgroundColor: colors.primary,
          height: floatingButtonSize,
          width: floatingButtonSize, // TODO: use utils for sizing
          borderRadius: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0px 4px 10px 0px rgba(221, 33, 48, 0.33)',
          transition: 'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
        },
        buttonContent: {
          width: '24px',
        },
        buttonContent: {
          width: '24px',
        },
      },
      hover: {
        button: {
          boxShadow: '0 8px 17px 0 rgba(221, 33, 48, 0.7)',
        },
      },
      'size-large': {
        button: {
          height: floatingButtonSize * 1.3,
          width: floatingButtonSize * 1.3,
          right: '900px',
        },
        label: {
          right: '67px',
        },
      },
    }
  }

  componentDidMount = () => {
    dynamics.animate(this.refs.wrap, {
      scale: 1,
    }, {
      type: dynamics.spring,
      duration: 500,
      friction: 400,
    })
  }

  render() {
    return <div is="wrap" ref="wrap">
      { this.props.label &&
        <div is="label">
          <FloatingButtonItemLabel
            label={ this.props.label }
            hover={ this.props.hover }
          />
        </div>
      }
      <a is="button">
        <span is="buttonContent">{ this.props.children }</ span>
      </a>
    </div>
  }
}

export default ReactCSS.Hover(ReactCSS(FloatingButtonItem))
