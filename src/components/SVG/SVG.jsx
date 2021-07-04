const icons = {
    triangle: {
        shape: (
            <polygon
                strokeWidth="1px"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="14.921,2.27 28.667,25.5 1.175,25.5 "
            />
        ),
        viewBox: `0 0 30 30`,
    },
    circle: {
        shape: (
            <path d="M15,30A15,15,0,1,1,30,15,15,15,0,0,1,15,30ZM15,6.23A8.77,8.77,0,1,0,23.77,15,8.77,8.77,0,0,0,15,6.23Z" />
        ),
        viewBox: `0 0 30 30`,
    },

    box: {
        shape: (
            <path d="M28,2V28H2V2H28m.13-2H1.88A1.88,1.88,0,0,0,0,1.88V28.13A1.88,1.88,0,0,0,1.88,30H28.13A1.87,1.87,0,0,0,30,28.13V1.88A1.88,1.88,0,0,0,28.13,0Z" />
        ),
        viewBox: `0 0 30 30`,
    },
    hexa: {
        shape: (
            <polygon
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="27.5,21.904 15,28.809  2.5,21.904 2.5,8.095 15,1.19 27.5,8.095 "
            />
        ),
        viewBox: `0 0 30 30`,
    },
};

export const SVG = ({
    stroke = false,
    color = `${
        [`gray`, `indigo`, `blue`, `green`][Math.floor(Math.random() * 4)]
    }-${[`100`, `200`, `300`, `400`, `500`][Math.floor(Math.random() * 5)]}`,
    zIndex = -500,
    width,
    icon,
    left,
    top,
    hiddenMobile = false,
}) => (
    <svg
        fill={stroke ? `none` : `currentColor`}
        className={`absolute fill-current text-${color}`}
        style={{
            width: `${width / 2 / 2}rem`,
            filter: "blur(8px) saturate(160%)",
            left: left,
            top: top,
            zIndex,
            display: hiddenMobile ? { base: `none`, md: `block` } : `block`,
        }}
        viewBox={icons[icon].viewBox}
    >
        {icons[icon].shape}
    </svg>
);
