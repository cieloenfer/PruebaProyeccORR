import { NavLink } from "react-router-dom"

export const Item = ({data}) => {
return (
        <>
            {
                data ? (
                    <div className="item">
                        <NavLink key={data.id} to={`/item/${data.id}`} >
                            <h5>{data.title}</h5>
                            <p>USD {data.price}</p>
                        </NavLink>
                    </div>
                ) : null
            }
        </>
    )
}