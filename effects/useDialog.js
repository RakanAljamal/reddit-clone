import React, { useState } from 'react'

const callAll = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args))
import styles from '../components/LoginDialog/styles.module.scss';
export function useDialog() {
    console.log(styles)
    const [on, setOn] = useState(false)
    const show = () => setOn(true)
    const hide = () => setOn(false)
    const toggle = () => setOn(!on)

    const getToggleProps = (props = {}) => ({
        onClick: callAll(props.onClick, toggle),
    })

    return {
        on,
        show,
        hide,
        toggle,
        getToggleProps
    }
}
