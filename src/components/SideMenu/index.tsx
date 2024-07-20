import { BriefcaseBusiness, FolderOpen, House, User } from 'lucide-react';
import { Button } from '../ui/button';

export default function SideMenu() {
    return (
        <div className="flex flex-col w-14 h-80 justify-center items-center border-white/20 border-2 rounded-full gap-y-10 right-10 fixed">
            <Button>
                <House color='white' size="28px" />
            </Button>
            <Button>
                <User color='white' size="28px" />
            </Button>
            <Button>
                <BriefcaseBusiness color='white' size="28px" />
            </Button>
            <Button>
                <FolderOpen color='white' size="28px" />
            </Button>
        </div>
    )
}