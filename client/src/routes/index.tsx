import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className="absolute top-0 left-0 h-screen w-screen -z-50"
        style={{
          background:
            theme === "dark"
              ? "linear-gradient(60deg,rgba(0, 0, 0, 1) 0%, rgba(20, 51, 82, 1) 60%, rgba(35, 111, 168, 1) 100%)"
              : "linear-gradient(60deg,rgba(255, 255, 255, 1) 0%, rgba(92, 215, 237, 1) 60%, rgba(73, 203, 230, 1) 100%)",
        }}
      ></div>
      <div className="mx-[148px]">Hello</div>
    </>
  );
}
