import CardProduto from "./CardProduto";

function ListaProdutos() {
  const produtos = [
    {
      id: 1,
      nome: "Produto Exemplo",
      descricao: "Descrição do produto",
      preco: 10.0,
      foto: "https://via.placeholder.com/150",
      categoria: {
        id: 1,
        nome: "Categoria Exemplo",
        descricao: "Descrição da categoria",
      }
    },
    {
      id: 2,
      nome: "Outro Produto",
      descricao: "Outra descrição do produto",
      preco: 20.0,
      foto: "https://via.placeholder.com/150",
      categoria: {
        id: 2,
        nome: "Outra Categoria",
        descricao: "Outra descrição da categoria",
      }
    },
    {
      id: 3,
      nome: "Outro Produto",
      descricao: "Outra descrição do produto",
      preco: 20.0,
      foto: "https://via.placeholder.com/150",
      categoria: {
        id: 2,
        nome: "Outra Categoria",
        descricao: "Outra descrição da categoria",
      }
    },

    {
      id: 4,
      nome: "Outro Produto",
      descricao: "Outra descrição do produto",
      preco: 20.0,
      foto: "https://via.placeholder.com/150",
      categoria: {
        id: 2,
        nome: "Outra Categoria",
        descricao: "Outra descrição da categoria",
      }
    },
  ]


  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {produtos.map(produto => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaProdutos;