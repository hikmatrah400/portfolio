import { SVGAttributes } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSass } from "react-icons/fa6";
import { RiJavascriptFill, RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

export const JavaScriptSvg = (props: SVGAttributes<SVGElement>) => (
  <RiJavascriptFill
    {...props}
    style={{ color: " #FFA900", fontSize: "1.7rem", ...props?.style }}
  />
);

export const TypeScriptSvg = (props: SVGAttributes<SVGElement>) => (
  <BiLogoTypescript
    {...props}
    style={{ color: " #0288d1", fontSize: "1.7rem", ...props?.style }}
  />
);

export const SassSvg = (props: SVGAttributes<SVGElement>) => (
  <FaSass {...props} style={{ color: " #ec407a", ...props?.style }} />
);

export const MongoDBSvg = (props: SVGAttributes<SVGElement>) => (
  <SiMongodb
    {...props}
    style={{ color: " #43a047", fontSize: "2.2rem", ...props?.style }}
  />
);

export const ReactSvg = ({
  disableStyles = false,
  ...props
}: { disableStyles?: boolean } & SVGAttributes<SVGElement>) => (
  <RiReactjsLine
    {...props}
    style={disableStyles ? {} : { color: " #00d8ff", ...props?.style }}
  />
);
