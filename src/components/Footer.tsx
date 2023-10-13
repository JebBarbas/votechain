import { APP_NAME } from "@/scripts/constants";

export default function Footer(){
    return (
        <footer
            className="p-4"
        >
            &copy; {new Date().getFullYear()} { APP_NAME }
        </footer>
    )
}