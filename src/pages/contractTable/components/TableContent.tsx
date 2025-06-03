type Contract = {
  id: number;
  name: string;
  job: string;
  company: string;
  location: string;
  favoriteColor: string;
  avatarUrl: string;
};

const contracts: Contract[] = [
  {
    id: 1,
    name: 'Hart Hagerty',
    job: 'Desktop Support Technician',
    company: 'Zemlak, Daniel and Leannon',
    location: 'United States',
    favoriteColor: 'Purple',
    avatarUrl:
      'https://img.daisyui.com/tailwind-css-component-profile-2@56w.png',
  },
  {
    id: 2,
    name: 'Brice Swyre',
    job: 'Tax Accountant',
    company: 'Carroll Group',
    location: 'China',
    favoriteColor: 'Red',
    avatarUrl:
      'https://img.daisyui.com/tailwind-css-component-profile-3@56w.png',
  },
  {
    id: 3,
    name: 'Marjy Ferencz',
    job: 'Office Assistant I',
    company: 'Rowe-Schoen',
    location: 'Russia',
    favoriteColor: 'Crimson',
    avatarUrl:
      'https://img.daisyui.com/tailwind-css-component-profile-4@56w.png',
  },
  {
    id: 4,
    name: 'Yancy Tear',
    job: 'Community Outreach Specialist',
    company: 'Wyman-Ledner',
    location: 'Brazil',
    favoriteColor: 'Indigo',
    avatarUrl:
      'https://img.daisyui.com/tailwind-css-component-profile-5@56w.png',
  },
];

export const TableContent = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract) => (
            <tr key={contract.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={contract.avatarUrl}
                        alt={`Avatar of ${contract.name}`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{contract.name}</div>
                    <div className="text-sm opacity-50">
                      {contract.location}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {contract.company}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {contract.job}
                </span>
              </td>
              <td>{contract.favoriteColor}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
