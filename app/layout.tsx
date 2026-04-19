import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollBar from "@/components/SmoothScrollBar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Hayyan Ali | Software Engineer Portfolio",
  description: "Building Scalable Digital Ecosystems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScrollBar>
          <SmoothScroll>
            <CustomCursor />
            <div className="bg-container">
              <div className="bg-grid"></div>
              <div className="orb orb-1"></div>
              <div className="orb orb-2"></div>
            </div>
            {children}
          </SmoothScroll>
        </SmoothScrollBar>
      </body>
    </html>
  );
}
