import PokeBall from "../assets/Pokeball.png"

interface Props{
    title: string,
    activeItem: string,
    link: string,
    handleClick:(item: string)=> void
}

const NavItem: React.FC<Props>=({title,activeItem, handleClick, link})=>{
return(
        <li>
            <button className="flex flex-row" onClick={()=>handleClick(link)}>
                {activeItem == title && <img src={PokeBall} className="object-contain"/>}
                <div className={`${activeItem === title ? "text-darkBlue" : "text-secondary "} block py-2 pl-3 pr-4 md:p-0`}>
                    {title}
                </div>
            </button>
        </li>
)
}
export default NavItem