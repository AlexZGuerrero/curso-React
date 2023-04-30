import { useState } from "react";


export function TwitterFollowCard ({username, name, initialIsFollowing}){
  const [isFollowing, setIsFollowing]= useState(initialIsFollowing)


  
  const text= isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

   const imageSrc= `https://unavatar.io/${username}`
    const addAt =(username) => `@${username}`; 
   
    return (
            <article className='tw-followCard'> 
              <header className='tw-followCard-header'>
                <img
                className='tw-followCard-avatar' 
                src={imageSrc}/>
                <div>
                <strong>{name}</strong>
                <span>{addAt(username)}</span>
              </div>
              </header>
              <aside>
                <button  className={buttonClassName} onClick={handleClick}>
                  <span className="tw-follow-text"> {text}</span>
                      <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
                </button>
              </aside>
            </article>          
    )        
}




 