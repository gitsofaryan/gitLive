import { Toaster } from "react-hot-toast"

function Toast() {
    return (
        <Toaster
            position="top-right"
            toastOptions={{
                success: {
                    theme: {
                        primary: "#f1f6f3",
                    },
                },
            }}
        />
    )
}

export default Toast
