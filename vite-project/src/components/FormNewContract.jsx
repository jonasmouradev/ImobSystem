export default function FormNewContract() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-2/3 w-1/3 p-10 bg-white rounded-xl flex justify-center">
        <form method="dialog">
          <h1>Cadastrar Novo Contrato</h1>
          <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          <label className="form-control flex flex-row gap-10">
            <div>
              <div className="label">
                <span className="label-text">Dono da residência</span>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Inquilino</span>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Descrição</span>
              </div>
              <textarea
                placeholder="Descrição"
                className="textarea textarea-bordered w-full max-w-xs"
                rows={4}
              />
            </div>
            <div>
              <div className="label">
                <span className="label-text">Banana</span>
              </div>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div className="label">
                <span className="label-text">Início do Contrato</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">Término do Contrato</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </label>
        </form>
      </div>
    </div>
  );
}
