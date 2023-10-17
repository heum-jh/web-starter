import Image, { ImageProps } from "next/image";

export default function TempImage({ width, height, ...res }: Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      {...res}
      src={`https://via.placeholder.com/${width}x${height}`}
      alt={`${width}x${height}`}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    />
  );
}
