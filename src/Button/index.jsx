import React from "react";

export function Button({ img, title, children}) {
    return (
        <article>
            <img src={img.src} alt={img.alt} />
            <h2>{title}</h2>
            {children}
        </article>
    );
}