import ListaProdutos from "../../components/produtos/ListaProdutos"

function Produtos() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-slate-300">
      <div className="w-full h-full rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-semibold text-slate-800 border-l-4 border-[#5BBFAA] pl-4 mb-1">
          Lista de Produtos
        </h1>

        <p className="text-sm font-thin text-slate-800 pl-4 mb-6 ml-2">
          Aqui você pode visualizar, editar e deletar os produtos disponíveis.
        </p>

        <ListaProdutos />
      </div>
    </div>
  )
}

export default Produtos