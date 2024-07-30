import chevron from "../assets/chevron-bas.png"

const SinglMentor = () => {
    return (
      <tr className="grid grid-cols-12 gap-4 justify-items-start font-montserrat font-normal  border-t-2 h-12 py-2 bg-neutral-50 text-gray-600">
        <td className="col-span-1">
          <input className="ml-4 " type="checkbox" />
        </td>
        <td className="col-span-3">Oumaima</td>
        <td className="col-span-3">Oumaima@gmail.com</td>
        <td className="col-span-2">+216 55 555 555</td>
        <td className="col-span-2">06/05/2000</td>
        <td className="col-span-1"><button><img className="w-4 h-4 mt-2" src={chevron}/></button></td>
      </tr>
    );
  };
  export default SinglMentor;
  