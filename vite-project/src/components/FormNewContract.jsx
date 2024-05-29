export default function FormNewContract() {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="h-2/3 w-1/2 p-10 bg-white rounded-xl flex justify-center">
        <form method="dialog">
          <h1>Cadastrar Novo Contrato</h1>
          <button className="btn btn-sm btn-circle btn-ghost">✕</button>
          <label className="form-control flex flex-row gap-10">
            <div>
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Nome"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label">
                <span className="label-text">What is your name?</span>
              </div>
              <input
                type="text"
                placeholder="Sobrenome"
                className="input input-bordered w-full max-w-xs"
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
