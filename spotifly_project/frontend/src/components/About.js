import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, Sticky, StickyIn, StickyOut, Move, MoveIn, FadeIn, FadeOut, ZoomIn, ZoomOut } from 'react-scroll-motion';

const About = () => {
  const about_us = "About";
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), Move(0, -200))}>
          <h1>{about_us}</h1>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={batch(Sticky(), ZoomIn(), Move(0, -200), FadeOut())}>
          <h1 style={{ color: 'blue' }}>What?</h1>
        </Animator>

      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Sticky(), MoveIn(), ZoomIn())} >
          <p style={{ color: 'blue' }}>spotiFly is a webapp that allows you to connect your Spotify and create/curate playlists based on selected properties in your liked songs, such as how "danceable" a song is, the genre, the BPM, etc.</p>
        </Animator>
      </ScrollPage>

    </ScrollContainer >
  );
};

export default About;
