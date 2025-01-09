import Link from "next/link";
import Logo from "./logo";
function MainNavigation(){
    return (
        <header className="flex justify-between bg-gray-600 text-gray-300">
            <Link href="/">
                <Logo/>
            </Link>
            
            <nav>
                <ul className="flex justify-evenly  ">
                    <li className="p-3"><Link href="/posts">Posts</Link></li>
                    <li className="p-3"><Link href="/contact">Contacts</Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default MainNavigation;