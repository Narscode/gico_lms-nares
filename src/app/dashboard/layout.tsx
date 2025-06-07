import Content from "./_components/Content";
import SideBar from "./_components/Sidebar";

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
