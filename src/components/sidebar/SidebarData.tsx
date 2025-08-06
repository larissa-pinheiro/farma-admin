import { HouseIcon, PackageIcon, TagIcon } from '@phosphor-icons/react';

export const sidebarItems = [
  {
    title: "Início",
    href: "/",
    icon: <HouseIcon size={20} />,
  },
  {
    title: "Produtos",
    href: "/produtos",
    icon: <PackageIcon size={20} />,
    submenu: [
      { title: "Lista de Produtos", href: "/produtos" },
      { title: "Cadastrar Produto", href: "/produtos/novo" },
    ],
  },
  {
    title: "Categorias",
    href: "/categorias",
    icon: <TagIcon size={20} />,
    submenu: [
      { title: "Lista de Categorias", href: "/categorias" },
      { title: "Nova Categoria", href: "/categorias/nova" },
    ],
  },
];
