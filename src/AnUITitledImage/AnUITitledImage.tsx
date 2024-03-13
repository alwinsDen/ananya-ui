import React, { useEffect, useState } from "react";
import "./AnUITitledImage.scss";

export interface AnUITitledImageInterface
  extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  imageAlt?: string;
  width?: number;
  imageTitle: string;
  imageDescription: string;
  labellingList?: string[];
}

export const AnUITitledImage = React.forwardRef<
  HTMLDivElement,
  AnUITitledImageInterface
>(
  (
    {
      imageTitle = "",
      imageDescription = "",
      imageSrc = "",
      labellingList = [],
      width = 220,
      ...props
    },
    ref,
  ) => {
    //check the URLs validity with a pseudo image loader
    const [isImageValid, setIsImageValid] = useState(false);

    //calling UseEffect to verify image source validity
    useEffect(() => {
      const imageInstance = new Image();
      imageInstance.src = imageSrc;
      imageInstance.onload = () => {
        setIsImageValid(true);
      };
    }, [imageSrc]);

    return (
      <div
        className={`AnUITitledImage`}
        style={{
          width,
        }}
      >
        <div
          className={`imageController`}
          style={{
            width: width,
            height: width,
            background: !imageSrc || !isImageValid ? "#f6f6f6" : "",
          }}
        >
          {imageSrc && isImageValid && (
            <img src={imageSrc} alt={"imageTag"} width={width} />
          )}
          <div className={"labelComponent"}>
            {labellingList.length !== 0 &&
              labellingList.map((vls, inx) => {
                return (
                  <p
                    className={"labelDisplay"}
                    key={`${inx}_labellintList${vls}`}
                  >
                    {vls}
                  </p>
                );
              })}
          </div>
        </div>
        <p className={"imageTitle"}>{imageTitle}</p>
        <p className={"imageDescription"}>{imageDescription}</p>
      </div>
    );
  },
);
