export interface ISidebar{
    open:boolean;
    onClose:()=>void;
}

export type LayoutProps = {
    children: React.ReactNode;
  };