import SideMenu from "../components/SideMenu";
import Content from "../components/Content";
import Profile from "../components/Profile/index";


export default function Layout() {
    return (
        <div className="flex flex-row w-full h-auto justify-center items-center p-10 gap-x-5">
            <Profile />
            <Content />
            <SideMenu />
        </div>
    )
}