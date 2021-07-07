import React from "react";

interface UpDownProps {
    children: React.ReactNode;

    type: "normal" | "wide" | "slow";
}

export const UpDown = ({ children, type }: UpDownProps): JSX.Element => {
    return (
        <div
            className={`${
                type === `wide`
                    ? `UpDownWideAnimation`
                    : type === `slow`
                    ? `UpDownSlowAnimation`
                    : `UpDownAnimation`
            } overflow-hidden absolute top-0 left-0 right-0 bottom-0`}
            style={{ zIndex: -500 }}
        >
            {children}
        </div>
    );
};
