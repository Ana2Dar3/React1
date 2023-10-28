import React from "react";
export function Card() {
    const [checkCard, setCheckCard] = React.useState(false);

    const handleClick = () => {
        setCheckCard(!checkCard);
    };

    const className = `card ${checkCard ? 'card-check': ''}`;

    return <div className={className} onClick={handleClick}>карточка 1</div>;
}



