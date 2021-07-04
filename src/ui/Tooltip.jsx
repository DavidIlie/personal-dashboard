import Tippy from "@tippyjs/react";

export default function Tooltip(props) {
    return (
        <Tippy {...props} hideOnClick={true} animation="shift-away">
            {props.children}
        </Tippy>
    );
}
