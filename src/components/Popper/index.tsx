import * as React from 'react'
import { useState, FC } from 'react'
import { usePopperTooltip } from 'react-popper-tooltip'
import './styles.css'

interface PopperProps {
  children: ReactNode
  tooltipText: string
}

const Popper: FC<PopperProps> = props => {
  const { children, tooltipText } = props
  const [isVisible, setIsVisible] = useState(false)
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    tooltipRef,
    triggerRef,
    visible,
    ...popperProps
  } = usePopperTooltip({
    closeOnOutsideClick: false,
    delayShow: '1',
    followCursor: false,
    trigger: 'hover',
    placement: 'top',
    visible: isVisible,
    onVisibleChange: setIsVisible,
  })

  return (
    <>
      <span className="text-slate-400" ref={setTriggerRef}>
        {children}
      </span>
      {visible && (
        <div ref={setTooltipRef} {...getTooltipProps({ className: 'tooltip-container' })}>
          {tooltipText}
          <div {...getArrowProps({ className: 'tooltip-arrow' })} />
        </div>
      )}
    </>
  )
}

export default Popper
