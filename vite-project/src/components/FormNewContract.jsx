export default function FormNewContract() {
  return (
    <div className="flex h-screen justify-center items-center bg-rose-100">
      <div className="h-3/4 w-1/3 p-10 bg-white rounded-xl">
        <h1>Cadastrar Novo Contrato</h1>
        <form>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">What is your name?</span>
            </div>
            <input
              type="text"
              placeholder="Nome"
              className="input input-bordered w-full max-w-xs"
            />
            <select className="select select-bordered w-full max-w-xs mt-10">
              <option disabled selected>
                Who shot first?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <div className="form-control"></div>
            <label className="label cursor-pointer">
              <span className="label-text">Remember me</span>
              <input type="checkbox" defaultChecked className="checkbox" />
            </label>
          </label>
          <input type="radio" name="radio-1" className="radio" checked />
          <input type="radio" name="radio-1" className="radio" />
          <div className="label">
            <span className="label-text">What is your name?</span>
          </div>
          <input
            type="text"
            placeholder="Nome"
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
}
