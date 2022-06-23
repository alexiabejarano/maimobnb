import React from "react";
import Card from "../Card/Card";
import loader from '../../assets/images/loader.png';
import styles from './Main.module.css';

const Loader = () =>{
    return(
        <>
        {loader}
        </>
        
        );
}

const Main = (props) => {
    const { isLoading, hotels } = props;
    return (
        <div className="container">
            <h1 className={`title ${styles["title"]}`}>Bienvenido a Maimo</h1>
            <h2 className={`subtitle ${styles["title"]}`}>Los mejores hoteles</h2>
            {!isLoading ? (
                hotels.length > 0 ? (
                    <div className="columns is-multiline is-mobile">
                        {hotels.map((hotel) =>
                            <Card key={hotel.name} hotel={hotel} />
                        )}
                    </div>
                )
                    :
                    (<p> No results </p>)
            ) : (
                <Loader />
            )}
        </div>
    );
};

export default Main;
