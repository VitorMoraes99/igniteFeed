import { ThumbsUp, Trash } from '@phosphor-icons/react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment ({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0); 

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment () {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/121506301?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Vitor Moraes</strong>
                            <time title="22 de Dezembro às 22:22h" dateTime="2024-12-22 22:22:00">Publicado há 2h</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}