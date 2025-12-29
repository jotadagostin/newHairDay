// import { AgendaCalendar } from "../components/AgendaCalendar";
// import MorningIcon from "../assets/icons/morning.svg?react";

// export default function Agenda() {
//   return (
//     <div className="flex flex-col w-full border items-center ">
//       <div className="flex h-30 w-full justify-around items-center ">
//         <div className="flex flex-col gap-1">
//           <h1 className="text-gray-100 text-[24px] font-bold">Your Agenda</h1>
//           <p className="text-gray-300 text-sm">
//             Check your scheduled haircuts by day.
//           </p>
//         </div>
//         <AgendaCalendar />
//       </div>

//       <div className="px-35 w-full">
//         <div className=" ">
//           <div className="px-4 flex items-center justify-between border border-gray-600 ">
//             <div className="flex border items-center gap-3 p-2">
//               <MorningIcon className="w-4 h-4 " />
//               <p className="text-gray-300 text-sm">Morning</p>
//             </div>
//             <p className="text-gray-300 text-sm">09h-12h</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { AgendaCalendar } from "../components/AgendaCalendar";
import MorningIcon from "../assets/icons/morning.svg?react";

export default function Agenda() {
  return (
    <div className="flex flex-col w-full gap-6 px-5 mt-18">
      {/* Título + Calendário */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-100 text-2xl font-bold">Your Agenda</h1>
          <p className="text-gray-300 text-sm">
            Check your scheduled haircuts by day.
          </p>
        </div>

        <AgendaCalendar />
      </div>

      {/* Horário da manhã */}
      <div className="w-full">
        <div className="flex justify-between items-center border border-gray-600 rounded-md overflow-hidden">
          <div className="flex items-center gap-3 p-2">
            <MorningIcon className="w-4 h-4 fill-(--color-yellow-dark)" />
            <p className="text-gray-300 text-sm">Morning</p>
          </div>

          <p className="text-gray-300 text-sm px-2">09h-12h</p>
        </div>
      </div>
    </div>
  );
}
