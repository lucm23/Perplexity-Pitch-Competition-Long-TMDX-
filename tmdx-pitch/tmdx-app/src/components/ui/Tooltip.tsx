"use client";
import * as RadixTooltip from "@radix-ui/react-tooltip";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
}

export default function Tooltip({ content, children }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            sideOffset={8}
            style={{
              background: "#1C2030",
              border: "1px solid #00C9B1",
              borderRadius: 8,
              padding: "10px 14px",
              width: 230,
              fontSize: 12,
              lineHeight: 1.6,
              color: "#E8EAEF",
              boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
              zIndex: 99999,
            }}
          >
            {content}
            <RadixTooltip.Arrow style={{ fill: "#00C9B1" }} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
