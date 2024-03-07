import React from "react";

export interface CardProps {
  img: { src: string; alt: string };
  title: string;
}

export function Card({
  img,
  title,
  children,
}: React.PropsWithChildren<CardProps>) {
  return (
    <article data-card>
      <img data-card-img src={img.src} alt={img.alt} />
      <h2>{title}</h2>
      {children}
    </article>
  );
}
