import CustomCursor from "@/components/CustomCursor";
import SmoothScrollBar from "@/components/SmoothScrollBar";
import SmoothScroll from "@/components/SmoothScroll";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="cursor-none">
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
    </div>
  );
}
