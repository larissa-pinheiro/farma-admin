import { Link } from "react-router-dom"
import Med from "../../assets/images/Med.png"
import type { Produto } from "../../models/Produto"

function CardProduto({ produto }: { produto: Produto }) {
  return (
    <div className="flex flex-col items-center justify-center w-[320px] h-[180px] gap-3 p-4 bg-slate-50 rounded-2xl shadow-sm">
      <div className="flex items-center">
        <div className="flex flex-col">
          <img
            src={Med}
            alt={produto.nome}
            className="w-24 h-24 object-cover rounded-2xl mb-2"
          />
        </div>

        <div className="flex-col ml-4">
          <h2 className="font-bold">{produto.nome}</h2>
          <p className="font-thin text-sm">{produto.descricao}</p>
          <p className="text-green-600 font-semibold">Preço: R$ {produto.preco.toFixed(2)}</p>

          <div className="flex mt-3 gap-2">
            <Link to=''
              className='w-1/2 h-8 rounded-2xl text-slate-100 bg-[#5BBFAA] hover:bg-[#4DAF8E] flex items-center justify-center py-2'>
              Editar
            </Link>

            <Link to='' className='w-1/2  h-8 rounded-2xl text-slate-100 bg-red-400 hover:bg-red-500 flex items-center justify-center'>
              Deletar
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProduto