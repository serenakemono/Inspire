import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, makeStyles } from '@material-ui/core';

const SearchBar = () => {

    const [selected, setSelected] = useState(false);
    const [text, setText] = useState("");

    const useStyles = makeStyles(() => ({
        container: {
            position: 'relative',
            borderRadius: '0.25rem',
            paddingLeft: '1.25rem',
            paddingTop: '0.1rem',
            paddingBottom: '0.1rem',
            marginRight: 0,
            marginLeft: 0,
            height: '2.35rem',
            width: '20rem',
            backgroundColor: '#eeeeee',
            border: selected ? '2px solid #f8c6c8' : ''
        }, icon: {
            height: '100%',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, input: {
            marginLeft: '0.5rem',
            width: '15rem'
        }
    }))

    const { container, icon, input } = useStyles();

    const handleChange = (e) => {
        const { value } = e.target;
        setText(value);
    }

    return (
        <div className={container}>
            <SearchIcon className={ icon } sx={{ color: "#545454" }} />
            <InputBase
                value={text}
                placeholder='Search...'
                className={input}
                onFocus={() => setSelected(true)}
                onBlur={() => setSelected(false)}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar