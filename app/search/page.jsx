//Will be the page for inputting searches :3
'use client'
import { useState } from "react"
import React from "react";
import styles from './page.module.css'
import Link from 'next/link';
import parse from './parse';


export default function searchForm(){
    const [folder, setFolder] = useState('');
    const [query, setQuery] = useState('');
    function search(e) {
        e.preventDefault();
        const postData = async()=> {
            const data ={
                folder: folder,
                query: query
            };

            const response = await fetch("/api/searchGenshin",{
                method: "POST",
                body: JSON.stringify(data),
            })
            return response.json()
        }
        postData().then((data) =>{
            alert(parse(JSON.stringify(data)))}
            )
    }
    return(   
    <>
    <div className={styles.main}>
        <form onSubmit={search}>
            <h1 className={styles.header}>Search a thing</h1>
            <div className={styles.searchFields}>
                <input
                    type="text"
                    placeholder="Folder"
                    value={folder}
                    onChange={(e) => setFolder(e.target.value)} /> <br />
                <input
                    type="text"
                    placeholder="Query"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} /> <br />
            <button type='submit'>Submit search</button> <br/>
            </div>
        </form>
        <div>
        <h1>STILL WORKING ON THIS ONE :3</h1>
        <Link href='/'><button>Back to homepage!</button></Link>
        </div>
    </div>
    </>
    );
}