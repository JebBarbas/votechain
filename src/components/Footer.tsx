import { APP_NAME } from "@/scripts/constants";

export default function Footer(){
    return (
        <footer
            style={{

            }}

            className="bg-gray-900"
        >
            &copy; {new Date().getFullYear()} { APP_NAME }
        </footer>
    )
}