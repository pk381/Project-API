import styles from './Button.module.css'

function Button(props) {
    return (
        <div className={StyleSheet.container}>
            <button className={styles.button}>{props.name}</button>
        </div>
    )
}

export default Button;