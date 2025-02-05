import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import CircularProgress from "@/components/CircularProgress";

export const metadata = {
  title: "Vaibhav Jamdhade Portfolio",
  description: "Frontend Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-[#1d1d1d] text-sm overflow-x-hidden relative">
        <CustomCursor />
        {children}
        <CircularProgress />
      </body>
    </html>
  );
}
