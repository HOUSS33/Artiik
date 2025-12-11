import { useState } from "react";
import Button from "@/components/Button";

import Icon from "@/components/Icon";
import SpecialOffer from "./SpecialOffer";

type Props = {
    onOpenSidebar: () => void;
    onToggleTools: () => void;
};

const Header = ({ onOpenSidebar, onToggleTools }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="flex items-center gap-4 mb-3.5 max-md:gap-2 max-md:mb-3">
                <button className="hidden size-10 mr-2 justify-center items-center max-lg:flex max-md:mr-0" onClick={onOpenSidebar} >
                    <Icon className="!size-6 fill-strong-950" name="burger" />
                </button>

                <div className="grow">
                    <div className="text-label-xl max-md:text-label-md">
                        Chat With Artiik AI
                    </div>
                    <div className="mt-1 line-clamp-1 text-label-md text-sub-600 max-lg:hidden">
                        Let your data tell its story, fast and easy!
                    </div>
                </div>

                <div className="flex shrink-0 gap-1.5">

                    <Button icon="help-circle" isStroke isCircle />
                </div>
            </div>

        </>
    );
};

export default Header;
