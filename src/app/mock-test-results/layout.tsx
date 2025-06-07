import Content from "../dashboard/_components/Content";
import SideBar from "../dashboard/_components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <div className="grid n w-full grid-cols-[250px_1fr] ">
        <SideBar />
        <Content>
          <main>{children}</main>
        </Content>
      </div>
    </main>
  );
} 