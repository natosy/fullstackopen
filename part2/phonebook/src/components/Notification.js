const Notification = ({ message, isSuccess }) => {
    if (message === null) return null
    else {
        return (
            <div className={isSuccess ? 'success' : 'error'}>{
                message}
            </div>
        )
    }
}

export default Notification