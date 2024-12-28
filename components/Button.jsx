import Image from "next/image"

export default function Button({type, title, icon, variant}) {
  return (
    <button
    type={type}
    className={`flexCenter gap-3 cursor-pointer border ${variant}`}
    >
        {icon && <Image src={icon} alt={title} width={24} height={24}/>}
        <label className=" bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}
