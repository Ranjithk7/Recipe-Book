import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import searchSlice from "../slices/SearchSlice";

const DropDown = ({orderBy, sortBy}) => {
    const check = <span className="bi-check float-end"/>;
    const { onOrderByChange, onSortByChange } = searchSlice.actions;
const dispatch= useDispatch();

    return (
        <div className="dropdown d-inline " style={{height:"100%", width: "10%"}}>
            <button 
                style={{height: "40px", width:"100%"}}
                className="dropdown-toggle btn p-0 btn-secondary rounded-start-0 opacity-50"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
            </button>
            <div className="dropdown-menu">
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('title'))}>
                    Dish Name{sortBy === 'title' ? check : null}
                </div>
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onSortByChange('category'))}>
                    Category {sortBy === 'category' ? check : null}
                </div>
                <hr />
                <div style={{cursor: "pointer"}} className="dropdown-item" onClick={() => dispatch(onOrderByChange('asc'))}>
                    Asc {orderBy === 'asc' ? check : null}
                </div>
                <div className="dropdown-item" style={{cursor: "pointer"}} onClick={() => dispatch(onOrderByChange('desc'))}>
                    Desc {orderBy === 'desc' ? check : null}
                </div>
            </div>
        </div>
    )
}
const SearchBox = () => {
    const [ toggle, setToggle ] = useState(false);
    const { filter } = useSelector((state)=> state.search);
    const { onQueryChange } = searchSlice.actions;
    const dispatch = useDispatch();

    return (
        <>
            {toggle 
            ? <li className="d-flex justify-content-end align-items-center">
                <input
                    style={{height: "40px", width: "300px", outline: "none"}}
                    className="border border-end-0 rounded-start-1 px-2 m-0"
                    type="text"
                    placeholder="Search Recipe..."
                    onChange={(e) => dispatch(onQueryChange(e.target.value))}
                    value={filter.query} />
                <DropDown
                    sortBy={filter.sortBy}
                    orderBy={filter.orderBy} />
            </li>
            : null}
            <li className="bi-search d-flex px-2 py-4 align-items-center fs-4 justify-content-end" onClick={() => setToggle(!toggle)}></li>
        </>  
    )
}

export default SearchBox;