import React, { useEffect, useState, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, makeStyles } from '@material-ui/core';
import axios from 'axios'

const SearchBar = () => {

    const [selected, setSelected] = useState(false);
    const [text, setText] = useState('');
    const [dataResult, setDataResult] = useState([]);
    const [isHidden, setIsHidden] = useState(false);
    const [url, setUrl] = useState('');
    
    const ref = useRef(null);

    const SEARCH_TAG_URL = 'http://localhost:8080/api/v1/search_tag';

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
            border: selected ? '2px solid #e51b23' : ''
        }, placeholder: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        }, icon: {
            height: '100%',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, input: {
            marginLeft: '0.5rem',
            width: '15rem'
        }, data: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0.5rem',
            width: '300px',
            maxHeight: '15rem',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            overflow: 'hidden',
            overflowY: 'auto',
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            width: '100%',
            alignItems: 'center',
            color: 'black',
            zIndex: '9999',
        }, dataItem: {
            width: '100%',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            color: 'black',
            '&:hover': {
                backgroundColor: '#eeeeee',
                cursor: 'pointer',
                color: 'black',
            },
            '& p': {
                marginLeft: '1rem',
                marginTop: '0.3rem',
            },
        },
    }))
    const { container, placeholder, icon, input, data, dataItem } = useStyles();

    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );

    const handleLoseFocus = async () => {
        setSelected(false);
        await delay(100);
        setDataResult([]);
    }

    const handleOnFocus = () => {
        setSelected(true);
    }

    const handleChange = async (e) => {
        const { value } = e.target;
        setText(value);
        if (value.startsWith('#') & value.length > 1) {
            const res = await axios.get(SEARCH_TAG_URL, { params: { keyword: value } });
            setDataResult(res.data);
        } else {
            setDataResult([]);
        }
    }

    return (
        <div className={ container }>
            <div className={placeholder}>
                <SearchIcon className={ icon } sx={{ color: "#545454" }} />
                <InputBase
                    value={text}
                    ref={ref}
                    placeholder='Search...'
                    className={input}
                    onFocus={handleOnFocus}
                    onBlur={handleLoseFocus}
                    onChange={handleChange}
                />
            </div>
            {dataResult.length > 0 &&
                <div className={data}>
                {dataResult.map((value, key) => {
                    return (
                        <a
                            className={dataItem}
                            href={`http://localhost:3000/feed/hashtag/${value.tagname.substring(1)}`}
                            target='_self'
                        >
                            <p> {value.tagname} </p>
                        </a>
                    )
                })}
            </div>}
        </div>
    )
}

export default SearchBar