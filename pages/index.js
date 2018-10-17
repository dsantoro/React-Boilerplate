import React from "react";
import Link from "next/link";

import Header from '../components/header/Header'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link href="/about">
                <a>Sobre</a>
            </Link>
        </div>
    );
};

export default Home;
