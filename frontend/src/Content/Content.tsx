import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './Board/Board';

function Content() {
    const [boards, setBoards] = useState<Board[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<Board[]>('http://localhost:3000/boards');
                setBoards(response.data);
            } catch (error) {
                setError('Error fetching boards: ' + error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [boards]); // Empty dependency array to ensure useEffect runs only once

    return (
        <main>
            <div className="content-wrapper">
                
                    { boards.map(board => <Board key={board.boardId} title={board.title} boardId={board.boardId}/> )}
                
            </div>
        </main>
    );
}

export default Content;
