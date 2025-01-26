import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "Your Project Title",
  description: "Your project description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#1d1d1d] text-sm  overflow-x-hidden relative ">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
