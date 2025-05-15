import React from "react";

const VerticalBouncingArrows = () => {
    return (
        <div id="verticalBounce" className="" style={{ display: 'inline-block' }}>
                <div className="arrow" style={{ display: 'inline-block' }}>
                    <span></span>
                    <span></span>
                    <span></span>

                <style>
                    {`
.arrow span {
    display: block;
    width: 1.5vw;
    height: 1.5vw;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
}

@media (max-width: 576px) {
    .arrow span {
        width: 4vw;
        height: 4vw;
    }
}

.arrow span:nth-child(2) {
    animation-delay: -0.2s;
}

.arrow span:nth-child(3) {
    animation-delay: -0.4s;
}

@keyframes animate {
    0% {
        opacity: 0;
        transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        transform: rotate(45deg) translate(20px, 20px);
    }
}
                    `}
                </style>
            </div>
        </div>
    );
};

export default VerticalBouncingArrows;
