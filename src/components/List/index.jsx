import React, { useState, useEffect } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { checkAPIAffiliation } from '../../api';

const List = () => {
    const [ids, setIds] = useState(null);
    const x = async () => {
        await checkAPIAffiliation(setIds);
    };
    useEffect(() => {
        x();
    }, []);
    useEffect(() => {
        console.log(ids);
    }, [ids]);
    return (
        <div>
            {ids &&
                ids.map((content, index) => {
                    const images = content.thumbnail.path+"."+content.thumbnail.extension;
                    return (
                        <div key={index} className="customdiv">
                            <img className='image' src={images} alt="API Image" />
                            <div className="customElement">
                                <div className="name">{content.name} </div>
                                <div className="description">{content.description} </div>
                                <Link to="./Description"><a href="#" className="More">
                                    More details</a></Link>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default List;
