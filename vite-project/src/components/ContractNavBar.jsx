// import { FaSearch } from "react-icons/fa";
// import { IoIosNotificationsOutline } from "react-icons/io";

// export default function ContractNavBar() {
//   return (
//     <div className="flex items-center justify-around pt-20">
//       <div className="relative">
//         <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Contratos"
//           className="border-2 border-gray-300 p-2 m-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
//         />
//       </div>
//       <IoIosNotificationsOutline size={40} />
//     </div>
//   );
// }

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100wh' }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Pesquisar Contrato"
        inputProps={{ 'aria-label': 'search contracts' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}