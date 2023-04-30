import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App(){
  return (
    <section className='App'>
    <TwitterFollowCard  initialIsFollowing={true} username="midudev" name="Miguel Ángel Durán"/>
    <TwitterFollowCard  initialIsFollowing={false} username="CharlesDoBronxs" name="Charles Oliveira"/>
    <TwitterFollowCard  initialIsFollowing={false} username="Dozenthaxxd" name="Dozenthaxxd"/>
    </section>
     )
  }
