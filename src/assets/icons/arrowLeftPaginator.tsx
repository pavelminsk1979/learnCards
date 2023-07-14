


import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
    props: SVGProps<SVGSVGElement>,
    ref: Ref<SVGSVGElement>
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        ref={ref}
        {...props}
    >
        <g clipPath="url(#a)">
            <path fill="#fff" d="M10 11 7 8l3-3-1-1-4 4 4 4 1-1Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h16v16H0z" />
            </clipPath>
        </defs>
    </svg>
)
const ForwardRef = forwardRef(SvgComponent)
export const ArrowLeftPaginator = memo(ForwardRef)
