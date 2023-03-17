//Will be the page for inputting searches :3
'use client';
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
export default function SearchForm() {
  const [folder, setFolder] = useState('');
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams;
  function redir() {
    const createQueryString = () => {
      const params = new URLSearchParams(searchParams);
      params.set('folder', folder);
      params.set('query', query);
      return params.toString();
    };
    let params = createQueryString(folder, query);
    const run = async () => {
      await fetch('/api/searchGenshin?' + params);
      router.push('/results' + '?' + params);
    };
    run();
  }
  function search(e) {
    e.preventDefault();
    const postData = async () => {
      const data = {
        folder: folder,
        query: query,
      };

      const response = await fetch('/api/searchGenshin', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      return response.json();
    };
    postData().then(async data => {
      alert(data.keys);
    });
  }
  return (
    <>
      <div className={styles.main}>
        <form onSubmit={search}>
          <h1 className={styles.header}>Search a thing</h1>
          <div className={styles.searchFields}>
            <input
              type="text"
              placeholder="Folder"
              value={folder}
              onChange={e => setFolder(e.target.value)}
            />{' '}
            <br />
            <input
              type="text"
              placeholder="Query"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />{' '}
            <br />
            <button type="submit">Submit search</button> <br />
          </div>
        </form>
        <div>
          <h1>STILL WORKING ON THIS ONE :3</h1>
          <Link href="/">
            <button>Back to homepage!</button>
          </Link>
          <br />
          <button onClick={redir}>Make a redirect request!</button>
        </div>
      </div>
    </>
  );
}
