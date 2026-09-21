import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = SITE_NAME;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f3eee4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#4d604a",
            lineHeight: 1,
          }}
        >
          TOURNESOL
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 36,
            color: "#4d604a",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Architecture
        </div>
        <div
          style={{
            marginTop: 48,
            width: 64,
            height: 2,
            background: "#b08d4a",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
